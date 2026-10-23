import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { CrestLogo } from '../common/CrestLogo';
import { HOTEL_INFO } from '../../config/hotelData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll state for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Focus trap for mobile drawer
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Dining & Facilities', path: '/dining-facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Special Offers', path: '/special-offers' },
    { name: 'About', path: '/about' },
    { name: 'Reservations', path: '/contact-reservations' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1C1C1E]/95 backdrop-blur-md border-b border-[#C9A96E]/20 shadow-xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest Logo */}
        <CrestLogo />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-[12px] uppercase font-sans tracking-[0.18em]" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 py-1 relative hover:text-[#C9A96E] ${
                  isActive
                    ? 'text-[#C9A96E] font-medium'
                    : 'text-[#F7F2E9]/80 font-normal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A96E] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact-reservations"
            className="px-4 sm:px-5 py-2.5 rounded-[2px] bg-[#C9A96E] hover:bg-[#D8BD85] text-[#121214] font-medium text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Enquire Stay</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="xl:hidden p-2 text-[#F7F2E9] hover:text-[#C9A96E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-[2px]"
          aria-label="Open mobile navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden" role="dialog" aria-modal="true" aria-label="Navigation Menu">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div
            ref={drawerRef}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#161618] border-l border-[#C9A96E]/20 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C9A96E]/15">
                <CrestLogo variant="compact" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#A39D93] hover:text-[#C9A96E] rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links list */}
              <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm uppercase tracking-[0.2em] font-sans rounded-[2px] transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-[#C9A96E] bg-[#C9A96E]/10 font-medium'
                          : 'text-[#F7F2E9] hover:text-[#C9A96E] hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-[#C9A96E]/60 text-xs font-serif">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom info & actions in drawer */}
            <div className="pt-6 border-t border-[#C9A96E]/15 space-y-4">
              <Link
                to="/contact-reservations"
                className="w-full py-3 rounded-[2px] bg-[#C9A96E] hover:bg-[#D8BD85] text-[#121214] font-medium text-xs uppercase tracking-[0.2em] text-center block"
              >
                Request Reservation
              </Link>

              <div className="text-[11px] text-[#A39D93] space-y-1 font-sans">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>{HOTEL_INFO.phoneDisplay}</span>
                </p>
                <p className="text-[10px] text-[#6B665E] italic">
                  {HOTEL_INFO.locationBrief}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
