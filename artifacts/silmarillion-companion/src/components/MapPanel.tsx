import React, { useState } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSilmarillion } from '@/context/SilmarillionContext';
import { locationsData } from '@/data/silmarillion-data';

// Fix default icon bug
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom gold icon using DivIcon
const goldIcon = new L.DivIcon({
  className: 'custom-gold-marker',
  html: `<svg xmlns="http://www.svg" viewBox="0 0 24 24" fill="hsl(var(--primary))" stroke="hsl(var(--background))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 drop-shadow-md"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Component to show cursor position on map
function CoordinateDisplayLayer() {
  const [cursorPos, setCursorPos] = useState<{ lat: number; lng: number } | null>(null);
  useMapEvents({
    mousemove(e) {
      setCursorPos({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });

  return (
    <>
      {cursorPos && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'hsl(var(--card))',
            border: '2px solid hsl(var(--primary))',
            borderRadius: '4px',
            padding: '12px',
            fontSize: '13px',
            fontFamily: 'monospace',
            zIndex: 1000,
            color: 'hsl(var(--primary))',
            fontWeight: 'bold',
          }}
        >
          <div>Lat: {cursorPos.lat.toFixed(2)}</div>
          <div>Lng: {cursorPos.lng.toFixed(2)}</div>
        </div>
      )}
    </>
  );
}

export function MapPanel() {
  const { currentChapterIndex } = useSilmarillion();

  const visibleLocations = locationsData.filter(loc =>
    loc.firstChapter <= currentChapterIndex &&
    (!loc.lastChapter || loc.lastChapter >= currentChapterIndex)
  );

  // Bounds for the complete Middle-earth map image
  // [[south, west], [north, east]] - adjusted for the full map canvas
  const middleEarthBounds = [[-100, -240], [100, 340]];

  // Determine which map to show based on chapter
  const isAinulindale = currentChapterIndex === 0;
  const isValaquenta = currentChapterIndex === 1;
  const showCustomMap = isAinulindale || isValaquenta;
  const hideMarkers = isAinulindale;

  let mapImageUrl: string;
  let currentBounds: [[number, number], [number, number]];
  let mapCenter: [number, number];
  let mapZoom: number;

  if (isAinulindale) {
    mapImageUrl = '/maps/ainulindale-circles.jpg';
    currentBounds = [[-150, -150], [150, 150]];
    mapCenter = [0, 0];
    mapZoom = 2;
  } else if (isValaquenta) {
    mapImageUrl = '/maps/valaquenta-map.png';
    currentBounds = [[-150, -150], [150, 150]];
    mapCenter = [0, 0];
    mapZoom = 2;
  } else {
    mapImageUrl = '/maps/middleearth.jpg';
    currentBounds = middleEarthBounds;
    mapCenter = [65, -120];
    mapZoom = 2.5;
  }

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%', background: 'hsl(var(--background))' }}
        zoomControl={false}
        bounds={currentBounds}
        maxBounds={currentBounds}
        maxBoundsViscosity={1.0}
      >
        <ImageOverlay
          url={mapImageUrl}
          bounds={currentBounds}
        />

        <CoordinateDisplayLayer />

        {!hideMarkers && visibleLocations.filter(loc => loc.id !== 'ocean').map(loc => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={goldIcon}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <h3 className="font-serif font-bold text-sm mb-1">{loc.name}</h3>
                <p className="text-xs text-muted-foreground m-0">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Add custom styles for the popup to match our dark theme */}
      <style>{`
        .leaflet-popup-content-wrapper {
          background: hsl(var(--card));
          color: hsl(var(--card-foreground));
          border: 1px solid hsl(var(--border));
          border-radius: 4px;
        }
        .leaflet-popup-tip {
          background: hsl(var(--card));
          border-top: 1px solid hsl(var(--border));
          border-left: 1px solid hsl(var(--border));
        }
        .leaflet-popup-content {
          margin: 10px 12px;
        }
      `}</style>
    </div>
  );
}
