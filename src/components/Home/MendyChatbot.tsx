"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import MiniSearch from "minisearch";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/** ---- CONFIG ---- */
const CONTACT_INFO = `You can reach us at:
📧 hello@mendygo.com
☎️ +91-7357756699`;

const MAX_CARDS = 3;
const BULLETS_PER_CARD = 2;
const BULLET_LEN = 120;

// Less aggressive stop words - only remove truly common words
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'for', 'of', 'on', 'in', 'to',
  'can', 'you', 'me', 'please', 'do', 'have', 'what', 'how'
]);

type Doc = {
  id: number | string;
  title: string;
  url: string;
  content: string;
  keywords?: string[];
  type?: string;
};

/** ---- HELPERS ---- */
function escapeHtml(s: string) { return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function isContactIntent(q: string) { 
  return /(contact|email|phone|support|call|sales|demo|book.*demo|talk.*human|whatsapp|enquiry|inquiry|reach|connect|speak|helpdesk)/i.test(q); 
}

function highlightHtml(text: string, terms: string[]) {
  const significantTerms = terms.filter((t) => t.length > 2);
  if (!significantTerms.length) return escapeHtml(text);
  const pattern = new RegExp(`\\b(${significantTerms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "ig");
  return escapeHtml(text).replace(pattern, (m) => `<mark class="bg-lime-200/50 px-1 py-0.5 rounded-md">${m}</mark>`);
}

function summarize(content: string, terms: string[], n = BULLETS_PER_CARD) {
  if (content.length < BULLET_LEN * 1.5) { return [content]; }
  const sents = content.replace(/\s+/g, " ").split(/(?<=[\.\!\?])\s+(?=[A-Z(])/).map((s) => s.trim()).filter(Boolean);
  if (sents.length <= n) return sents;
  
  const ranked = sents.map((s) => {
    const score = terms.reduce((acc, term) => {
      if (term.length < 3) return acc;
      return acc + (s.toLowerCase().includes(term.toLowerCase()) ? term.length : 0); // Longer terms get more weight
    }, 0);
    return { s, score };
  }).sort((a, b) => b.score - a.score);
  
  return ranked.slice(0, n).map(item => item.s.length > BULLET_LEN ? item.s.slice(0, BULLET_LEN - 1) + "…" : item.s);
}

/** ---- IMPROVED SEARCH LOGIC ---- */
function preprocessQuery(q: string): { cleaned: string; terms: string[] } {
  const cleaned = q.toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 1 && !STOP_WORDS.has(word))
    .join(" ")
    .trim();
    
  const terms = cleaned.split(/\s+/).filter(Boolean);
  return { cleaned, terms };
}

function calculateKeywordScore(doc: Doc, queryTerms: string[]): number {
  if (!doc.keywords || doc.keywords.length === 0) return 0;
  
  let maxScore = 0;
  
  doc.keywords.forEach(keyword => {
    const keywordTerms = keyword.toLowerCase().split(/\s+/);
    let score = 0;
    
    queryTerms.forEach(queryTerm => {
      // Exact match in keyword
      if (keywordTerms.includes(queryTerm)) {
        score += 3;
      }
      // Partial match (word contains query term)
      else if (keywordTerms.some(kw => kw.includes(queryTerm))) {
        score += 1;
      }
      // Query term contains keyword term (for abbreviations)
      else if (keywordTerms.some(kw => queryTerm.includes(kw))) {
        score += 2;
      }
    });
    
    // Normalize by keyword length to prefer specific matches
    const normalizedScore = score / Math.sqrt(keywordTerms.length);
    maxScore = Math.max(maxScore, normalizedScore);
  });
  
  return maxScore;
}

/** ---- COMPONENT ---- */
export default function MendyChatbot() {
  const [open, setOpen] = useState(false);
  const [mini, setMini] = useState<MiniSearch | null>(null);
  const [allDocs, setAllDocs] = useState<Doc[]>([]);
  const [history, setHistory] = useState<{ who: "bot" | "user"; html: string }[]>([
    { who: "bot", html: "Hi! I'm the Mendygo Assistant. I can help you learn about our Industrial IoT platform, sensors, management systems, and more. What would you like to know?" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [history]);

  useEffect(() => {
    fetch("/mendy-index.json")
      .then((r) => r.json())
      .then((arr: Doc[]) => {
        setAllDocs(arr);
        const miniSearch = new MiniSearch({
          fields: ["title", "content", "keywords"],
          storeFields: ["title", "url", "content", "keywords", "type", "id"],
          searchOptions: { 
            boost: { title: 5, keywords: 3, content: 1 }, 
            prefix: true, 
            fuzzy: 0.25,
            combineWith: 'OR' // Use OR to get more results
          },
        });
        miniSearch.addAll(arr);
        setMini(miniSearch);
      })
      .catch((err) => {
        console.error("Failed to load knowledge base:", err);
        setHistory((h) => [...h, { who: "bot", html: `⚠️ Couldn't load the knowledge index. Please refresh the page.` }]);
      });
  }, []);

  // Add meaningful quick questions
  const quick = useMemo(() => [
    "What sensors do you offer?",
    "Tell me about building management",
    "How does predictive maintenance work?",
    "What is MendyAI?",
    "Contact sales"
  ], []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    
    setHistory((h) => [...h, { who: "user", html: escapeHtml(trimmed) }]);
    
    setTimeout(() => {
      setHistory((h) => [...h, { who: "bot", html: "..." }]);
      const html = getAnswer(trimmed);
      
      setTimeout(() => {
        setHistory((h) => {
          const newHistory = [...h];
          newHistory[newHistory.length - 1] = { who: "bot", html };
          return newHistory;
        });
      }, 600);
    }, 400);
  }

  // ===== IMPROVED ANSWER LOGIC =====
  function getAnswer(q: string): string {
    // --- 1. DIRECT INTENT RECOGNITION ---
    if (/^\s*(hi|hello|hey|greetings)\s*$/i.test(q)) {
      const doc = allDocs.find(d => d.id === 39);
      return doc ? doc.content : "Hello! I'm the Mendygo Assistant. How can I help you learn about our Industrial IoT platform today?";
    }
    
    if (/^\s*(bye|goodbye|cya|see you|farewell)\s*$/i.test(q)) {
      const doc = allDocs.find(d => d.id === 48);
      return doc ? doc.content : "Goodbye! Feel free to reach out if you have more questions.";
    }
    
    if (isContactIntent(q)) {
      return CONTACT_INFO.replace(/\n/g, "<br/>");
    }
    
    if (!mini || allDocs.length === 0) {
      return "The knowledge base is still loading. Please wait a moment and try again.";
    }

    const { cleaned: cleanedQuery, terms } = preprocessQuery(q);
    
    if (!cleanedQuery) {
      return "I'd love to help! Could you tell me what you're interested in? For example, you can ask about our sensors, management systems, or AI platform.";
    }

    // --- 2. IMPROVED KEYWORD MATCHING ---
    const keywordResults: Array<{doc: Doc, score: number}> = [];
    
    allDocs.forEach((doc) => {
      const keywordScore = calculateKeywordScore(doc, terms);
      if (keywordScore > 0) {
        keywordResults.push({ doc, score: keywordScore });
      }
    });
    
    // Sort by keyword score (highest first)
    keywordResults.sort((a, b) => b.score - a.score);

    // --- 3. ENHANCED FALLBACK SEARCH ---
    let fallbackResults: any[] = [];
    if (keywordResults.length === 0 || keywordResults[0].score < 1) {
      // Try different search strategies
      const searchStrategies = [
        { combineWith: 'OR' as const, fuzzy: 0.3 }, // Broad search
        { combineWith: 'AND' as const, fuzzy: 0.2 }, // Strict search
      ];
      
      for (const strategy of searchStrategies) {
        const results = mini.search(cleanedQuery, {
          prefix: true,
          fuzzy: strategy.fuzzy,
          combineWith: strategy.combineWith,
        });
        
        if (results.length > 0) {
          fallbackResults = results;
          break;
        }
      }
    }

    // --- 4. COMBINE AND PRIORITIZE RESULTS ---
    const finalResults: Doc[] = [];
    const seenIds = new Set<string | number>();

    // Add high-confidence keyword matches first
    keywordResults
      .filter(result => result.score >= 1.0) // Only good matches
      .forEach(({ doc }) => {
        if (!seenIds.has(doc.id)) {
          finalResults.push(doc);
          seenIds.add(doc.id);
        }
      });

    // Add remaining keyword matches
    keywordResults
      .filter(result => result.score < 1.0 && result.score > 0)
      .forEach(({ doc }) => {
        if (!seenIds.has(doc.id)) {
          finalResults.push(doc);
          seenIds.add(doc.id);
        }
      });

    // Add fallback results if we still need more
    fallbackResults.forEach((res) => {
      const doc = res as unknown as Doc;
      if (!seenIds.has(doc.id)) {
        finalResults.push(doc);
        seenIds.add(doc.id);
      }
    });

    // --- 5. HANDLE NO RESULTS ---
    if (finalResults.length === 0) {
      return `I couldn't find specific information about "${escapeHtml(q)}". Try asking about:
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Our sensors and hardware</li>
        <li>Management systems (Building, Factory, Energy, etc.)</li>
        <li>MendyAI and predictive maintenance</li>
        <li>Pricing or contact information</li>
      </ul>
      <br/>Or reach our team directly:<br/>${CONTACT_INFO.replace(/\n/g, "<br/>")}`;
    }

    // --- 6. RENDER RESULTS ---
    const picks = finalResults.slice(0, MAX_CARDS);
    
    // Check if we have a single perfect match
    if (picks.length === 1 && keywordResults.length > 0 && keywordResults[0].score >= 3) {
      const perfectMatch = picks[0];
      return `
        <div class="bg-white border border-gray-200 rounded-lg p-4 text-gray-800">
          <div class="font-semibold text-gray-900 mb-2 text-lg">${escapeHtml(perfectMatch.title)}</div>
          <div class="text-gray-600 mb-3">${highlightHtml(perfectMatch.content, terms)}</div>
          <div class="mt-4">
            <a href="${perfectMatch.url}" target="_blank" rel="noopener noreferrer" class="text-lime-600 hover:text-lime-700 font-semibold transition-colors">Learn more on this page ↗</a>
          </div>
        </div>`;
    }

    // Multiple results
    const cards = picks.map((p) => {
      const bulletsHtml = summarize(p.content, terms)
        .map((b) => `<li class="text-gray-600 mb-1">${highlightHtml(b, terms)}</li>`)
        .join("");
      
      return `
        <div class="bg-white border border-gray-200 rounded-lg p-4 text-gray-800 mb-3">
          <div class="font-semibold text-gray-900 mb-2">${escapeHtml(p.title)}</div>
          <ul class="list-disc list-inside text-sm space-y-1">${bulletsHtml}</ul>
          <div class="mt-3 text-xs">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-lime-600 hover:text-lime-700 font-semibold transition-colors">Learn more ↗</a>
          </div>
        </div>`;
    }).join("");

    return `<div class="space-y-3">${cards}</div>`;
  }

  // JSX remains mostly the same with minor improvements
  return (
    <>
      <motion.button 
        onClick={() => setOpen((o) => !o)} 
        whileTap={{ scale: 0.9 }} 
        className="fixed bottom-5 right-5 z-[9998] w-14 h-14 rounded-full bg-[#131313] text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" 
        aria-label="Open Mendygo Assistant"
      >
        <Image src="/logo_shadow.png" alt="Mendygo Logo" width="30" height="30" className="rounded-full" />
      </motion.button>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }} 
            className="fixed bottom-24 right-5 z-[9999] w-[400px] max-w-[90vw] h-[70vh] max-h-[600px] flex flex-col rounded-2xl bg-gray-50 text-gray-800 shadow-2xl border border-gray-200 overflow-hidden font-sans"
          >
            <header className="flex justify-between items-center bg-white px-5 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image src="/logo_shadow.png" alt="Mendygo Logo" width="32" height="32" className="w-8" />
                <span className="font-bold text-lg text-gray-900">Mendygo Assistant</span>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
              >
                &times;
              </button>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {history.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1, duration: 0.2 }} 
                  className={`flex items-end gap-2 ${m.who === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.who === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-[#abff02] flex-shrink-0 flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      m.who === "bot" 
                        ? "bg-white border border-gray-200 text-gray-800 rounded-tl-none" 
                        : "bg-black text-white rounded-br-none"
                    }`}
                  >
                    {m.html === "..." ? (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300"></span>
                      </div>
                    ) : (
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: m.html }} />
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>
            
            <footer className="p-4 border-t border-gray-200 bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {quick.map((q) => (
                  <button 
                    key={q} 
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2 items-center">
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="Ask about sensors, management systems, AI..." 
                  className="flex-1 w-full rounded-full bg-gray-100 border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#abff02]/80 transition" 
                  onKeyDown={(e) => { 
                    if (e.key === "Enter" && inputRef.current) { 
                      const v = inputRef.current.value; 
                      inputRef.current.value = ""; 
                      send(v); 
                    } 
                  }} 
                />
                <button 
                  className="w-10 h-10 flex-shrink-0 bg-black text-white font-semibold rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  onClick={() => { 
                    if (inputRef.current) { 
                      const v = inputRef.current.value; 
                      inputRef.current.value = ""; 
                      send(v); 
                    } 
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}