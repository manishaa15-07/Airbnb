"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function Description() {
  const [expanded, setExpanded] = useState(false);
  const { description, descriptionShort } = PROPERTY_DATA;

  const text = expanded ? description : descriptionShort;

  return (
    <div className="description-section">
      <p className="description-text">{text}</p>
      <button
        className="show-more-btn"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-label={expanded ? "Show less description" : "Show more description"}
      >
        {expanded ? "Show less" : "Show more"}
        <ChevronRight
          size={16}
          aria-hidden="true"
          style={{
            transform: expanded ? "rotate(90deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>
    </div>
  );
}
