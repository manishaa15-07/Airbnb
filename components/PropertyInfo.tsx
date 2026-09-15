"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { PROPERTY_DATA } from "@/data/property";

const LeftWreath = () => (
  <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28C6 24 2 18 2 11C2 5 6 1 12 0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 11C6 12 9 10 10 7" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 17C6 18 9 16 10 13" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 5C7 6 10 4 11 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 23C7 24 10 22 11 19" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RightWreath = () => (
  <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28C18 24 22 18 22 11C22 5 18 1 12 0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 11C18 12 15 10 14 7" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 17C18 18 15 16 14 13" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20.5 5C17 6 14 4 13 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 23C17 24 14 22 13 19" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function PropertyInfo() {
  const { type, location, guests, bedrooms, beds, bathrooms, rating, reviewCount, hostName, hostAvatar } =
    PROPERTY_DATA;

  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4, color: "#222" }}>
        {type} in {location}
      </h2>
      <div style={{ fontSize: 16, color: "#222", marginBottom: 24 }}>
        <span>{guests} guests</span>
        <span style={{ margin: "0 4px" }}>·</span>
        <span>{bedrooms} bedroom</span>
        <span style={{ margin: "0 4px" }}>·</span>
        <span>{beds} bed</span>
        <span style={{ margin: "0 4px" }}>·</span>
        <span>{bathrooms} bathroom</span>
      </div>

      {/* Guest Favourite Box */}
      <div style={{
        border: "1px solid #DDDDDD",
        borderRadius: 12,
        padding: "24px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24
      }}>
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, width: 140, justifyContent: "center" }}>
          <LeftWreath />
          <div style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.1, textAlign: "center", display: "flex", flexDirection: "column", color: "#222" }}>
            <span>Guest</span>
            <span>favourite</span>
          </div>
          <RightWreath />
        </div>

        {/* Middle */}
        <div style={{ flex: 1, textAlign: "center", fontSize: 16, fontWeight: 500, color: "#222", padding: "0 16px" }}>
          One of the most loved homes on Airbnb,<br/>according to guests
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#222", lineHeight: 1.2 }}>{rating}</span>
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#222" color="#222" />
              ))}
            </div>
          </div>
          
          <div style={{ width: 1, height: 40, backgroundColor: "#DDDDDD" }}></div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#222", lineHeight: 1.2 }}>{reviewCount}</span>
            <span style={{ fontSize: 12, fontWeight: 600, textDecoration: "underline", color: "#222" }}>Reviews</span>
          </div>
        </div>
      </div>

      {/* Host info */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <Image src={hostAvatar} alt={hostName} width={40} height={40} style={{ borderRadius: "50%", backgroundColor: "#000" }} />
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#222" }}>Hosted by {hostName}</div>
          <div style={{ fontSize: 14, color: "#717171" }}>2 years hosting</div>
        </div>
      </div>
    </div>
  );
}
