"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 py-10">
            <div className="max-w-3xl mx-auto space-y-6 mt-30">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                        Blog
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold">Industrial Automation</h1>
                    <p className="text-sm text-muted-foreground">
                        By <span className="font-medium">Santosh Verma</span> — June 22, 2022
                    </p>
                </div>

                <Card className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-md">
                    <CardContent className="p-6 space-y-4">
                        <p>
                            The past two decades have seen drastic changes in the manufacturing landscape.
                            The advent of smart computers and technology have rendered automation an essential
                            element in gaining a competitive advantage in today’s local and global manufacturing environment.
                        </p>

                        <h2 className="text-xl font-semibold">Top Advantages of Industrial Automation</h2>
                        <p>
                            Automation’s key advantage is increasing productivity in facilities. Labor reduction,
                            repeatability, waste reduction, enhanced quality control, and integration with existing
                            business systems give companies an advantage by reducing long-term costs, which increases
                            product output and revenue.
                        </p>

                        <p>
                            Disadvantages include high initial costs in purchasing technology and increases in
                            maintenance costs. For decades, automation has been used in industry to produce simple
                            objects. However, the combination of computers and existing technology in the mid-20th
                            century allowed more complex tasks to be completed in much faster times.
                        </p>

                        <p>
                            Advantages commonly attributed to automation include higher production rates and
                            increased productivity, more efficient use of materials, better product quality,
                            improved safety, shorter workweeks for labour, and reduced factory lead times.
                        </p>

                        <blockquote className="border-l-4 border-[#abff02] pl-4 italic text-muted-foreground">
                            The first rule of any technology used in a business is that automation applied to an
                            efficient operation will magnify the efficiency.
                        </blockquote>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Blog;