import { useState, useEffect } from 'react';

const Step2 = () => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    const codeLines = [
        { text: 'class', color: 'text-purple-400 dark:text-purple-400', type: 'keyword' },
        { text: ' AutoTrigger:', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '\n  ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: 'def', color: 'text-cyan-500 dark:text-cyan-400', type: 'keyword' },
        { text: ' __init__(self):', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '\n    self.status = ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '"ready"', color: 'text-amber-600 dark:text-yellow-400', type: 'string' },
        { text: '\n\n  ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: 'def', color: 'text-cyan-500 dark:text-cyan-400', type: 'keyword' },
        { text: ' ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: 'execute', color: 'text-blue-600 dark:text-blue-400', type: 'function' },
        { text: '(self):', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '\n    ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: 'if', color: 'text-slate-600 dark:text-gray-400', type: 'keyword' },
        { text: ' self.check():', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '\n      ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: 'return', color: 'text-slate-600 dark:text-gray-400', type: 'keyword' },
        { text: ' ', color: 'text-gray-900 dark:text-white', type: 'normal' },
        { text: '"success"', color: 'text-amber-600 dark:text-yellow-400', type: 'string' }
    ];

    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!isTyping) return;

        const interval = setInterval(() => {
            if (currentLineIndex < codeLines.length) {
                const currentLine = codeLines[currentLineIndex];

                if (currentCharIndex < currentLine.text.length) {
                    setDisplayedText(prev => prev + currentLine.text[currentCharIndex]);
                    setCurrentCharIndex(prev => prev + 1);
                } else {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    setDisplayedText('');
                    setCurrentLineIndex(0);
                    setCurrentCharIndex(0);
                    setIsTyping(true);
                }, 3000);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentLineIndex, currentCharIndex, isTyping, codeLines]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const renderColoredText = (text: string) => {
        const parts = [];
        let currentText = '';
        let currentColor = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            let foundMatch = false;

            for (const line of codeLines) {
                if (text.substring(i, i + line.text.length) === line.text) {
                    if (currentText) {
                        parts.push(
                            <span key={parts.length} className={currentColor}>
                                {currentText}
                            </span>
                        );
                        currentText = '';
                    }

                    parts.push(
                        <span key={parts.length} className={line.color}>
                            {line.text}
                        </span>
                    );

                    i += line.text.length - 1;
                    foundMatch = true;
                    break;
                }
            }

            if (!foundMatch) {
                currentText += char;
                currentColor = 'text-gray-900 dark:text-white';
            }
        }

        if (currentText) {
            parts.push(
                <span key={parts.length} className={currentColor}>
                    {currentText}
                </span>
            );
        }

        return parts;
    };

    return (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white p-6 w-[26rem] h-80 rounded-xl shadow-2xl shadow-black/30 dark:shadow-black/30 flex flex-col">
            <div className="flex flex-col mb-4">
                <span className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white px-2 py-1 text-xs rounded-md self-start mb-2 backdrop-blur-sm">
                    Step 2
                </span>
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    AI Development
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                    Building intelligent automation systems.
                </p>
            </div>

            <div className="flex-1 bg-white/30 dark:bg-black/50 backdrop-blur-sm border border-gray-300/30 dark:border-white/30 rounded-md overflow-hidden shadow-lg relative">
             
                <div className="flex items-center justify-between bg-white/20 dark:bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs border-b border-gray-300/20 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-gray-900 dark:text-white">
                            automation.py
                        </span>
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50" />
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full shadow-sm" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-sm" />
                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm" />
                    </div>
                </div>

                <div className="text-xs p-3 font-mono leading-relaxed relative bg-white/10 dark:bg-black/20 backdrop-blur-sm">
                    <pre className="whitespace-pre-wrap">
                        <code>
                            {renderColoredText(displayedText)}
                            {isTyping && showCursor && (
                                <span className="bg-gray-900 dark:bg-white text-white dark:text-black ml-0.5 animate-pulse">
                                    |
                                </span>
                            )}
                        </code>
                    </pre>

                    <div className="absolute left-0 top-3 text-gray-500 dark:text-gray-600 text-xs font-mono select-none pointer-events-none">
                        {displayedText.split('\n').map((_, index) => (
                            <div key={index} className="h-4 opacity-50">
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/20 dark:bg-white/5 backdrop-blur-sm px-3 py-1 text-xs border-t border-gray-300/20 dark:border-white/10 flex justify-between shadow-inner">
                    <span className="text-gray-600 dark:text-gray-400">Python</span>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-sm shadow-green-500/50" />
                        <span className="text-green-600 dark:text-green-400 text-xs drop-shadow-sm">Running</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;