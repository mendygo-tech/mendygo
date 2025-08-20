import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import {
    Bolt,
    TruckElectric,
    Handshake,
    Clock,
    DollarSign,
    PieChart,
    BarChart3,
    BellElectric,
    Heading1,
} from "lucide-react";

const benefits = [
    {
        icon: <BellElectric className="w-6 h-6 text-black dark:text-white" />,
        title: "Increased Productivity",
        description:
            "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    },
    {
        icon: <Handshake className="w-6 h-6 text-black dark:text-white" />,
        title: "Better Customer Experience",
        description:
            "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    },
    {
        icon: <Clock className="w-6 h-6 text-black dark:text-white" />,
        title: "24/7 Availability",
        description:
            "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    },
    {
        icon: <DollarSign className="w-6 h-6 text-black dark:text-white" />,
        title: "Cost Reduction",
        description:
            "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    },
    {
        icon: <PieChart className="w-6 h-6 text-black dark:text-white" />,
        title: "Data-Driven Insights",
        description:
            "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-black dark:text-white" />,
        title: "Scalability & Growth",
        description:
            "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    },
];

const Benefits = () => {
    return (
        <section className="relative bg-white dark:bg-black py-20 px-4 text-gray-900 dark:text-white flex flex-col items-center overflow-hidden">
            {/* Green fog/shadow effect */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#abff02] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#abff02] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <Badge
                className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#abff02]/30 transition
"
            >
                <span className="text-sm font-semibold">Benefits</span>
            </Badge>
            <h1 className={`font-bold text-2xl mb-8 relative z-10`}>
                The Key Benefits of AI for Your Business Growth
            </h1>
            <h4 className="relative z-10 mb-6">Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.</h4>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10"
            >
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#abff02]/10 transition-all duration-300 ease-in-out"
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#abff02]/60 via-[#abff02]/80 to-[#abff02]/60" />
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Benefits;