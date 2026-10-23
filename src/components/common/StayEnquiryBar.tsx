import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, BedDouble, ArrowRight } from 'lucide-react';
import { ROOM_CATEGORIES } from '../../config/hotelData';

export const StayEnquiryBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const navigate = useNavigate();

  // Helper dates (default tomorrow and 3 days later)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkInDefault = tomorrow.toISOString().split('T')[0];

  const threeDaysLater = new Date(tomorrow);
  threeDaysLater.setDate(threeDaysLater.getDate() + 3);
  const checkOutDefault = threeDaysLater.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(checkInDefault);
  const [checkOut, setCheckOut] = useState(checkOutDefault);
  const [guests, setGuests] = useState('2');
  const [roomCategory, setRoomCategory] = useState(ROOM_CATEGORIES[1].id); // Deluxe default

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
      room: roomCategory,
    });
    navigate(`/contact-reservations?${query.toString()}`);
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="bg-[#161618]/95 backdrop-blur-md border border-[#C9A96E]/30 rounded-[4px] p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end"
      >
        {/* Check-in Date */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bar-checkin" className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" />
            Arrival Date
          </label>
          <input
            id="bar-checkin"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#121214] border border-[#2D2D32] focus:border-[#C9A96E] text-[#F7F2E9] text-xs sm:text-sm px-3 py-2.5 rounded-[2px] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bar-checkout" className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" />
            Departure Date
          </label>
          <input
            id="bar-checkout"
            type="date"
            min={checkIn}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#121214] border border-[#2D2D32] focus:border-[#C9A96E] text-[#F7F2E9] text-xs sm:text-sm px-3 py-2.5 rounded-[2px] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Guests count */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bar-guests" className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#C9A96E]" />
            Guests
          </label>
          <select
            id="bar-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-[#121214] border border-[#2D2D32] focus:border-[#C9A96E] text-[#F7F2E9] text-xs sm:text-sm px-3 py-2.5 rounded-[2px] focus:outline-none transition-colors cursor-pointer"
          >
            <option value="1">1 Adult (Solo Stay)</option>
            <option value="2">2 Adults (Couples / Shared)</option>
            <option value="3">3 Guests (Executive Group)</option>
            <option value="4">4 Guests (Family Suite)</option>
          </select>
        </div>

        {/* Room Category */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="bar-room" className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium flex items-center gap-1.5">
            <BedDouble className="w-3.5 h-3.5 text-[#C9A96E]" />
            Room Preference
          </label>
          <select
            id="bar-room"
            value={roomCategory}
            onChange={(e) => setRoomCategory(e.target.value)}
            className="w-full bg-[#121214] border border-[#2D2D32] focus:border-[#C9A96E] text-[#F7F2E9] text-xs sm:text-sm px-3 py-2.5 rounded-[2px] focus:outline-none transition-colors cursor-pointer"
          >
            {ROOM_CATEGORIES.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} (Sample {room.formattedPrice})
              </option>
            ))}
          </select>
        </div>

        {/* Submit Enquiry Button */}
        <div>
          <button
            type="submit"
            className="w-full h-[42px] bg-[#C9A96E] hover:bg-[#D8BD85] active:bg-[#B39358] text-[#121214] font-medium text-xs uppercase tracking-[0.2em] rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] shadow-sm"
          >
            <span>Enquire Stay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
