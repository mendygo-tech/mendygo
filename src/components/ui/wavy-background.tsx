"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const ntRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const initializedRef = useRef(false);
  const resizeCleanupRef = useRef<null | (() => void)>(null);
  const bleedRef = useRef(0); // overscan to avoid inner edge from blur

  // Synchronous initial theme to avoid first-paint flash on remount
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  const isDarkRef = useRef(isDarkMode);
  useEffect(() => {
    isDarkRef.current = isDarkMode;
  }, [isDarkMode]);

  // Observe html.class changes to update theme state
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const throttledCheck = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDarkMode, 1);
    };

    const observer = new MutationObserver(throttledCheck);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const darkModeColors = [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#f472b6",
    "#34d399",
  ];
  const lightModeColors = [
    "#ff1a1a",
    "#ff0066",
    "#9900ff",
    "#0033ff",
    "#00cccc",
  ];

  const init = () => {
    if (initializedRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bleed = Math.ceil((blur || 10) * 6); // safe spill area for blur
      bleedRef.current = bleed;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // internal drawing size (with bleed)
      const w = vw + bleed * 2;
      const h = vh + bleed * 2;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // CSS size and negative offset so the extra area sits outside the viewport
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.style.top = `-${bleed}px`;
      canvas.style.left = `-${bleed}px`;

      sizeRef.current = { w, h };

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.filter = `blur(${blur}px)`;
    };
    setSize();

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);
    resizeCleanupRef.current = () => window.removeEventListener("resize", onResize);

    initializedRef.current = true;
    render();
  };

  const drawWave = (n: number, waveColors: string[]) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { w } = sizeRef.current;
    const baseY = bleedRef.current + window.innerHeight * 0.5; // center within visible area
    ntRef.current += getSpeed();

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        if (x === 0) ctx.moveTo(x, y + baseY);
        else ctx.lineTo(x, y + baseY);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let frameCount = 0;
  const render = () => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { w, h } = sizeRef.current;

    frameCount++;
    if (frameCount % 2 !== 0) {
      animationIdRef.current = requestAnimationFrame(render);
      return;
    }

    const dark = isDarkRef.current;
    const waveColors = colors ?? (dark ? darkModeColors : lightModeColors);

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = backgroundFill || (dark ? "#000000" : "#ffffff");
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, w, h);

    ctx.globalAlpha = dark ? (waveOpacity || 0.6) : (waveOpacity || 0.4);

    drawWave(5, waveColors);
    animationIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (resizeCleanupRef.current) resizeCleanupRef.current();
      initializedRef.current = false;
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause/resume animation when tab visibility changes without re-init
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      } else if (!animationIdRef.current) {
        render();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        // use Tailwind's dark variant instead of JS toggling
        "bg-white dark:bg-black",
        containerClassName
      )}
      {...props}
    >
      <canvas
        // paint correct color on first paint via CSS (no JS needed)
        className="absolute z-0 bg-white dark:bg-black"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : undefined),
          position: "absolute",
        }}
      />
      <div className={cn("relative z-10 w-full", className)}>{children}</div>
    </div>
  );
};