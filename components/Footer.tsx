"use client";

import { Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    "Privacy",
    "Terms",
    "Sitemap",
    "Company details",
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-links">
          <span style={{ fontSize: 14, color: "#222" }}>
            © {currentYear} Airbnb, Inc.
          </span>
          {footerLinks.map((link, i) => (
            <span key={link} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span className="footer-separator">·</span>
              <button className="footer-link">{link}</button>
            </span>
          ))}
        </div>

        <div className="footer-right">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Select language: English (US)"
          >
            <Globe size={16} aria-hidden="true" />
            English (US)
          </button>
          <button
            style={{
              fontSize: 14,
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Select currency: Indian Rupee"
          >
            ₹ INR
          </button>
          <button
            style={{
              fontSize: 14,
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Support and resources"
          >
            Support &amp; resources
          </button>
        </div>
      </div>
    </footer>
  );
}
