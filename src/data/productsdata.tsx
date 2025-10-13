// src/data/productsdata.tsx

// Import images from src/assets
import MainDashboardLight from "../assets/mockup/MainDashboardLight.png";
import MainDashboardDark from "../assets/mockup/MainDashboardDark.png";
import CustomizedIndustryLight from "../assets/mockup/customizedIndustryLight.png";
import CustomizedIndustryDark from "../assets/mockup/customizedIndustryDark.png";
import MendergyLight from "../assets/mockup/mendergyLight.png";
import MendergyDark from "../assets/mockup/mendergyDark.png";
import SmartOEELight from "../assets/mockup/smartOEELight.png";
import SmartOEEDark from "../assets/mockup/smartOEEDark.png";
import MendyAiHomeLight from "../assets/mockup/mendyAiPhoneLight.png";
import MendyAiHomeDark from "../assets/mockup/mendyAiPhoneDark.png";
import Ind3 from "../assets/gallery/ind3.png";

export const productsData = {
    "mendyview-ai-access-control": {
        heroTitle: "MendyView – AI-Powered Industrial Access Control",
        heroSubtitle: "Seamless Access Management | Smarter Security",
        heroDescription: "MendyView secures industrial sites with advanced AI-driven facial recognition, PPE compliance checks, and real-time personnel monitoring — all managed from a centralized web dashboard. It ensures only authorized and compliant personnel enter sensitive areas, while automating safety and security enforcement.",
        whyTagline: "Innovative, reliable, and user-friendly solutions designed for industrial access control and compliance.",
        features: [
            {
                title: "Intelligent Access Control",
                description: "Real-time facial recognition and personnel counting with PPE detection."
            },
            {
                title: "Safety Compliance Monitoring",
                description: "Automatic verification of helmets, gloves, and boots to enforce workplace safety."
            },
            {
                title: "Centralized Web Dashboard",
                description: "Manage access rules and monitor multiple sites remotely."
            },
            {
                title: "Automated Alerts & Reporting",
                description: "Instant notifications on rule violations and security breaches."
            },
            {
                title: "Seamless Integration",
                description: "Works with existing surveillance systems, turnstiles, and access points."
            }
        ],
        image: MainDashboardLight,
        darkImage: MainDashboardDark,
    },
    "mendysheets-digital-checksheets": {
        heroTitle: "MendySheets – Digital Checksheets",
        heroSubtitle: "Streamlined Quality Inspections | Real-Time Operational Insights",
        heroDescription: "MendySheets transforms traditional quality inspections with IoT-powered digital checksheets. Replace paper forms with smart, real-time defect detection, automated compliance tracking, and efficient preventive maintenance logging — all from an intuitive digital platform.",
        whyTagline: "Innovative, reliable, and easy-to-use solution designed for faster, error-free quality control in industrial environments.",
        features: [
            { title: "Instant Data Capture", description: "Direct integration with IoT sensors for real-time quality checks and data logging." },
            { title: "Automated Compliance Documentation", description: "Eliminate paperwork with automatic, audit-ready compliance records." },
            { title: "Smart Defect Detection", description: "Real-time defect alerts with clear corrective action guidance." },
            { title: "Seamless Workflow Integration", description: "Works with existing quality management systems for easy adoption." }
        ],
        image: CustomizedIndustryLight,
        darkImage: CustomizedIndustryDark,
    },
    "mendergy-energy-management-system": {
        heroTitle: "Mendergy – Energy Management System",
        heroSubtitle: "Smarter Energy Monitoring | Sustainable Industrial Operations",
        heroDescription: "Mendergy empowers industrial plants with real-time energy monitoring, AI-driven optimization, and actionable insights — helping you cut costs, reduce waste, and meet sustainability targets seamlessly.",
        whyTagline: "Innovative, reliable, and intuitive energy management solution designed for maximum efficiency and sustainability.",
        features: [
            { title: "Live Energy Usage Tracking", description: "Visualize real-time energy consumption trends and detect anomalies instantly." },
            { title: "AI-Powered Optimization", description: "Smart recommendations for reducing energy usage and improving efficiency." },
            { title: "Automated Energy Controls", description: "Minimize human error with automated adjustments for energy management." },
            { title: "Sustainability Reporting", description: "Track carbon footprint and compliance with real-time dashboards." }
        ],
        image: MendergyLight,
        darkImage: MendergyDark,
    },
    "smartooe-dashboard": {
        heroTitle: "SmartOEE – OEE Dashboard",
        heroSubtitle: "Maximize Equipment Performance | Real-Time Operational Insights",
        heroDescription: `SmartOEE is a next-generation dashboard designed to deliver real-time, actionable insights into equipment performance — driving improved uptime, efficiency, and productivity across industrial operations.`,
        whyTagline: "Innovative, reliable, and intuitive solutions that empower manufacturers to optimize performance and reduce operational bottlenecks.",
        features: [
            { title: "Real-Time OEE Visualization", description: "Monitor Overall Equipment Effectiveness (OEE) live for instant visibility." },
            { title: "Downtime Categorization", description: "Analyze root causes of inefficiencies for targeted improvements." },
            { title: "Custom Performance Alerts", description: "Get real-time notifications when performance deviates from set thresholds." }
        ],
        image: SmartOEELight,
        darkImage: SmartOEEDark,
    },
    "mendygoverse-ar-vr-mr-platform": {
        heroTitle: "MendyVerse – AR/VR/MR Industrial Training Platform",
        heroSubtitle: "Immersive Training | Safer & Smarter Learning",
        heroDescription: `MendyVerse transforms industrial training with interactive AR, VR, and MR simulations, delivering realistic hands-on experiences in a risk-free digital environment.`,
        whyTagline: "Innovative solutions designed to enhance industrial skills through safe, immersive, and interactive learning.",
        features: [
            { title: "Virtual Equipment Handling", description: "Practice operating industrial machinery in a fully simulated VR environment." },
            { title: "Safety Hazard Simulations", description: "Safely experience and respond to hazardous scenarios without real-world risks." },
            { title: "Step-by-Step Guided Learning", description: "Interactive modules guide users through procedures and safety protocols." },
            {
                title : "Device Support", description : "Compatible with Oculus Quest, Microsoft HoloLens, and HTC Vive Pro."
            }
        ],
        image: Ind3,
    },
    "mendyops-utility-monitoring-automation": {
        heroTitle: "MendyOps – Utility Monitoring & Automation",
        heroSubtitle: "Remote Utility Control | Real-Time IIoT Insights",
        heroDescription: `MendyOps empowers industries to remotely monitor and automate utility systems—like HVAC, pumps, and compressors—leveraging IIoT analytics for smarter, energy-efficient operations.`,
        whyTagline: "Innovative automation solutions designed for efficient, reliable, and cost-effective utility management.",
        features: [
            { title: "Remote Monitoring", description: "Track pumps, compressors, and HVAC systems in real time." },
            { title: "Automated Control", description: "Enable smart adjustments based on IIoT data for optimal performance." },
            { title: "Real-Time Analytics", description: "Gain instant insights into energy usage and equipment health." },
            { title: "Custom Alerts", description: "Configure notifications for anomalies and system performance deviations." }
        ],
        image: MainDashboardLight, // placeholder until a dedicated asset is added
        darkImage: MainDashboardDark,
    },
    "mendylive-digital-twin-platform": {
        heroTitle: "MendyLive – Digital Twin Visualization Platform",
        heroSubtitle: "Real-Time Digital Twin for Smarter Industrial Operations",
        heroDescription: `MendyLive delivers a dynamic digital replica of your plant, enabling real-time visualization of machines, processes, and operations for seamless monitoring, analysis, and control.`,
        whyTagline: "Advanced visualization tools for complete operational transparency and data-driven decisions.",
        features: [
            { title: "Live Digital Twin Visualization", description: "Real-time graphical view of machines, processes, and workflows." },
            { title: "Interactive Dashboards", description: "Visualize KPIs, machine status, and process flows at a glance." },
            { title: "Remote Monitoring", description: "Access live plant models from anywhere, anytime." },
            { title: "Process Simulation", description: "Test “what-if” scenarios safely before implementation." }
        ],
        image: MainDashboardLight,
        darkImage: MainDashboardDark,
    },
    "thermendy-smart-climate-control": {
        heroTitle: "Thermendy – Smart Climate Control",
        heroSubtitle: "AI-Driven Climate Optimization for Industrial Environments",
        heroDescription: `Thermendy delivers intelligent control of temperature, humidity, and airflow using real-time IoT data and predictive AI—ensuring energy efficiency, stable conditions, and enhanced worker comfort.`,
        whyTagline: "Next-gen climate control solutions designed for energy savings, operational stability, and process reliability.",
        features: [
            { title: "Temperature & Humidity Monitoring", description: "Real-time readings from IoT sensors for accurate climate tracking." },
            { title: "Predictive Adjustments", description: "AI-driven recommendations for optimal environmental settings." },
            { title: "HVAC System Integration", description: "Compatible with Modbus and BACnet protocols for seamless deployment." },
            { title: "Cloud-Based Management", description: "Monitor and control remotely via web or mobile apps." }
        ],
        image: MainDashboardLight, // placeholder
        darkImage: MainDashboardDark,
    },
    "mendy": {
        heroTitle: "MendyAI – Industrial Intelligence Engine",
        heroSubtitle: "AI-Powered Insights for Smarter Industrial Operations",
        heroDescription: `MendyAI transforms IIoT data into actionable insights using adaptive machine learning, driving predictive maintenance, process optimization, and operational automation.`,
        whyTagline: "Intelligent, data-driven solutions designed to boost efficiency, reduce downtime, and enable smarter decisions.",
        features: [
            { title: "Adaptive ML Models", description: "Continuously learns from operational data to improve insights." },
            { title: "Real-Time Anomaly Detection", description: "Detects irregularities instantly for faster issue resolution." },
            { title: "Optimization Recommendations", description: "Provides actionable suggestions to enhance processes." },
            { title: "Custom Model Training", description: "Tailored AI solutions for your unique operational needs." }
        ],
        image: MendyAiHomeLight,
        darkImage: MendyAiHomeDark,
        smallImageLight: MendyAiHomeLight,
        smallImageDark: MendyAiHomeDark,
    }
} as const;