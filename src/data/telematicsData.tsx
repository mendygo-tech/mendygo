import { StaticImageData } from "next/image";
import evHero from '@/assets/telematics/evbg.jpg'
import chillerHero from '@/assets/telematics/chillerbg.jpg'
import earthMoving from '@/assets/telematics/earthMovingbg.jpg'
import compressorHero from '@/assets/telematics/compressor.webp'

//chiller images
import warrantyManagementImage from "@/assets/icons/features/warranty.png";
import proactiveServiceImage from "@/assets/icons/features/ProactiveService.png";
import LivePerformance from "@/assets/icons/features/Live performance.png";
import Alerts from "@/assets/icons/features/alert.png";
import chbenefit1 from "@/assets/benefits/chiller/1.png"
import chbenefit2 from "@/assets/benefits/chiller/2.png"
import chbenefit3 from "@/assets/benefits/chiller/3.png"
import chbenefit4 from "@/assets/benefits/chiller/4.png"

//earth moving images
import mapAllVehicles from "@/assets/icons/features/map view of all Vehicles.png";
import fuelConsumption from "@/assets/icons/features/Fuel Consumption insights.png";
import nearRealtimeTracking from "@/assets/icons/features/Real time vechicle tracking .png";
import geofences from "@/assets/icons/features/Geofences.png";
import FleetManagement from "@/assets/icons/features/fleetManagement.png";
import investigate from "@/assets/icons/features/Live performance.png";
import ehbenefit1 from "@/assets/benefits/earthMoving.jpg"


//compressor images
import equipmentMonitoring from "@/assets/icons/features/equipment monitoring.png";
import singleLineDiagram from "@/assets/icons/features/Single Line Diagram View.png";
import ITIntegration from "@/assets/icons/features/ItIntegration.png";
import ServiceAlerts from "@/assets/icons/features/serviceAlerts.png";
import cmbenefit1 from "@/assets/benefits/compressor/1.png"
import cmbenefit2 from "@/assets/benefits/compressor/2.png"


//ev images
import report from "@/assets/icons/features/report.png";
import crashAnalytics from "@/assets/icons/features/crashAnalytics.png";
import RemoteImmobilisation from "@/assets/icons/features/remoteImmobilization.png";
import OTAUpdates from "@/assets/icons/features/otaUpdates.png";
import evbenefit1 from "@/assets/benefits/ev/1.png"
import evbenefit2 from "@/assets/benefits/ev/2.png"
import evbenefit3 from "@/assets/benefits/ev/3.png"
import evbenefit4 from "@/assets/benefits/ev/4.png"
import evbenefit5 from "@/assets/benefits/ev/5.png"
import evbenefit6 from "@/assets/benefits/ev/6.png"
import evbenefit7 from "@/assets/benefits/ev/7.png"
import evbenefit8 from "@/assets/benefits/ev/8.png"

export interface Feature {
    image: StaticImageData;
    title: string;
    desc: string;
}
export interface Telematics {
  slug: string;
  title: string;
  heroImage: StaticImageData;
  features?: Feature[];
  modules?: {
    title: string;
    desc: string[];
    image: StaticImageData;
  }[];
  description: string;
  benefits?: { title: string; description: string; imageSrc: StaticImageData }[];
}

