import { StaticImageData } from "next/image";

// --- ACTION REQUIRED: Replace these placeholder imports with your actual image files ---
import heroBMS from "@/assets/image.png";
import heroGateway from "@/assets/imagesq.png"
import hardware from "@/assets/hardwareSimple.png" // Your hero image for BMS
import ecosystemBMS from "@/assets/image2.png"; // Your hardware image for BMS

// --- Placeholder images for modules. Replace them with your actual assets. ---
import hvacImage from "@/assets/icons/solutions/HVAC Managment.png";
import energyImage from "@/assets/icons/solutions/Energy Management .png";
import gensetImage from "@/assets/icons/solutions/Genset Management.png";
import busbarImage from "@/assets/icon.png";
import apfcImage from "@/assets/icon.png";
import waterImage from "@/assets/icons/solutions/Water Mangment .png";
import stpImage from "@/assets/icon.png";
import airImage from "@/assets/icon.png";

export interface Module {
  title: string;
  desc: string[];
  image?: StaticImageData;
}

export interface GatewaySystem {
  slug: string;
  title: string;
  description?: string;
  assetsWeTrack?: string[];
  benefits?: string[];
  hardwareSpecs?: Module[];
  heroImage: StaticImageData;
    heroGateway?: StaticImageData;
  ecosystemImage: StaticImageData;
  modules: Module[];
}
export const gatewayData: Record<string, GatewaySystem> = {
  "building-management": {
    slug: "building-management",
    title: "Mendygo Building Management System",
    description:
      "Mendygo’s IoT-driven Building Management System (BMS) provides a centralized platform for monitoring, controlling, and optimizing building operations. From energy efficiency to water management and air quality, gain actionable insights for smarter, sustainable, and safe building operations.",
    assetsWeTrack: [
      "HVAC systems",
      "Energy Meters",
      "Gensets",
      "Busbars & Switchgears",
      "APFC Panels",
      "Water Distribution",
      "STP/ETP",
      "Compressed Air/Gas Systems",
    ],
    benefits: [
      "Centralized visibility of building systems",
      "Reduced operational costs & energy consumption",
      "Quick issue identification and response",
      "Predictive maintenance for critical systems",
      "Enhanced occupant comfort & safety",
      "Compliance with environmental and safety standards",
      "Sustainable building operations",
      "Trusted by leading commercial and industrial facilities",
    ],
    heroImage: heroBMS,
    heroGateway: heroGateway,
    ecosystemImage: ecosystemBMS,
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
    hardwareSpecs: [
      {
        title: "IoT Sensors & Actuators",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :hardware
      },
      {
        title: "IoT Sensors & Actuators",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :hardware
      },
      {
        title: "IoT Sensors & Actuators",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :hardware
      },
      {
        title: "IoT Sensors & Actuators",
        desc : ["Temperature, humidity, flow, pressure, energy, and water quality sensors for real-time monitoring"

        ],
        image :hardware
      },
      
    ],
    
  },
  "factory-management": {
    slug: "factory-management",
    title: "Mendygo Factory Management System",
    description: "Transform your factory operations with Mendygo’s IoT-driven Factory Management solution. Gain complete visibility into production efficiency, equipment performance, and resource utilization to enhance productivity, reduce downtime, and ensure regulatory compliance.",
    assetsWeTrack: ["Production lines", "Machines & Equipment", "Energy Systems", "Warehouses", "Water & Utility Systems", "Gensets", "STP/ETP units"],
    benefits: ["Optimized Overall Equipment Effectiveness (OEE)", "Reduced downtime & operational costs", "Real-time visibility across production lines and assets", "Predictive maintenance for proactive equipment care", "Safety compliance & risk mitigation", "Energy, water, and utility efficiency", "Data-driven decision-making & reporting", "Trusted by leading industrial operators"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Mendergy - EMS",
            desc: ["Centralized monitoring of energy consumption across machines, departments, and plants.", "Identify inefficiencies, energy spikes, and abnormal usage patterns.", "Benchmark energy performance for continuous improvement."]
        },
        {
            title: "Smart OEE Optimization",
            desc: ["Track production performance, availability, and quality in real-time.", "Identify bottlenecks and improve line efficiency.", "Generate actionable insights for maximizing productivity."]
        },
        {
            title: "Real-Time Monitoring",
            desc: ["Continuous monitoring of machines, sensors, and production parameters.", "Access live dashboards for machine health, production status, and KPIs.", "Reduce downtime with instant alerts on anomalies."]
        },
        {
            title: "AI-Based Maintenance",
            desc: ["Predict equipment failures using AI/ML models.", "Schedule preventive maintenance to minimize unexpected breakdowns.", "Optimize spare parts inventory and service planning."]
        },
        {
            title: "Warehouse Management System",
            desc: ["Monitor storage conditions, stock levels, and movement of goods.", "Improve material handling and logistics efficiency.", "Integrate inventory data with production scheduling for seamless operations."]
        },
        {
            title: "Safety Compliance Check",
            desc: ["Real-time monitoring of machine safety, PPE usage, and environmental conditions.", "Automated alerts for unsafe conditions or violations.", "Compliance reports for audits and regulatory requirements."]
        },
        {
            title: "Water Management",
            desc: ["Track water consumption across processes and sections.", "Detect leakages and abnormal usage patterns.", "Optimize water utilization for cost and sustainability benefits."]
        },
        {
            title: "Genset Management & Telematics",
            desc: ["Monitor backup power generation and fuel consumption.", "Digital logs of genset performance and load patterns.", "Ensure reliability during power outages with predictive alerts."]
        },
        {
            title: "STP & ETP Management",
            desc: ["Monitor key water treatment parameters like pH, TDS, turbidity, COD, and BOD.", "Track aeration, filtration, and dosing systems remotely.", "Generate discharge quality, sludge, and pollutant reduction reports."]
        }
    ],
    
  },
  "energy-management": {
    slug: "energy-management",
    title: "Mendygo Energy Management System",
    description: "Mendygo’s IoT-driven Energy Management System provides centralized visibility and control over all energy sources within a facility. From real-time consumption monitoring to predictive analytics, EMS helps optimize energy usage, reduce costs, and improve operational efficiency.",
    assetsWeTrack: ["Mains", "Solar & Wind", "Gensets", "Switchgears", "APFC Panels", "Busbars", "Energy Meters", "Critical Loads"],
    benefits: ["Real-time energy visibility across all sources and loads", "Reduced electricity bills through optimization and demand management", "Quick identification of inefficiencies and abnormal consumption", "Predictive alerts for maintenance and load balancing", "Improved compliance with energy and sustainability standards", "Enhanced operational efficiency and reliability", "Data-backed reporting for management and ESG goals", "Trusted by industrial leaders"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Active Energy Monitoring",
            desc: ["Monitor power consumption from mains, renewable sources, and backup systems", "Compare actual vs rated power to detect abnormalities", "Track maximum demand, reactive power, and energy efficiency benchmarks"]
        },
        {
            title: "Load Analysis & Optimization",
            desc: ["Analyze load patterns across machines, departments, or sites", "Smart scheduling to reduce peak demand charges", "Optimize operation of high-energy-consuming equipment"]
        },
        {
            title: "Genset Energy Tracking",
            desc: ["Digital logs of genset fuel and energy usage", "Monitor load distribution and operating efficiency", "Alerts for abnormal consumption and predictive maintenance"]
        },
        {
            title: "APFC Panel & Power Factor Control",
            desc: ["Track reactive power demand and capacitor bank health", "Optimize capacitor sizing and prevent premature failure", "Perform harmonic distortion analysis for cleaner energy"]
        },
        {
            title: "Busbar & Switchgear Monitoring",
            desc: ["Real-time monitoring of temperature, humidity, and current", "Multi-site dashboards with drill-down views", "Predictive alerts for overheating, overcurrent, and failures"]
        },
        {
            title: "Energy Analytics & Reporting",
            desc: ["Time-series analysis of energy consumption and cost per kWh", "Benchmark specific energy consumption (SEC) for processes", "ESG and carbon footprint tracking for sustainability reporting", "AI-powered predictive alerts for energy inefficiencies"]
        }
    ],
    
  },
  "warehouse-management": {
    slug: "warehouse-management",
    title: "Mendygo Warehouse Management System",
    description: "Mendygo’s Warehouse Management System (WMS) provides end-to-end visibility, control, and optimization of warehouse operations. From real-time inventory tracking to AI-driven space and workflow management, the solution ensures operational efficiency, reduced errors, and optimized resource utilization.",
    assetsWeTrack: ["Inventory Items", "Forklifts & Material Handling Equipment", "Racking & Storage Units", "Temperature/Humidity Sensors", "Security Systems"],
    benefits: ["Real-time inventory visibility across multiple locations", "Automated stock management to prevent shortages or overstocking", "Optimized warehouse layout and storage utilization", "Reduced manual errors and operational costs", "Improved order fulfillment speed and accuracy", "Enhanced workforce productivity with task automation", "Compliance with safety and regulatory standards"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Inventory Tracking & Management",
            desc: ["Monitor stock levels, expiry dates, and batch/lot numbers", "Track inbound/outbound goods and automate replenishments", "Alerts for low stock, damaged goods, or misplaced items"]
        },
        {
            title: "Material Handling & Equipment Monitoring",
            desc: ["Track forklift, conveyor, and automated guided vehicle (AGV) usage", "Monitor equipment health, fuel/energy consumption, and maintenance needs", "Optimize equipment scheduling to minimize idle time"]
        },
        {
            title: "Warehouse Layout & Space Optimization",
            desc: ["Map warehouse zones digitally for better inventory placement", "AI-driven recommendations for maximizing storage efficiency", "Optimize picking routes to reduce travel time"]
        },
        {
            title: "Order Fulfillment & Shipment",
            desc: ["Real-time picking, packing, and shipping status", "Integration with ERP and transport systems for seamless operations", "Automated reporting for timely order completion and audits"]
        },
        {
            title: "Safety & Compliance Monitoring",
            desc: ["Monitor environmental conditions (temperature, humidity) for sensitive goods", "Track adherence to safety standards and SOPs", "Alerts for unauthorized access or equipment misuse"]
        }
    ],
    
  },
  "genset-management": {
    slug: "genset-management",
    title: "Mendygo Genset Management System",
    description: "Mendygo’s Genset Management System provides real-time monitoring, predictive maintenance, and energy optimization for backup and primary power generators. The solution ensures uninterrupted power supply, reduces operational costs, and extends the life of gensets while providing actionable insights for operational efficiency.",
    assetsWeTrack: ["Diesel & Gas Gensets", "Automatic Transfer Switches (ATS)", "Fuel Tanks", "Engine Components", "Control Panels"],
    benefits: ["Real-time monitoring of genset performance and fuel consumption", "Predictive maintenance to prevent unplanned downtime", "Optimized load distribution and runtime scheduling", "Reduced fuel consumption and operational costs", "Extended genset lifespan through data-driven insights", "Automated reporting for audits, safety, and compliance", "Trusted by industrial leaders"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Genset Performance Monitoring",
            desc: ["Track voltage, frequency, runtime, and load levels", "Monitor engine temperature, oil pressure, and battery health", "Alerts for abnormal operation, overheating, or low oil pressure"]
        },
        {
            title: "Fuel Consumption Tracking",
            desc: ["Monitor fuel levels, consumption rates, and refill schedules", "Identify fuel wastage or leaks in real time", "Optimize fuel usage through AI-driven recommendations"]
        },
        {
            title: "Predictive Maintenance",
            desc: ["Forecast component wear and required maintenance", "Alerts for filter changes, oil top-ups, and engine servicing", "Minimize unplanned downtime and extend equipment life"]
        },
        {
            title: "Load Management & Scheduling",
            desc: ["Optimize load sharing across multiple gensets", "Auto-start/stop based on site load requirements", "Ensure backup readiness during peak demand or outages"]
        },
        {
            title: "Compliance & Reporting",
            desc: ["Maintain logs for inspections, servicing, and regulatory audits", "Automated reports for performance, fuel usage, and emissions", "Integration with ERP systems for operational transparency"]
        }
    ],
    
  },
  "hvac-management": {
    slug: "hvac-management",
    title: "HVAC Management System",
    description: "Unlock the full potential of your facility’s HVAC systems with Mendygo’s IoT-driven HVAC management solution. Access real-time environmental and operational data to enhance energy efficiency, occupant comfort, and equipment lifespan.",
    assetsWeTrack: ["Chillers", "Air Handling Units (AHU)", "Variable Frequency Drives (VFDs)", "Cooling Towers", "Pumps & Motors"],
    benefits: ["Quick issue identification", "Reduced energy consumption & operational costs", "Centralized system visibility", "Adaptive climate control", "Compliance with environmental and safety standards", "Extended equipment life", "Efficient reporting & dashboards", "Trusted by industrial leaders"],
    heroImage: heroBMS,
    heroGateway: heroGateway,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Gain complete HVAC system visibility with digital logs",
            desc: ["Keep digital records of key HVAC parameters and avoid human errors.", "Access granular data across chillers, AHUs, VFDs, and pumps, not just individual units.", "Monitor all operational parameters in real-time rather than point-in-time snapshots.", "Replicate system layout for a drill-down view of all HVAC components."]
        },
        {
            title: "Schedule-based operations & intelligent setpoint control",
            desc: ["Automate temperature and airflow based on occupancy schedules.", "Maintain desired environmental conditions while reducing energy usage.", "Real-time adjustment of VFDs for optimized motor speed and energy efficiency."]
        },
        {
            title: "Benchmarking and trend analysis",
            desc: ["Compare actual energy and cooling performance with rated parameters.", "Perform time-series analysis on critical metrics like airflow, temperature, and humidity.", "Get alerts on deviations and abnormal energy use."]
        },
        {
            title: "Move closer to sustainability goals",
            desc: ["Track energy efficiency improvements and CO₂ reduction.", "Monitor HVAC electricity consumption at section-wise or unit-wise levels.", "Visualize energy usage breakdown for informed decision-making."]
        },
        {
            title: "Specific Energy Consumption (SEC) analysis",
            desc: ["SEC measures energy required per unit of cooling or conditioned air delivered.", "Helps baseline performance and identify energy-saving opportunities.", "SEC = Energy Input / Cooling Output"]
        },
        {
            title: "Backup and auxiliary system monitoring",
            desc: ["Track auxiliary systems like pumps, cooling towers, and backup chillers.", "Monitor operational efficiency and detect potential failures early.", "Maintain digital logs for system diagnostics and predictive maintenance."]
        }
    ],
    
  },
  "water-management": {
    slug: "water-management",
    title: "Mendygo Water Management System",
    description: "Mendygo’s IoT-driven Water Management System provides centralized monitoring and control of water resources across facilities. From real-time flow monitoring to leak detection and process optimization, WMS helps reduce water wastage, improve efficiency, and ensure regulatory compliance.",
    assetsWeTrack: ["Pumps", "Valves", "Tanks", "Flowmeters", "Sensors", "Filtration Systems", "STP/ETP", "Pipelines"],
    benefits: ["Real-time visibility of water consumption across sections and tanks", "Reduced water wastage through early leak detection", "Optimized pumping and distribution for energy savings", "Compliance with water quality and discharge regulations", "Automated reporting for management and sustainability goals", "Improved operational efficiency and cost control", "Trusted by industrial leaders"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Water Consumption Monitoring",
            desc: ["Track section-wise and tank-wise water usage", "Monitor flow rates, levels, and pressure in real time", "Alerts for consumption deviations and abnormal usage"]
        },
        {
            title: "Leak Detection & Alerts",
            desc: ["Early detection of leaks in pipelines and storage tanks", "Automatic notifications for overflows, dry tanks, or abnormal pressure drops", "Reduce maintenance costs and prevent downtime"]
        },
        {
            title: "Pump & Valve Optimization",
            desc: ["Monitor pump performance and energy usage", "Optimize valve operations for efficient water distribution", "Predictive maintenance to reduce failures and service costs"]
        },
        {
            title: "STP/ETP Monitoring",
            desc: ["Track key parameters like pH, TDS, turbidity, COD, BOD, and dissolved oxygen", "Ensure compliance with discharge quality regulations", "Remote monitoring of aeration, filtration, and dosing systems"]
        },
        {
            title: "Water Quality & Sustainability Analytics",
            desc: ["Continuous monitoring of water purity and treatment efficiency", "Generate reports for water consumption, quality, and sustainability metrics", "Track specific water consumption (SWC) per unit of production", "Support ESG and regulatory compliance reporting"]
        }
    ],
    
  },
  "construction-fleet-management": {
    slug: "construction-fleet-management",
    title: "Mendygo Construction Fleet Management System",
    description: "Mendygo’s Construction Fleet Management solution provides centralized control and real-time visibility of all fleet operations. From tracking vehicle health and location to optimizing routes and fuel usage, this system helps improve productivity, reduce downtime, and ensure regulatory compliance across construction sites.",
    assetsWeTrack: ["Earthmoving vehicles", "Cranes", "Excavators", "Dumpers", "Loaders", "Trucks", "GPS & Telematics devices"],
    benefits: ["Real-time visibility of all construction fleet vehicles", "Optimized utilization and reduced idle time", "Improved driver accountability and safety", "Reduced fuel consumption and operational costs", "Preventive maintenance to extend equipment lifespan", "Automated reporting for management and compliance", "Trusted by leading construction companies"],
    heroImage: heroBMS,
    ecosystemImage: ecosystemBMS,
    modules: [
        {
            title: "Vehicle Health Monitoring",
            desc: ["Track engine, hydraulics, and critical components", "Monitor fuel usage, operating hours, and load cycles", "Predictive maintenance alerts to prevent breakdowns"]
        },
        {
            title: "Real-Time GPS & Tracking",
            desc: ["Monitor vehicle location and movement across construction sites", "Geo-fencing for restricted areas and unauthorized usage alerts", "Historical trip data and route replay for analysis"]
        },
        {
            title: "Fuel & Energy Optimization",
            desc: ["Monitor fuel consumption and identify inefficiencies", "Optimize machine usage based on load and site demands", "AI-driven insights to reduce energy costs and idle time"]
        },
        {
            title: "Driver Behavior & Safety",
            desc: ["Track acceleration, braking, and over-speeding events", "Score operators for safe and efficient operation", "Alerts for unsafe behavior to prevent accidents"]
        },
        {
            title: "Fleet Scheduling & Utilization",
            desc: ["Smart scheduling of vehicles to match site requirements", "Load balancing and allocation for maximum productivity", "Benchmark utilization across multiple sites"]
        },
        {
            title: "Compliance & Reporting",
            desc: ["Maintain logs for equipment inspections and operator certifications", "Automated reports for audits, safety checks, and regulatory compliance", "Integration with ERP for operational and financial management"]
        }
    ],
    
  },
};