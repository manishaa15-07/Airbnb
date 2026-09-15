"use client";

import {
  Utensils,
  Monitor,
  Waves,
  PawPrint,
  AlertTriangle,
  Wifi,
  Car,
  Droplets,
  Camera,
  X,
  Wind,
  Tv,
  Fan,
  ShowerHead,
  Shirt,
  BedDouble,
} from "lucide-react";
import { AMENITIES, ALL_AMENITIES, Amenity } from "@/data/property";

interface AmenitiesProps {
  onShowAll: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  kitchen: <Utensils size={24} aria-hidden="true" />,
  workspace: <Monitor size={24} aria-hidden="true" />,
  pool: <Waves size={24} aria-hidden="true" />,
  pets: <PawPrint size={24} aria-hidden="true" />,
  "co-alarm": <AlertTriangle size={24} aria-hidden="true" />,
  "smoke-alarm": <AlertTriangle size={24} aria-hidden="true" />,
  wifi: <Wifi size={24} aria-hidden="true" />,
  parking: <Car size={24} aria-hidden="true" />,
  hottub: <Droplets size={24} aria-hidden="true" />,
  cameras: <Camera size={24} aria-hidden="true" />,
  ac: <Wind size={24} aria-hidden="true" />,
  washer: <Shirt size={24} aria-hidden="true" />,
  dryer: <Shirt size={24} aria-hidden="true" />,
  tv: <Tv size={24} aria-hidden="true" />,
  fan: <Fan size={24} aria-hidden="true" />,
  shampoo: <ShowerHead size={24} aria-hidden="true" />,
  conditioner: <ShowerHead size={24} aria-hidden="true" />,
  bodywash: <ShowerHead size={24} aria-hidden="true" />,
  towels: <BedDouble size={24} aria-hidden="true" />,
  linens: <BedDouble size={24} aria-hidden="true" />,
};

function AmenityItem({ amenity }: { amenity: Amenity }) {
  return (
    <div
      className={`amenity-item${amenity.available ? "" : " unavailable"}`}
      role="listitem"
    >
      <div
        className="amenity-icon"
        style={{
          opacity: amenity.available ? 1 : 0.4,
          textDecoration: amenity.available ? "none" : "line-through",
        }}
      >
        {amenity.available ? (
          ICON_MAP[amenity.id] || <span>•</span>
        ) : (
          <div style={{ position: "relative" }}>
            {ICON_MAP[amenity.id] || <span>•</span>}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={24} strokeWidth={1} color="#717171" />
            </div>
          </div>
        )}
      </div>
      <span>{amenity.label}</span>
    </div>
  );
}

export default function Amenities({ onShowAll }: AmenitiesProps) {
  return (
    <section className="amenities-section" aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className="section-title">
        What this place offers
      </h2>
      <div className="amenities-grid" role="list" aria-label="Amenities list">
        {AMENITIES.map((amenity) => (
          <AmenityItem key={amenity.id} amenity={amenity} />
        ))}
      </div>
      <button
        className="show-amenities-btn"
        onClick={onShowAll}
        aria-label={`Show all ${ALL_AMENITIES.length} amenities`}
      >
        Show all {ALL_AMENITIES.length} amenities
      </button>
    </section>
  );
}

interface AmenitiesModalContentProps {
  amenities: Amenity[];
}

export function AmenitiesModalContent({ amenities }: AmenitiesModalContentProps) {
  return (
    <div className="modal-amenities-list" role="list">
      {amenities.map((amenity) => (
        <AmenityItem key={amenity.id} amenity={amenity} />
      ))}
    </div>
  );
}
