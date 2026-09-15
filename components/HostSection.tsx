"use client";

import Image from "next/image";
import { Star, GraduationCap, Shield, Check } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

const BalloonIcon = ({ size = 24, color = "#222" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 16.5c3.314 0 6-3.134 6-7s-2.686-7-6-7-6 3.134-6 7 2.686 7 6 7z"/>
    <path d="M12 16.5v4.5"/>
    <path d="M10 21h4"/>
  </svg>
);

const CoHost = ({ name, img, initial, color }: any) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{ 
      width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', 
      backgroundColor: color || '#EBEBEB', display: 'flex', alignItems: 'center', 
      justifyContent: 'center', flexShrink: 0 
    }}>
      {img ? (
        <Image src={img} alt={name} width={40} height={40} style={{ objectFit: 'cover' }} />
      ) : (
        <span style={{ fontSize: '14px', fontWeight: 500, color: '#E31C5F' }}>{initial}</span>
      )}
    </div>
    <span style={{ fontSize: '14px', color: '#222' }}>{name}</span>
  </div>
);

export default function HostSection() {
  const { hostAvatar } = PROPERTY_DATA;

  const coHosts = [
    { name: "Sharath", img: "https://i.pravatar.cc/150?u=sharath" },
    { name: "Aman Dev Pahwa", img: "https://i.pravatar.cc/150?u=aman" },
    { name: "Maria Karen Priyanka", img: "https://i.pravatar.cc/150?u=maria" },
    { name: "Simran", img: "https://i.pravatar.cc/150?u=simran" },
    { name: "Pallavi", img: "https://i.pravatar.cc/150?u=pallavi" },
    { name: "Sanyukta", img: "https://i.pravatar.cc/150?u=sanyukta" },
    { name: "Shruti", initial: "S", color: "#FCE7F3" }, // pink-100
    { name: "Amisha", initial: "A", color: "#E0F2FE" }, // sky-100
  ];

  return (
    <section className="host-section" aria-labelledby="host-heading" id="Host">
      <h2 id="host-heading" style={{ fontSize: '26px', fontWeight: 600, marginBottom: '32px', color: '#222' }}>
        Meet your host
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '80px', alignItems: 'start' }}>
        
        {/* Left Column */}
        <div>
          {/* Card */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '32px', 
            boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px'
          }}>
            {/* Left part of card */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{ position: 'relative', width: '104px', height: '104px', marginBottom: '12px' }}>
                <Image src={hostAvatar} alt="Mirashya Homes" fill style={{ borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 4, right: 4, backgroundColor: '#E31C5F', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
                  <Check size={14} color="white" strokeWidth={4} />
                </div>
              </div>
              <div style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', lineHeight: 1.1, marginBottom: '4px', color: '#222' }}>
                Mirashya<br/>Homes
              </div>
              <div style={{ fontSize: '14px', color: '#222', fontWeight: 500 }}>Host</div>
            </div>
            
            {/* Right part of card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '32px' }}>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, color: '#222', marginBottom: '2px' }}>1,463</div>
                <div style={{ fontSize: '10px', color: '#222', fontWeight: 600 }}>Reviews</div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#EBEBEB' }} />
              <div>
                <div style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, display: 'flex', alignItems: 'center', gap: '4px', color: '#222', marginBottom: '2px' }}>
                  4.68<Star size={14} fill="#222" color="#222" />
                </div>
                <div style={{ fontSize: '10px', color: '#222', fontWeight: 600 }}>Rating</div>
              </div>
              <div style={{ height: '1px', backgroundColor: '#EBEBEB' }} />
              <div>
                <div style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1, color: '#222', marginBottom: '2px' }}>2</div>
                <div style={{ fontSize: '10px', color: '#222', fontWeight: 600 }}>Years hosting</div>
              </div>
            </div>
          </div>

          {/* About Host lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: '#222' }}>
              <BalloonIcon size={24} />
              <span style={{ fontSize: '16px' }}>Born in the 80s</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: '#222' }}>
              <GraduationCap size={24} strokeWidth={1.5} />
              <span style={{ fontSize: '16px' }}>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px', color: '#222' }}>Co-Hosts</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: '20px', columnGap: '16px', marginBottom: '48px' }}>
            {coHosts.map((cohost, index) => (
              <CoHost key={index} {...cohost} />
            ))}
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#222' }}>Host details</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '16px', color: '#222' }}>
            <div>Response rate: 100%</div>
            <div>Responds within an hour</div>
          </div>

          <button style={{ 
            padding: '12px 24px', 
            backgroundColor: '#F7F7F7', 
            color: '#222',
            border: 'none', 
            borderRadius: '8px', 
            fontSize: '16px', 
            fontWeight: 600, 
            cursor: 'pointer', 
            marginBottom: '48px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EBEBEB'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F7F7F7'}
          >
            Message host
          </button>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Shield size={24} color="#717171" strokeWidth={1.5} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '12px', color: '#717171', lineHeight: 1.4 }}>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
