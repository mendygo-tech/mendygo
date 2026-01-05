"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type LiveTelemetryProps = {
  compact?: boolean;
};

export default function LiveTelemetry({ compact = false }: LiveTelemetryProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const tRef = useRef(0);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `${30 - i}s`),
        datasets: [
          {
            label: "Power Consumption",
            data: Array.from({ length: 30 }, () => 65),
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.15)",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { color: "#9ca3af" },
            grid: { display: false },
          },
          y: {
            min: 30,
            max: 100,
            ticks: { color: "#9ca3af" },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
        },
      },
    });

    const interval = setInterval(() => {
      const data = chart.data.datasets[0].data as number[];

      const base = 65;
      const primaryWave = Math.sin(tRef.current) * 6;
      const secondaryWave = Math.sin(tRef.current * 0.5) * 2;
      const noise = (Math.random() - 0.5) * 0.8;

      const next = base + primaryWave + secondaryWave + noise;

      tRef.current += 0.12;

      data.push(Number(next.toFixed(2)));
      data.shift();
      chart.update();
    }, 1200);

    return () => {
      clearInterval(interval);
      chart.destroy();
    };
  }, []);

  return (
    <section className={compact ? "" : "px-6 py-16 max-w-7xl mx-auto"}>
      <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 shadow-lg p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-green-600 dark:text-green-400">
              Live Monitoring
            </p>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Real-Time Telematics
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
              Continuous power usage tracking across active systems in the last
              30 seconds.
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </div>
        </div>

        {/* Metrics Row */}
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
          <Metric label="Avg Load" value="64%" />
          <Metric label="Peak" value="72%" />
          <Metric label="Trend" value="Stable" />
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-gray-200 dark:bg-white/10" />

        {/* Chart */}
        <div className={compact ? "h-[200px]" : "h-[320px]"}>
          <canvas ref={chartRef} />
        </div>

        {/* Footer Hint */}
        <p className="mt-2 text-[11px] text-gray-500 dark:text-gray-400">
          Data updates every ~1.2 seconds. Values shown are simulated for demo
          purposes.
        </p>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-2">
      <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
