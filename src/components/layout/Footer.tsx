import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp, Compass } from 'lucide-react';
import { CrestLogo } from '../common/CrestLogo';
import { HOTEL_INFO } from '../../config/hotelData';
import { Newsletter } from './Newsletter';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Dining & Facilities', path: '/dining-facilities' },
    { label: 'Photo Gallery', path: '/gallery' },
    { label: 'Special Offers', path: '/special-offers' },
    { label: 'About Haven Crest', path: '/about' },
    { label: 'Reservations & Contact', path: '/contact-reservations' },
  ];

  const suites = [
    { label: 'Classic Room', path: '/rooms' },
    { label: 'Deluxe Room', path: '/rooms' },
    { label: 'Executive Room', path: '/rooms' },
    { label: 'Haven Suite', path: '/rooms' },
    { label: 'Presidential Penthouse', path: '/rooms' },
  ];

  return (
    <footer className="bg-[#121214] text-[#F7F2E9] border-t border-[#C9A96E]/20 pt-16 pb-10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Callout Band */}
        <div className="mb-16">
          <Newsletter />
        </div>

        {/* Main 4-column footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C9A96E]/15">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <CrestLogo />
              <p className="mt-4 text-xs sm:text-sm text-[#A39D93] leading-relaxed max-w-sm">
                Enugu’s quintessential sanctuary of tranquility and understated prestige. Set in the lush avenues of Independence Layout, Haven Crest crafts five-star hospitality infused with authentic Eastern Nigerian warmth.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-[#A39D93]">
              <span className="text-[#C9A96E] font-medium uppercase tracking-wider text-[10px]">Hospitality Pitch Portfolio</span>
              <span>•</span>
              <span>Enugu, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-[#C9A96E] mb-4">
              Explore the Haven
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A39D93]">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#C9A96E] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation Tiers */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-[#C9A96E] mb-4">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A39D93]">
              {suites.map((suite, idx) => (
                <li key={idx}>
                  <Link
                    to={suite.path}
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    {suite.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders & WhatsApp */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-sans font-medium uppercase tracking-[0.24em] text-[#C9A96E] mb-4">
              Concierge &amp; Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#A39D93]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A96E] mt-0.5 shrink-0" />
                <span className="leading-snug">{HOTEL_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>{HOTEL_INFO.phoneDisplay} <span className="text-[10px] text-[#6B665E]">({HOTEL_INFO.phoneSampleNote})</span></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>{HOTEL_INFO.emailDisplay}</span>
              </div>

              {/* WhatsApp Demonstration Link */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Haven Crest Concierge, I would like to inquire about suite availability.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 hover:border-[#C9A96E] text-[#C9A96E] hover:text-[#D8BD85] text-[11px] transition-all"
                  aria-label="Inquire via WhatsApp (Placeholder demonstration link)"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {HOTEL_INFO.whatsappDisplay}</span>
                </a>
                <span className="block text-[10px] text-[#6B665E] mt-1 italic">
                  * Placeholder demo number for pitch display
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DEMO NOTICE CALLOUT BAND (Exact requested text) */}
        <div className="py-6 my-6 px-5 rounded-[3px] bg-[#161618] border border-[#C9A96E]/25 text-center">
          <p className="text-xs sm:text-sm text-[#E8E0D2] font-sans font-light tracking-wide leading-relaxed">
            {HOTEL_INFO.demoDisclaimer}
          </p>
        </div>

        {/* Copyright & Bottom Info */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B665E]">
          <p>© {new Date().getFullYear()} HAVEN CREST HOTEL &amp; SUITES, ENUGU. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#A39D93] cursor-default">Privacy Policy (Demo)</span>
            <span className="hover:text-[#A39D93] cursor-default">Terms of Residence (Demo)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C9A96E] hover:text-[#D8BD85] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] p-1"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
