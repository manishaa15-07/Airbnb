"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { NEARBY_STAYS } from "@/data/property";

export default function NearbyStays() {
  const [page, setPage] = useState(0);
  const perPage = 5;
  const totalPages = Math.ceil(NEARBY_STAYS.length / perPage);

  return (
    <section
      className="nearby-section"
      aria-labelledby="nearby-heading"
    >
      <div className="nearby-header">
        <h2 id="nearby-heading" className="nearby-title">
          More stays nearby
        </h2>
        <div className="nearby-nav">
          <span className="nearby-nav-text" aria-live="polite">
            {page + 1} / {totalPages}
          </span>
          <button
            className="nearby-nav-btn"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page of nearby stays"
          >
            <ChevronLeft size={14} aria-hidden="true" />
          </button>
          <button
            className="nearby-nav-btn"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next page of nearby stays"
          >
            <ChevronRight size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="nearby-cards"
        role="list"
        aria-label="Nearby property listings"
      >
        {NEARBY_STAYS.map((stay) => (
          <article key={stay.id} className="nearby-card" role="listitem">
            <div className="nearby-card-image">
              <Image
                src={stay.image}
                alt={`${stay.title} in ${stay.location}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="200px"
              />
            </div>
            <div className="nearby-card-rating">
              <Star
                size={12}
                fill="#222"
                color="#222"
                aria-hidden="true"
              />
              <span>{stay.rating}</span>
            </div>
            <div className="nearby-card-title">{stay.title}</div>
            <div className="nearby-card-price">
              <span style={{ fontWeight: 600 }}>
                ₹{stay.price.toLocaleString("en-IN")}
              </span>{" "}
              for 5 nights
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
