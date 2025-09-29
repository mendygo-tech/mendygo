import { StaticImageData } from "next/image";

import heroGateway from "@/assets/hardware/Controller.png"


import realtimeInsights from "@/assets/icons/features/realTimeInsights.png"
import deepEngine from "@/assets/icons/features/crashAnalytics.png"
import energy from "@/assets/icons/solutions/Energy Management .png"
import predictiveMain from "@/assets/icons/features/ProactiveService.png"

//
import gatewayWithPCBDark from "@/assets/hardware/gateway/gatewayDarkPCB.png";
import gatewayWithPCB from "@/assets/hardware/gateway/gatewayWithPCB.png";
import series2 from "@/assets/hardware/gateway/series2.png"
import seriesv2 from "@/assets/hardware/gateway/series2-2.png"
import series1 from "@/assets/hardware/gateway/series1.png"



export interface Module {
  title: string;
  desc: string[];
  image?: StaticImageData;
  darkImage?:StaticImageData;
}

export interface GatewaySystem {
  title: string;
  description?: string;
  hardwareSpecs?: {
    title?: string;
    modules: Module[];
  };
  heroImage: StaticImageData;
  DarkheroImage?: StaticImageData;
    heroGateway?: StaticImageData;
  modules: Module[];
}
export const controllersData: Record<string, GatewaySystem> = {
  "controller": {
    title: "Mendygo Controller",
    description:
      "An advanced IoT-enabled industrial solution designed for optimizing system performance, offering precise control, real-time monitoring, and predictive insights across various sectors.",
    heroImage: heroGateway,
    DarkheroImage: heroGateway,
    heroGateway: heroGateway,
    modules: [
      {
        title: "Gain Real-Time Insights, remotely",
        desc: [
          "Enables continuous performance tracking with IoT-powered sensors and analytics for proactive decision-making.​",
        ],
        image: realtimeInsights,
      },
      {
        title: "Predictive maintenance",
        desc: [
          "Predicts system failures and optimizes maintenance schedules to prevent downtime.",
        ],
        image: predictiveMain,
      },
      {
        title: "Data-driven insights",
        desc: [
          "Leverages historical data and advanced algorithms to provide actionable insights for operational improvements.",
        ],
        image: deepEngine,
      },
      {
        title: "Energy efficiency",
        desc: [
          "Designed to reduce energy consumption through intelligent energy management features, lowering operational costs.​",
        ],
        image: energy,
      },
      
    ],
    hardwareSpecs: {
      title: "MendyGo Controller",
      modules: [
      {
        title: "Series 1-100",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :gatewayWithPCB,
        darkImage:gatewayWithPCBDark
      },
      {
        title: "Series 1-200",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :series1,
        darkImage:series1
      },{
        title: "Series 2-100",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :series2,
        darkImage:series2
      },
      {
        title: "Series 2-200",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :seriesv2,
        darkImage:seriesv2
      },
    ]
      
    },
  
  },
};