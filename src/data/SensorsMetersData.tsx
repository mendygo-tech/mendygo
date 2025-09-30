import { StaticImageData } from "next/image";

import heroSensor from "@/assets/hardware/sensorsAndMeters/meter.png"
import heroFuelSensor from "@/assets/hardware/sensorsAndMeters/FuelSensor.png"
import temperaturehero from "@/assets/hardware/sensorsAndMeters/temperatureSensorBlack.png"
import temperatureheroDark from "@/assets/hardware/sensorsAndMeters/temperatureSensorBlack.png"
import vibrationheroDark from "@/assets/hardware/sensorsAndMeters/Vibration Sensor.png"
import gasMeter from "@/assets/hardware/sensorsAndMeters/gasMeter.png"
import waterMeter from "@/assets/hardware/sensorsAndMeters/waterMeter.png"
import fireDetector from "@/assets/hardware/sensorsAndMeters/fireSensor.png"

import seamlessIntegration from "@/assets/icons/features/remoteImmobilization.png"
import connectivity from "@/assets/icons/features/Single Line Diagram View.png"
import buildtoEndure from "@/assets/icons/features/hammer.png"
import remoteImmob from "@/assets/icons/features/warranty.png"
import ITIntegration from "@/assets/icons/features/ItIntegration.png";
import Adoptability from "@/assets/icons/features/Adoptability.png";
import easeMounting from "@/assets/icons/features/serviceAlerts.png";
import detectScreen from "@/assets/icons/features/detectionscreen.png";
import temp from "@/assets/icons/features/temperature.png";
import battery from "@/assets/icons/features/battery.png";
import Wireless from "@/assets/icons/features/Wireless.png";



export interface Module {
  title: string;
  desc: string[];
  image?: StaticImageData;
  darkImage?:StaticImageData;
  href?: string;
}

