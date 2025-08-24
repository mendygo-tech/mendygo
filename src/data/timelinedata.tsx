export type PageSection = {
  title: string;
  content: string[];
};

export type PageContent = {
  title: string;
  subtitle?: string;
  sections: PageSection[];
};

export const sluggedContent: Record<string, PageContent> = {
  connect: {
    title: "Connect",
    subtitle: "Seamless Integration for Modern Manufacturing",
    sections: [
      {
        title: "Unified Data Integration",
        content: [
          "Mendygo acts as a central hub for collecting and integrating data from all your industrial systems.",
          "Get real-time access to production metrics, machine data, and IoT insights in one place."
        ]
      },
      {
        title: "Plug & Play Connectivity",
        content: [
          "Supports all major protocols including OPC-UA, MQTT, Modbus, HTTP, and more.",
          "Easily integrate with your existing PLCs, SCADA, MES, or third-party APIs."
        ]
      },
      {
        title: "Secure Data Handling",
        content: [
          "All data connections are encrypted and monitored.",
          "Built-in role-based access control ensures only authorized access."
        ]
      }
    ]
  },

  collect: {
    title: "Collect",
    subtitle: "Intelligent Data Collection That Powers Insights",
    sections: [
      {
        title: "Sensor and Machine Integration",
        content: [
          "Connect to diverse manufacturing assets including CNCs, robotics, and environmental sensors.",
          "Capture temperature, pressure, cycle time, energy use, and more in real-time."
        ]
      },
      {
        title: "Flexible Communication",
        content: [
          "Mendygo supports both modern IoT protocols and legacy systems.",
          "Bridge communication gaps across generations of equipment."
        ]
      },
      {
        title: "Edge & Cloud Collection",
        content: [
          "Stream data from edge devices or directly push to the cloud.",
          "Adaptable collection methods for all infrastructure setups."
        ]
      }
    ]
  },

  integrate: {
    title: "Integrate",
    subtitle: "Break Down Data Silos for a Unified View",
    sections: [
      {
        title: "Cross-Platform Synchronization",
        content: [
          "Integrate data from SCADA, MES, BMS, ERP, and more.",
          "Eliminate redundancies and create seamless information flow."
        ]
      },
      {
        title: "Enterprise-Ready Architecture",
        content: [
          "Mendygo is built to scale from single plants to global operations.",
          "Enable centralized data governance and remote visibility."
        ]
      },
      {
        title: "Process Automation",
        content: [
          "Automate repetitive data handling, report generation, and alerts.",
          "Free up engineering time and reduce operational errors."
        ]
      }
    ]
  },

  report: {
    title: "Report",
    subtitle: "Dynamic Dashboards and Strategic Insights",
    sections: [
      {
        title: "KPI Dashboards",
        content: [
          "Visualize OEE, cycle time, quality rate, downtime, and energy efficiency.",
          "Custom views for plant managers, operators, and CXOs."
        ]
      },
      {
        title: "Role-Based Access",
        content: [
          "Control what each team sees with secure, permission-based dashboards.",
          "Give everyone the right data at the right time."
        ]
      },
      {
        title: "Interactive Visualizations",
        content: [
          "Drill down into production trends, batch-level performance, and root causes.",
          "Export charts and tables instantly for audits and presentations."
        ]
      }
    ]
  },

  analyze: {
    title: "Analyze",
    subtitle: "Mendygo: Your Manufacturing Analytics Partner for Data-Driven Excellence",
    sections: [
      {
        title: "Real-Time Monitoring",
        content: [
          "Monitor production metrics, detect anomalies, and take immediate actions.",
          "Stay connected to your manufacturing floor 24/7."
        ]
      },
      {
        title: "Predictive Insights",
        content: [
          "Leverage AI/ML algorithms to predict failures, bottlenecks, and inefficiencies.",
          "Improve uptime, reduce waste, and lower maintenance costs."
        ]
      },
      {
        title: "Custom Dashboards",
        content: [
          "Tailor dashboards for different users – operators, analysts, executives.",
          "See only what matters most to your role."
        ]
      },
      {
        title: "Scalable Analytics",
        content: [
          "From a single line to multiple global sites, Mendygo scales effortlessly.",
          "Build comparative insights across departments and geographies."
        ]
      }
    ]
  },

  optimize: {
    title: "Optimize",
    subtitle: "Optimizing Manufacturing Excellence with Mendygo’s Data-Driven Analytics",
    sections: [
      {
        title: "Process Optimization",
        content: [
          "Reduce cycle times, eliminate bottlenecks, and streamline operations.",
          "Analyze workflows to increase production throughput."
        ]
      },
      {
        title: "Energy & Cost Efficiency",
        content: [
          "Track real-time energy consumption, identify waste, and reduce overhead.",
          "Lower production cost without sacrificing quality."
        ]
      },
      {
        title: "Predictive Maintenance",
        content: [
          "Detect signs of wear and prevent breakdowns before they happen.",
          "Minimize downtime with condition-based maintenance."
        ]
      },
      {
        title: "Workforce Intelligence",
        content: [
          "Gain insights into operator performance, training needs, and task efficiency.",
          "Build a smarter, more productive manufacturing team."
        ]
      }
    ]
  }
};
