'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink } from 'lucide-react';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Hotel coordinates
const hotelPosition = [5.0100203, 7.9685011];

export default function MapSection() {
  useEffect(() => {
    // Only run this in the browser
    if (typeof window !== 'undefined') {
      const defaultIcon = L.icon({
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      L.Marker.prototype.options.icon = defaultIcon;
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

      {/* Interactive map */}
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
    </section>
  );
}