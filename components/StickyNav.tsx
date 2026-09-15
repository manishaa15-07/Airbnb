"use client";

import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

const SECTIONS = ["Photos", "Amenities", "Reviews", "Location"] as const;
type Section = (typeof SECTIONS)[number];

const SECTION_IDS: Record<Section, string> = {
  Photos: "Photos",
  Amenities: "Amenities",
  Reviews: "Reviews",
  Location: "Location",
};

interface StickyNavProps {
  onPhotosClick: () => void;
}

export default function StickyNav({ onPhotosClick }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState<Section>("Photos");
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroGallery = document.querySelector(".hero-gallery");
    if (!heroGallery) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(heroGallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.slice(1); // skip Photos
      let currentSection: Section = "Photos";

      for (const section of sections) {
        const el = document.getElementById(SECTION_IDS[section]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (section: Section) => {
    setActiveSection(section);
    if (section === "Photos") {
      onPhotosClick();
      return;
    }
    const el = document.getElementById(SECTION_IDS[section]);
    if (el) {
      const headerOffset = 150;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="sticky-nav animate-fadeIn"
      ref={navRef}
      role="navigation"
      aria-label="Property sections navigation"
    >
      <div className="sticky-nav-inner">
        <div className="sticky-nav-tabs" role="tablist">
          {SECTIONS.map((section) => (
            <button
              key={section}
              className={`sticky-nav-tab${activeSection === section ? " active" : ""}`}
              onClick={() => handleTabClick(section)}
              role="tab"
              aria-selected={activeSection === section}
              aria-label={`Navigate to ${section} section`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="sticky-nav-right">
          <div className="sticky-price-info">
            <span style={{ fontWeight: 600 }}>
              ₹{PROPERTY_DATA.priceTotal.toLocaleString("en-IN")}
            </span>{" "}
            for {PROPERTY_DATA.nights} nights
            <span style={{ margin: "0 8px" }}>·</span>
            <Star
              size={12}
              fill="#222"
              color="#222"
              aria-hidden="true"
              style={{ display: "inline", verticalAlign: "middle" }}
            />{" "}
            <span style={{ fontWeight: 600 }}>{PROPERTY_DATA.rating}</span>
            <span style={{ color: "#717171" }}>
              {" "}
              · {PROPERTY_DATA.reviewCount} reviews
            </span>
          </div>
          <button
            className="sticky-reserve-btn"
            aria-label="Reserve this property"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
