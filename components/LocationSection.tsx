"use client";

import { MapPin } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function LocationSection() {
  const { mapLocation } = PROPERTY_DATA;

  return (
    <section
      className="location-section"
      aria-labelledby="location-heading"
      id="Location"
    >
      <h2 id="location-heading" className="section-title">
        Where you&apos;ll be
      </h2>

      {/* Map placeholder using iframe from OpenStreetMap */}
      <div className="location-map" aria-label="Map showing property location">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.7600%2C15.5100%2C73.7800%2C15.5300&layer=mapnik&marker=15.5200%2C73.7700"
          width="100%"
          height="340"
          style={{ border: "none", borderRadius: 12 }}
          title="Property location map"
          loading="lazy"
          aria-label="Map of Candolim, Goa, India"
        />
      </div>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        {mapLocation}
      </h3>
      <p style={{ fontSize: 14, color: "#717171", lineHeight: 1.6 }}>
        Located in the heart of Candolim, just minutes from Candolim Beach,
        popular cafés, restaurants, and the vibrant North Goa nightlife scene.
        The apartment building is surrounded by local amenities and provides
        easy access to major tourist attractions.
      </p>
    </section>
  );
}
