import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../../types';
import { SafeImage } from './SafeImage';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
    >
      {/* Top action bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-[#F7F2E9] z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg tracking-wider text-[#C9A96E]">
            {currentIndex + 1} <span className="text-white/40 font-sans text-xs">/ {photos.length}</span>
          </span>
          <span className="hidden sm:inline-block w-px h-4 bg-white/20" />
          <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-[#A39D93]">
            {currentPhoto.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#A39D93] hover:text-[#C9A96E] hover:bg-white/10 rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
          aria-label="Close image lightbox (Escape)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-[#A39D93] hover:text-[#C9A96E] bg-black/40 hover:bg-black/80 border border-white/10 rounded-[2px] transition-all z-20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
        aria-label="Previous image (Left arrow)"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Presentation */}
      <div className="max-w-5xl max-h-[78vh] w-full mx-auto px-4 flex flex-col items-center justify-center">
        <div className="relative max-h-[70vh] flex items-center justify-center">
          <SafeImage
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            className="max-h-[70vh] max-w-full w-auto h-auto object-contain rounded-[2px] shadow-2xl border border-[#C9A96E]/20"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl">
          <h4 className="font-serif text-xl sm:text-2xl text-[#F7F2E9] font-light">
            {currentPhoto.title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-[#A39D93] font-sans font-light">
            {currentPhoto.caption}
          </p>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % photos.length)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-[#A39D93] hover:text-[#C9A96E] bg-black/40 hover:bg-black/80 border border-white/10 rounded-[2px] transition-all z-20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
        aria-label="Next image (Right arrow)"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};
