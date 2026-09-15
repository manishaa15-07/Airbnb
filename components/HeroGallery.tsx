"use client";

import Image from "next/image";
import { LayoutGrid } from "lucide-react";
import { PropertyImage } from "@/data/property";

interface HeroGalleryProps {
  images: PropertyImage[];
  onShowAllPhotos: () => void;
  onImageClick: (index: number) => void;
}

export default function HeroGallery({
  images,
  onShowAllPhotos,
  onImageClick,
}: HeroGalleryProps) {
  const heroImages = images.slice(0, 5);

  return (
    <div className="hero-gallery" role="region" aria-label="Property photos">
      {/* Main large image */}
      <button
        className="hero-main-image"
        onClick={() => onImageClick(0)}
        aria-label={`View photo 1: ${heroImages[0]?.alt}`}
        style={{ border: "none", padding: 0, background: "none" }}
      >
        {heroImages[0] && (
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1440px) 50vw"
          />
        )}
      </button>

      {/* 4 smaller grid images */}
      {heroImages.slice(1, 5).map((img, i) => (
        <div key={img.id} style={{ position: "relative" }}>
          <button
            className="hero-grid-image"
            onClick={() => onImageClick(i + 1)}
            aria-label={`View photo ${i + 2}: ${img.alt}`}
            style={{
              border: "none",
              padding: 0,
              background: "none",
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1440px) 25vw"
            />
          </button>
        </div>
      ))}

      {/* Show all photos button */}
      <button
        className="show-all-photos-btn"
        onClick={onShowAllPhotos}
        aria-label={`Show all ${images.length} photos`}
      >
        <LayoutGrid size={16} aria-hidden="true" />
        Show all photos
      </button>
    </div>
  );
}
