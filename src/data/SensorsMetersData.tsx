import { StaticImageData } from "next/image";

import heroSensor from "@/assets/hardware/sensorsAndMeters/meter.jpeg"
import heroFuelSensor from "@/assets/hardware/sensorsAndMeters/FuelSensor.png"
// import DarkheroImage from "@/assets/hardware/sensorsAndMeters/FuelSensorDark.png"
import temperaturehero from "@/assets/hardware/sensorsAndMeters/temperatureSensor.png"
import temperatureheroDark from "@/assets/hardware/sensorsAndMeters/temperatureSensorBlack.jpeg.jpg" 
// import vibrationhero from "@/assets/hardware/sensorsAndMeters/VibrationSensor.jpeg"
import vibrationheroDark from "@/assets/hardware/sensorsAndMeters/Vibration Sensor.png"
import ecosystemBMS from "@/assets/image2.png"; // Your hardware image for BMS

import seamlessIntegration from "@/assets/icons/features/remoteImmobilization.png"
import connectivity from "@/assets/icons/features/Single Line Diagram View.png"
import buildtoEndure from "@/assets/icons/features/hammer.png"
import remoteImmob from "@/assets/icons/features/warranty.png"
import ITIntegration from "@/assets/icons/features/ITIntegration.png";
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
  ecosystemImage: StaticImageData;
  modules: Module[];
}
export const sensorsMetersData: Record<string, sensorsMetersSystem> = {
  "sensor": {
    title: "Mendygo Sensors and Meters",
    description:
      "An Industrial IoT gateway offering real-time monitoring, flexible connectivity, and robust data management for diverse industrial applications.",
    heroImage: heroSensor,
    heroGateway: heroSensor,
    ecosystemImage: ecosystemBMS,
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
      
    ],
  
  },
  "fuel-sensor": {
    title: "Mendygo Fuel Sensor",
    description:
      "A bluetooth enabled, high-precision capacitive fuel level sensor, which is used to monitor fuel consumption, refueling, draining and theft on all types of vehicles, as well as stationary tanks",
    heroImage: heroFuelSensor,
    DarkheroImage: heroFuelSensor,
    ecosystemImage: ecosystemBMS,
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
    ecosystemImage: ecosystemBMS,
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
    ecosystemImage: ecosystemBMS,
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
};