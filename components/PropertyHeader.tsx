"use client";

import { useState } from "react";
import { Share2, Heart } from "lucide-react";

interface PropertyHeaderProps {
  title: string;
}

export default function PropertyHeader({ title }: PropertyHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="property-title-row">
      <h1 className="property-title">{title}</h1>
      <div className="property-actions">
        <button className="action-btn" aria-label="Share this listing">
          <Share2 size={16} />
          Share
        </button>
        <button 
          className="action-btn" 
          aria-label="Save this listing to wishlist"
          onClick={() => setIsSaved(!isSaved)}
        >
          <Heart 
            size={16} 
            fill={isSaved ? "#FF385C" : "none"} 
            color={isSaved ? "#FF385C" : "currentColor"} 
          />
          <span style={{ textDecoration: "underline" }}>
            {isSaved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </div>
  );
}