export interface sensorsMetersSystem {
  title: string;
  description?: string;
  heroImage: StaticImageData;
  heroGateway?: StaticImageData;
  DarkheroImage?: StaticImageData;
  modules: Module[];
}
export const sensorsMetersData: Record<string, sensorsMetersSystem> = {
  "sensor": {
    title: "Mendygo Sensors and Meters",
    description:
      "An Industrial IoT gateway offering real-time monitoring, flexible connectivity, and robust data management for diverse industrial applications.",
    heroImage: gasMeter,
    heroGateway: gasMeter,
    
    modules: [
      {
        title: "Temperature Sensor",
        desc: [
          "Monitor your industrial equipment's temperature in real-time.",
        ],
        image: temperaturehero,
        href:"/temperature-sensor"
      },
      {
        title: "Fuel Sensor",
        desc: [
          "Keep track of fuel levels and consumption accurately.",
        ],
        image: heroFuelSensor,
        href:"/fuel-sensor"
      },
      {
        title: "Vibration Sensor",
        desc: [
          "Detect early signs of mechanical issues with vibration monitoring.",
        ],
        image:vibrationheroDark ,
        href:"/vibration-sensor"
      },
      {
        title: "Water Meter",
        desc: [
          "Accurately measure and monitor water usage in real-time.",
        ],
        image: waterMeter,
        href:"/water-meter"
      },
      {
        title: "Gas Meter",
        desc: [
          "Track gas consumption efficiently with our smart gas meter.",
        ],
        image: gasMeter,
        href:"/gas-meter"
      },
      {
        title: "Fire Detector",
        desc: [
          "Ensure safety with real-time fire detection and alerts.",
        ],
        image: fireDetector,
        href:"/smoke-and-fire-detector"
      },
      {
        title: "Power Monitoring Unit",
        desc: [
          "compact power monitoring unit that tracks 68 electrical parameters ",
        ],
        image: heroSensor,
        href:"/power-monitoring-unit"
      }
    ],
  
  },
  "fuel-sensor": {
    title: "Mendygo Fuel Sensor",
    description:
      "A bluetooth enabled, high-precision capacitive fuel level sensor, which is used to monitor fuel consumption, refueling, draining and theft on all types of vehicles, as well as stationary tanks",
    heroImage: heroFuelSensor,
    DarkheroImage: heroFuelSensor,
    
    modules: [
      {
        title: "Configurability",
        desc: [
          "Mobile based and web based utility to setup pairing, self pairing feature is also added which makes the configuration super easy​",
        ],
        image: ITIntegration,
      },
      {
        title: "Communication",
        desc: [
          "In addition to digital, frequency and analog output signals, BLE mode has been added to this sensor",
        ],
        image: seamlessIntegration,
      },
      {
        title: "Adoptability",
        desc: [
          "The fuel monitoring sensor is easy to set up and perfectly interacts with monitoring systems of any make",
        ],
        image: Adoptability,
      },
      {
        title: "Built to last",
        desc: [
          "Operating temperature range from -60/+85 °C. It comes with a embed-ed battery which can power your installation up to 3 years​",
        ],
        image: buildtoEndure,
      },
      
    ],
  
  },
  "vibration-sensor": {
    title: "Mendygo Vibration Sensor",
    description:
      "Industrial application device, the vibration sensor is a cost-effective solution with high sensitivity, fast response, and superior performance ",
    heroImage: vibrationheroDark,
    DarkheroImage: vibrationheroDark,
    
    modules: [
      {
        title: "Ease of mounting",
        desc: [
          "Magnetic base for ease of mounting and built to use in harsh industrial working conditions​",
        ],
        image: easeMounting,
      },
      {
        title: "Protection",
        desc: [
          "Load Jump protection as per ISO 7637-2 with IP 65 Enclosure",
        ],
        image: remoteImmob,
      },
      {
        title: "Interfaces",
        desc: [
          "Lite Gateway with serial communication interfaces",
        ],
        image: connectivity,
      },
      {
        title: "Condition based monitoring",
        desc: [
          "Enable your preventive maintenance to increased reliability, improved uptime.​",
        ],
        image: detectScreen,
      },
      
    ],
  
  },
  "temperature-sensor": {
    title: "Mendygo Temperature Sensor",
    description:
      "A high-temperature, long-life wireless sensor built for extreme environments. It is suitable for temperature monitoring of bus bar trunking & distribution panel systems. Its 240°C resilience, 15-year battery life, and BLE connectivity enable seamless IoT integration, faster installations, and reliable performance with minimal maintenance.",
    heroImage: temperaturehero,
    DarkheroImage: temperatureheroDark,
    
    modules: [
      {
        title: "High-temperature resilience",
        desc: [
          "Operates effectively up to 240°C, suitable for extreme environments.​",
        ],
        image: temp,
      },
      {
        title: "Long battery life",
        desc: [
          "15-year battery life ensures minimal maintenance and long-term reliability.",
        ],
        image: battery,
      },
      {
        title: "Wireless connectivity",
        desc: [
          "BLE 5.2 support allows for seamless integration into IoT ecosystems.",
        ],
        image: Wireless,
      },
      {
        title: "Easy deployment",
        desc: [
          "Thermally conductive, electrically insulating adhesive-based deployment simplifies installation.​",
        ],
        image: easeMounting,
      },
      
    ],
  
  },
  "gas-meter": {
    title: "Mendygo Gas Meter",
    description:
      "A rugged, IoT-enabled meter designed for accurate measurement of industrial and utility-grade gas consumption. It ensures precision flow monitoring, long operational life, and seamless connectivity for smarter energy management. With multi-interface outputs and robust build, the Mendygo Gas Meter makes deployment simple while enabling predictive insights and operational efficiency.",
    heroImage: gasMeter,
    DarkheroImage: gasMeter,
    
    modules: [
      {
        title: "High-precision measurement",
        desc: [
          "Delivers accurate readings across a wide dynamic range for industrial-grade gas monitoring.​",
        ],
        image: temp,
      },
      {
        title: "Long operational life",
        desc: [
          "Built for durability with minimal maintenance, ensuring reliable long-term performance.",
        ],
        image: battery,
      },
      {
        title: "Smart connectivity",
        desc: [
          "Supports Pulse, Modbus, and IoT protocols for easy integration into existing and new systems.",
        ],
        image: Wireless,
      },
      {
        title: "Easy deployment",
        desc: [
          "Flexible mounting and plug-and-play compatibility simplify setup in diverse industrial environments.​",
        ],
        image: easeMounting,
      },
      
    ],
  
  },
  "water-meter": {
    title: "Mendygo Water Meter",
    description:
      "A precision, IoT-enabled water meter sensor built for industrial and utility-grade deployments. It delivers real-time flow monitoring, leak detection, and advanced analytics, enabling smarter water management. With rugged design, seamless connectivity, and long-term reliability, the Mendygo Water Meter transforms water usage tracking into actionable intelligence.",
    heroImage: waterMeter,
    DarkheroImage: waterMeter,

    modules: [
      {
        title: "High-precision flow tracking",
        desc: [
          "Measures flow rates across wide dynamic ranges with minimal error.​",
        ],
        image: temp,
      },
      {
        title: "Leak & anomaly detection",
        desc: [
          "Rapid alerts on unusual consumption or pipeline leakage for proactive maintenance.",
        ],
        image: battery,
      },
      {
        title: "Smart connectivity",
        desc: [
          "Compatible with Pulse, 4–20 mA, Modbus, LoRa, and IoT platforms for easy integration.",
        ],
        image: seamlessIntegration,
      },
      {
        title: "Rugged & reliable",
        desc: [
          "IP68 protection, anti-corrosion build, and wide temperature tolerance for harsh environments.​",
        ],
        image: buildtoEndure,
      },
      
    ],
  
  },
  "smoke-and-fire-detector": {
    title: "Mendygo Smoke & Fire Detector",
    description:
      "A high-sensitivity, IoT-enabled detector designed for early warning and reliable fire safety in industrial, commercial, and utility environments. Built for resilience and seamless connectivity, it ensures rapid detection of smoke and fire risks, empowering proactive safety management and minimizing downtime.",
    heroImage: fireDetector,
    DarkheroImage: fireDetector,

    modules: [
      {
        title: "High-sensitivity detection",
        desc: [
          "Accurately identifies smoke and fire at early stages to minimize risks.​",
        ],
        image: temp,
      },
      {
        title: "Long-life reliability",
        desc: [
          "Extended battery life and low-maintenance design ensure consistent protection.",
        ],
        image: battery,
      },
      {
        title: "Wireless connectivity",
        desc: [
          "BLE, LoRa, or NB-IoT support for seamless integration into IoT safety ecosystems.",
        ],
        image: seamlessIntegration,
      },
      {
        title: "Rugged design",
        desc: [
          "Operates effectively across challenging industrial conditions with durable housing.​",
        ],
        image: buildtoEndure,
      },
      
    ],
  
  },
  "power-monitoring-unit": {
    title: "Mendygo Power Monitoring Unit",
    description:
      "A robust, IoT-enabled power monitoring solution designed for real-time energy management in industrial and commercial settings. It provides comprehensive insights into power consumption, enabling proactive optimization and cost savings.",
    heroImage: heroSensor,
    DarkheroImage: heroSensor,

    modules: [
      {
        title: "High-precision monitoring",
        desc: [
          "Provides real-time insights into power consumption patterns and anomalies.",
        ],
        image: temp,
      },
      {
        title: "Long-life reliability",
        desc: [
          "Extended battery life and low-maintenance design ensure consistent protection.",
        ],
        image: battery,
      },
      {
        title: "Wireless connectivity",
        desc: [
          "BLE, LoRa, or NB-IoT support for seamless integration into IoT safety ecosystems.",
        ],
        image: seamlessIntegration,
      },
      {
        title: "Rugged design",
        desc: [
          "Operates effectively across challenging industrial conditions with durable housing.​",
        ],
        image: buildtoEndure,
      },
      
    ],
  
  },
  
};