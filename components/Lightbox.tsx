"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { PropertyImage } from "@/data/property";

interface LightboxProps {
  images: PropertyImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const goToPrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const goToNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();
    // Prevent scrolling on body
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goToPrev, goToNext]);

  const currentImage = images[currentIndex];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white", // PURE WHITE BACKGROUND
        zIndex: 3000,
        display: "flex",
        flexDirection: "column",
        // Minimal visual transition
        animation: "fadeIn 0.2s ease-in-out",
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${images.length}: ${currentImage?.alt}`}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
      
      {/* Header */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "24px 32px",
        height: "88px",
        flexShrink: 0
      }}>
        {/* LEFT: Grid icon */}
        <button
          onClick={onClose} // Grid icon goes back to Photo Tour typically
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            transition: "background 0.2s",
            color: "#222"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7F7F7")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          aria-label="Back to photo tour"
        >
          <Grid size={20} />
        </button>

        {/* CENTER: Category name */}
        <div style={{ fontSize: "16px", fontWeight: 600, color: "#222" }}>
          {currentImage?.category}
        </div>

        {/* RIGHT: Counter & Close */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ fontSize: "14px", fontWeight: 500, color: "#222" }}>
            {currentIndex + 1} / {images.length}
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close lightbox"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "background 0.2s",
              color: "#222"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7F7F7")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 80px 40px" }}>
        
        {/* Previous arrow */}
        <button
          onClick={goToPrev}
          disabled={!hasPrev}
          aria-label={hasPrev ? "Previous image" : "No previous image"}
          style={{
            position: "absolute",
            left: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid #DDDDDD",
            backgroundColor: "white",
            cursor: hasPrev ? "pointer" : "default",
            opacity: hasPrev ? 1 : 0.3,
            zIndex: 10,
            transition: "transform 0.2s, box-shadow 0.2s",
            color: "#222"
          }}
          onMouseEnter={(e) => hasPrev && (e.currentTarget.style.transform = "scale(1.04)", e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)")}
          onMouseLeave={(e) => hasPrev && (e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.boxShadow = "none")}
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>

        {/* Image Container */}
        {currentImage && (
          <div style={{ position: "relative", width: "100%", height: "100%", maxWidth: "1200px" }}>
            <Image
              key={currentImage.id} // Ensures smooth transition on React redraw if required
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              style={{ objectFit: "contain" }}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Next arrow */}
        <button
          onClick={goToNext}
          disabled={!hasNext}
          aria-label={hasNext ? "Next image" : "No next image"}
          style={{
            position: "absolute",
            right: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid #DDDDDD",
            backgroundColor: "white",
            cursor: hasNext ? "pointer" : "default",
            opacity: hasNext ? 1 : 0.3,
            zIndex: 10,
            transition: "transform 0.2s, box-shadow 0.2s",
            color: "#222"
          }}
          onMouseEnter={(e) => hasNext && (e.currentTarget.style.transform = "scale(1.04)", e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)")}
          onMouseLeave={(e) => hasNext && (e.currentTarget.style.transform = "scale(1)", e.currentTarget.style.boxShadow = "none")}
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
