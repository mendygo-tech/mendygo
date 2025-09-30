import { StaticImageData } from "next/image";

// --- ACTION REQUIRED: Replace these placeholder imports with your actual image files ---
// import heroBMS from "@/assets/image.png";
import heroGateway from "@/assets/hardware/Gateway.png"


import realtimeInsights from "@/assets/icons/features/realTimeInsights.png"
import fuel from "@/assets/icons/features/fuel.png"
import seamlessIntegration from "@/assets/icons/features/remoteImmobilization.png"
import connectivity from "@/assets/icons/features/Single Line Diagram View.png"
import deepEngine from "@/assets/icons/features/crashAnalytics.png"
import buildtoEndure from "@/assets/icons/features/hammer.png"
import remoteImmob from "@/assets/icons/features/warranty.png"
import ev from "@/assets/icons/solutions/ev.png"

//
import gatewayWithPCBDark from "@/assets/hardware/gateway/gatewayDarkPCB.png";
// import gatewayWithPCB from "@/assets/hardware/gateway/gatewayWithPCB.png";
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
  hardwareSpecs2?: {
    title?: string;
    modules: Module[];
  };
  heroImage: StaticImageData;
    heroGateway?: StaticImageData;
  
  modules: Module[];
}
export const gatewayData: Record<string, GatewaySystem> = {
  "gateway": {
    title: "Mendygo Gateway",
    description:
      "An Industrial IoT gateway offering real-time monitoring, flexible connectivity, and robust data management for diverse industrial applications.",
    heroImage: heroGateway,
    heroGateway: heroGateway,
    modules: [
      {
        title: "Gain Real-Time Insights, remotely",
        desc: [
          "Monitor your industrial equipment's health from any location.​",
        ],
        image: realtimeInsights,
      },
      {
        title: "Fuel Efficiency at Your Fingertips",
        desc: [
          "Accurately track fuel consumption with support for analog and Bluetooth sensors.",
        ],
        image: fuel,
      },
      {
        title: "Seamless communication with Industrial Protocols",
        desc: [
          "Integrate effortlessly using industry-standard protocols ",
        ],
        image: seamlessIntegration,
      },
      {
        title: "Uninterrupted Connectivity with Ethernet Support",
        desc: [
          "Ensure reliable data transmission through Ethernet connectivity.​",
        ],
        image: connectivity,
      },
      {
        title: "Deep engine insights",
        desc: [
            "Gain valuable insights into engine health and utilization with dedicated hour meter and RPM measuring input."
        ],
        image: deepEngine,
      },
      {
        title: "Built to endure",
        desc: [
            "The IP65-rated enclosure protects your device from dust, dirt, and water jets, ensuring it thrives in even the harshest environments"
        ],
        image: buildtoEndure,
      },
      {
        title: "Enhanced security with remote immobilization",
        desc: [
            "Take control in critical situations.Our digital output enables vehicle immobilization in case of theft or unauthorized use, providing an extra layer of security for your fleet"
        ],
        image: remoteImmob,
      },
      {
        title: "ARAI-approved for electric vehicles",
        desc: [
            "Specifically designed and approved for safe and reliable use in electric vehicles, providing peace of mind."
        ],
        image:ev,
      },
    ],
    hardwareSpecs: {
      title: "MendyGo Gateway Series-1",
      modules: [
      {
        title: "Series 1-100",
        desc : ["Versatile telematics controller with full I/Os, GNSS, CAN, and WiFi—ideal for fleet tracking, condition monitoring, and remote diagnostics."

        ],
        image :gatewayWithPCBDark,
        darkImage:gatewayWithPCBDark
      },
      {
        title: "Series 1-200",
        desc : ["Compact GNSS controllers with CAN, RS485, and cellular, ideal for GPS-based telematics, asset tracking, and equipment diagnostics."

        ],
        image :gatewayWithPCBDark,
        darkImage:gatewayWithPCBDark
      },
    ]
      
    },
    hardwareSpecs2: {
      title: "MendyGo Gateway Series-2",
      modules: [
      {
        title: "Series 2-100",
        desc : ["Compact telematics unit with RS485, GNSS, and cellular—ideal for industrial assets requiring simple GPS tracking and serial interfacing."

        ],
        image :series1,
        darkImage:series1
      },{
        title: "Series 2-200",
        desc : ["Compact GNSS trackers with cellular, digital/analog I/Os, and CAN—ideal for fleet tracking, EVs, gensets, and mixed-asset telematics."

        ],
        image :series1,
        darkImage:series1
      },
    ]
      
    },
  
  },
};