import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Maximize2, BedDouble, ArrowUpRight } from 'lucide-react';
import { RoomCategory } from '../../types';
import { SafeImage } from './SafeImage';

interface RoomCardProps {
  room: RoomCategory;
  onOpenModal: (room: RoomCategory) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onOpenModal }) => {
  const navigate = useNavigate();

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/contact-reservations?room=${room.id}`);
  };

  const primaryImage = room.images[0]?.url || '';
  const primaryAlt = room.images[0]?.alt || room.name;

  return (
    <div 
      className="group bg-[#161618] border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 rounded-[3px] overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image container */}
      <div 
        className="relative aspect-16/10 overflow-hidden cursor-pointer bg-[#121214]"
        onClick={() => onOpenModal(room)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(room);
          }
        }}
        aria-label={`View full details for ${room.name}`}
      >
        <SafeImage
          src={primaryImage}
          alt={primaryAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Room type label */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-[2px] bg-[#121214]/85 backdrop-blur-xs text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] border border-[#C9A96E]/30 font-medium">
            {room.type === 'suite' ? 'Suite Collection' : 'Room Category'}
          </span>
        </div>

        {/* Sample price badge */}
        <div className="absolute bottom-3 right-3 text-right">
          <span className="inline-block px-1.5 py-0.5 rounded-[2px] bg-[#C9A96E]/20 text-[9px] uppercase tracking-wider text-[#C9A96E] font-medium border border-[#C9A96E]/30 mb-0.5">
            Sample price
          </span>
          <div className="font-serif text-xl sm:text-2xl text-[#F7F2E9] drop-shadow-md">
            {room.formattedPrice}
            <span className="text-[11px] font-sans font-light text-[#A39D93] ml-1">/ night</span>
          </div>
        </div>
      </div>

      {/* Content info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            className="font-serif text-2xl text-[#F7F2E9] group-hover:text-[#C9A96E] transition-colors cursor-pointer"
            onClick={() => onOpenModal(room)}
          >
            {room.name}
          </h3>
          <p className="mt-1 text-xs text-[#C9A96E] font-sans tracking-wide">
            {room.subtitle}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#A39D93] line-clamp-2 leading-relaxed">
            {room.shortDescription}
          </p>

          {/* Specs pills */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t border-[#C9A96E]/15 text-xs text-[#E8E0D2]">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C9A96E]" />
              {room.sizeSqm} m²
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C9A96E]" />
              {room.capacity}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span className="truncate max-w-[130px]">{room.bedType}</span>
            </span>
          </div>
        </div>

        {/* Action bar */}
        <div className="mt-6 pt-4 border-t border-[#C9A96E]/15 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onOpenModal(room)}
            className="px-3 py-2.5 rounded-[2px] border border-[#C9A96E]/40 text-[#F7F2E9] hover:text-[#C9A96E] hover:border-[#C9A96E] hover:bg-[#C9A96E]/5 text-[11px] uppercase tracking-[0.16em] transition-colors text-center cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
          >
            Room Details
          </button>
          <button
            onClick={handleEnquire}
            className="px-3 py-2.5 rounded-[2px] bg-[#C9A96E] hover:bg-[#D8BD85] text-[#121214] font-medium text-[11px] uppercase tracking-[0.16em] transition-colors text-center flex items-center justify-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
