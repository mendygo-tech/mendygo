"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";

// Constants
const CONSTANTS = {
  CM3_PER_M3: 1_000_000,
  SECONDS_PER_HOUR: 3_600,
  MM_TO_M: 1_000,
  FLOW_VARIATION_PERCENT: 0.1,
  VELOCITY_MIN: 0.5,
  VELOCITY_MAX: 3.5,
  VELOCITY_OPTIMAL_MIN: 1.0,
  VELOCITY_OPTIMAL_MAX: 2.5,
  UPDATE_INTERVAL_MS: 500,
};

// Pipe sizes with flow rates in cm³/hr
const pipeSizes = [
  {
    id: 1,
    size: '1/2"',
    nominalDiameter: 15,
    internalDiameter: 15.8,
    typicalFlowRate: 1200000,
    maxFlowRate: 1800000,
    velocityRecommended: 1.8,
    application: "Residential fixtures (sinks, toilets)",
  },
  {
    id: 2,
    size: '3/4"',
    nominalDiameter: 20,
    internalDiameter: 20.9,
    typicalFlowRate: 2100000,
    maxFlowRate: 3000000,
    velocityRecommended: 1.8,
    application: "Residential main supply lines",
  },
  {
    id: 3,
    size: '1"',
    nominalDiameter: 25,
    internalDiameter: 26.6,
    typicalFlowRate: 3300000,
    maxFlowRate: 4800000,
    velocityRecommended: 1.8,
    application: "Small commercial, multi-unit residential",
  },
  {
    id: 4,
    size: '1-1/4"',
    nominalDiameter: 32,
    internalDiameter: 35.1,
    typicalFlowRate: 5700000,
    maxFlowRate: 8400000,
    velocityRecommended: 1.8,
    application: "Commercial buildings, offices",
  },
  {
    id: 5,
    size: '1-1/2"',
    nominalDiameter: 40,
    internalDiameter: 40.9,
    typicalFlowRate: 7800000,
    maxFlowRate: 11400000,
    velocityRecommended: 1.8,
    application: "Hotels, hospitals, light industrial",
  },
  {
    id: 6,
    size: '2"',
    nominalDiameter: 50,
    internalDiameter: 52.5,
    typicalFlowRate: 12600000,
    maxFlowRate: 18600000,
    velocityRecommended: 1.8,
    application: "Industrial plants, large buildings",
  },
  {
    id: 7,
    size: '2-1/2"',
    nominalDiameter: 65,
    internalDiameter: 62.7,
    typicalFlowRate: 18000000,
    maxFlowRate: 26400000,
    velocityRecommended: 1.8,
    application: "Fire suppression, industrial supply",
  },
  {
    id: 8,
    size: '3"',
    nominalDiameter: 80,
    internalDiameter: 77.9,
    typicalFlowRate: 27600000,
    maxFlowRate: 40800000,
    velocityRecommended: 1.8,
    application: "Large industrial, water treatment",
  },
  {
    id: 9,
    size: '4"',
    nominalDiameter: 100,
    internalDiameter: 102.3,
    typicalFlowRate: 48000000,
    maxFlowRate: 70800000,
    velocityRecommended: 1.8,
    application: "Water mains, distribution networks",
  },
];

// Helper function to calculate flow rate
const calculateFlowRate = (pipe, vel) => {
  const radius = pipe.internalDiameter / 2 / CONSTANTS.MM_TO_M;
  const area = Math.PI * radius * radius;
  const flowM3PerSecond = area * vel;
  const flowCm3PerHour =
    flowM3PerSecond * CONSTANTS.CM3_PER_M3 * CONSTANTS.SECONDS_PER_HOUR;
  return flowCm3PerHour;
};

// Helper function to format large numbers
const formatFlowRate = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + " × 10⁶";
  }
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
};

