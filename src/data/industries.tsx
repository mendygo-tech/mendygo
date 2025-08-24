import { StaticImageData } from "next/image";
import ind4 from "../assets/gallery/ind1.png";
import ind1 from "../assets/gallery/ind2.png";
import ind6 from "../assets/gallery/ind3.png";
import ind3 from "../assets/gallery/ind4.png";
import ind5 from "../assets/gallery/ind5.png";
import ind2 from "../assets/gallery/ind6.png";

export type IndustrySlug =
    | "pulp-fiber"
    | "chemicals"
    | "food-beverage"
    | "buildings"
    | "retail-malls"
    | "pharmaceuticals";

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
    "pulp-fiber": {
        title: "Pulp & Fiber",
        abstract:
            "Smart manufacturing solutions tailored for the pulp & fiber industry—boosting maintenance, quality, and sustainability.",
        intro:
            "As the Pulp & Fiber sector adopts Industry 4.0, Mendygo enables predictive maintenance, real‑time monitoring, and compliance with precision.",
        highlights: [
            "Predictive maintenance for pulp equipment",
            "Real‑time production dashboards",
            "AI-driven quality control & compliance",
            "Resource optimization to reduce waste",
            "Data-driven product R&D innovations",
        ],
        conclusion:
            "Partner with Mendygo to modernize pulp & fiber operations—cutting downtime, boosting efficiency, and supporting sustainability-driven growth.",
        image: ind1,
    },
    chemicals: {
        title: "Chemicals",
        abstract:
            "Industry 4.0 solutions designed for chemical manufacturing—enhancing efficiency, compliance, and agility.",
        intro:
            "The chemicals sector stands at the forefront of smart manufacturing. Mendygo offers real‑time analytics, sustainable resource use, and product innovation capabilities.",
        highlights: [
            "Dynamic resource & energy optimization",
            "Real‑time process monitoring",
            "Quality control with reduced defects",
            "Agile supply‑chain resilience",
            "Accelerated product development via AI",
        ],
        conclusion:
            "Transform your chemical operations with Mendygo—delivering smarter, greener, and more innovative manufacturing processes.",
        image: ind2,
    },
    "food-beverage": {
        title: "Food & Beverage",
        abstract:
            "Smart manufacturing strategies for food & beverage—focusing on efficiency, safety, and innovation.",
        intro:
            "By integrating Industry 4.0 technologies, Mendygo empowers food & beverage producers to scale sustainably and innovate quality-driven offerings.",
        highlights: [
            "Efficient production with real‑time analytics",
            "Resource and waste optimization",
            "Automated quality & food‑safety monitoring",
            "Resilient, data‑backed supply chains",
            "Personalized product innovation via analytics",
        ],
        conclusion:
            "Partner with Mendygo to revolutionize food & beverage operations—improving sustainability, quality, and customer-level innovation.",
        image: ind3,
    },
    buildings: {
        title: "Buildings & Large Facilities",
        abstract:
            "Smart-facility solutions for large buildings—integrating data, automation, and occupant comfort.",
        intro:
            "Mendygo helps large buildings adopt Industry 4.0 frameworks—bringing intelligence to HVAC, energy, safety, and facility management.",
        highlights: [
            "Real‑time resource & energy management",
            "Predictive HVAC and maintenance monitoring",
            "Smart lighting and occupant comfort systems",
            "AI-driven security and access control",
            "Data insights to improve facility operations",
        ],
        conclusion:
            "Work with Mendygo to turn facilities into intelligent, sustainable, and secure spaces for occupants and operators alike.",
        image: ind4,
    },
    "retail-malls": {
        title: "Retail & Malls",
        abstract:
            "Next‑gen retail facility solutions—enhancing energy use, operations, and customer experience via smart tech.",
        intro:
            "From energy optimization to visitor analytics, Mendygo equips retail environments with smart systems for efficiency and insights.",
        highlights: [
            "Energy‑efficient facility management",
            "Customer flow and engagement analytics",
            "Predictive maintenance for mall infrastructure",
            "Security and access automation",
            "Smart Facility insights for operations teams",
        ],
        conclusion:
            "Elevate retail facility management with Mendygo—merging sustainability, intelligence, and seamless visitor experiences.",
        image: ind5,
    },
    pharmaceuticals: {
        title: "Pharmaceuticals",
        abstract:
            "Smart pharmaceutical manufacturing enabled by Mendygo—ensuring quality, compliance, and innovation through advanced digital solutions.",
        intro:
            "Pharma 4.0 is transforming how medicines are made. Mendygo’s advanced analytics, real-time tracking, and validation tools help pharmaceutical companies maintain high-quality standards, accelerate production, and achieve regulatory compliance.",
        highlights: [
            "End-to-end traceability of drug manufacturing processes",
            "Automated batch record management and digital validation",
            "AI-driven anomaly detection for quality assurance",
            "Process optimization to reduce cycle times and waste",
            "Compliance with cGMP, FDA, and global regulatory norms",
            "Secure and scalable data platforms for regulated environments",
        ],
        conclusion:
            "Choose Mendygo to lead your Pharma 4.0 journey—unlocking smarter operations, faster market readiness, and uncompromised product quality.",
        image: ind6,
    },
};
