"use client";

import { Star, MessageSquare, Map, Tag, Key, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const SprayBottleIcon = ({ size = 32, color = "#222", strokeWidth = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v4" />
    <path d="M10 4h4" />
    <path d="M9 13v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
    <path d="M7 13h10" />
    <path d="M7 13v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7" />
    <path d="M12 4V2" />
    <circle cx="16" cy="4" r="1" fill={color} stroke="none" />
    <circle cx="15" cy="2" r="1" fill={color} stroke="none" />
    <circle cx="18" cy="2" r="1" fill={color} stroke="none" />
  </svg>
);

const LeftWreath = ({ width = 64, height = 76 }) => (
  <svg width={width} height={height} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28C6 24 2 18 2 11C2 5 6 1 12 0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 11C6 12 9 10 10 7" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 17C6 18 9 16 10 13" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 5C7 6 10 4 11 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 23C7 24 10 22 11 19" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const RightWreath = ({ width = 64, height = 76 }) => (
  <svg width={width} height={height} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 28C18 24 22 18 22 11C22 5 18 1 12 0" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 11C18 12 15 10 14 7" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 17C18 18 15 16 14 13" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20.5 5C17 6 14 4 13 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 23C17 24 14 22 13 19" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const OverallRatingBar = ({ num, value }: { num: number, value: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', height: '14px' }}>
    <span style={{ width: '8px', textAlign: 'right', fontWeight: 600 }}>{num}</span>
    <div style={{ flex: 1, height: '4px', backgroundColor: '#DDDDDD', borderRadius: '2px', overflow: 'hidden' }}>
      <div style={{ width: `${value * 100}%`, height: '100%', backgroundColor: '#222222' }} />
    </div>
  </div>
);

const DetailRating = ({ label, value, icon: Icon }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ fontSize: '14px', color: '#222', fontWeight: 500, marginBottom: '16px' }}>{label}</div>
    <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>{value}</div>
    <Icon size={32} color="#222" strokeWidth={1} />
  </div>
);

const ReviewTag = ({ icon, label, count }: any) => (
  <div style={{ 
    display: 'flex', alignItems: 'center', gap: '8px', 
    padding: '8px 16px', border: '1px solid #DDDDDD', borderRadius: '24px', 
    fontSize: '14px', fontWeight: 600, color: '#222',
    whiteSpace: 'nowrap'
  }}>
    <span>{icon}</span>
    <span>{label}</span>
    <span style={{ fontWeight: 400, color: '#717171' }}>{count}</span>
  </div>
);

const reviewTags = [
  { icon: '🛋️', label: 'Comfort', count: 6 },
  { icon: '✅', label: 'Accuracy', count: 5 },
  { icon: '♨️', label: 'Hot tub', count: 5 },
  { icon: '📦', label: 'Condition', count: 4 },
  { icon: '🎁', label: 'Hospitality', count: 8 },
  { icon: '🧼', label: 'Cleanliness', count: 4 },
  { icon: '🧴', label: 'Amenities', count: 2 },
];

const REVIEWS_DATA = [
  {
    id: 1,
    author: "Amit",
    duration: "2 months on Airbnb",
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    avatarText: "A",
    avatarColor: "#FFEDD5" 
  },
  {
    id: 2,
    author: "Aheesh",
    duration: "3 years on Airbnb",
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    avatarText: "A",
    avatarImg: "https://i.pravatar.cc/150?u=aheesh", 
    hasMore: true
  },
  {
    id: 3,
    author: "Samiksha",
    duration: "8 months on Airbnb",
    date: "May 2026",
    text: "the host nitish was really great help",
    avatarText: "S",
    avatarImg: "https://i.pravatar.cc/150?u=samiksha"
  },
  {
    id: 4,
    author: "Vedant",
    duration: "4 years on Airbnb",
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    avatarText: "V",
    avatarColor: "#F3E8FF",
    hasMore: true
  },
  {
    id: 5,
    author: "Vaibhav S",
    duration: "3 years on Airbnb",
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    avatarText: "V",
    avatarImg: "https://i.pravatar.cc/150?u=vaibhav"
  },
  {
    id: 6,
    author: "Mohd",
    duration: "5 years on Airbnb",
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
    avatarText: "M",
    avatarImg: "https://i.pravatar.cc/150?u=mohd"
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-heading" id="Reviews">
      <h2 id="reviews-heading" style={{ display: "none" }}>Guest reviews</h2>

      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px', paddingTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <LeftWreath />
          <div style={{ fontSize: '96px', fontWeight: 800, lineHeight: 1, color: '#222', letterSpacing: '-0.02em' }}>
            4.95
          </div>
          <RightWreath />
        </div>
        <div style={{ fontSize: '22px', fontWeight: 600, color: '#222', marginBottom: '8px' }}>
          Guest favourite
        </div>
        <div style={{ fontSize: '16px', color: '#717171', textAlign: 'center', maxWidth: '400px', lineHeight: 1.4, marginBottom: '16px' }}>
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button style={{ fontSize: '14px', fontWeight: 600, textDecoration: 'underline', color: '#222', background: 'none', border: 'none', cursor: 'pointer' }}>
          How reviews work
        </button>
      </div>

      {/* Detailed Ratings */}
      <div style={{ display: 'flex', borderBottom: '1px solid #EBEBEB', paddingBottom: '32px', marginBottom: '32px' }}>
        <div style={{ width: '160px' }}>
          <div style={{ fontSize: '14px', color: '#222', fontWeight: 500, marginBottom: '16px' }}>Overall rating</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <OverallRatingBar num={5} value={0.95} />
            <OverallRatingBar num={4} value={0.05} />
            <OverallRatingBar num={3} value={0} />
            <OverallRatingBar num={2} value={0} />
            <OverallRatingBar num={1} value={0} />
          </div>
        </div>
        
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        
        <div style={{ flex: 1 }}>
           <DetailRating label="Cleanliness" value="5.0" icon={SprayBottleIcon} />
        </div>
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        <div style={{ flex: 1 }}>
           <DetailRating label="Accuracy" value="5.0" icon={CheckCircle2} />
        </div>
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        <div style={{ flex: 1 }}>
           <DetailRating label="Check-in" value="5.0" icon={Key} />
        </div>
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        <div style={{ flex: 1 }}>
           <DetailRating label="Communication" value="5.0" icon={MessageSquare} />
        </div>
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        <div style={{ flex: 1 }}>
           <DetailRating label="Location" value="4.8" icon={Map} />
        </div>
        <div style={{ width: '1px', backgroundColor: '#EBEBEB', margin: '0 24px' }} />
        <div style={{ flex: 1 }}>
           <DetailRating label="Value" value="4.8" icon={Tag} />
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className="hide-scrollbar">
        {reviewTags.map((tag, i) => (
          <ReviewTag key={i} {...tag} />
        ))}
      </div>

      {/* Reviews Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '96px', rowGap: '40px' }}>
        {REVIEWS_DATA.map(review => (
          <div key={review.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ 
                width: 48, height: 48, borderRadius: '50%', 
                backgroundColor: review.avatarColor || '#EBEBEB', 
                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {review.avatarImg ? (
                  <Image src={review.avatarImg} alt={review.author} width={48} height={48} style={{ objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#222' }}>{review.avatarText}</span>
                )}
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#222' }}>{review.author}</div>
                <div style={{ fontSize: '14px', color: '#717171' }}>{review.duration}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                 {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#222" color="#222" />)}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#222' }}>· {review.date}</span>
            </div>
            <p style={{ fontSize: '16px', color: '#222', lineHeight: 1.5, marginBottom: '8px' }}>
              {review.text}
            </p>
            {review.hasMore && (
              <button style={{ fontSize: '16px', fontWeight: 600, textDecoration: 'underline', color: '#222', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                Show more
              </button>
            )}
          </div>
        ))}
      </div>

      <button style={{ 
        marginTop: '48px', 
        padding: '12px 24px', 
        border: '1px solid #222', 
        borderRadius: '8px', 
        fontSize: '16px', 
        fontWeight: 600, 
        background: 'white', 
        color: '#222',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#F7F7F7'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
      >
        Show all 19 reviews
      </button>
    </section>
  );
}