export const telematicsData: Record<string, Telematics> = {
  "ev-telematics": {
    slug: "ev-telematics",
    title: "Mendygo EV Telematics",
    heroImage: evHero,
    description: "Comprehensive telematics solution for electric vehicles.",
    modules: [
      { title: "Real-time monitoring of vehicle health & utilization", desc: ["Monitor EV health, utilization and efficiency in real time."], image: LivePerformance },
      { title: "Location & vehicle tracking", desc: ["Track the live location of your vehicles remotely."], image: geofences },
      { title: "Warranty management", desc: ["Seamlessly manage warranty claims integrated with vehicle health."], image: warrantyManagementImage },
      { title: "Hierarchy management", desc: ["Set up role-based access for Admin, HO, RO, Zonal, dealers, etc."], image: singleLineDiagram },
      { title: "Granular report generation", desc: ["Generate consolidated historical and parameter-specific reports."], image: report },
      { title: "Crash analytics", desc: ["Detailed analysis of parameters during crash events."], image: crashAnalytics },
      { title: "Remote immobilisation", desc: ["Get relay as well as CAN-based immobilisation.."], image: RemoteImmobilisation },
      { title: "Smooth OTA/FOTA upgrades", desc: ["Update firmware and features seamlessly over-the-air."], image: OTAUpdates },
      { title: "Theft alerts", desc: ["Receive real-time alerts in case of vehicle theft or tampering."], image: Alerts }
    ],
    benefits: [
      { title: "Understand the real-world performance of your EV", description: "Get insights into EV performance across vital parameters to improve efficiency and compliance.", imageSrc: evbenefit1 },
      { title: "Improve battery lifespan by proactively monitoring BMS", description: "Track battery health and prevent early degradation with proactive monitoring.", imageSrc: evbenefit2 },
      { title: "Smoother OTA/FOTA updates", description: "Ensure firmware and software are always updated without disruption.", imageSrc: evbenefit3 },
      { title: "Digital logbook for your vehicle", description: "Maintain a digital record of trips, servicing, and utilization.", imageSrc: evbenefit4 },
      { title: "Monitor driver behavior", description: "Analyze and improve driver performance to increase safety and efficiency.", imageSrc: evbenefit5 },
      { title: "Improve fleet utilization", description: "Enhance effective usage of vehicles across the fleet.", imageSrc: evbenefit6 },
      { title: "Real-time fleet updates", description: "Get instant updates on fleet operations to avoid downtime.", imageSrc: evbenefit7 },
      { title: "Keep track of your fleet with geofencing and location tracking", description: "Monitor fleet activity in defined zones and receive alerts on boundary breaches.", imageSrc: evbenefit8 }
    ],
  },
  "chiller-telematics": {
    slug: "chiller-telematics",
    title: "Mendygo Chiller Telematics",
    heroImage: chillerHero,
    description: "Comprehensive telematics solution for chiller systems.",  
    modules: [
      { title: "Live performance backed by analytics", desc: ["Get a detailed breakdown of your chiller performance and make proactive diagnoses across various parameters."], image: LivePerformance },
      { title: "Warranty Management", desc: ["Keep up with warranty claims and cross-reference with chiller health."], image: warrantyManagementImage },
      { title: "Alerts", desc: ["Get alerted for threshold breaches, servicing as well as thefts."], image: Alerts },
      { title: "Proactive service schedule", desc: ["Schedule maintenance and service proactively by running remote diagnostics to prevent breakdowns."], image: proactiveServiceImage }
    ],
    benefits: [
      { title: "Visibility into the real-world performance of the Chillers", description: "Know how your Chillers operate within the right thresholds across various parameters and meet compliance norms.", imageSrc: chbenefit1 },
      { title: "Get alerted in real-time in case of parameter threshold breach and downtime", description: "Get real-time alerts if vital operating parameters of your Chillers have breached the thresholds or if a failure has occurred.", imageSrc: chbenefit2 },
      { title: "Smooth diagnostics and health assessment", description: "Quickly and easily find out Chiller’s health based on various performance parameters & early fault detection, leading to smoother diagnostics. This will improve the service levels while minimizing the service and maintenance visits.", imageSrc: chbenefit3 },
      { title: "Provide a differentiated end customer experience", description: "We deliver a superior end-user experience and act as a product differentiator to gain a competitive edge.", imageSrc: chbenefit4 }
    ],
  },
  "compressor-telematics": {
    slug: "compressor-telematics",
    title: "Mendygo Compressor Telematics",
    description: "Comprehensive telematics solution for compressor systems.",
    heroImage: compressorHero,
    modules: [
      { title: "Get service alerts", desc: ["Receive notifications when service is due or thresholds are breached."], image: ServiceAlerts },
      // { title: "Hierarchy management", desc: ["Enable selective access to reports for Admin, HO, RO, dealer, etc."], image: Alerts },
      { title: "Front-end application customization", desc: ["Widget-based application for tailored front-end usage."], image: singleLineDiagram },
      { title: "Granular report generation", desc: ["Generate parameter-based detailed reports."], image: equipmentMonitoring },
      { title: "Integration with IT systems", desc: ["Enable seamless integration with existing IT infrastructure."], image: ITIntegration },
      { title: "Proactive service schedule", desc: ["Plan maintenance ahead using remote diagnostics."], image: proactiveServiceImage },
      { title: "Live performance backed by analytics", desc: ["Access detailed compressor performance and analytics."], image: LivePerformance },
      { title: "Warranty management", desc: ["Simplify warranty claim management linked with health data."], image: warrantyManagementImage },
      { title: "Alerts", desc: ["Instant alerts for service, safety, or theft issues."], image: Alerts }
    ],
    benefits: [
      { title: "Smooth diagnostics and health assessment", description: "Perform diagnostics efficiently and detect health issues early to reduce downtime.", imageSrc: cmbenefit1 },
      { title: "Provide robust support to your customers", description: "Enhance customer support with real-time insights and preventive measures.", imageSrc: cmbenefit2 }
    ],
  },

  "earth-moving-telematics": {
    slug: "earth-moving-telematics",
    title: "Mendygo Earth Moving Telematics",
    description: "Comprehensive telematics solution for earth moving machinery.",
    heroImage: earthMoving,
    modules: [
      { title: "Map view of all vehicles", desc: ["Visualize all your earth-moving equipment on a live map."], image:  mapAllVehicles },
      { title: "Hierarchical vehicle tracking", desc: ["Track vehicles based on organizational hierarchy."], image: nearRealtimeTracking },
      { title: "Fuel consumption insights", desc: ["Monitor and analyze fuel usage trends."], image: fuelConsumption },
      { title: "Geo-fence", desc: ["Define zones and receive alerts for boundary breaches."], image: geofences },
      { title: "Measure fleet productivity", desc: ["Track and assess utilization of your equipment fleet."], image: FleetManagement },
      { title: "Investigate", desc: ["Analyze detailed operational data for performance insights."], image: investigate }
    ],
    benefits: [
      { title: "Smoother customer service", description: "Deliver better service levels and customer experience by using intelligent monitoring of your earth-moving equipment.", imageSrc: ehbenefit1 }
    ],
  }
}
