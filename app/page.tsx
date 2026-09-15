"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import PropertyHeader from "@/components/PropertyHeader";
import HeroGallery from "@/components/HeroGallery";
import PropertyInfo from "@/components/PropertyInfo";
import HostHighlights from "@/components/HostHighlights";
import Description from "@/components/Description";
import SleepSection from "@/components/SleepSection";
import Amenities from "@/components/Amenities";
import DatePicker from "@/components/DatePicker";
import Reviews from "@/components/Reviews";
import LocationSection from "@/components/LocationSection";
import HostSection from "@/components/HostSection";
import ThingsToKnow from "@/components/ThingsToKnow";
import NearbyStays from "@/components/NearbyStays";
import BookingCard from "@/components/BookingCard";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import PhotoTour from "@/components/PhotoTour";
import Lightbox from "@/components/Lightbox";
import Modal from "@/components/Modal";
import { AmenitiesModalContent } from "@/components/Amenities";
import { PROPERTY_IMAGES, ALL_AMENITIES, PROPERTY_DATA } from "@/data/property";

export default function Home() {
  // Photo Tour state
  const [photoTourOpen, setPhotoTourOpen] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Amenities modal state
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);

  const openPhotoTour = useCallback(() => {
    window.history.pushState({ photoTour: true }, "", "#photos");
    setPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    if (window.history.state?.photoTour) {
      window.history.back();
    } else {
      setPhotoTourOpen(false);
    }
  }, []);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state?.photoTour || window.location.hash === "#photos") {
        setPhotoTourOpen(true);
      } else {
        setPhotoTourOpen(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    
    // Check initial state in case of direct load with hash
    if (window.location.hash === "#photos") {
      setPhotoTourOpen(true);
    }
    
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigateLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  // Removed openPhotoTourThenLightbox since clicking hero image must open PhotoTour, not Lightbox.

  return (
    <>
      {/* Main page */}
      <Header />
      <StickyNav onPhotosClick={openPhotoTour} />

      <main id="main-content">
        <div className="page-container">
          {/* Property title */}
          <PropertyHeader title={PROPERTY_DATA.title} />

          {/* Hero gallery */}
          <div id="Photos">
            <HeroGallery
              images={PROPERTY_IMAGES}
              onShowAllPhotos={openPhotoTour}
              onImageClick={openPhotoTour}
            />
          </div>

          {/* Two-column layout */}
          <div className="main-layout" style={{ paddingBottom: 48, borderBottom: "1px solid var(--color-border-light)", marginBottom: 48 }}>
            {/* Left column */}
            <div>
              <PropertyInfo />
              <div className="divider" />
              <HostHighlights />
              <div className="divider" />
              <Description />
              <div className="divider" />
              <SleepSection />
              <div className="divider" id="Amenities" />
              <Amenities onShowAll={() => setAmenitiesModalOpen(true)} />
              <div className="divider" />

              <DatePicker />
            </div>

            {/* Right column – sticky booking card */}
            <aside aria-label="Booking information">
              <BookingCard />
            </aside>
          </div>

          <div id="Reviews">
            <Reviews />
          </div>
          <div className="divider" id="Location" />
          <LocationSection />
          <div className="divider" />
          <HostSection />
          <div className="divider" />
          <ThingsToKnow />

          {/* Nearby stays – full width below the grid */}
          <div className="divider" />
          <NearbyStays />
        </div>
      </main>

      <div className="divider" style={{ margin: "32px 0 0" }} />
      <Footer />

      {/* Overlays */}
      {photoTourOpen && (
        <PhotoTour
          images={PROPERTY_IMAGES}
          onClose={closePhotoTour}
          onImageClick={openLightbox}
        />
      )}

      {lightboxOpen && (
        <Lightbox
          images={PROPERTY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}

      {amenitiesModalOpen && (
        <Modal
          title="What this place offers"
          onClose={() => setAmenitiesModalOpen(false)}
        >
          <AmenitiesModalContent amenities={ALL_AMENITIES} />
        </Modal>
      )}
    </>
  );
}
