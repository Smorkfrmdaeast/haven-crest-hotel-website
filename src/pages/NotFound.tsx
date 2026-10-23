import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';
import { Compass, ArrowRight, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Haven Crest Hotel, Enugu"
        description="The requested page could not be located at Haven Crest Hotel & Suites, Enugu."
      />

      <section className="min-h-[75vh] flex items-center justify-center py-24 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#121214] border border-[#C9A96E]/40 mx-auto flex items-center justify-center text-[#C9A96E]">
            <Compass className="w-8 h-8 stroke-[1.5]" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans block">
            Error 404 • Destination Not Found
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            Page Beyond the Haven
          </h1>

          <p className="text-sm sm:text-base text-[#A39D93] leading-relaxed max-w-md mx-auto">
            The page or suite details you are attempting to view may have been moved or is currently inaccessible. Let us guide you back to serenity.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/"
              variant="solid-gold"
              size="md"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Return to Sanctuary
            </Button>
            <Button
              to="/rooms"
              variant="outline-gold"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Rooms
            </Button>
          </div>

          <div className="pt-8 border-t border-[#C9A96E]/15 flex items-center justify-center gap-6 text-xs text-[#A39D93]">
            <Link to="/dining-facilities" className="hover:text-[#C9A96E] transition-colors">
              Dining &amp; Spa
            </Link>
            <span>•</span>
            <Link to="/gallery" className="hover:text-[#C9A96E] transition-colors">
              Photo Gallery
            </Link>
            <span>•</span>
            <Link to="/contact-reservations" className="hover:text-[#C9A96E] transition-colors">
              Reservations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
