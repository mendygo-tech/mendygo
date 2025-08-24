'use client'
import { useEffect, useState } from 'react';

const Step4 = () => {
    const [animationStates, setAnimationStates] = useState([false, false, false]);
    const [progressValues, setProgressValues] = useState([20, 0, 100]);

    const systems = [
        {
            name: 'Chatbot',
            status: '↻',
            baseText: 'Efficiency',
            animating: true
        },
        {
            name: 'Workflow',
            status: '↓',
            baseText: 'Update available',
            animating: true
        },
        {
            name: 'Sales',
            status: '✓',
            baseText: 'Up to date',
            animating: false
        },
    ];

    useEffect(() => {
        let frameCount = 0;
        
        // Combine all intervals into one optimized interval
        const combinedInterval = setInterval(() => {
            frameCount++;
            
            // Chatbot animation (every 1.5s = every 15 frames at 100ms intervals)
            if (frameCount % 15 === 0) {
                setAnimationStates(prev => [!prev[0], prev[1], prev[2]]);
            }
            
            // Workflow animation (every 2s = every 20 frames at 100ms intervals)
            if (frameCount % 20 === 0) {
                setAnimationStates(prev => [prev[0], !prev[1], prev[2]]);
            }
            
            // Progress update (every 200ms = every 2 frames for smoother performance)
            if (frameCount % 2 === 0) {
                setProgressValues(prev => [
                    prev[0] >= 35 ? 20 : prev[0] + 1,
                    prev[1],
                    prev[2]
                ]);
            }
        }, 100);

        return () => clearInterval(combinedInterval);
    }, []);

    const getStatusText = (index: number) => {
        switch (index) {
            case 0:
                return `Efficiency +${progressValues[0]}%`;
            case 1:
                return animationStates[1] ? 'Downloading...' : 'Update available';
            case 2:
                return 'Up to date';
            default:
                return '';
        }
    };


    return (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white p-6 w-[26rem] h-80 rounded-xl shadow-2xl shadow-black/30 dark:shadow-black/30 flex flex-col">
            <div className="flex flex-col mb-6">
                <span className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white px-2 py-1 text-xs rounded-md self-start mb-2 backdrop-blur-sm">
                    Step 4
                </span>
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Optimization</h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                    Continuous monitoring and improvement.
                </p>
            </div>

            <div className="flex-1 space-y-1">
                {systems.map((system, i) => (
                    <div key={i} className="border border-gray-300/30 dark:border-white/30 rounded-md p-1 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:border-[#abff02]/30 backdrop-blur-sm bg-white/5 dark:bg-black/10 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{system.name} system</p>
                                <p className={`text-xs transition-all duration-300 ${i === 1 && animationStates[1] ? 'text-[#abff02] drop-shadow-sm' : 'text-gray-600 dark:text-white/70'
                                    }`}>
                                    {getStatusText(i)}
                                </p>
                            </div>
                            <div className="ml-4 relative">
                                <span className={`text-lg text-[#abff02] transition-all duration-300 inline-block drop-shadow-sm ${i === 0 && animationStates[0] ? 'animate-spin' : ''
                                    } ${i === 1 && animationStates[1] ? 'animate-bounce' : ''
                                    } ${i === 2 ? 'hover:scale-110' : ''
                                    }`}>
                                    {system.status}
                                </span>
                                {i === 0 && (
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#abff02] rounded-full animate-pulse shadow-sm shadow-[#abff02]/50"></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Step4;