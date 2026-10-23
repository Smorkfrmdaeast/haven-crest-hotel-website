import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MapPin, Shield, CalendarCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { HOTEL_INFO } from '../../config/hotelData';

export interface FAQItem {
  id: string;
  category: 'enugu' | 'amenities' | 'policies';
  categoryLabel: string;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_DATA: FAQItem[] = [
  // 1. Enugu Hospitality & Location
  {
    id: 'faq-enugu-location',
    category: 'enugu',
    categoryLabel: 'Enugu & Location',
    question: 'Why is Independence Layout considered the premier enclave for Haven Crest in Enugu?',
    answer: 'Independence Layout is the historic diplomatic and administrative sanctuary of Enugu. Set back from commercial congestion, its wide tree-lined boulevards offer absolute acoustic tranquility, lush residential canopies, and strict perimeter patrols, making it the preferred district for visiting governors, ambassadors, and high-level corporate delegations.',
    highlight: 'Prestigious, quiet diplomatic neighborhood in Enugu.',
  },
  {
    id: 'faq-enugu-airport',
    category: 'enugu',
    categoryLabel: 'Enugu & Location',
    question: 'How accessible is the hotel from Akanu Ibiam International Airport (ENU)?',
    answer: 'Haven Crest is located approximately 15 minutes (9.8 km) from Akanu Ibiam International Airport via Presidential Boulevard and express arterial corridors. Our private chauffeur fleet provides tarmac meet-and-greet, luggage handling, and armored executive escort options upon advance request.',
    highlight: '15-minute VIP airport transfer available around the clock.',
  },
  {
    id: 'faq-enugu-excursions',
    category: 'enugu',
    categoryLabel: 'Enugu & Location',
    question: 'Can the concierge coordinate excursions across the Coal City and Eastern Nigeria?',
    answer: 'Yes. Our dedicated Head of Concierge arranges bespoke private day tours to the Milken Hills scenic ridges, the sacred groves and cascades of Awhum, the Enugu Golf Club 18-hole championship course, and local cultural artisans specializing in traditional bronze and textile heritage.',
    highlight: 'Bespoke chauffeur-driven cultural and nature itineraries.',
  },

  // 2. Hotel Amenities & Gastronomy
  {
    id: 'faq-amenities-power',
    category: 'amenities',
    categoryLabel: 'Hotel Amenities',
    question: 'How does Haven Crest guarantee 24/7 uninterrupted power?',
    answer: 'We operate an industrial triple-redundancy power plant that combines a commercial rooftop solar array, high-capacity lithium energy storage banks, and dual synchronized Caterpillar diesel generators. High-speed automatic static transfer switches guarantee zero-millisecond power blips, protecting sensitive electronics and climate systems at all times.',
    highlight: 'Zero-millisecond triple-redundant hybrid power infrastructure.',
  },
  {
    id: 'faq-amenities-dining',
    category: 'amenities',
    categoryLabel: 'Hotel Amenities',
    question: 'What dining experiences and dress codes apply at our restaurants?',
    answer: 'The Crest Dining Room features fine contemporary African and Continental gastronomy with a Smart Elegant dress code in the evening. The Obsidian Lounge & Cellar offers artisan cocktails, vintage malts, and a cigar terrace in a relaxed lounge atmosphere. 24-hour private in-suite dining is also available to all resident guests.',
    highlight: 'Haute cuisine, reserve wine cellar, and 24/7 in-suite dining.',
  },
  {
    id: 'faq-amenities-wellness',
    category: 'amenities',
    categoryLabel: 'Hotel Amenities',
    question: 'Are the swimming pool, fitness club, and Aura Spa open to non-resident guests?',
    answer: 'Resident hotel guests enjoy complimentary, unlimited access to the Emerald Horizon Pool, Kinetic Health Club, and thermal spa facilities. Non-resident visitors may access our dining venues freely, while pool and spa access is managed through curated day privileges and advance spa reservations to preserve guest privacy.',
    highlight: 'Resident exclusivity with advance reservations for outside visitors.',
  },
  {
    id: 'faq-amenities-wifi',
    category: 'amenities',
    categoryLabel: 'Hotel Amenities',
    question: 'What internet connectivity and workspace amenities are provided in suites?',
    answer: 'Every suite is provisioned with high-speed fiber-optic connectivity (150 to 300 Mbps dedicated bandwidth), WPA3 encrypted individual access points, universal international surge-protected power hubs, and ergonomic marble executive workstations suitable for video conferencing and remote corporate stewardship.',
    highlight: 'High-speed dedicated fiber Wi-Fi and ergonomic marble desks.',
  },

  // 3. Stay Policies & Demonstration Notice
  {
    id: 'faq-policies-checkin',
    category: 'policies',
    categoryLabel: 'Stay & Policies',
    question: 'What are the standard check-in and check-out times?',
    answer: `Our formal check-in begins at ${HOTEL_INFO.checkInTime}, and check-out is requested by ${HOTEL_INFO.checkOutTime}. Early check-in from 10:00 AM or late check-out up to 4:00 PM can be arranged through the concierge, subject to suite availability.`,
    highlight: 'Flexible arrival and departure upon concierge coordination.',
  },
  {
    id: 'faq-policies-cancellation',
    category: 'policies',
    categoryLabel: 'Stay & Policies',
    question: 'What is the illustrative reservation and cancellation policy?',
    answer: 'In our standard operating model, reservations may be cancelled or modified up to 48 hours prior to scheduled check-in without penalty. For presidential suites, whole-floor buyouts, and festive event blocks, bespoke contractual terms apply. Detailed deposit terms are confirmed during private reservation confirmation.',
    highlight: '48-hour flexible cancellation for individual suite bookings.',
  },
  {
    id: 'faq-policies-demo',
    category: 'policies',
    categoryLabel: 'Stay & Policies',
    question: 'Is this a live hotel booking engine or an illustrative portfolio concept?',
    answer: 'This website is a portfolio concept crafted by SMORK\'S TECH to demonstrate digital design, performance, and five-star brand architecture for hospitality clients in Enugu. All room rates, offers, and booking submission responses are simulated demonstrations. No real payments, cards, or binding bookings are processed.',
    highlight: 'Client pitch prototype by SMORK\'S TECH • Illustrative data only.',
  },
];

export const FAQ: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'enugu' | 'amenities' | 'policies'>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-enugu-location', 'faq-amenities-power']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Questions', count: FAQ_DATA.length },
    { id: 'enugu', label: 'Enugu & Location', count: FAQ_DATA.filter((f) => f.category === 'enugu').length },
    { id: 'amenities', label: 'Hotel Amenities', count: FAQ_DATA.filter((f) => f.category === 'amenities').length },
    { id: 'policies', label: 'Stay & Policies', count: FAQ_DATA.filter((f) => f.category === 'policies').length },
  ];

  return (
    <section className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ${className}`} aria-labelledby="faq-section-title">
      <SectionHeading
        eyebrow="Knowledge & Hospitality"
        title="Frequently Asked Questions"
        subtitle="Essential information regarding our Independence Layout location, five-star guest amenities, and reservation guidelines."
      />

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#C9A96E] text-[#121214] font-medium shadow-sm'
                : 'bg-[#161618] text-[#A39D93] border border-[#C9A96E]/20 hover:border-[#C9A96E]/40 hover:text-[#F7F2E9]'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`rounded-[3px] bg-[#161618] border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-[#C9A96E] shadow-xl bg-[#19191D]'
                  : 'border-[#C9A96E]/20 hover:border-[#C9A96E]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#C9A96E]">
                      {faq.categoryLabel}
                    </span>
                    {faq.highlight && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[#C9A96E]/40" />
                        <span className="text-[10px] text-[#A39D93] font-light hidden sm:inline">
                          {faq.highlight}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F7F2E9] font-light leading-snug">
                    {faq.question}
                  </h3>
                </div>

                {/* Animated Gold Indicator */}
                <div
                  className={`w-8 h-8 rounded-[2px] shrink-0 border flex items-center justify-center transition-all duration-300 mt-1 ${
                    isOpen
                      ? 'bg-[#C9A96E] border-[#C9A96E] text-[#121214] rotate-180'
                      : 'bg-[#121214] border-[#C9A96E]/30 text-[#C9A96E]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Content Panel */}
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={faq.id}
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 pb-6 px-5 sm:px-6' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="pt-3 border-t border-[#C9A96E]/15">
                  <p className="text-xs sm:text-sm text-[#A39D93] leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concierge Inquiries Note */}
      <div className="mt-12 p-6 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Have an Unanswered Question?</span>
        </div>
        <p className="text-xs text-[#A39D93] leading-relaxed">
          Our concierge team is available around the clock to assist with bespoke itineraries, protocol arrangements, or suite inquiries.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs">
          <a
            href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Haven Crest Concierge, I have an inquiry regarding your suites and amenities.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A96E] hover:text-[#D8BD85] underline underline-offset-4 font-medium"
          >
            Chat with Concierge via WhatsApp
          </a>
          <span className="text-[#6B665E]">•</span>
          <a href="/contact-reservations" className="text-[#C9A96E] hover:text-[#D8BD85] underline underline-offset-4 font-medium">
            Submit Reservation Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};
