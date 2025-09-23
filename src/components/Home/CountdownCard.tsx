"use client";

import { Card } from "@/components/ui/card";
import { CalendarDays, Mail} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SuccessModal from "../common/SuccessModal";

const TARGET_DATE = new Date(2025, 9, 10, 0, 0, 0); // 10 Oct 2025 (local)

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function computeTimeLeft(target: Date): TimeLeft {
  const now = Date.now();
  let diff = Math.max(0, target.getTime() - now);

  const dayMs = 86_400_000;
  const hourMs = 3_600_000;
  const minuteMs = 60_000;

  const days = Math.floor(diff / dayMs);
  diff %= dayMs;

  const hours = Math.floor(diff / hourMs);
  diff %= hourMs;

  const minutes = Math.floor(diff / minuteMs);
  diff %= minuteMs;

  const seconds = Math.floor(diff / 1000);

  return { days, hours, minutes, seconds };
}

const CountdownCard = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft(TARGET_DATE));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json().catch(() => ({}));

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }

      if (res.ok) {
        const msg =
          result?.message === "Already on the waitlist."
            ? "You're already on the list — see you soon!"
            : "Congratulations! You’re on the waitlist.";
        setModalMessage(msg);
        setModalType("success");
        setModalOpen(true);
        setEmail("");

        closeTimer.current = setTimeout(() => {
          setModalOpen(false);
          closeTimer.current = null;
        }, 3000);
      } else {
        setModalMessage(result?.message || "Submission failed. Please try again.");
        setModalType("error");
        setModalOpen(true);

        closeTimer.current = setTimeout(() => {
          setModalOpen(false);
          closeTimer.current = null;
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setModalMessage("Server error. Please try again.");
      setModalType("error");
      setModalOpen(true);

      closeTimer.current = setTimeout(() => {
        setModalOpen(false);
        closeTimer.current = null;
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const data = [{
            label: "DAYS",
            value: timeLeft.days,
          },
          {
            label: "HOURS",
            value: timeLeft.hours,
          },
          {
            label: "MINUTES",
            value: timeLeft.minutes,
          },
          {
            label: "SECONDS",
            value: timeLeft.seconds,
          }
        ]
  // Live countdown
  useEffect(() => {
    const tick = () => {
      const next = computeTimeLeft(TARGET_DATE);
      setTimeLeft(next);
      return next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0;
    };

    if (tick()) return;
    const id = setInterval(() => {
      if (tick()) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Cleanup modal auto-close timer
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[90vh] mx-auto pb-20 px-2 sm:px-4">
      
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 blur-3xl opacity-60 dark:opacity-40">
        <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_0%,#9FFB1E33,transparent_60%)]" />
      </div>

      <Card className="relative rounded-2xl shadow-xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-[#9FFB1E]/45 via-white/60 to-white/80 dark:from-[#9FFB1E14] dark:via-white/5 dark:to-white/[0.03] backdrop-blur-md p-6">
        <div className="flex justify-center">
          <div className="rounded-full border px-3 py-1 text-xs sm:text-sm border-black/10 bg-white/80 shadow-sm dark:border-white/15 dark:bg-white/5">
            <span className="text-gray-800 dark:text-white">
              Available on <span className="font-semibold">10 Oct 2025</span>
            </span>
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold">Join the Waitlist</h2>
        <p className="text-center text-gray-600 text-sm dark:text-gray-400">
          Be the first to know when we launch.
        </p>

        <div className="grid grid-cols-4 gap-2 text-center">
          {data.map(({ label, value }) => {
            const display = String(value).padStart(2, "0");
            return (
              <div
                key={label}
                className="relative bg-white/90 dark:bg-black/40 rounded-lg py-3 border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden"
                aria-label={label.toLowerCase()}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/[0.06]" />
                <div className="text-xl font-bold tracking-tight">{display}</div>
                <div className="text-[11px] text-gray-600 mt-1 dark:text-gray-300">{label}</div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-xs sm:text-sm dark:text-gray-400">
          <CalendarDays className="w-4 h-4" />
          LEFT UNTIL FULL RELEASE
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 text-center flex flex-col items-center">
          <div className="w-full sm:w-3/4 flex items-center gap-2 rounded-lg px-3 py-2 bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 focus-within:ring-2 focus-within:ring-gray-900/10 dark:focus-within:ring-white/10 transition">
            <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden />
            <input
              id="waitlist-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError(null);
              }}
              placeholder="Your email address"
              className="w-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "waitlist-email-error" : undefined}
            />
          </div>

          {emailError && (
            <p
              id="waitlist-email-error"
              role="alert"
              className="w-full sm:w-3/4 text-left text-xs text-red-600 dark:text-red-400"
            >
              {emailError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !email || !isValidEmail(email)}
            className="w-fit px-8 sm:px-10 h-11 rounded-lg font-semibold text-black bg-[#9FFB1E] shadow-[0_8px_20px_-8px_rgba(159,251,30,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(159,251,30,0.7)] hover:brightness-105 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isSubmitting ? "Submitting..." : "Sign up"}
          </button>

         
        </form>
      </Card>

      <SuccessModal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default CountdownCard;