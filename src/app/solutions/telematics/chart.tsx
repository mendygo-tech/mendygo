"use client";

import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

type LiveTelemetryProps = {
  compact?: boolean;
};

export default function LiveTelemetry({ compact = false }: LiveTelemetryProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const tRef = useRef(0);

  const [stats, setStats] = useState({
    avg: 66,
    peak: 72,
    trend: "Stable",
  });

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 320);
    gradient.addColorStop(0, "rgba(34,197,94,0.35)");
    gradient.addColorStop(1, "rgba(34,197,94,0.06)");

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: Array.from({ length: 30 }, (_, i) => `${30 - i}s`),
        datasets: [
          {
            data: Array.from({ length: 30 }, () => 65),
            borderColor: "#22c55e",
            backgroundColor: gradient,
            fill: true,
            tension: 0.42,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 500, easing: "easeOutCubic" },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            ticks: { color: "#9ca3af", maxTicksLimit: 6 },
            grid: { display: false },
          },
          y: {
            min: 50,
            max: 85,
            ticks: {
              color: "#9ca3af",
              callback: (v) => `${v}%`,
            },
            grid: { color: "rgba(0,0,0,0.05)" },
          },
        },
      },
    });

    // Ensure proper sizing on mobile
    setTimeout(() => chart.resize(), 0);

    const interval = setInterval(() => {
      const data = chart.data.datasets[0].data as number[];

      const base = 66;
      const primary = Math.sin(tRef.current) * 5;
      const secondary = Math.sin(tRef.current * 0.6) * 2;
      const noise = (Math.random() - 0.5) * 0.6;

      const value = base + primary + secondary + noise;
      tRef.current += 0.12;

      data.push(Number(value.toFixed(2)));
      data.shift();

      const avg = data.reduce((a, b) => a + b, 0) / data.length;
      const peak = Math.max(...data);

      setStats({
        avg: Math.round(avg),
        peak: Math.round(peak),
        trend:
          data[data.length - 1] > data[data.length - 5]
            ? "Rising"
            : "Stable",
      });

      chart.update();
    }, 1200);

    return () => {
      clearInterval(interval);
      chart.destroy();
    };
  }, []);

  return (
    <section
      className={
        compact
          ? ""
          : "px-4 sm:px-6 py-12 max-w-7xl mx-auto overflow-x-hidden"
      }
    >
      {/* ✅ REMOVED max-h-[520px] */}
      <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-lg p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
              Live Monitoring
            </p>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Real-Time Telematics
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs">
              Continuous system load analysis from active telemetry streams.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live
          </div>
        </div>

        {/* KPIs */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Metric label="Avg Load" value={`${stats.avg}%`} />
          <Metric label="Peak Load" value={`${stats.peak}%`} />
          <div className="col-span-2 sm:col-span-1">
            <Metric label="Trend" value={stats.trend} />
          </div>
        </div>

        <div className="my-4 h-px bg-gray-200 dark:bg-white/10" />

        {/* Chart */}
        <div className={compact ? "h-[180px]" : "h-[220px] sm:h-[320px]"}>
          <div className="relative h-full w-full overflow-hidden">
            <canvas ref={chartRef} className="max-w-full" />
          </div>
        </div>

        <p className="mt-3 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400">
          Telemetry updates every ~1.2s. Data is simulated for demonstration
          purposes.
        </p>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 sm:px-4 py-3">
      <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
