"use client";

import { Flower2, Thermometer, KeyRound } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

const ICON_MAP: Record<string, React.ReactNode> = {
  outdoor: <Flower2 size={24} />,
  cool: <Thermometer size={24} />,
  checkin: <KeyRound size={24} />,
};

export default function HostHighlights() {
  const { highlights } = PROPERTY_DATA;

  return (
    <div className="host-highlights">
      {highlights.map((item) => (
        <div key={item.id} className="host-highlight-item">
          <div className="host-highlight-icon" aria-hidden="true">
            {ICON_MAP[item.icon]}
          </div>
          <div className="host-highlight-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
