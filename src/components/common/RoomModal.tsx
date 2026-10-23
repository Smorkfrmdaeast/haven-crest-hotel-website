import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Maximize2, Users, BedDouble, Eye, ArrowRight } from 'lucide-react';
import { RoomCategory } from '../../types';
import { Modal } from './Modal';
import { SafeImage } from './SafeImage';
import { Button } from './Button';

interface RoomModalProps {
  room: RoomCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, isOpen, onClose }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const navigate = useNavigate();

  if (!room) return null;

  const handleEnquire = () => {
    onClose();
    navigate(`/contact-reservations?room=${room.id}`);
  };

  const images = room.images && room.images.length > 0 ? room.images : [{ url: '', alt: room.name }];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={room.name} maxWidthClass="max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Multi-photo carousel */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="relative aspect-16/10 rounded-[3px] overflow-hidden border border-[#C9A96E]/20 bg-[#121214]">
            <SafeImage
              src={images[photoIndex]?.url}
              alt={images[photoIndex]?.alt || room.name}
              className="w-full h-full object-cover"
            />

            {/* Prev / Next buttons if multiple photos */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setPhotoIndex((photoIndex - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/85 text-[#F7F2E9] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/85 text-[#F7F2E9] rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/75 rounded text-[10px] font-sans tracking-widest text-[#C9A96E]">
                  {photoIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail preview strip */}
          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`aspect-16/10 rounded-[2px] overflow-hidden border transition-all cursor-pointer ${
                    photoIndex === idx ? 'border-[#C9A96E] ring-1 ring-[#C9A96E]' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <SafeImage src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Caption */}
          {images[photoIndex]?.caption && (
            <p className="text-xs text-[#A39D93] italic tracking-wide">
              {images[photoIndex].caption}
            </p>
          )}
        </div>

        {/* Right: Specifications & Details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Price Header */}
            <div className="flex items-baseline justify-between pb-4 border-b border-[#C9A96E]/20">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium block">
                  Demonstration Rate
                </span>
                <span className="font-serif text-3xl text-[#F7F2E9]">
                  {room.formattedPrice}
                </span>
                <span className="text-xs text-[#A39D93] ml-1.5 font-light">/ night</span>
              </div>
              <span className="px-2 py-1 rounded-[2px] bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[10px] text-[#C9A96E] uppercase tracking-wider font-medium">
                Sample Price
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#A39D93] leading-relaxed">
              {room.fullDescription}
            </p>

            {/* Room specs grid */}
            <div className="grid grid-cols-2 gap-3 my-5 py-4 border-y border-[#C9A96E]/15 text-xs text-[#E8E0D2]">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>{room.sizeSqm} m² / {room.sizeSqft} sq ft</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>{room.capacity}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <BedDouble className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span className="truncate">{room.bedType}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <Eye className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span className="truncate">{room.view}</span>
              </div>
            </div>

            {/* Key Amenities */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-3">
                Included Amenities
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A39D93]">
                {room.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C9A96E] mt-0.5 shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Enquiry */}
          <div className="mt-6 pt-4 border-t border-[#C9A96E]/20">
            <Button
              variant="solid-gold"
              className="w-full"
              onClick={handleEnquire}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire About This Room
            </Button>
            <p className="mt-2 text-[10px] text-center text-[#6B665E]">
              Prefills demonstration reservation form with {room.name}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
