import { useEffect, useState } from 'react';

const Step3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const icons = ['📧', '💬', '📱', '💼'];
    const labels = ['Gmail', 'Slack', 'WhatsApp', 'Teams'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((i) => (i + 1) % icons.length);
                setIsTransitioning(false);
            }, 200);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 text-gray-900 dark:text-white p-6 lg:w-[26rem] w-[22rem] h-80 rounded-xl shadow-2xl shadow-black/30 dark:shadow-black/30 flex flex-col">
            <div className="flex flex-col mb-6">
                <span className="bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white px-2 py-1 text-xs rounded-md self-start mb-2 backdrop-blur-sm">
                    Step 3
                </span>
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-[#9B9999]">Integration</h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight ">
                    Seamless integration with your tools.
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center justify-between w-full max-w-48">

                    <div className="flex flex-col items-center">
                        <div className="bg-[#abff02]/30 backdrop-blur-sm border border-[#abff02]/30 p-3 rounded-lg mb-1 shadow-lg shadow-[#abff02]/20">
                            <div className="w-8 h-8 bg-[#abff02] backdrop-blur-sm rounded flex items-center justify-center text-black font-bold text-sm shadow-md">
                                AI
                            </div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-white/70">Our solution</span>
                    </div>

                    <div className="flex-1 relative mx-4">
                        <div className="h-px bg-gray-300/30 dark:bg-white/10 w-full"></div>
                        <div className="absolute top-0 left-0 h-px bg-[#abff02] animate-[flow_2s_ease-in-out_infinite] shadow-sm shadow-[#abff02]/50"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className={`bg-[#abff02]/30 backdrop-blur-sm border border-[#abff02]/50 p-3 rounded-lg mb-1 transition-all duration-300 transform shadow-lg shadow-[#abff02]/30 ${isTransitioning ? 'scale-90 opacity-70' : 'scale-100 opacity-100'
                            }`}>
                            <div className={`w-8 h-8 flex items-center justify-center text-xl transition-all duration-300 ${isTransitioning ? 'scale-75' : 'scale-100'
                                }`}>
                                {icons[currentIndex]}
                            </div>
                        </div>
                        <span className={`text-xs text-gray-600 dark:text-white/70 transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-70'
                            }`}>
                            {labels[currentIndex]}
                        </span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Step3;