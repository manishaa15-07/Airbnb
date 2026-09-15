"use client";

import Image from "next/image";
import { SLEEP_ROOMS } from "@/data/property";

export default function SleepSection() {
  return (
    <div className="sleep-section">
      <h2 className="section-title">Where you&apos;ll sleep</h2>
      <div className="sleep-cards" role="list">
        {SLEEP_ROOMS.map((room) => (
          <article key={room.id} className="sleep-card" role="listitem">
            <div className="sleep-card-image">
              <Image
                src={room.image}
                alt={`${room.name} - ${room.description}`}
                width={220}
                height={140}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="sleep-card-content">
              <h3 className="sleep-card-title">{room.name}</h3>
              <p className="sleep-card-desc">{room.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
