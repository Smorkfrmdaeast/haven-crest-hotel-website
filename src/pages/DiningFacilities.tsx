import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { SafeImage } from '../components/common/SafeImage';
import { Button } from '../components/common/Button';
import { FACILITIES } from '../config/hotelData';
import { Clock, Check, Utensils, Sparkles, Calendar, Car } from 'lucide-react';

export const DiningFacilities: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dining' | 'wellness' | 'events' | 'services'>('all');

  const filteredFacilities = FACILITIES.filter((f) => {
    if (filter === 'all') return true;
    return f.category === filter;
  });

  return (
    <>
      <SEOHead
        title="Dining &amp; Facilities | Haven Crest Hotel, Enugu"
        description="Experience haute cuisine at The Crest Dining Room, cocktails at The Obsidian Lounge, treatments at Aura Spa, and ballroom events in Enugu, Nigeria."
        canonicalPath="/dining-facilities"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <Utensils className="w-3.5 h-3.5" />
            Gastronomy &amp; Leisure
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            Dining &amp; Facilities
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            From the culinary theater of The Crest Dining Room to the tranquil waters of the Emerald Horizon Pool and executive airport motorcades, every facility has been crafted to exceed international standards.
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <section className="bg-[#161618] border-b border-[#C9A96E]/15 py-4 px-4 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {[
            { id: 'all', label: 'All Experiences' },
            { id: 'dining', label: 'Dining & Bars' },
            { id: 'wellness', label: 'Spa, Pool & Gym' },
            { id: 'events', label: 'Ballroom & Meetings' },
            { id: 'services', label: 'VIP Chauffeur' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] rounded-[2px] transition-colors cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#C9A96E] text-[#121214] font-medium'
                  : 'text-[#A39D93] hover:text-[#F7F2E9] hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Alternating Editorial Showcase */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {filteredFacilities.map((facility, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={facility.id}
              id={facility.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="relative aspect-16/10 rounded-[3px] overflow-hidden border border-[#C9A96E]/25 shadow-2xl group">
                  <SafeImage
                    src={facility.image}
                    alt={facility.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[2px] bg-[#121214]/85 backdrop-blur-xs text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] border border-[#C9A96E]/30 font-medium">
                      {facility.category}
                    </span>
                  </div>
                </div>

                {/* Decorative border accent behind */}
                <div
                  className={`absolute -bottom-3 ${
                    isEven ? '-left-3' : '-right-3'
                  } w-full h-full border border-[#C9A96E]/15 -z-10 rounded-[3px] pointer-events-none hidden sm:block`}
                  aria-hidden="true"
                />
              </div>

              {/* Text Editorial Column */}
              <div
                className={`lg:col-span-6 space-y-5 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans block mb-2">
                    {facility.tagline}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2E9] font-light leading-snug">
                    {facility.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#A39D93] leading-relaxed font-light">
                  {facility.description}
                </p>

                {/* Sample Hours Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-[2px] bg-[#121214] border border-[#C9A96E]/20 text-xs text-[#E8E0D2]">
                  <Clock className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                  <span className="font-mono text-[11px]">{facility.sampleHours}</span>
                </div>

                {/* Features List */}
                <div className="pt-2">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-3">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A39D93]">
                    {facility.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dress code & reservation note if available */}
                {(facility.dressCode || facility.reservationRequired) && (
                  <div className="pt-2 flex flex-wrap gap-4 text-[11px] text-[#6B665E] border-t border-[#C9A96E]/10">
                    {facility.dressCode && <span>Dress Code: {facility.dressCode}</span>}
                    {facility.reservationRequired && <span>• Reservation Recommended</span>}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    to={`/contact-reservations?special=${encodeURIComponent(facility.name)}`}
                    variant="outline-gold"
                    size="sm"
                  >
                    Inquire via Concierge
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Illustrative Notice */}
      <section className="pb-20 px-4 max-w-4xl mx-auto text-center">
        <div className="p-5 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 text-xs text-[#A39D93]">
          All operational timings and amenities listed above are sample illustrative specifications presented for demonstration purposes.
        </div>
      </section>
    </>
  );
};
