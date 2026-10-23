import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SafeImage } from '../components/common/SafeImage';
import { Lightbox } from '../components/common/Lightbox';
import { GALLERY_PHOTOS } from '../config/hotelData';
import { GalleryPhoto } from '../types';
import { Eye, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'dining' | 'facilities' | 'exterior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Photographs', count: GALLERY_PHOTOS.length },
    { id: 'rooms', label: 'Rooms & Suites', count: GALLERY_PHOTOS.filter(p => p.category === 'rooms').length },
    { id: 'dining', label: 'Dining & Lounges', count: GALLERY_PHOTOS.filter(p => p.category === 'dining').length },
    { id: 'facilities', label: 'Wellness & Venues', count: GALLERY_PHOTOS.filter(p => p.category === 'facilities').length },
    { id: 'exterior', label: 'Exterior & Grounds', count: GALLERY_PHOTOS.filter(p => p.category === 'exterior').length },
  ];

  return (
    <>
      <SEOHead
        title="Photo Gallery | Haven Crest Hotel, Enugu"
        description="Browse high-resolution photographs of Haven Crest Hotel &amp; Suites in Enugu, Nigeria. Elegant suites, dining rooms, pool cabanas, and exterior architecture."
        canonicalPath="/gallery"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <ImageIcon className="w-3.5 h-3.5" />
            Curated Visual Collection
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            The Haven Crest Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the architectural finesse, serene poolside cabanas, and opulent residential suites that define Enugu’s most exclusive retreat.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="bg-[#161618] border-b border-[#C9A96E]/15 py-4 px-4 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.16em] rounded-[2px] transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C9A96E] text-[#121214] font-medium shadow-sm'
                  : 'text-[#A39D93] hover:text-[#F7F2E9] hover:bg-white/5'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 text-[#A39D93]">
            <p className="text-sm">No photos found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                className="group relative aspect-4/3 rounded-[3px] overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 bg-[#121214] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                aria-label={`View ${photo.title} in full screen`}
              >
                <SafeImage
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-black/60 text-[#C9A96E] backdrop-blur-xs">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium block">
                      {photo.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#F7F2E9] mt-0.5">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <p className="text-xs text-[#6B665E]">
            All photographs are curated luxury visuals demonstrating the Haven Crest web design concept.
          </p>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
};