// Get velocity status - using Mendygo green (#9FFB1E) for optimal status
const getVelocityStatus = (velocity) => {
  if (velocity < CONSTANTS.VELOCITY_OPTIMAL_MIN) {
    return {
      type: "slow",
      label: "⚠️ Too Slow",
      message: "⚠️ Low velocity may cause sediment buildup",
      bgClass: "bg-yellow-100 dark:bg-yellow-500/10 border-yellow-300 dark:border-yellow-500/30",
      textClass: "text-yellow-700 dark:text-yellow-400",
      badgeClass: "bg-yellow-200 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-500/30",
    };
  }
  if (velocity > CONSTANTS.VELOCITY_OPTIMAL_MAX) {
    return {
      type: "fast",
      label: "⚠️ Too Fast",
      message: "⚠️ High velocity may cause pipe erosion and noise",
      bgClass: "bg-red-100 dark:bg-red-500/10 border-red-300 dark:border-red-500/30",
      textClass: "text-red-700 dark:text-red-400",
      badgeClass: "bg-red-200 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-500/30",
    };
  }
  // Mendygo green for optimal
  return {
    type: "optimal",
    label: "✓ Optimal",
    message: "✓ Optimal velocity range (1.5-2.0 m/s recommended)",
    bgClass: "bg-[#9FFB1E]/10 dark:bg-[#9FFB1E]/10 border-[#9FFB1E]/30 dark:border-[#9FFB1E]/30",
    textClass: "text-[#7ACC15] dark:text-[#9FFB1E]",
    badgeClass: "bg-[#9FFB1E]/20 dark:bg-[#9FFB1E]/20 text-[#5A9A10] dark:text-[#9FFB1E] border border-[#9FFB1E]/30",
  };
};

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-white/10 rounded w-1/3 mb-6"></div>
    <div className="h-64 bg-gray-200 dark:bg-white/10 rounded"></div>
  </div>
);

// Water Particle Component
const WaterParticle = ({ delay, duration, top }) => (
  <div
    className="water-particle"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      top: `${top}%`,
    }}
  />
);

