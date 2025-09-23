import { StaticImageData } from "next/image";
import evHero from '@/assets/evbg.jpg'
import chillerHero from '@/assets/chillerbg.jpg'
import heroImage from '@/assets/image.png';
import hvacImage from "@/assets/image.png";
import energyImage from "@/assets/image.png";
import gensetImage from "@/assets/image.png";
import busbarImage from "@/assets/image.png";
import apfcImage from "@/assets/image.png";
import waterImage from "@/assets/image.png";
import stpImage from "@/assets/image.png";
import airImage from "@/assets/image.png";

export interface Feature {
    image: StaticImageData;
    title: string;
    desc: string;
}
export interface Telematics {
  slug: string;
  title: string;
  heroImage: StaticImageData;
  features: Feature[];
    modules?: {
    title: string;
    desc: string[];
    image: StaticImageData;
  }[];
    description: string;
  
}

export const telematicsData: Record<string, Telematics> = {
    "ev-telematics":{
    slug: "ev-telematics",
    title: "Mendygo EV Telematics",
    heroImage: evHero,
    description: "Comprehensive telematics solution for electric vehicles.",
    features: [
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        },
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        },
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        }
    ],
    modules: [
      {
        title: "HVAC Management",
        desc: [
          "Real-time monitoring of chillers, AHUs, VFDs, pumps, and cooling towers",
          "Setpoint control, adaptive climate management, and energy optimization",
          "Predictive maintenance for equipment to extend lifecycle",
        ],
        image: hvacImage,
      },
      {
        title: "Active Energy Management",
        desc: [
          "Monitor mains, solar, and genset consumption",
          "Compare actual vs rated consumption to identify abnormalities",
          "Track maximum demand, efficiency benchmarks, and SEC (Specific Energy Consumption)",
        ],
        image: energyImage,
      },
      {
        title: "Genset Monitoring",
        desc: [
          "Digital logs of energy usage, fuel consumption, and loading patterns",
          "Predictive alerts for maintenance and performance anomalies",
          "Optimize backup power usage and scheduling",
        ],
        image: gensetImage,
      },
      {
        title: "Busbar Monitoring",
        desc: [
          "Real-time temperature and humidity monitoring of busbar joints",
          "Thermography-based predictive maintenance",
          "Multi-site monitoring with drill-down dashboards",
        ],
        image: busbarImage,
      },
      {
        title: "APFC Panel Management",
        desc: [
            "Track reactive power demand and capacitor bank health",
            "Prevent premature loss of capacitance through proactive management",
            "Granular THD analysis and filter performance tracking"
        ],
        image: apfcImage,
      },
      {
        title: "Water Management",
        desc: [
            "Section-wise and tank-wise water distribution monitoring",
            "Alerts for leakages, overflows, or abnormal consumption",
            "Optimize water usage for sustainability and cost reduction"
        ],
        image: waterImage,
      },
      {
        title: "STP/ETP Management",
        desc: [
            "Monitor key water quality parameters: pH, TDS, COD, BOD, dissolved oxygen",
            "Remote monitoring of aeration, filtration, and dosing systems",
            "Generate discharge quality and pollutant load reduction reports"
        ],
        image: stpImage,
      },
      {
        title: "Compressed Air/Gas Systems",
        desc: [
            "Track pressure, flow, and energy consumption across networks",
            "Detect inefficiencies, leaks, and abnormal usage patterns",
            "Predictive maintenance for compressors, valves, and pipelines"
        ],
        image: airImage,
      },
    ],
   
    
  },
  "chiller-telematics" :{
    slug: "chiller-telematics",
    title: "Mendygo Chiller Telematics",
    heroImage: chillerHero,
    description: "Comprehensive telematics solution for chiller systems.",
    features: [
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        }
    ],
    modules: [
      {
        title: "HVAC Management",
        desc: [
          "Real-time monitoring of chillers, AHUs, VFDs, pumps, and cooling towers",
          "Setpoint control, adaptive climate management, and energy optimization",
          "Predictive maintenance for equipment to extend lifecycle",
        ],
        image: hvacImage,
      },
      {
        title: "Active Energy Management",
        desc: [
          "Monitor mains, solar, and genset consumption",
          "Compare actual vs rated consumption to identify abnormalities",
          "Track maximum demand, efficiency benchmarks, and SEC (Specific Energy Consumption)",
        ],
        image: energyImage,
      },
      {
        title: "Genset Monitoring",
        desc: [
          "Digital logs of energy usage, fuel consumption, and loading patterns",
          "Predictive alerts for maintenance and performance anomalies",
          "Optimize backup power usage and scheduling",
        ],
        image: gensetImage,
      },
      {
        title: "Busbar Monitoring",
        desc: [
          "Real-time temperature and humidity monitoring of busbar joints",
          "Thermography-based predictive maintenance",
          "Multi-site monitoring with drill-down dashboards",
        ],
        image: busbarImage,
      },
      {
        title: "APFC Panel Management",
        desc: [
            "Track reactive power demand and capacitor bank health",
            "Prevent premature loss of capacitance through proactive management",
            "Granular THD analysis and filter performance tracking"
        ],
        image: apfcImage,
      },
      {
        title: "Water Management",
        desc: [
            "Section-wise and tank-wise water distribution monitoring",
            "Alerts for leakages, overflows, or abnormal consumption",
            "Optimize water usage for sustainability and cost reduction"
        ],
        image: waterImage,
      },
      {
        title: "STP/ETP Management",
        desc: [
            "Monitor key water quality parameters: pH, TDS, COD, BOD, dissolved oxygen",
            "Remote monitoring of aeration, filtration, and dosing systems",
            "Generate discharge quality and pollutant load reduction reports"
        ],
        image: stpImage,
      },
      {
        title: "Compressed Air/Gas Systems",
        desc: [
            "Track pressure, flow, and energy consumption across networks",
            "Detect inefficiencies, leaks, and abnormal usage patterns",
            "Predictive maintenance for compressors, valves, and pipelines"
        ],
        image: airImage,
      },
    ],
  },
  "compressor-telematics":{
    slug: "compressor-telematics",
    title: "Mendygo Compressor Telematics",
    description: "Comprehensive telematics solution for compressor systems.",
    heroImage: heroImage,
    features: [
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        }
    ]
  },
  "earth-moving-telematics":{
    slug: "earth-moving-telematics",
    title: "Mendygo Earth Moving Telematics",
    description: "Comprehensive telematics solution for earth moving machinery.",
    heroImage: heroImage,
    features: [
        {
            image: heroImage,
            title: "Real-time Monitoring",
            desc: "Track vehicle location, speed, and battery status in real-time."
        }
    ]
}
}
