import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { SafeImage } from '../components/common/SafeImage';
import { Button } from '../components/common/Button';
import { SPECIAL_OFFERS } from '../config/hotelData';
import { Sparkles, Check, Tag, ArrowRight, Clock } from 'lucide-react';

export const SpecialOffers: React.FC = () => {
  const navigate = useNavigate();

  const handleEnquire = (offerTitle: string, targetRoomId?: string) => {
    const params = new URLSearchParams();
    params.set('special', `Special Offer: ${offerTitle}`);
    if (targetRoomId) params.set('room', targetRoomId);
    navigate(`/contact-reservations?${params.toString()}`);
  };

  return (
    <>
      <SEOHead
        title="Special Offers &amp; Packages | Haven Crest Hotel, Enugu"
        description="Discover exclusive stay packages, weekend retreats, and business privileges at Haven Crest Hotel &amp; Suites, Enugu. Illustrative demonstration offers."
        canonicalPath="/special-offers"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <Tag className="w-3.5 h-3.5" />
            Bespoke Experiences
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            Curated Special Offers
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            Enhance your stay in Eastern Nigeria with tailored packages blending luxury suite accommodations, sensory wellness treatments, and private culinary moments.
          </p>
        </div>
      </section>

      {/* Offers List */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {SPECIAL_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="rounded-[3px] bg-[#161618] border border-[#C9A96E]/25 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl hover:border-[#C9A96E]/50 transition-all duration-300"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto">
              <SafeImage
                src={offer.image}
                alt={offer.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

              {/* Sample badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-[2px] bg-[#121214]/90 border border-[#C9A96E]/40 text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium backdrop-blur-xs">
                  Sample Offer
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#C9A96E]/15">
                  <span className="text-[10px] font-mono text-[#C9A96E] uppercase tracking-widest bg-[#C9A96E]/10 px-2 py-0.5 rounded">
                    Code: {offer.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#A39D93]">
                    <Clock className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>{offer.validity}</span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F2E9] mt-4 font-light">
                  {offer.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#C9A96E] font-sans tracking-wide mt-1">
                  {offer.tagline}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#A39D93] leading-relaxed">
                  {offer.description}
                </p>

                {/* Inclusions */}
                <div className="mt-5 pt-4 border-t border-[#C9A96E]/15">
                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-3">
                    Curated Inclusions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#E8E0D2]">
                    {offer.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-[#C9A96E]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A39D93] block">
                    Demonstration Value
                  </span>
                  <span className="font-serif text-lg text-[#C9A96E]">
                    {offer.sampleSavings}
                  </span>
                </div>

                <Button
                  onClick={() => handleEnquire(offer.title, offer.targetRoomId)}
                  variant="solid-gold"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Enquire This Offer
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Disclaimer Card */}
        <div className="p-6 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#A39D93]">
            * All packages and inclusions displayed on this page are sample illustrative demonstrations created by SMORK'S TECH for hotel presentation purposes.
          </p>
        </div>
      </section>
    </>
  );
};