// Bubble Component
const PipeBubble = ({ delay, duration, position }) => (
  <div
    className="pipe-bubble"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${position}%`,
    }}
  />
);

// Main Component
const FlowAnimation = ({ selectedPipeSize, onPipeSizeChange }) => {
  const [isFlowing, setIsFlowing] = useState(true);
  const [flowRate, setFlowRate] = useState(3300000);
  const [sliderValue, setSliderValue] = useState(2);
  const [mounted, setMounted] = useState(false);
  const [velocity, setVelocity] = useState(1.8);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedPipeSize) {
      const index = pipeSizes.findIndex((p) => p.id === selectedPipeSize.id);
      if (index !== -1) {
        setSliderValue(index);
      }
    }
  }, [selectedPipeSize]);

  const currentPipe = useMemo(
    () => pipeSizes[sliderValue] || pipeSizes[2],
    [sliderValue]
  );

  const calculatedFlow = useMemo(
    () => calculateFlowRate(currentPipe, velocity),
    [currentPipe, velocity]
  );

  useEffect(() => {
    if (!mounted) return;

    setFlowRate(calculatedFlow);

    if (!isFlowing) return;

    const interval = setInterval(() => {
      const variation =
        (Math.random() - 0.5) *
        calculatedFlow *
        CONSTANTS.FLOW_VARIATION_PERCENT;
      setFlowRate(Math.max(0, calculatedFlow + variation));
    }, CONSTANTS.UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isFlowing, calculatedFlow, mounted]);

  const handleSliderChange = useCallback(
    (e) => {
      const newIndex = parseInt(e.target.value);
      setSliderValue(newIndex);
      const newPipe = pipeSizes[newIndex];
      onPipeSizeChange?.(newPipe);
    },
    [onPipeSizeChange]
  );

  const handleVelocityChange = useCallback((e) => {
    setVelocity(parseFloat(e.target.value));
  }, []);

  const toggleFlow = useCallback(() => {
    setIsFlowing((prev) => !prev);
  }, []);

  const pipeScale = useMemo(() => {
    const minDiameter = pipeSizes[0].nominalDiameter;
    const maxDiameter = pipeSizes[pipeSizes.length - 1].nominalDiameter;
    return (
      0.3 +
      ((currentPipe.nominalDiameter - minDiameter) /
        (maxDiameter - minDiameter)) *
        0.7
    );
  }, [currentPipe]);

  const pipeHeight = Math.round(80 * pipeScale);
  const animationDuration = Math.max(0.3, 2 - velocity * 0.4);
  const velocityStatus = getVelocityStatus(velocity);

  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      delay: Math.random() * 2,
      duration: animationDuration * (0.8 + Math.random() * 0.4),
      top: 20 + Math.random() * 60,
    }));
  }, [animationDuration]);

  const bubbles = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      delay: Math.random() * 3,
      duration: animationDuration * (1.5 + Math.random()),
      position: Math.random() * 80 + 10,
    }));
  }, [animationDuration]);

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="text-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white flex items-center gap-3">
            <span className="text-3xl md:text-4xl">💧</span>
            Flow Animation
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-400">
            Realistic water flow visualization based on pipe hydraulics
          </p>
        </div>

        <button
          onClick={toggleFlow}
          aria-pressed={isFlowing}
          aria-label={isFlowing ? "Stop water flow" : "Start water flow"}
          className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-lg ${
            isFlowing
              ? "bg-red-500 hover:bg-red-600 text-white shadow-red-500/30"
              : "bg-[#9FFB1E] hover:bg-[#8DE619] text-black shadow-[#9FFB1E]/30"
          }`}
        >
          {isFlowing ? "⏹ Stop Flow" : "▶ Start Flow"}
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Controls */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 space-y-6">
            {/* Pipe Size Slider */}
            <div>
              <label
                htmlFor="pipe-size-slider"
                className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                Pipe Size:{" "}
                <span className="text-[#9FFB1E] text-lg md:text-xl font-semibold">
                  {currentPipe.size}
                </span>
                <span className="text-gray-500 dark:text-gray-400 font-normal ml-2">
                  (ID: {currentPipe.internalDiameter} mm)
                </span>
              </label>

              <input
                id="pipe-size-slider"
                type="range"
                min="0"
                max={pipeSizes.length - 1}
                value={sliderValue}
                onChange={handleSliderChange}
                aria-label={`Pipe size: ${currentPipe.size}`}
                className="w-full h-2 bg-gray-300 dark:bg-white/10 rounded-lg appearance-none cursor-pointer slider-green"
              />

              <div className="flex justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>{pipeSizes[0].size}</span>
                <span>{pipeSizes[pipeSizes.length - 1].size}</span>
              </div>
            </div>

            {/* Velocity Slider */}
            <div>
              <label
                htmlFor="velocity-slider"
                className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-3"
              >
                Flow Velocity:{" "}
                <span className="text-cyan-600 dark:text-cyan-400 text-lg md:text-xl font-semibold">
                  {velocity.toFixed(1)} m/s
                </span>
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${velocityStatus.badgeClass}`}>
                  {velocityStatus.label}
                </span>
              </label>

              <input
                id="velocity-slider"
                type="range"
                min={CONSTANTS.VELOCITY_MIN}
                max={CONSTANTS.VELOCITY_MAX}
                step="0.1"
                value={velocity}
                onChange={handleVelocityChange}
                aria-label={`Flow velocity: ${velocity.toFixed(1)} meters per second`}
                className="w-full h-2 bg-gray-300 dark:bg-white/10 rounded-lg appearance-none cursor-pointer slider-cyan"
              />

              <div className="flex justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>0.5 m/s (Slow)</span>
                <span className="text-[#7ACC15] dark:text-[#9FFB1E]">1.5-2.0 m/s (Recommended)</span>
                <span>3.5 m/s (Fast)</span>
              </div>
            </div>
          </div>

          {/* Flow Visualization */}
          <div
            className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
            style={{
              background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)"
            }}
            role="img"
            aria-label={`Water flow animation showing ${currentPipe.size} pipe`}
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid-pattern"></div>
            </div>

            {/* Ambient Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {isFlowing && [...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="ambient-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Main Pipe Assembly */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
              <div className="relative w-full max-w-2xl">
                
                {/* Pipe Labels - Using Mendygo green for outlet */}
                <div className="absolute -top-12 left-0 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  <span className="text-cyan-400 text-sm md:text-base font-medium">Water Inlet</span>
                </div>
                <div className="absolute -top-12 right-0 flex items-center gap-2">
                  <span className="text-[#9FFB1E] text-sm md:text-base font-medium">Water Outlet</span>
                  <div className="w-3 h-3 rounded-full bg-[#9FFB1E] animate-pulse shadow-lg shadow-[#9FFB1E]/50"></div>
                </div>

                {/* Left Flange */}
                <div 
                  className="absolute left-0 top-1/2 z-20"
                  style={{ transform: `translateY(-50%) translateX(-10px)` }}
                >
                  <div className="flange-left" style={{ height: `${pipeHeight + 40}px` }}>
                    <div className="flange-bolt" style={{ top: '10%' }}></div>
                    <div className="flange-bolt" style={{ top: '40%' }}></div>
                    <div className="flange-bolt" style={{ top: '70%' }}></div>
                  </div>
                </div>

                {/* Main Pipe Body */}
                <div className="relative mx-8" style={{ height: `${pipeHeight}px` }}>
                  <div className="pipe-outer">
                    <div className="pipe-reflection-top"></div>
                    <div className="pipe-reflection-bottom"></div>
                    
                    <div className="pipe-segment" style={{ left: '25%' }}></div>
                    <div className="pipe-segment" style={{ left: '50%' }}></div>
                    <div className="pipe-segment" style={{ left: '75%' }}></div>

                    <div className="water-chamber">
                      <div className={`water-base ${isFlowing ? 'flowing' : 'static'}`}></div>
                      
                      {isFlowing && (
                        <>
                          <div 
                            className="water-flow-layer layer-1"
                            style={{ animationDuration: `${animationDuration}s` }}
                          ></div>
                          <div 
                            className="water-flow-layer layer-2"
                            style={{ animationDuration: `${animationDuration * 1.3}s` }}
                          ></div>
                          <div 
                            className="water-flow-layer layer-3"
                            style={{ animationDuration: `${animationDuration * 0.8}s` }}
                          ></div>

                          {particles.map((p) => (
                            <WaterParticle key={p.id} delay={p.delay} duration={p.duration} top={p.top} />
                          ))}

                          {bubbles.map((b) => (
                            <PipeBubble key={b.id} delay={b.delay} duration={b.duration} position={b.position} />
                          ))}

                          <div className="caustic-overlay"></div>
                        </>
                      )}

                      <div className="water-surface-shine"></div>
                    </div>

                    <div className="pipe-inner-shadow-top"></div>
                    <div className="pipe-inner-shadow-bottom"></div>
                  </div>

                  {/* Pipe Size Label */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white font-mono text-sm md:text-base">
                      {currentPipe.size} ({currentPipe.internalDiameter}mm ID)
                    </span>
                  </div>
                </div>

                {/* Right Flange */}
                <div 
                  className="absolute right-0 top-1/2 z-20"
                  style={{ transform: `translateY(-50%) translateX(10px)` }}
                >
                  <div className="flange-right" style={{ height: `${pipeHeight + 40}px` }}>
                    <div className="flange-bolt" style={{ top: '10%' }}></div>
                    <div className="flange-bolt" style={{ top: '40%' }}></div>
                    <div className="flange-bolt" style={{ top: '70%' }}></div>
                  </div>
                </div>

                {/* Flow Arrow */}
                {isFlowing && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <div className="flow-arrow" style={{ animationDuration: `${animationDuration * 2}s` }}>
                      <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <path 
                          d="M5 15H45M45 15L35 5M45 15L35 25" 
                          stroke="rgba(255,255,255,0.6)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Live Displays */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-cyan-500/30">
              <div className="text-xs text-cyan-400 font-medium mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                FLOW RATE
              </div>
              <div className="text-xl md:text-2xl font-mono font-semibold text-white">
                {isFlowing ? formatFlowRate(flowRate) : "0"}
              </div>
              <div className="text-xs text-cyan-400/70">cm³/hr</div>
            </div>

            {/* Velocity Display - Using Mendygo green */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-[#9FFB1E]/30">
              <div className="text-xs text-[#9FFB1E] font-medium mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9FFB1E] animate-pulse"></span>
                VELOCITY
              </div>
              <div className="text-2xl md:text-3xl font-mono font-semibold text-white">
                {velocity.toFixed(1)}
              </div>
              <div className="text-xs text-[#9FFB1E]/70">m/s</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-orange-500/30">
              <div className="text-xs text-orange-400 font-medium mb-1">PRESSURE</div>
              <div className="text-lg md:text-xl font-mono font-semibold text-white">
                {isFlowing ? (2 + velocity * 0.5).toFixed(1) : "0.0"}
              </div>
              <div className="text-xs text-orange-400/70">bar</div>
            </div>

            {/* Status Indicator - Using Mendygo green for active */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-3 rounded-full border border-white/20">
              <div className={`w-3 h-3 rounded-full ${isFlowing ? "bg-[#9FFB1E] shadow-lg shadow-[#9FFB1E]/50" : "bg-red-500"}`}>
                {isFlowing && <div className="w-full h-full rounded-full bg-[#9FFB1E] animate-ping"></div>}
              </div>
              <span className="text-white text-sm md:text-base font-medium">
                {isFlowing ? `Active Flow • ${velocity.toFixed(1)} m/s` : "System Idle"}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-blue-500/30">
              <div className="text-xs text-blue-400 font-medium mb-1">TEMP</div>
              <div className="text-lg md:text-xl font-mono font-semibold text-white">23°C</div>
              <div className="text-xs text-blue-400/70">water</div>
            </div>
          </div>

          {/* Formula Display */}
          <div className="bg-blue-50 dark:bg-blue-500/10 backdrop-blur-sm rounded-xl p-5 border border-blue-200 dark:border-blue-500/20">
            <h3 className="text-base md:text-lg font-medium text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
              <span className="text-lg">📐</span> Flow Rate Calculation (Continuity Equation)
            </h3>
            <div className="bg-white/70 dark:bg-black/30 rounded-lg p-4 font-mono text-sm md:text-base">
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                Q = A × v × unit_conversion
              </div>
              <div className="text-blue-600 dark:text-blue-300">
                Q = π × (D/2)² × v × 3,600,000
              </div>
              <div className="text-gray-500 dark:text-gray-400 mt-2 text-xs md:text-sm">
                Q = π × ({currentPipe.internalDiameter}/2000)² × {velocity.toFixed(1)} × 3,600,000
              </div>
              {/* Result in Mendygo green */}
              <div className="text-[#7ACC15] dark:text-[#9FFB1E] font-semibold mt-2 text-base md:text-lg">
                Q = {formatFlowRate(flowRate)} cm³/hr
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-4">
          {/* Flow Rate Card */}
          <div className="bg-cyan-50 dark:bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200 dark:border-cyan-500/20">
            <h4 className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 mb-1">
              Calculated Flow Rate
            </h4>
            <p className="text-2xl md:text-3xl font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
              {formatFlowRate(flowRate)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">cm³/hr</p>
            <div className="mt-3 pt-3 border-t border-cyan-200 dark:border-cyan-500/20">
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Per minute:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">{(flowRate / 60000).toFixed(0)} cm³/min</span>
                </div>
                <div className="flex justify-between">
                  <span>In liters:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">{(flowRate / 1000000).toFixed(2)} L/hr</span>
                </div>
                <div className="flex justify-between">
                  <span>L/min:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">{(flowRate / 60000000).toFixed(2)} L/min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pipe Specs */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10">
            <h4 className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
              <span>🔧</span> Pipe Specifications
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">Size:</span>
                <span className="font-semibold text-gray-900 dark:text-white text-lg md:text-xl">{currentPipe.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Nominal Diameter:</span>
                <span className="font-mono text-gray-800 dark:text-gray-200">{currentPipe.nominalDiameter} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Internal Diameter:</span>
                <span className="font-mono text-gray-800 dark:text-gray-200">{currentPipe.internalDiameter} mm</span>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Typical Flow:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">{formatFlowRate(currentPipe.typicalFlowRate)}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm mt-1">
                  <span className="text-gray-500 dark:text-gray-400">Max Flow:</span>
                  <span className="font-mono text-gray-700 dark:text-gray-300">{formatFlowRate(currentPipe.maxFlowRate)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Velocity Status */}
          <div className={`rounded-2xl p-5 border ${velocityStatus.bgClass}`}>
            <h4 className="text-sm md:text-base font-medium mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span>⚡</span> Velocity Status
            </h4>
            <div className={`font-medium text-sm md:text-base ${velocityStatus.textClass}`}>
              {velocityStatus.message}
            </div>
            <div className="mt-3 bg-white/70 dark:bg-black/20 rounded-lg p-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-500 dark:text-gray-400">Reynolds Number:</span>
                <span className="font-mono text-gray-700 dark:text-gray-300">
                  {Math.round(velocity * currentPipe.internalDiameter * 1000 / 0.001).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Application - Using Mendygo green */}
          <div className="bg-[#9FFB1E]/10 dark:bg-[#9FFB1E]/10 rounded-2xl p-5 border border-[#9FFB1E]/30 dark:border-[#9FFB1E]/20">
            <h4 className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
              <span>🏢</span> Typical Application
            </h4>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              {currentPipe.application}
            </p>
          </div>

          {/* System Status - Using Mendygo green for active */}
          <div className={`rounded-2xl p-5 border transition-all duration-300 ${
            isFlowing 
              ? "bg-[#9FFB1E]/10 dark:bg-[#9FFB1E]/10 border-[#9FFB1E]/30 dark:border-[#9FFB1E]/20" 
              : "bg-red-100 dark:bg-red-500/10 border-red-300 dark:border-red-500/20"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`relative w-5 h-5 rounded-full ${isFlowing ? "bg-[#9FFB1E]" : "bg-red-500"}`}>
                {isFlowing && <div className="absolute inset-0 rounded-full bg-[#9FFB1E] animate-ping opacity-75"></div>}
              </div>
              <span className={`font-medium text-lg md:text-xl ${isFlowing ? "text-[#7ACC15] dark:text-[#9FFB1E]" : "text-red-700 dark:text-red-400"}`}>
                {isFlowing ? "System Active" : "System Stopped"}
              </span>
            </div>
            {isFlowing && (
              <p className="text-xs md:text-sm text-[#6AB312] dark:text-[#9FFB1E]/70 mt-2 ml-8">
                Water flowing at optimal conditions
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .grid-pattern {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .ambient-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(6, 182, 212, 0.5);
          border-radius: 50%;
          animation: float-particle 5s ease-in-out infinite;
        }

        @keyframes float-particle {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-20px); }
        }

        .flange-left, .flange-right {
          width: 25px;
          background: linear-gradient(90deg, #1f2937 0%, #374151 20%, #4b5563 50%, #374151 80%, #1f2937 100%);
          border-radius: 4px;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.5);
        }

        .flange-bolt {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: radial-gradient(circle at 30% 30%, #6b7280, #374151);
          border-radius: 50%;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.5);
        }

        .flange-bolt::after {
          content: '+';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8px;
          color: #1f2937;
          font-weight: bold;
        }

        .pipe-outer {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #111827 0%, #1f2937 10%, #374151 25%, #4b5563 50%, #374151 75%, #1f2937 90%, #111827 100%);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.3);
          overflow: hidden;
        }

        .pipe-reflection-top {
          position: absolute;
          top: 8%;
          left: 5%;
          right: 5%;
          height: 15%;
          background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
          border-radius: 50%;
        }

        .pipe-reflection-bottom {
          position: absolute;
          bottom: 15%;
          left: 10%;
          right: 10%;
          height: 8%;
          background: linear-gradient(0deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          border-radius: 50%;
        }

        .pipe-segment {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 30%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%);
          transform: translateX(-50%);
        }

        .water-chamber {
          position: absolute;
          top: 20%;
          bottom: 20%;
          left: 3%;
          right: 3%;
          background: linear-gradient(180deg, #083344 0%, #0e7490 30%, #22d3ee 50%, #0e7490 70%, #083344 100%);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: inset 0 4px 8px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.2);
        }

        .water-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(34, 211, 238, 0.8) 0%, rgba(6, 182, 212, 0.9) 50%, rgba(34, 211, 238, 0.8) 100%);
          transition: opacity 0.5s ease;
        }

        .water-base.static { opacity: 0.6; }
        .water-base.flowing { opacity: 1; }

        .water-flow-layer {
          position: absolute;
          inset: 0;
          animation: flow-horizontal linear infinite;
        }

        .water-flow-layer.layer-1 {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.1) 60%, transparent 80%);
          background-size: 50% 100%;
        }

        .water-flow-layer.layer-2 {
          background: linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.3) 25%, rgba(34,211,238,0.5) 50%, rgba(34,211,238,0.3) 75%, transparent 100%);
          background-size: 60% 100%;
          animation-delay: -0.5s;
        }

        .water-flow-layer.layer-3 {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.05) 70%, transparent 100%);
          background-size: 40% 100%;
          animation-delay: -1s;
        }

        @keyframes flow-horizontal {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .water-particle {
          position: absolute;
          left: -10px;
          width: 8px;
          height: 4px;
          background: radial-gradient(ellipse, rgba(255,255,255,0.8), transparent);
          border-radius: 50%;
          animation: particle-flow linear infinite;
        }

        @keyframes particle-flow {
          0% { left: -10px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% + 10px); opacity: 0; }
        }

        .pipe-bubble {
          position: absolute;
          bottom: 10%;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.3) 50%, transparent);
          border-radius: 50%;
          animation: bubble-rise ease-in-out infinite;
        }

        @keyframes bubble-rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-30px) scale(0.5) translateX(10px); opacity: 0; }
        }

        .caustic-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 20% 30% at 20% 50%, rgba(255,255,255,0.1), transparent),
            radial-gradient(ellipse 15% 25% at 50% 30%, rgba(255,255,255,0.08), transparent),
            radial-gradient(ellipse 25% 20% at 80% 60%, rgba(255,255,255,0.1), transparent);
          animation: caustic-move 3s ease-in-out infinite;
        }

        @keyframes caustic-move {
          0%, 100% { opacity: 0.5; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(5%); }
        }

        .water-surface-shine {
          position: absolute;
          top: 5%;
          left: 10%;
          right: 10%;
          height: 20%;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          border-radius: 50%;
          filter: blur(2px);
        }

        .pipe-inner-shadow-top {
          position: absolute;
          top: 15%;
          left: 2%;
          right: 2%;
          height: 10%;
          background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%);
          border-radius: 50%;
        }

        .pipe-inner-shadow-bottom {
          position: absolute;
          bottom: 15%;
          left: 2%;
          right: 2%;
          height: 10%;
          background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 100%);
          border-radius: 50%;
        }

        .flow-arrow {
          animation: arrow-pulse ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
        }

        @keyframes arrow-pulse {
          0%, 100% { opacity: 0.4; transform: translateX(-10px); }
          50% { opacity: 0.8; transform: translateX(10px); }
        }

        /* Slider with Mendygo green thumb */
        .slider-green::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9FFB1E 0%, #7DD619 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(159, 251, 30, 0.5);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .slider-green::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(159, 251, 30, 0.6);
        }

        .slider-cyan::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(34, 211, 238, 0.5);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .slider-cyan::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(34, 211, 238, 0.6);
        }

        .slider-green::-moz-range-thumb,
        .slider-cyan::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
        }

        .slider-green::-moz-range-thumb {
          background: linear-gradient(135deg, #9FFB1E 0%, #7DD619 100%);
          box-shadow: 0 2px 8px rgba(159, 251, 30, 0.5);
        }

        .slider-cyan::-moz-range-thumb {
          background: linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%);
          box-shadow: 0 2px 8px rgba(34, 211, 238, 0.5);
        }

        input[type="range"]:focus { outline: none; }
      `}</style>
    </div>
  );
};

export default FlowAnimation;