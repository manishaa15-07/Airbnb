// data/property.ts
// Central data file for the property listing

export interface PropertyImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  categoryDescription?: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon: string;
  available: boolean;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  text: string;
  rating: number;
}

export interface NearbyStay {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  location: string;
}

export interface RoomCard {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Property images – real Unsplash photos of Goa/Indian apartment interiors
export const PROPERTY_IMAGES: PropertyImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    alt: "Spacious outdoor terrace with wicker lounge chairs and ambient lighting",
    category: "Living room 1",
    categoryDescription: "Sofa · Air conditioning · Ceiling fan · TV",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Modern outdoor seating area with stone wall backdrop",
    category: "Living room 1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    alt: "Private jacuzzi bathtub with wooden surround",
    category: "Living room 2",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=800&q=80",
    alt: "Elegant bedroom with warm lighting and wooden furniture",
    category: "Bedroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=800&q=80",
    alt: "Modern apartment building exterior view",
    category: "Exterior",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Cozy living room with sofa and colorful decor",
    category: "Full kitchen",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Modern kitchen with white cabinets and appliances",
    category: "Full kitchen",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    alt: "Bathroom with clean white fixtures and tiles",
    category: "Full bathroom",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    alt: "Bedroom corner with artwork and plants",
    category: "Bedroom",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    alt: "Open plan dining area with wooden table",
    category: "Gym",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    alt: "Rooftop pool with city views",
    category: "Pool",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Resort-style outdoor area",
    category: "Pool",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Hotel-style corridor and entrance",
    category: "Exterior",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    alt: "Scenic view from balcony",
    category: "Additional photos",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    alt: "Comfortable bed with white linens",
    category: "Additional photos",
  },
];

export const SLEEP_ROOMS: RoomCard[] = [
  {
    id: 1,
    name: "Bedroom",
    description: "1 double bed",
    image:
      "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&q=80",
  },
  {
    id: 2,
    name: "Living room",
    description: "1 sofa",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
];

export const AMENITIES: Amenity[] = [
  { id: "kitchen", label: "Kitchen", icon: "kitchen", available: true },
  { id: "workspace", label: "Dedicated workspace", icon: "workspace", available: true },
  { id: "pool", label: "Pool", icon: "pool", available: true },
  { id: "pets", label: "Pets allowed", icon: "pets", available: true },
  { id: "co-alarm", label: "Carbon monoxide alarm", icon: "co-alarm", available: false },
  { id: "smoke-alarm", label: "Smoke alarm", icon: "smoke-alarm", available: false },
  { id: "wifi", label: "Wifi", icon: "wifi", available: true },
  { id: "parking", label: "Free parking on premises", icon: "parking", available: true },
  { id: "hottub", label: "Hot tub", icon: "hottub", available: true },
  { id: "cameras", label: "Exterior security cameras on property", icon: "cameras", available: true },
];

export const ALL_AMENITIES: Amenity[] = [
  ...AMENITIES,
  { id: "ac", label: "Air conditioning", icon: "ac", available: true },
  { id: "washer", label: "Washer", icon: "washer", available: true },
  { id: "dryer", label: "Dryer", icon: "dryer", available: true },
  { id: "tv", label: "Smart TV", icon: "tv", available: true },
  { id: "fan", label: "Ceiling fan", icon: "fan", available: true },
  { id: "shampoo", label: "Shampoo", icon: "shampoo", available: true },
  { id: "conditioner", label: "Conditioner", icon: "conditioner", available: true },
  { id: "bodywash", label: "Body wash", icon: "bodywash", available: true },
  { id: "towels", label: "Towels provided", icon: "towels", available: true },
  { id: "linens", label: "Bed linens", icon: "linens", available: true },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Priya",
    avatar: "https://i.pravatar.cc/40?img=1",
    date: "September 2026",
    text: "Absolutely stunning property! The jacuzzi was a highlight of our stay. The place is exactly as described and very clean. Location is great—close to the beach and local cafes.",
    rating: 5,
  },
  {
    id: 2,
    author: "Rahul",
    avatar: "https://i.pravatar.cc/40?img=5",
    date: "August 2026",
    text: "Beautiful apartment with a lovely terrace. The host was very responsive and the check-in process was smooth. Would definitely come back!",
    rating: 5,
  },
  {
    id: 3,
    author: "Ananya",
    avatar: "https://i.pravatar.cc/40?img=9",
    date: "July 2026",
    text: "Perfect romantic getaway. The jacuzzi is amazing and the apartment is cozy and well-equipped. Great value for money in Candolim.",
    rating: 5,
  },
  {
    id: 4,
    author: "Vikram",
    avatar: "https://i.pravatar.cc/40?img=12",
    date: "June 2026",
    text: "Loved the place! Clean, modern, and centrally located. The pool area is a great bonus. Host was very helpful throughout our stay.",
    rating: 5,
  },
  {
    id: 5,
    author: "Meera",
    avatar: "https://i.pravatar.cc/40?img=47",
    date: "May 2026",
    text: "Great place to stay in Goa. The terrace with outdoor seating was our favorite spot. Everything was clean and well-maintained.",
    rating: 4,
  },
  {
    id: 6,
    author: "Arjun",
    avatar: "https://i.pravatar.cc/40?img=52",
    date: "April 2026",
    text: "Wonderful stay at Mirashya. The interiors are beautiful and the amenities are top-notch. Highly recommend for couples visiting Goa.",
    rating: 5,
  },
];

export const NEARBY_STAYS: NearbyStay[] = [
  {
    id: 1,
    title: "Beautiful Studio with a view to die for",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    price: 23600,
    rating: 4.91,
    location: "Calangute",
  },
  {
    id: 2,
    title: "NAQAB - 1bhk with private pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80",
    price: 42218,
    rating: 4.95,
    location: "Calangute",
  },
  {
    id: 3,
    title: "Greentique Luxury Flat with plunge pool",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    price: 44506,
    rating: 4.94,
    location: "Calangute",
  },
  {
    id: 4,
    title: "The Tropical Studio | 5 mins to Beach",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
    price: 22824,
    rating: 4.96,
    location: "Calangute",
  },
  {
    id: 5,
    title: "Luxury Casa Bella 1BHK with plunge pool",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    price: 39942,
    rating: 4.95,
    location: "Calangute",
  },
];

export const PROPERTY_DATA = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment",
  location: "Candolim, India",
  mapLocation: "Candolim, Goa, India",
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  pricePerNight: 5699,
  priceTotal: 28499,
  nights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  checkInTime: "2:00 pm",
  checkOutTime: "11:00 am",
  maxGuests: 3,
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🎵, it's ideal for a romantic escape or a peaceful solo retreat.

🌟 Thoughtfully designed with an aesthetic indoor space, a well-equipped kitchen, and premium bedding—everything you need for a luxurious yet homely stay. The building offers a shared pool and dedicated parking.

Whether you're unwinding in the jacuzzi after a beach day or exploring the vibrant streets of North Goa, this apartment is your perfect base. Book now and create memories that last a lifetime! 🌊`,
  descriptionShort: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🎵, it's ideal for...`,
  hostName: "Mirashya Homes",
  hostAvatar: "https://i.pravatar.cc/56?img=33",
  hostJoined: "2022",
  hostReviews: 47,
  hostRating: 4.97,
  isSuperhost: true,
  hostLanguages: ["English", "Hindi"],
  highlights: [
    {
      id: 1,
      icon: "outdoor",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
    },
    {
      id: 2,
      icon: "cool",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      id: 3,
      icon: "checkin",
      title: "Self check-in",
      description: "You can check in with the building staff.",
    },
  ],
};
