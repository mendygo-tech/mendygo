import { useState } from "react";

export default function VennDiagram() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const center = { cx: 350, cy: 350 };
    const ellipseRx = 100;
    const ellipseRy = 130;
    const centralCircleRadius = 100;
    const labelOrbitRadius = 140;
    const rotationAngle = 20;
    const rotationRad = (rotationAngle * Math.PI) / 180;
    const ellipseOuterRadius = Math.sqrt(
        Math.pow(ellipseRx * Math.cos(rotationRad), 2) +
        Math.pow(ellipseRy * Math.sin(rotationRad), 2)
    );
    const outerCircleRadius = labelOrbitRadius + ellipseOuterRadius;

    const labels = [
        { title: "Mendygo", id: 0, ...center },
        { title: "Connect", id: 1 },
        { title: "Collect", id: 2 },
        { title: "Integrate", id: 3 },
        { title: "Report", id: 4 },
        { title: "Analyze", id: 5 },
        { title: "Optimize", id: 6 },
    ];

    const IconComponent = ({ type }: { type: number }) => {
        const iconStyle = "w-4 h-4";
        switch (type) {
            case 0: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l2.3 2.3a2.4 2.4 0 0 0 3.4 0 2.4 2.4 0 0 0 0-3.4L15.4 14l2.3-2.3a2.4 2.4 0 0 0 0-3.4 2.4 2.4 0 0 0-3.4 0L12 10.6 9.7 8.3a2.4 2.4 0 0 0-3.4 0 2.4 2.4 0 0 0 0 3.4L8.6 14l-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /></svg>;
            case 1: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 17l4 4 4-4m-4-5v9" /><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg>;
            case 2: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
            case 3: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v5h5" /><path d="M3 21v-5h5" /><path d="M21 3v5h-5" /><path d="M21 21v-5h-5" /></svg>;
            case 4: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>;
            case 5: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10l8-4v10l-8 4z" /><path d="M4 12v8l8-4V6l-8 4z" /><path d="M4 6l8-4 8 4" /></svg>;
            default: return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6" /></svg>;
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 700 700"
                    className="text-black dark:text-gray-300 w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r={outerCircleRadius}
                        fill="none"
                        stroke="#0E4732"
                        className="opacity-30 dark:stroke-[#abff02]"
                        strokeWidth="2"
                        filter="url(#glow)"
                    />
                    {labels.slice(1).map((label, index) => {
                        const angle = (index * 60 * Math.PI) / 180;
                        const ovalCenterX = center.cx + Math.cos(angle) * labelOrbitRadius;
                        const ovalCenterY = center.cy + Math.sin(angle) * labelOrbitRadius;

                        return (
                            <g key={label.id}>
                                <ellipse
                                    cx={ovalCenterX}
                                    cy={ovalCenterY}
                                    rx={ellipseRx}
                                    ry={ellipseRy}
                                    transform={`rotate(${index * 60 + 20}, ${ovalCenterX}, ${ovalCenterY})`}
                                    fill="transparent"
                                    stroke="none"
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    className="transition-all duration-300 cursor-pointer"
                                />

                                <ellipse
                                    cx={ovalCenterX}
                                    cy={ovalCenterY}
                                    rx={ellipseRx}
                                    ry={ellipseRy}
                                    transform={`rotate(${index * 60 + 20}, ${ovalCenterX}, ${ovalCenterY})`}
                                    fill="none"
                                    stroke="#0E4732"
                                    className="dark:stroke-[#abff02] transition-all duration-300 pointer-events-none"
                                    strokeWidth={hoverIndex === index ? 3 : 2}
                                    strokeOpacity={hoverIndex === index ? 0.9 : 0.5}
                                    filter="url(#glow)"
                                />

                                <foreignObject
                                    x={ovalCenterX + Math.cos(angle) * (ellipseRx - 40) - 40}
                                    y={ovalCenterY + Math.sin(angle) * (ellipseRx - 40) - 25}
                                    width={80}
                                    height={50}
                                    className="pointer-events-none"
                                >
                                    <div className="flex items-center justify-center w-full h-full">
                                        <div className="flex flex-col items-center justify-center text-sm text-center text-current font-medium gap-1 px-2 py-1 rounded-md shadow-sm">

                                            <div className="flex items-center justify-center gap-1">
                                                <IconComponent type={index % 6} />
                                                <span>{label.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        );
                    })}

                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r={centralCircleRadius}
                        fill="transparent"
                        stroke="none"
                        onMouseEnter={() => setHoverIndex(-1)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="transition-all duration-300 cursor-pointer"
                    />
                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r={centralCircleRadius}
                        fill="none"
                        stroke="#0E4732"
                        className="dark:stroke-[#abff02] transition-all duration-300 pointer-events-none"
                        strokeWidth={hoverIndex === -1 ? 3 : 2}
                        filter="url(#glow)"
                    />

                    <image
                        x={center.cx - 20}
                        y={center.cy - 20}
                        width="40"
                        height="40"
                        href="/logo.png"
                        className="pointer-events-none"
                    />
                </svg>
            </div>

            <style jsx>{`
        @keyframes pulseBorder {
          0% {
            stroke-width: 2;
          }
          50% {
            stroke-width: 4;
          }
          100% {
            stroke-width: 2;
          }
        }

        .animate-pulseBorder {
          animation: pulseBorder 1.5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}