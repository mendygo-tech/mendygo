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
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== "undefined") {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
      }
    };

    checkDarkMode();

    // Throttled MutationObserver to reduce performance impact
    let timeoutId: NodeJS.Timeout;
    const throttledCheckDarkMode = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDarkMode, 16); // ~60fps throttling
    };

    const observer = new MutationObserver(throttledCheckDarkMode);
    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: false // Only watch the root element, not children
      });

      return () => {
        observer.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, []);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  let cleanupResize: (() => void) | null = null;

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    const handleResize = () => {
      if (ctx) {
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Store cleanup function
    cleanupResize = () => window.removeEventListener('resize', handleResize);
    render();
  };

  const darkModeColors = [
    "#38bdf8", // sky blue
    "#818cf8", // indigo
    "#c084fc", // purple
    "#f472b6", // pink
    "#34d399", // emerald
  ];
  const lightModeColors = [
    "#ff1a1a", // vivid red
    "#ff0066", // neon pink
    "#9900ff", // electric purple
    "#0033ff", // rich blue
    "#00cccc", // aqua cyan
  ];




  const waveColors = colors ?? (isDarkMode ? darkModeColors : lightModeColors);

  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  let frameCount = 0;
  const render = () => {
    if (!ctx) return;

    // Throttle rendering to 30fps instead of 60fps
    frameCount++;
    if (frameCount % 2 !== 0) {
      animationId = requestAnimationFrame(render);
      return;
    }

    // Clear the canvas first
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = backgroundFill || (isDarkMode ? "#000000" : "#ffffff");
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, w, h);

    // Set wave opacity based on theme
    ctx.globalAlpha = isDarkMode ? (waveOpacity || 0.6) : (waveOpacity || 0.4);

    drawWave(5); // Reduce from 5 to 3 waves
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    // Directly call init() without setTimeout for faster startup
    if (canvasRef.current) {
      init();
    }
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (cleanupResize) {
        cleanupResize();
      }
    };
  }, [isDarkMode]); // Re-initialize when theme changes

  // Pause animation when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      } else {
        if (canvasRef.current && ctx) {
          render();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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
        "h-screen flex flex-col items-center justify-center transition-colors duration-300",
        isDarkMode ? "bg-black" : "bg-white",
        containerClassName
      )}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10 w-full", className)}>
        {children}
      </div>
    </div>
  );
};