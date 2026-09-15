"use client";

import { Calendar, Search, Shield } from "lucide-react";

export default function ThingsToKnow() {
  return (
    <section
      className="things-to-know"
      aria-labelledby="things-heading"
    >
      <h2 id="things-heading" className="section-title">
        Things to know
      </h2>
      <div className="know-grid" role="list">
        {/* Cancellation policy */}
        <article className="know-item" role="listitem">
          <div aria-hidden="true" style={{ marginBottom: 12 }}>
            <Calendar size={24} />
          </div>
          <h3>Cancellation policy</h3>
          <p>
            Free cancellation before 17 October. Cancel before check-in on 18
            October for a partial refund.
          </p>
          <p style={{ marginTop: 4 }}>
            Review this host&apos;s full policy for details.
          </p>
          <button className="know-link">Learn more</button>
        </article>

        {/* House rules */}
        <article className="know-item" role="listitem">
          <div aria-hidden="true" style={{ marginBottom: 12 }}>
            <Search size={24} />
          </div>
          <h3>House rules</h3>
          <p>Check-in after 2:00 pm</p>
          <p>Checkout before 11:00 am</p>
          <p>3 guests maximum</p>
          <button className="know-link">Learn more</button>
        </article>

        {/* Safety & property */}
        <article className="know-item" role="listitem">
          <div aria-hidden="true" style={{ marginBottom: 12 }}>
            <Shield size={24} />
          </div>
          <h3>Safety &amp; property</h3>
          <p>Carbon monoxide alarm not reported</p>
          <p>Smoke alarm not reported</p>
          <p>Exterior security cameras on property</p>
          <button className="know-link">Learn more</button>
        </article>
      </div>
    </section>
  );
}
