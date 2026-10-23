/**
 * Type definitions for Haven Crest Hotel & Suites
 */

export interface RoomImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
  type: 'room' | 'suite';
  samplePriceNaira: number;
  formattedPrice: string;
  capacity: string;
  maxGuests: number;
  bedType: string;
  sizeSqm: number;
  sizeSqft: number;
  view: string;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  images: RoomImage[];
  amenities: string[];
  keyHighlights: string[];
}

export interface FacilityItem {
  id: string;
  name: string;
  tagline: string;
  category: 'dining' | 'wellness' | 'events' | 'services';
  description: string;
  sampleHours: string;
  image: string;
  imageAlt: string;
  features: string[];
  dressCode?: string;
  reservationRequired?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  tagline: string;
  sampleSavings: string;
  validity: string;
  description: string;
  inclusions: string[];
  image: string;
  imageAlt: string;
  code: string;
  targetRoomId?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'rooms' | 'dining' | 'facilities' | 'exterior';
  url: string;
  alt: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  location: string;
  stayDate: string;
  quote: string;
  roomStayed: string;
  rating: number;
}

export interface ReservationFormData {
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomCategory: string;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ReservationErrors {
  checkInDate?: string;
  checkOutDate?: string;
  guests?: string;
  roomCategory?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
}
