"use client";

import { useParams } from "next/navigation";
import { sluggedContent } from "@/data/timelinedata";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, BarChart3, Cpu, Database, Gauge, Layers3, Settings2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
    analyze: <Gauge className="w-5 h-5" />,
    optimize: <Zap className="w-5 h-5" />,
    connect: <Database className="w-5 h-5" />,
    collect: <Cpu className="w-5 h-5" />,
    report: <BarChart3 className="w-5 h-5" />,
    integrate: <Layers3 className="w-5 h-5" />,
};

export default function Page() {
    const params = useParams();
    const slug = params?.slug as string;
    const data = sluggedContent[slug];

    if (!data) {
        return (
            <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center p-7">
                <div className="text-center">
                    <AlertTriangle className="w-8 h-8 mb-2 text-red-500" />
                    <h2 className="text-xl font-semibold">Page Not Found</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We couldn't find content for "{slug}".</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 py-24 md:px-8 lg:px-16 bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-5xl mx-auto mt-30">
                <div className="flex items-center space-x-4 mb-6">
                    {iconMap[slug] || <Settings2 className="w-5 h-5" />}
                    <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
                </div>
                {data.subtitle && <p className="text-muted-foreground mb-6 text-lg text-gray-600 dark:text-gray-300">{data.subtitle}</p>}

                <div className="space-y-6">
                    {data.sections.map((section, index) => (
                        <Card key={index} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-md">
                            <CardContent className="p-6 space-y-2">
                                <h2 className="text-xl font-semibold text-black dark:text-white flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs px-2 py-0.5 bg-[#abff02] text-black">
                                        {index + 1}
                                    </Badge>
                                    {section.title}
                                </h2>
                                <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                    {section.content.map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
