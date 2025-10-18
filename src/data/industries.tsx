import { StaticImageData } from "next/image";

import smartCity from "../assets/industries/smart-city.png";
import smartAgriculture from "../assets/industries/sensor.png";
import smartBuilding from "../assets/industries/smart-house(1).png";
import smartPoultry from "../assets/industries/animal.png";
import smartRetail from "../assets/industries/store.png";
import smartHealthcare from "../assets/industries/hospital.png";
import industrial4 from "../assets/industries/smart Automation.v1.png";
import connectedVehicles from "../assets/industries/conncted_vehicles.png";

export type IndustrySlug =
  | "SmartCity"
  | "SmartAgriculture"
  | "SmartBuilding"
  | "SmartPoultry"
  | "SmartRetail"
  | "SmartHealthcare"
  | "Industrial4"
  | "ConnectedVehicles";

export const servicesContent: Record<
  IndustrySlug,
  {
    title: string;
    abstract: string;
    intro: string;
    highlights: string[];
    conclusion: string;
    image: StaticImageData;
  }
> = {
  SmartCity: {
    title: "Smart City",
    abstract:
      "IoT and analytics solutions for efficient, connected, and sustainable urban living.",
    intro:
      "Mendygo’s Smart City platform connects infrastructure, data, and automation to improve city operations.",
    highlights: [
      "IoT-enabled infrastructure monitoring",
      "Data-driven urban planning",
      "Smart traffic, water, and waste systems",
      "Public safety with smart surveillance",
    ],
    conclusion: "Transform your city into a connected and efficient ecosystem.",
    image: smartCity,
  },

  SmartAgriculture: {
    title: "Smart Agriculture",
    abstract:
      "Precision farming with sensor data, automation, and actionable insights.",
    intro:
      "We combine soil, weather, and crop data to drive smarter, faster farm decisions.",
    highlights: [
      "Soil moisture and weather tracking",
      "Automated irrigation control",
      "Cold-chain quality monitoring",
      "Pest and disease alerts",
    ],
    conclusion: "Boost yield and sustainability with precision farming tools.",
    image: smartAgriculture,
  },

  SmartBuilding: {
    title: "Smart Building",
    abstract:
      "Unified building automation for energy, comfort, and safety optimization.",
    intro:
      "Connect HVAC, lighting, and security systems into one intelligent control platform.",
    highlights: [
      "Real-time energy metering",
      "Predictive HVAC maintenance",
      "Smart lighting and occupancy analytics",
      "Access and alarm integration",
    ],
    conclusion: "Create efficient and comfortable spaces with smart automation.",
    image: smartBuilding,
  },

  SmartPoultry: {
    title: "Smart Poultry",
    abstract:
      "IoT-powered poultry management for better health and productivity.",
    intro:
      "Monitor shed conditions and automate feed and water systems for optimal performance.",
    highlights: [
      "Temperature and humidity tracking",
      "Feed and water automation",
      "Health and mortality alerts",
      "Energy and biosecurity optimization",
    ],
    conclusion:
      "Ensure healthy flocks and efficient operations with real-time insights.",
    image: smartPoultry,
  },

  SmartRetail: {
    title: "Smart Retail",
    abstract:
      "IoT-driven store analytics and automation for efficient retail operations.",
    intro:
      "Gain live insights into energy, refrigeration, and customer behavior.",
    highlights: [
      "Cold-chain and temperature monitoring",
      "Energy and HVAC analytics",
      "Footfall and dwell tracking",
      "POS and operations dashboards",
    ],
    conclusion:
      "Run efficient, data-aware stores that enhance customer experience.",
    image: smartRetail,
  },

  SmartHealthcare: {
    title: "Smart Healthcare",
    abstract:
      "Connected hospital infrastructure for asset tracking and safety.",
    intro:
      "Integrate biomedical devices, utilities, and environmental systems into one dashboard.",
    highlights: [
      "Asset and equipment tracking",
      "Vaccine cold-chain monitoring",
      "Indoor air quality analytics",
      "Energy and utility metering",
    ],
    conclusion: "Deliver safer care through connected healthcare systems.",
    image: smartHealthcare,
  },

  Industrial4: {
    title: "Industrial 4.0",
    abstract:
      "Machine connectivity, predictive maintenance, and OEE analytics for factories.",
    intro:
      "Connect machines and sensors for real-time visibility and production optimization.",
    highlights: [
      "OEE and downtime analytics",
      "Predictive maintenance",
      "PLC and machine connectivity",
      "Quality and process digitization",
    ],
    conclusion: "Achieve reliable, data-driven manufacturing performance.",
    image: industrial4,
  },

  ConnectedVehicles: {
    title: "Connected Vehicles",
    abstract:
      "Fleet intelligence and telematics for safer, optimized transport.",
    intro:
      "Monitor and manage vehicles in real time with data-driven insights.",
    highlights: [
      "GPS and utilization tracking",
      "Driver behavior scoring",
      "Predictive maintenance alerts",
      "Fuel and route optimization",
    ],
    conclusion:
      "Operate efficient and safe fleets with connected vehicle solutions.",
    image: connectedVehicles,
  },
};
