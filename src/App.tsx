import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DemoBanner } from './components/common/DemoBanner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Code-split routes for optimal performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Rooms = lazy(() => import('./pages/Rooms').then(m => ({ default: m.Rooms })));
const DiningFacilities = lazy(() => import('./pages/DiningFacilities').then(m => ({ default: m.DiningFacilities })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const SpecialOffers = lazy(() => import('./pages/SpecialOffers').then(m => ({ default: m.SpecialOffers })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ContactReservations = lazy(() => import('./pages/ContactReservations').then(m => ({ default: m.ContactReservations })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Scroll to top helper on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

// Branded luxury fallback loader
const LoadingFallback: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#1C1C1E] text-[#F7F2E9]">
    <div className="relative w-12 h-14 flex items-center justify-center mb-4">
      {/* Subtle pulsing crest */}
      <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse">
        <path
          d="M20 2 L38 10 L38 28 C38 38 20 46 20 46 C20 46 2 38 2 28 L2 10 L20 2 Z"
          stroke="#C9A96E"
          strokeWidth="1.5"
          fill="#121214"
        />
        <path
          d="M14 17 L14 31 M26 17 L26 31 M14 24 L26 24"
          stroke="#F7F2E9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <span className="font-serif text-lg tracking-[0.2em] text-[#F7F2E9] uppercase">
      Haven Crest
    </span>
    <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#C9A96E] mt-1">
      Curating Serenity...
    </span>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C9A96E] focus:text-[#121214] focus:font-medium focus:text-xs focus:uppercase focus:tracking-wider rounded-[2px] shadow-lg"
        >
          Skip to Main Content
        </a>

        <div className="min-h-screen flex flex-col bg-[#1C1C1E] text-[#F7F2E9] selection:bg-[#C9A96E]/30 selection:text-[#F7F2E9]">
          {/* 1. Persistent Slim Demo Notice Banner */}
          <DemoBanner />

          {/* 2. Global Sticky Header with scroll transition */}
          <Header />

          {/* 3. Main Content Router with Suspense */}
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/dining-facilities" element={<DiningFacilities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/special-offers" element={<SpecialOffers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-reservations" element={<ContactReservations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          {/* 4. Global Footer with brand, quick links, and demo disclaimer */}
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
