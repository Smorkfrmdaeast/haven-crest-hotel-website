import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { RoomCard } from '../components/common/RoomCard';
import { RoomModal } from '../components/common/RoomModal';
import { ROOM_CATEGORIES } from '../config/hotelData';
import { RoomCategory } from '../types';
import { Check, Shield, Wifi, Coffee, Sparkles } from 'lucide-react';

export const Rooms: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'room' | 'suite'>('all');
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  const filteredRooms = ROOM_CATEGORIES.filter((r) => {
    if (filter === 'all') return true;
    return r.type === filter;
  });

  return (
    <>
      <SEOHead
        title="Rooms &amp; Suites | Haven Crest Hotel, Enugu"
        description="Explore the five refined room and suite categories at Haven Crest Hotel &amp; Suites in Enugu, Nigeria. Sample prices in Naira, king bedding, and luxury marble amenities."
        canonicalPath="/rooms"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Haven Collection
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            Rooms &amp; Suites
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            Five distinguished tiers of residential luxury, meticulously crafted with acoustic isolation, custom Nigerian hardwood appointments, and sweeping views of Independence Layout and the Coal City.
          </p>
        </div>
      </section>

      {/* Standard Inclusions Strip */}
      <section className="bg-[#161618] border-b border-[#C9A96E]/15 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-xs text-[#E8E0D2]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#C9A96E]" />
            <span>24/7 Redundant Power &amp; Gated Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-[#C9A96E]" />
            <span>Dedicated High-Speed Fiber Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-[#C9A96E]" />
            <span>In-Suite Nespresso Artisan Bar</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A96E]" />
            <span>Evening Turndown &amp; Botanical Toiletries</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Room Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#121214] border border-[#C9A96E]/20 rounded-[3px]">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] rounded-[2px] transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#C9A96E] text-[#121214] font-medium shadow-sm'
                  : 'text-[#A39D93] hover:text-[#F7F2E9]'
              }`}
            >
              All Categories ({ROOM_CATEGORIES.length})
            </button>
            <button
              onClick={() => setFilter('room')}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] rounded-[2px] transition-all cursor-pointer ${
                filter === 'room'
                  ? 'bg-[#C9A96E] text-[#121214] font-medium shadow-sm'
                  : 'text-[#A39D93] hover:text-[#F7F2E9]'
              }`}
            >
              Rooms (3)
            </button>
            <button
              onClick={() => setFilter('suite')}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] rounded-[2px] transition-all cursor-pointer ${
                filter === 'suite'
                  ? 'bg-[#C9A96E] text-[#121214] font-medium shadow-sm'
                  : 'text-[#A39D93] hover:text-[#F7F2E9]'
              }`}
            >
              Suites (2)
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onOpenModal={(r) => setSelectedRoom(r)}
            />
          ))}
        </div>

        {/* Clear Demonstration Note */}
        <div className="mt-16 p-6 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#A39D93] leading-relaxed">
            <strong className="text-[#C9A96E] font-medium uppercase tracking-wider block mb-1">
              Sample Pricing Notice
            </strong>
            All room rates shown (from ₦65,000 to ₦450,000 / night) are demonstration sample figures prepared for the Haven Crest Hotel portfolio prototype by SMORK'S TECH. Clicking "Enquire" will prefill the demonstration reservation form without processing any actual charges or bookings.
          </p>
        </div>
      </section>

      {/* Room Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={selectedRoom !== null}
        onClose={() => setSelectedRoom(null)}
      />
    </>
  );
};
