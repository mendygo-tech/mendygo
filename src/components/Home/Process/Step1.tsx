import React from 'react';
import { NotebookTabs, ParkingMeter, Repeat, Settings, Shield } from 'lucide-react';

const Step1 = () => {
    const analyzingSteps = [
        { icon: Shield, label: 'System check' },
        { icon: Settings, label: 'Process check' },
        { icon: ParkingMeter, label: 'Speed check' },
        { icon: NotebookTabs, label: 'Manual work' },
        { icon: Repeat, label: 'Repetitive task' },
    ];

    return (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white p-6 w-[26rem] h-80 rounded-2xl shadow-2xl shadow-black/30 dark:shadow-black/30 flex flex-col">

            <div className="flex flex-col mb-4">
                <span className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white px-2 py-1 text-xs rounded-md self-start mb-2 backdrop-blur-sm">
                    Step 1
                </span>
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Smart Analyzing</h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                    We assess your needs and identify AI solutions.
                </p>
            </div>

            <div className="flex">
                <div className="border-gray-300/30 dark:border-white/30 rounded-lg p-4 border-[1px] backdrop-blur-sm bg-white/5 dark:bg-black/20 shadow-lg">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative w-32 h-32 mb-">
                            <div className="absolute inset-0 rounded-full border border-gray-300/30 dark:border-white/20 bg-white/20 dark:bg-black/50 backdrop-blur-sm shadow-inner">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full border border-gray-300/20 dark:border-white/10"
                                        style={{
                                            width: `${(i * 100) / 3}%`,
                                            height: `${(i * 100) / 3}%`,
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />
                                ))}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <div
                                        className="absolute w-full h-full animate-spin"
                                        style={{
                                            background: 'conic-gradient(from 0deg, transparent 0deg, #abff02aa 20deg, transparent 40deg)',
                                            animationDuration: '3s',
                                        }}
                                    />
                                </div>
                                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#abff02] rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-[#abff02]/50" />
                                <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50" style={{ top: '25%', left: '70%' }} />
                                <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50" style={{ top: '60%', left: '30%', animationDelay: '0.5s' }} />
                                <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50" style={{ top: '75%', left: '65%', animationDelay: '1s' }} />
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-white/70">Analyzing workflow...</p>
                    </div>
                </div>
                <div className="space-y-1 border border-gray-300/30 dark:border-white/20 rounded-lg p-2 ml-4 flex-1 backdrop-blur-sm bg-white/5 dark:bg-black/10 shadow-lg">
                    {analyzingSteps.map((step, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-2 py-1 border border-gray-300/20 dark:border-white/10 rounded text-xs hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-200 backdrop-blur-sm shadow-sm"
                        >
                            <span className="text-[#abff02] drop-shadow-sm"><step.icon size={16} /></span>
                            <span className="text-gray-800 dark:text-white/90">{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step1;