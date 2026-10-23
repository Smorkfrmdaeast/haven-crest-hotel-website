import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Waves, 
  UtensilsCrossed, 
  Sparkles, 
  Wifi, 
  Car, 
  Dumbbell, 
  Headphones, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  PhoneCall 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SafeImage } from '../components/common/SafeImage';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { StayEnquiryBar } from '../components/common/StayEnquiryBar';
import { RoomCard } from '../components/common/RoomCard';
import { RoomModal } from '../components/common/RoomModal';
import { IMAGES } from '../config/images';
import { 
  HOTEL_INFO, 
  ROOM_CATEGORIES, 
  AMENITY_HIGHLIGHTS, 
  TESTIMONIALS, 
  LOCATION_HIGHLIGHTS, 
  GALLERY_PHOTOS 
} from '../config/hotelData';
import { RoomCategory } from '../types';

export const Home: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  // Amenity icon map
  const renderAmenityIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C9A96E]' };
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Waves': return <Waves {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Wifi': return <Wifi {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Headphones': return <Headphones {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const previewRooms = ROOM_CATEGORIES.slice(0, 3);
  const mosaicPhotos = GALLERY_PHOTOS.slice(0, 6);

  return (
    <>
      <SEOHead
        title="Haven Crest Hotel & Suites | Five-Star Luxury in Enugu, Nigeria"
        description="Experience the pinnacle of Nigerian five-star hospitality at Haven Crest Hotel & Suites, Independence Layout, Enugu. Refined suites, culinary gastronomy, and serene wellness."
        canonicalPath="/"
      />

      {/* 1. IMMERSIVE HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center -mt-24 pt-28 pb-20 overflow-hidden">
        {/* Background Hero Image with Slow Zoom effect */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.hero.main}
            alt={IMAGES.hero.alt}
            width={IMAGES.hero.width}
            height={IMAGES.hero.height}
            className="w-full h-full object-cover scale-100 animate-in fade-in zoom-in-105 duration-1000"
          />
          {/* Subtle multi-layer luxury overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#121214]/65 to-black/85" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12 sm:mt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] bg-[#121214]/80 border border-[#C9A96E]/40 mb-6 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-[#C9A96E]">
              Independence Layout • Enugu, Nigeria
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F7F2E9] tracking-tight leading-[1.08] max-w-4xl drop-shadow-md">
            Where Enugu Rests <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C9A96E]">in Luxury</span>
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-sm sm:text-base md:text-lg text-[#E8E0D2]/90 font-light leading-relaxed">
            Nestled along the serene avenues of Independence Layout, Haven Crest crafts an oasis of understated five-star opulence, gastronomic mastery, and authentic Coal City warmth.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              to="/rooms"
              variant="solid-gold"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Rooms &amp; Suites
            </Button>
            <Button
              to="/contact-reservations"
              variant="outline-gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request a Reservation
            </Button>
          </div>

          <p className="mt-4 text-[10px] text-[#A39D93] uppercase tracking-widest font-sans">
            Demonstration Portfolio Website • Uncompromising Hospitality
          </p>
        </div>
      </section>

      {/* 2. COMPACT STAY ENQUIRY BAR */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <StayEnquiryBar />
      </section>

      {/* 3. EDITORIAL WELCOME SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans">
                The Haven Crest Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F2E9] leading-tight">
              A Symphony of Modern Elegance &amp; Timeless Nigerian Heritage
            </h2>

            <p className="text-sm sm:text-base text-[#A39D93] leading-relaxed font-light">
              Enugu has long stood as Eastern Nigeria’s beacon of culture, historic scholarship, and rolling natural hillscapes. At Haven Crest Hotel &amp; Suites, we have captured this serene cadence into an architectural jewel where every corner honors discretion, aesthetic poise, and uncompromising peace.
            </p>

            <p className="text-sm sm:text-base text-[#A39D93] leading-relaxed font-light">
              From our custom-designed suites enveloped in acoustics-isolated timber and Italian marble to our Michelin-inspired culinary kitchen, Haven Crest represents an elevated standard for visiting state dignitaries, executives, and families seeking an unhurried, majestic retreat.
            </p>

            {/* Editorial highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#C9A96E]/20 text-[#F7F2E9]">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#C9A96E] block font-light">45</span>
                <span className="text-xs uppercase tracking-wider text-[#A39D93] mt-1 block">Bespoke Suites</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#C9A96E] block font-light">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#A39D93] mt-1 block">Power Redundancy</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#C9A96E] block font-light">15 min</span>
                <span className="text-xs uppercase tracking-wider text-[#A39D93] mt-1 block">To Airport (ENU)</span>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Read Our Story &amp; Ethos
              </Button>
            </div>
          </div>

          {/* Right Imagery with Gold Border Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 rounded-[3px] overflow-hidden border border-[#C9A96E]/30 shadow-2xl">
              <SafeImage
                src={IMAGES.editorialIntro.url}
                alt={IMAGES.editorialIntro.alt}
                width={IMAGES.editorialIntro.width}
                height={IMAGES.editorialIntro.height}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#121214]/90 backdrop-blur-xs border border-[#C9A96E]/30 rounded-[2px]">
                <p className="font-serif text-lg text-[#F7F2E9] italic">
                  "Exclusivity without pretension. Serenity without compromise."
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#C9A96E] mt-1 block">
                  Haven Crest Design Standard
                </span>
              </div>
            </div>

            {/* Decorative Gold Inset Border behind */}
            <div 
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A96E]/20 -z-10 rounded-[3px] pointer-events-none hidden sm:block" 
              aria-hidden="true" 
            />
          </div>
        </div>
      </section>

      {/* 4. ROOMS & SUITES PREVIEW */}
      <section className="py-20 bg-[#161618] border-y border-[#C9A96E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sanctuaries of Rest"
            title="Rooms &amp; Suites Designed for Slumber"
            subtitle="Every chamber at Haven Crest has been acoustic-engineered and tailored with Egyptian cotton linens, custom hardwood joinery, and spa-grade ensuite marble baths."
          />

          {/* 3 Featured Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onOpenModal={(r) => setSelectedRoom(r)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Button
              to="/rooms"
              variant="outline-gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All 5 Room &amp; Suite Tiers
            </Button>
            <p className="mt-2 text-xs text-[#6B665E]">
              Includes Deluxe, Executive, Haven Suite, and Presidential Penthouse
            </p>
          </div>
        </div>
      </section>

      {/* 5. AMENITIES GRID */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Uncompromising Comfort"
          title="Distinguished Five-Star Amenities"
          subtitle="Engineered for seamless productivity and restorative wellbeing in the heart of Independence Layout."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITY_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[3px] bg-[#161618] border border-[#C9A96E]/15 hover:border-[#C9A96E]/40 transition-all duration-300 group hover:-translate-y-1 shadow-md"
            >
              <div className="w-12 h-12 rounded-[2px] bg-[#121214] border border-[#C9A96E]/30 flex items-center justify-center mb-5 group-hover:border-[#C9A96E] transition-colors">
                {renderAmenityIcon(item.icon)}
              </div>
              <h3 className="font-serif text-xl text-[#F7F2E9] group-hover:text-[#C9A96E] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs text-[#A39D93] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GUEST EXPERIENCE HIGHLIGHTS (SIGNATURE MOMENTS) */}
      <section className="py-20 bg-[#121214] border-t border-[#C9A96E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curated Living"
            title="Signature Moments at Haven Crest"
            subtitle="Distinctive sensory rituals created to make every hour in Enugu memorable."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Signature 1 */}
            <div className="relative rounded-[3px] overflow-hidden border border-[#C9A96E]/20 bg-[#161618] group">
              <div className="aspect-16/10 overflow-hidden">
                <SafeImage
                  src={IMAGES.facilities.restaurant}
                  alt="Fine dining table setting at Haven Crest"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium block">
                  Signature Ritual
                </span>
                <h3 className="font-serif text-2xl text-[#F7F2E9] mt-1">
                  The Coal City Gastronomic Journey
                </h3>
                <p className="mt-2.5 text-xs text-[#A39D93] leading-relaxed">
                  A multi-course tasting experience exploring forgotten indigenous herbs and spices from the hills of Nsukka, paired with hand-selected French Grand Crus.
                </p>
              </div>
            </div>

            {/* Signature 2 */}
            <div className="relative rounded-[3px] overflow-hidden border border-[#C9A96E]/20 bg-[#161618] group">
              <div className="aspect-16/10 overflow-hidden">
                <SafeImage
                  src={IMAGES.facilities.pool}
                  alt="Emerald Horizon Pool cabanas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium block">
                  Signature Ritual
                </span>
                <h3 className="font-serif text-2xl text-[#F7F2E9] mt-1">
                  Sunset Cabana Champagne Hour
                </h3>
                <p className="mt-2.5 text-xs text-[#A39D93] leading-relaxed">
                  As the sun dips behind the Milken Hills, relax on private daybeds as our mixologists serve chilled champagne and artisanal canapés.
                </p>
              </div>
            </div>

            {/* Signature 3 */}
            <div className="relative rounded-[3px] overflow-hidden border border-[#C9A96E]/20 bg-[#161618] group">
              <div className="aspect-16/10 overflow-hidden">
                <SafeImage
                  src={IMAGES.facilities.spa}
                  alt="Aura Spa treatment oils and flowers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium block">
                  Signature Ritual
                </span>
                <h3 className="font-serif text-2xl text-[#F7F2E9] mt-1">
                  Ancestral Botanical Restorations
                </h3>
                <p className="mt-2.5 text-xs text-[#A39D93] leading-relaxed">
                  Warm organic shea butter, fragrant lemongrass, and mineral salt therapies administered by master therapists inside serene sound-damped treatment suites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW MOSAIC */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans">
                Visual Showcase
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2E9] font-light">
              Glimpses of Distinction
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 sm:mt-0 text-xs uppercase tracking-[0.2em] text-[#C9A96E] hover:text-[#D8BD85] flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Gallery (16 Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {mosaicPhotos.map((photo, i) => (
            <Link
              key={photo.id}
              to="/gallery"
              className={`relative rounded-[2px] overflow-hidden group border border-[#C9A96E]/20 bg-[#121214] ${
                i === 0 || i === 3 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <SafeImage
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[10px] text-[#C9A96E] uppercase tracking-wider">{photo.category}</span>
                <h4 className="text-xs text-white font-serif truncate">{photo.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. SAMPLE TESTIMONIALS */}
      <section className="py-20 bg-[#161618] border-y border-[#C9A96E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guest Impressions"
            title="Cherished Reflections"
            subtitle="Illustrative feedback from distinguished patrons (Demonstration samples for website presentation)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 flex flex-col justify-between shadow-lg relative"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#C9A96E] mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A96E]" />
                    ))}
                  </div>

                  <p className="font-serif italic text-base sm:text-lg text-[#E8E0D2] leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#C9A96E]/15 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-sans font-medium text-[#F7F2E9]">{test.guestName}</h4>
                    <span className="text-[#6B665E]">{test.location}</span>
                  </div>
                  <span className="text-[10px] text-[#C9A96E] uppercase tracking-wider bg-[#C9A96E]/10 px-2 py-0.5 rounded-[2px]">
                    {test.roomStayed}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[11px] text-[#6B665E] italic">
            * Note: Testimonials above are simulated illustrative demonstrations for the Haven Crest Hotel portfolio pitch.
          </p>
        </div>
      </section>

      {/* 9. LOCATION & MAP PLACEHOLDER SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Proximity highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#C9A96E]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans">
                The Coal City Setting
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2E9] font-light leading-tight">
              Perfect Seclusion in Prestigious Independence Layout
            </h2>

            <p className="text-sm text-[#A39D93] leading-relaxed">
              Situated within the guarded residential and diplomatic district of Independence Layout, Haven Crest offers total acoustic sanctuary while remaining effortlessly connected to key transit corridors, commercial hubs, and historic landmarks.
            </p>

            <div className="space-y-3 pt-2">
              {LOCATION_HIGHLIGHTS.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[2px] bg-[#161618] border border-[#C9A96E]/15 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0" />
                    <div>
                      <span className="text-[#F7F2E9] font-medium block">{loc.place}</span>
                      <span className="text-[11px] text-[#6B665E]">{loc.note}</span>
                    </div>
                  </div>
                  <span className="font-serif text-sm text-[#C9A96E] font-medium shrink-0 ml-4">
                    {loc.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stylized Luxury Map Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-[3px] overflow-hidden border border-[#C9A96E]/30 bg-[#121214] shadow-2xl p-6 flex flex-col justify-between">
              {/* Map grid lines illustration */}
              <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A96E 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* Decorative topographical contour lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100,200 Q200,50 500,250 T1000,100" fill="none" stroke="#C9A96E" strokeWidth="1.5" />
                <path d="M-100,350 Q300,180 600,400 T1100,200" fill="none" stroke="#C9A96E" strokeWidth="1" />
                <path d="M-50,450 Q350,300 700,500 T1200,350" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
              </svg>

              {/* Header inside map */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[2px] bg-[#161618]/90 border border-[#C9A96E]/40 text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium">
                  Independence Layout Map
                </span>
                <span className="text-[10px] text-[#A39D93] uppercase tracking-wider">
                  Enugu State, Nigeria
                </span>
              </div>

              {/* Center Crest Marker */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#1C1C1E] border-2 border-[#C9A96E] flex items-center justify-center shadow-xl shadow-[#C9A96E]/10 animate-pulse">
                  <MapPin className="w-6 h-6 text-[#C9A96E]" />
                </div>
                <h4 className="font-serif text-2xl text-[#F7F2E9] mt-3">
                  Haven Crest Hotel &amp; Suites
                </h4>
                <p className="text-xs text-[#A39D93] mt-1 max-w-xs">
                  {HOTEL_INFO.fullAddress}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#C9A96E]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Triple-Tier Gated Security Enclave</span>
                </div>
              </div>

              {/* Bottom footer disclaimer inside map placeholder */}
              <div className="relative z-10 pt-3 border-t border-[#C9A96E]/20 flex items-center justify-between text-[10px] text-[#6B665E]">
                <span>Sample stylized location illustration</span>
                <span>Coordinates: 6.4474° N, 7.5140° E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL RESERVATION CTA BAND */}
      <section className="relative py-24 bg-gradient-to-r from-[#121214] via-[#1C1C1E] to-[#121214] border-t border-[#C9A96E]/30 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-sans uppercase tracking-[0.28em] text-[#C9A96E] font-medium block mb-3">
            Begin Your Coal City Retreat
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F2E9] font-light leading-tight">
            Reserve Your Haven of Elegance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-xl mx-auto leading-relaxed">
            Experience discrete exclusivity, unparalleled serenity, and memorable hospitality. Submit your stay inquiry today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact-reservations"
              variant="solid-gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Demonstration Enquiry
            </Button>
            <Button
              to="/rooms"
              variant="outline-gold"
              size="lg"
            >
              Explore All Suites
            </Button>
          </div>
          <p className="mt-6 text-[11px] text-[#6B665E] font-sans">
            * Prototype demonstration for client presentation • No real payment or booking processed
          </p>
        </div>
      </section>

      {/* Room Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={selectedRoom !== null}
        onClose={() => setSelectedRoom(null)}
      />
    </>
  );
};
