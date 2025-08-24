"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
    ShieldCheck,
    Eye,
    Cpu,
    Cloud,
    Gauge,
    LayoutGrid,
    Activity,
    Factory,
    Component
} from "lucide-react";
import d1 from "../../assets/D1.jpeg"
import d2 from "../../assets/D2.jpeg"

export default function AboutPage() {
    return (
        <div className="min-h-screen px-4 md:px-16 py-10 bg-white text-black dark:bg-[#0a0a0a] dark:text-[#eaeaea]">
            <div className="text-center space-y-2 mb-10 mt-30">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Unlock the Power of Your Enterprise Insights
                </p>
            </div>

            <section className="grid md:grid-cols-2 gap-10 mb-16">


                <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Director</h2>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Image
                                src={d2}
                                alt="Sourav Verma"
                                width={120}
                                height={120}
                                className="w-[120px] h-[120px] rounded-full border shadow object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Mr. Sourav Verma</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Driving digital transformation and automation excellence with a futuristic approach.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>


                <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Director</h2>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Image
                                src={d1}
                                alt="Santosh Verma"
                                width={120}
                                height={120}
                                className="rounded-full border shadow"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">Mrs. Santosh Verma</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pioneering digital transformation and automation with a future-ready vision.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section className="space-y-8">
                <h2 className="text-3xl font-bold">What We Offer</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold flex items-center gap-2"><Factory className="h-5 w-5" /> Industrial Digitalisation Solution</h3>
                            <p>
                                Solutions across Industry 4.0 shop-floor optimization, remote monitoring of sensors, transformers, pumps, and PLC-controlled machines.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h3 className="text-xl font-semibold flex items-center gap-2"><Component className="h-5 w-5" /> Industrial Parts</h3>
                            <p>
                                Supply of industrial plants, machinery, engineering products, and branded spares & equipment.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Separator />

                <h2 className="text-3xl font-bold">Our Solutions</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="text-lg font-semibold flex items-center gap-2"><Eye className="h-5 w-5" /> IoT for Industry Sensors</h4>
                            <p>Monitor temperature, humidity, gas, pressure, proximity sensors, RFID tags and more in one dashboard.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="text-lg font-semibold flex items-center gap-2"><Gauge className="h-5 w-5" /> Smart Manufacturing</h4>
                            <p>Track production, OEE, and enable preventive maintenance with automation.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="text-lg font-semibold flex items-center gap-2"><Activity className="h-5 w-5" /> Machine Monitoring</h4>
                            <p>Reduce service time & cost, ensure optimal usage with real-time monitoring.</p>
                        </CardContent>
                    </Card>
                </div>

                <Separator />

                <h2 className="text-3xl font-bold">Why Choose Mendygo?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> End-to-End IIoT Solutions</h4>
                            <p>Monitor and control machines, assets, resources, appliances, and sensors remotely.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><Eye className="h-5 w-5" /> Analytics & Insights</h4>
                            <p>Gain efficiency and business continuity through insights and automation.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><Cpu className="h-5 w-5" /> Hardware + Software</h4>
                            <p>We handle the full setup: IoT platform, hardware installation, and environment configuration.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><Cloud className="h-5 w-5" /> SaaS Based Platform</h4>
                            <p>Cloud-based deployment with seamless updates and no server hassles.</p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-md dark:shadow-lg dark:bg-[#111]">
                        <CardContent className="p-6 space-y-2">
                            <h4 className="font-semibold flex items-center gap-2"><LayoutGrid className="h-5 w-5" /> Improve Quality</h4>
                            <p>Detect component failure early and track machine metrics with 24x7 live monitoring.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
