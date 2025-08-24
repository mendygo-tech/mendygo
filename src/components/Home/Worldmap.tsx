import React from "react";
import WorldMap from "../ui/world-map";


export const BackgroundMap = React.memo(() => (
  <div className="absolute inset-0 z-0">
    <WorldMap
      lineColor="#abff02"
      dots={[
        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 40.7128, lng: -74.0060 } },
        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 55.7558, lng: 37.6173 } },
        { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -33.8688, lng: 151.2093 } },
        { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 1.3521, lng: 103.8198 } },
        { start: { lat: 22.5726, lng: 88.3639 }, end: { lat: 35.6762, lng: 139.6503 } },
        { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: -1.2921, lng: 36.8219 } },
        { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: 25.276987, lng: 55.296249 } },
        { start: { lat: 26.1445, lng: 91.7362 }, end: { lat: 39.9042, lng: 116.4074 } },
      ]}
    />
  </div>
));