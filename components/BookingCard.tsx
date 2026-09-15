"use client";

import { ChevronDown, Flag } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

interface BookingCardProps {
  onReserve?: () => void;
}

export default function BookingCard({ onReserve }: BookingCardProps) {
  const { pricePerNight, priceTotal, nights, checkIn, checkOut } =
    PROPERTY_DATA;

  return (
    <div className="booking-card-wrapper">
      {/* Promo banner */}
      <div className="promo-banner" role="note">
        <div className="promo-left">
          <span className="promo-icon" aria-hidden="true">
            🌿
          </span>
          <div>
            <span className="promo-text">Get 10% off your next stay. </span>
            <button className="promo-link">Terms apply</button>
          </div>
        </div>
        <button className="claim-btn" aria-label="Claim 10% discount">
          Claim
        </button>
      </div>

      <div className="booking-card">
        {/* Price */}
        <div className="booking-price-row">
          <span className="booking-price">
            ₹{priceTotal.toLocaleString("en-IN")}
          </span>
          <span className="booking-price-label">
            for {nights} nights
          </span>
        </div>

        {/* Inputs */}
        <div className="booking-inputs">
          <div className="booking-date-row">
            <div className="booking-input-field">
              <div className="booking-input-label">CHECK-IN</div>
              <div className="booking-input-value">{checkIn}</div>
            </div>
            <div className="booking-input-field">
              <div className="booking-input-label">CHECKOUT</div>
              <div className="booking-input-value">{checkOut}</div>
            </div>
          </div>
          <div className="booking-guests-row">
            <div>
              <div className="booking-guests-label">GUESTS</div>
              <div className="booking-guests-value">2 guests</div>
            </div>
            <ChevronDown
              size={16}
              aria-hidden="true"
              style={{ color: "#222222" }}
            />
          </div>
        </div>

        {/* Cancellation */}
        <div className="booking-cancellation">
          Free cancellation before{" "}
          <strong>17 October</strong>
        </div>

        {/* Reserve Button */}
        <button
          className="reserve-btn"
          onClick={onReserve}
          aria-label={`Reserve for ₹${priceTotal.toLocaleString("en-IN")} total`}
        >
          Reserve
        </button>

        <p className="no-charge-text">You won&apos;t be charged yet</p>

        {/* Price breakdown */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
            }}
          >
            <button
              style={{
                textDecoration: "underline",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                color: "#222",
                fontFamily: "inherit",
              }}
              aria-label={`₹${pricePerNight.toLocaleString("en-IN")} × ${nights} nights`}
            >
              ₹{pricePerNight.toLocaleString("en-IN")} × {nights} nights
            </button>
            <span>₹{priceTotal.toLocaleString("en-IN")}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: "#222",
              paddingTop: 8,
              borderTop: "1px solid #EBEBEB",
              fontWeight: 600,
            }}
          >
            <span>Total</span>
            <span>₹{priceTotal.toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Report link */}
        <button
          className="report-link"
          style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          aria-label="Report this listing"
        >
          <Flag size={14} aria-hidden="true" />
          Report this listing
        </button>
      </div>
    </div>
  );
}
