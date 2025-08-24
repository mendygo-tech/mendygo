"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  // Memoize theme-dependent values to prevent unnecessary re-renders
  const themeStyles = useMemo(() => ({
    outlineStroke: theme === "light" ? "#1f2937" : "#e5e7eb",
    dropShadow: theme === "light" ? "drop-shadow(1px 1px 1px rgba(0,0,0,0.2))" : undefined
  }), [theme]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !hasMounted || cursor.x === 0) return;
    
    // Throttle the expensive getBoundingClientRect call
    let animationFrameId: number;
    const updateMaskPosition = () => {
      if (svgRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect();
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    };
    
    animationFrameId = requestAnimationFrame(updateMaskPosition);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [cursor, hasMounted]);

  if (!hasMounted) return null; // Prevent SSR mismatch

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        // Throttle mouse move events using requestAnimationFrame
        if (!hovered) return;
        requestAnimationFrame(() => {
          setCursor({ x: e.clientX, y: e.clientY });
        });
      }}
      className="select-none"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        <radialGradient id="revealMask" gradientUnits="userSpaceOnUse" r="20%" cx={maskPosition.cx} cy={maskPosition.cy}>
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        stroke={themeStyles.outlineStroke}
        style={{
          opacity: hovered ? 0.7 : 0,
          filter: themeStyles.dropShadow,
        }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 dark:stroke-neutral-800 font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.6"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
        style={{ filter: themeStyles.dropShadow }}
      >
        {text}
      </text>
    </svg>
  );
};