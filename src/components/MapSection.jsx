'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ExternalLink } from 'lucide-react';

// Hotel coordinates
const hotelPosition = [5.0100203, 7.9685011];

// Dynamically load React Leaflet components with SSR disabled
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function MapSection() {
  const [L, setL] = useState(null);

  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== 'undefined') {
      import('leaflet').then((leaflet) => {
        import('leaflet/dist/leaflet.css');
        const defaultIcon = leaflet.icon({
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });
        leaflet.Marker.prototype.options.icon = defaultIcon;
        setL(leaflet);
      });
    }
  }, []);

  return (
    <section
      className="relative w-full h-[500px]"
      aria-labelledby="map-heading"
    >
      {/* Floating hotel info card */}
      <div className="absolute top-4 left-4 z-10 flex justify-between items-center bg-white shadow-lg p-6 gap-3 w-11/12 sm:w-96 rounded-md border border-gray-200">
        <div>
          <h2 id="map-heading" className="text-lg font-semibold text-gray-800">
            Greenview Hotel Ltd
          </h2>
          <p className="text-sm text-gray-600">
            123 Uyo City Road, Akwa Ibom
          </p>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=5.0100203,7.9685011"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-600 hover:text-yellow-800"
          aria-label="Open directions to Greenview Hotel Ltd on Google Maps"
        >
          <ExternalLink size={24} />
        </a>
      </div>

      {/* Only render map if Leaflet is loaded */}
      {L && (
        <MapContainer
          center={hotelPosition}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full z-0 rounded-md"
          aria-label="Map showing the location of Greenview Hotel Ltd"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={hotelPosition}>
            <Popup>
              <strong>Greenview Hotel Ltd</strong><br />
              123 Uyo City Road, Akwa Ibom
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
}
