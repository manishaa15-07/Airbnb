"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { PropertyImage } from "@/data/property";

interface PhotoTourProps {
  images: PropertyImage[];
  onClose: () => void;
  onImageClick: (index: number) => void;
}

export default function PhotoTour({
  images,
  onClose,
  onImageClick,
}: PhotoTourProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  // Group images by category
  const categories = Array.from(new Set(images.map((img) => img.category)));
  const groupedImages = categories.map((cat) => ({
    category: cat,
    categoryDescription: images.find((img) => img.category === cat)?.categoryDescription,
    thumbnail: images.find((img) => img.category === cat)?.src,
    images: images.filter((img) => img.category === cat),
  }));

  const scrollToCategory = (cat: string) => {
    const el = document.getElementById(`category-${cat}`);
    if (el) {
      // offset for sticky header + thumbnails
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      // since PhotoTour is position fixed overlay, we need to scroll its container
      const container = document.getElementById("photo-tour-container");
      if (container) {
        const top = el.offsetTop - 120;
        container.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      id="photo-tour-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 10,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Back to listing"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7F7F7")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <ChevronLeft size={24} color="#222" />
        </button>
        <div style={{ fontSize: "16px", fontWeight: 600, color: "#222" }}>Photo tour</div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button style={{ border: "none", background: "none", cursor: "pointer", color: "#222" }}>
            <Share size={20} />
          </button>
          <button style={{ border: "none", background: "none", cursor: "pointer", color: "#222" }}>
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails Navigation */}
      {/* <div
        style={{
          width: "100%",
          padding: "24px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "1000px" }}>
          {groupedImages.map((group) => (
            <button
              key={group.category}
              onClick={() => scrollToCategory(group.category)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                border: "none",
                background: "none",
                cursor: "pointer",
                width: "100px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "70px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}
              >
                {group.thumbnail && (
                  <Image src={group.thumbnail} alt={group.category} fill style={{ objectFit: "cover" }} sizes="100px" />
                )}
              </div>
              <span style={{ fontSize: "12px", color: "#222", fontWeight: 500, textAlign: "left", lineHeight: 1.2 }}>
                {group.category}
              </span>
            </button>
          ))}
        </div>
      </div> */}

      {/* Thumbnails Navigation */}
      <div
        style={{
          width: "100%",
          padding: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "16px",
            maxWidth: "1000px",
          }}
        >
          {groupedImages.map((group) => (
            <button
              key={group.category}
              onClick={() => scrollToCategory(group.category)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                border: "none",
                background: "none",
                cursor: "pointer",
                width: "100px",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}
              >
                {group.thumbnail && (
                  <Image
                    src={group.thumbnail}
                    alt={group.category}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100px"
                  />
                )}
              </div>

              <span
                style={{
                  fontSize: "12px",
                  color: "#222",
                  fontWeight: 500,
                  textAlign: "left",
                  lineHeight: 1.2,
                }}
              >
                {group.category}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Gallery Sections */}
      <main
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          width: "100%",
          padding: "48px 24px",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "flex-start",
          gap: "80px",
        }}
      >
        {groupedImages.map((group) => (
          <section
            key={group.category}
            id={`category-${group.category}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2.5fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Left side: Text */}
            <div style={{ position: "sticky", top: "120px" }}>
              <h2 style={{ fontSize: "28px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>
                {group.category}
              </h2>
              {group.categoryDescription && (
                <p style={{ fontSize: "16px", color: "#717171", lineHeight: 1.5 }}>
                  {group.categoryDescription}
                </p>
              )}
            </div>

            {/* Right side: Photos */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {group.images.map((img, i) => {
                // Find original index for lightbox
                const originalIndex = images.findIndex((image) => image.id === img.id);
                // First image full width if total images is odd, OR just make first image full width
                // The screenshot shows first image full width, next 2 side-by-side.
                const isFullWidth = i === 0;

                return (
                  <button
                    key={img.id}
                    onClick={() => onImageClick(originalIndex)}
                    style={{
                      gridColumn: isFullWidth ? "1 / -1" : "auto",
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      borderRadius: "12px",
                      overflow: "hidden",
                      position: "relative",
                      aspectRatio: isFullWidth ? "16/9" : "4/3",
                    }}
                    aria-label={`Open ${img.alt} in full screen`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes={isFullWidth ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 50vw, 400px"}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0)",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.1)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0)")}
                    />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
