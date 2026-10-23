import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { HOTEL_INFO, ROOM_CATEGORIES } from '../config/hotelData';
import { ReservationFormData, ReservationErrors } from '../types';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Info,
  Send,
  Building2
} from 'lucide-react';

export const ContactReservations: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Helper date defaults
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultCheckIn = tomorrow.toISOString().split('T')[0];

  const threeDaysLater = new Date(tomorrow);
  threeDaysLater.setDate(threeDaysLater.getDate() + 3);
  const defaultCheckOut = threeDaysLater.toISOString().split('T')[0];

  // Prefilled form values from query parameters if present
  const initialRoom = searchParams.get('room') || ROOM_CATEGORIES[1].id;
  const initialCheckIn = searchParams.get('checkIn') || defaultCheckIn;
  const initialCheckOut = searchParams.get('checkOut') || defaultCheckOut;
  const initialGuests = parseInt(searchParams.get('guests') || '2', 10);
  const initialSpecial = searchParams.get('special') || '';

  const [formData, setFormData] = useState<ReservationFormData>({
    checkInDate: initialCheckIn,
    checkOutDate: initialCheckOut,
    guests: initialGuests || 2,
    roomCategory: initialRoom,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: initialSpecial,
  });

  const [errors, setErrors] = useState<ReservationErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'validating' | 'submitting' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);

  // Field refs for accessible focus on validation error
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLSelectElement>(null);
  const roomRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Update room/special if search params change
  useEffect(() => {
    const r = searchParams.get('room');
    const s = searchParams.get('special');
    if (r) {
      setFormData(prev => ({ ...prev, roomCategory: r }));
    }
    if (s) {
      setFormData(prev => ({ ...prev, specialRequests: s }));
    }
  }, [searchParams]);

  const validateField = (name: keyof ReservationFormData, value: any): string => {
    const todayStr = new Date().toISOString().split('T')[0];

    switch (name) {
      case 'checkInDate':
        if (!value) return 'Arrival check-in date is required.';
        if (value < todayStr) return 'Check-in date cannot be in the past.';
        return '';

      case 'checkOutDate':
        if (!value) return 'Departure check-out date is required.';
        if (value <= formData.checkInDate) return 'Check-out date must be after check-in date.';
        return '';

      case 'guests':
        if (!value || Number(value) < 1) return 'Please specify at least 1 guest.';
        if (Number(value) > 6) return 'For groups exceeding 6 guests, please contact concierge directly.';
        return '';

      case 'roomCategory':
        if (!value) return 'Please select your preferred room category.';
        return '';

      case 'fullName':
        if (!value || typeof value !== 'string' || value.trim().length < 3) {
          return 'Please provide your full legal name (minimum 3 characters).';
        }
        return '';

      case 'email':
        if (!value) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please provide a valid email address.';
        return '';

      case 'phone':
        if (!value) return 'Contact telephone number is required.';
        // Nigerian phone patterns (e.g. 080..., 070..., 081..., 090..., 091..., or +234...) or international standard
        const cleanPhone = value.replace(/[\s\-()]/g, '');
        const phoneRegex = /^(\+?234|0)[789][01]\d{8}$|^(\+\d{1,3})?\d{9,14}$/;
        if (!phoneRegex.test(cleanPhone)) {
          return 'Please enter a valid Nigerian (+234 / 080...) or international phone number.';
        }
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name as keyof ReservationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('validating');

    const newErrors: ReservationErrors = {};
    const fieldsToValidate: (keyof ReservationErrors)[] = [
      'checkInDate',
      'checkOutDate',
      'guests',
      'roomCategory',
      'fullName',
      'email',
      'phone',
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field as keyof ReservationFormData, formData[field as keyof ReservationFormData]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus('idle');

      // Accessibility: Focus first error element
      if (newErrors.checkInDate && checkInRef.current) checkInRef.current.focus();
      else if (newErrors.checkOutDate && checkOutRef.current) checkOutRef.current.focus();
      else if (newErrors.guests && guestsRef.current) guestsRef.current.focus();
      else if (newErrors.roomCategory && roomRef.current) roomRef.current.focus();
      else if (newErrors.fullName && nameRef.current) nameRef.current.focus();
      else if (newErrors.email && emailRef.current) emailRef.current.focus();
      else if (newErrors.phone && phoneRef.current) phoneRef.current.focus();

      return;
    }

    // Submit state simulation
    setFormStatus('submitting');
    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setSubmittedData({ ...formData });
      setFormStatus('success');
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } catch {
      setFormStatus('error');
    }
  };

  const handleResetForm = () => {
    setFormData({
      checkInDate: defaultCheckIn,
      checkOutDate: defaultCheckOut,
      guests: 2,
      roomCategory: ROOM_CATEGORIES[1].id,
      fullName: '',
      email: '',
      phone: '',
      specialRequests: '',
    });
    setErrors({});
    setSubmittedData(null);
    setFormStatus('idle');
  };

  // Find room category object
  const selectedRoomObj = ROOM_CATEGORIES.find(r => r.id === (submittedData?.roomCategory || formData.roomCategory));

  return (
    <>
      <SEOHead
        title="Reservations &amp; Inquiries | Haven Crest Hotel, Enugu"
        description="Submit a demonstration reservation enquiry for Haven Crest Hotel &amp; Suites in Independence Layout, Enugu. Prototype booking form and concierge contact."
        canonicalPath="/contact-reservations"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Concierge &amp; Reservations
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            Reserve Your Experience
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            Begin your journey into Enugu’s most exclusive retreat. Please complete the demonstration stay enquiry below or reach our team via concierge channels.
          </p>
        </div>
      </section>

      {/* Main Reservation & Contact Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Demo Enquiry Form / Success State */}
          <div className="lg:col-span-7 bg-[#161618] border border-[#C9A96E]/30 rounded-[4px] p-6 sm:p-10 shadow-2xl">
            {formStatus === 'success' && submittedData ? (
              /* HONEST SUCCESS STATE: Demo enquiry completed, explicitly no real booking made */
              <div 
                className="space-y-6 animate-in fade-in duration-500" 
                role="status" 
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#C9A96E] font-medium block mb-1">
                    Prototype Verification
                  </span>
                  <h3 className="font-serif text-3xl text-[#F7F2E9] font-light">
                    Demo Enquiry Completed
                  </h3>
                  <p className="mt-3 text-sm text-[#A39D93] leading-relaxed">
                    In a live version, this request would be sent directly to the hotel’s reservation management team and PMS. As this is a portfolio demonstration website by SMORK'S TECH, <strong className="text-[#F7F2E9]">no actual booking was made, no card was charged, and no confirmation email was sent</strong>.
                  </p>
                </div>

                {/* Submitted enquiry summary */}
                <div className="p-5 rounded-[2px] bg-[#121214] border border-[#C9A96E]/20 space-y-3 text-xs text-[#E8E0D2]">
                  <div className="flex items-center justify-between pb-2 border-b border-[#C9A96E]/15">
                    <span className="text-[#C9A96E] uppercase tracking-wider text-[10px] font-medium">Enquiry Summary</span>
                    <span className="text-[10px] text-[#A39D93]">Reference: DEMO-{Date.now().toString().slice(-6)}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Guest Name</span>
                      <span className="font-medium text-[#F7F2E9]">{submittedData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Contact Email</span>
                      <span className="text-[#F7F2E9]">{submittedData.email}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Phone</span>
                      <span className="text-[#F7F2E9]">{submittedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Room Selection</span>
                      <span className="font-serif text-sm text-[#C9A96E]">{selectedRoomObj?.name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Stay Dates</span>
                      <span>{submittedData.checkInDate} → {submittedData.checkOutDate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B665E] uppercase block">Guests</span>
                      <span>{submittedData.guests} Guest(s)</span>
                    </div>
                  </div>

                  {submittedData.specialRequests && (
                    <div className="pt-2 border-t border-[#C9A96E]/10">
                      <span className="text-[10px] text-[#6B665E] uppercase block">Special Requests</span>
                      <p className="italic text-[#A39D93] text-[11px] mt-0.5">{submittedData.specialRequests}</p>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleResetForm}
                    variant="solid-gold"
                    size="sm"
                    icon={<RotateCcw className="w-3.5 h-3.5" />}
                    iconPosition="left"
                  >
                    Start a New Enquiry
                  </Button>
                  <Button
                    to="/rooms"
                    variant="outline-gold"
                    size="sm"
                  >
                    Browse Other Rooms
                  </Button>
                </div>
              </div>
            ) : (
              /* Main Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans block mb-1">
                      Reservation Form
                    </span>
                    <span className="text-[10px] text-[#A39D93] bg-[#121214] px-2 py-0.5 border border-[#C9A96E]/20 rounded">
                      Demo Mode
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#F7F2E9] font-light">
                    Request Stay Details
                  </h2>
                  <p className="mt-1 text-xs text-[#A39D93]">
                    Fields marked with an asterisk (*) are required for validation.
                  </p>
                </div>

                {/* Form Error Banner if Submission Failed */}
                {formStatus === 'error' && (
                  <div className="p-4 rounded-[2px] bg-red-950/40 border border-red-500/50 text-red-200 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>An error occurred while testing the form. Please retry.</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="text-xs underline text-red-300 hover:text-white"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {/* Stay Dates: Check-In & Check-Out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="form-checkin" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Check-In Date *
                    </label>
                    <div className="relative">
                      <input
                        ref={checkInRef}
                        id="form-checkin"
                        name="checkInDate"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.checkInDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.checkInDate}
                        aria-describedby={errors.checkInDate ? 'checkin-error' : undefined}
                        className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                          errors.checkInDate ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                        } focus:outline-none transition-colors`}
                        required
                      />
                    </div>
                    {errors.checkInDate && (
                      <p id="checkin-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.checkInDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="form-checkout" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Check-Out Date *
                    </label>
                    <div className="relative">
                      <input
                        ref={checkOutRef}
                        id="form-checkout"
                        name="checkOutDate"
                        type="date"
                        min={formData.checkInDate}
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.checkOutDate}
                        aria-describedby={errors.checkOutDate ? 'checkout-error' : undefined}
                        className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                          errors.checkOutDate ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                        } focus:outline-none transition-colors`}
                        required
                      />
                    </div>
                    {errors.checkOutDate && (
                      <p id="checkout-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.checkOutDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Guests & Room Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="form-guests" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Number of Guests *
                    </label>
                    <select
                      ref={guestsRef}
                      id="form-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      aria-invalid={!!errors.guests}
                      aria-describedby={errors.guests ? 'guests-error' : undefined}
                      className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                        errors.guests ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                      } focus:outline-none transition-colors cursor-pointer`}
                    >
                      <option value="1">1 Adult (Solo Executive)</option>
                      <option value="2">2 Adults (Couples / Shared)</option>
                      <option value="3">3 Guests (Executive Delegation)</option>
                      <option value="4">4 Guests (Family Suite)</option>
                    </select>
                    {errors.guests && (
                      <p id="guests-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.guests}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="form-room" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Room or Suite Preference *
                    </label>
                    <select
                      ref={roomRef}
                      id="form-room"
                      name="roomCategory"
                      value={formData.roomCategory}
                      onChange={handleChange}
                      aria-invalid={!!errors.roomCategory}
                      aria-describedby={errors.roomCategory ? 'room-error' : undefined}
                      className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                        errors.roomCategory ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                      } focus:outline-none transition-colors cursor-pointer`}
                    >
                      {ROOM_CATEGORIES.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} (Sample {room.formattedPrice})
                        </option>
                      ))}
                    </select>
                    {errors.roomCategory && (
                      <p id="room-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.roomCategory}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4 pt-2">
                  <div>
                    <label 
                      htmlFor="form-name" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      ref={nameRef}
                      id="form-name"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Chief Chinonso Okoro"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'name-error' : undefined}
                      className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                        errors.fullName ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                      } focus:outline-none transition-colors`}
                      required
                    />
                    {errors.fullName && (
                      <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="form-email" 
                        className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        ref={emailRef}
                        id="form-email"
                        name="email"
                        type="email"
                        placeholder="e.g. c.okoro@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                          errors.email ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                        } focus:outline-none transition-colors`}
                        required
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="form-phone" 
                        className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                      >
                        Telephone Number *
                      </label>
                      <input
                        ref={phoneRef}
                        id="form-phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. +234 803 123 4567 or 08031234567"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border ${
                          errors.phone ? 'border-red-400' : 'border-[#2D2D32] focus:border-[#C9A96E]'
                        } focus:outline-none transition-colors`}
                        required
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor="form-requests" 
                      className="block text-xs font-sans uppercase tracking-[0.18em] text-[#C9A96E] font-medium mb-1.5"
                    >
                      Special Preferences or Flight Details (Optional)
                    </label>
                    <textarea
                      id="form-requests"
                      name="specialRequests"
                      rows={3}
                      placeholder="e.g. Dietary preferences, arrival flight at Akanu Ibiam Airport, late check-in..."
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full bg-[#121214] text-[#F7F2E9] text-xs sm:text-sm px-3.5 py-2.5 rounded-[2px] border border-[#2D2D32] focus:border-[#C9A96E] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Important Honesty Notice */}
                <div className="p-3.5 rounded-[2px] bg-[#121214] border border-[#C9A96E]/20 text-[11px] text-[#A39D93] leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span>
                    <strong>Portfolio Notice:</strong> This is a client presentation demonstration form. Submitting will validate fields and display a demo summary. No real payment or binding reservation is made.
                  </span>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="solid-gold"
                  size="md"
                  className="w-full"
                  isLoading={formStatus === 'submitting'}
                  icon={<Send className="w-4 h-4" />}
                >
                  Submit Demonstration Enquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Hotel Contact Details, WhatsApp Link & Stylized Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-[#161618] border border-[#C9A96E]/25 rounded-[3px] p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.24em] text-[#C9A96E] font-medium block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl text-[#F7F2E9]">
                  Haven Crest Concierge
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#A39D93]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F2E9] block">Physical Address</strong>
                    <span>{HOTEL_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F2E9] block">Telephone Inquiries</strong>
                    <span>{HOTEL_INFO.phoneDisplay}</span>
                    <span className="text-[10px] text-[#6B665E] block">({HOTEL_INFO.phoneSampleNote})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F2E9] block">Email Reservations</strong>
                    <span>{HOTEL_INFO.emailDisplay}</span>
                    <span className="text-[10px] text-[#6B665E] block">({HOTEL_INFO.emailSampleNote})</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button using wa.me with placeholder */}
              <div className="pt-4 border-t border-[#C9A96E]/15">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Haven Crest Concierge, I am viewing the website demo and would like to inquire about suite reservations.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-[2px] bg-[#1F2E23] hover:bg-[#283C2E] border border-emerald-600/40 text-emerald-300 font-medium text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp: {HOTEL_INFO.whatsappDisplay}</span>
                </a>
                <p className="mt-1.5 text-[10px] text-center text-[#6B665E] italic">
                  * Opens WhatsApp with prefilled message to demo placeholder number ({HOTEL_INFO.whatsappDisplay}).
                </p>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="bg-[#161618] border border-[#C9A96E]/25 rounded-[3px] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium">
                  Location Sanctuary
                </span>
                <span className="text-[10px] text-[#6B665E]">Independence Layout</span>
              </div>

              {/* Map Illustration Box */}
              <div className="relative aspect-16/9 rounded-[2px] overflow-hidden bg-[#121214] border border-[#C9A96E]/20 flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1C1C1E] border border-[#C9A96E] mx-auto flex items-center justify-center text-[#C9A96E]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#F7F2E9]">Independence Layout, Enugu</h4>
                  <p className="text-[11px] text-[#A39D93] max-w-xs">
                    Plot 14, Presidential Boulevard. 15 minutes from Akanu Ibiam International Airport.
                  </p>
                </div>
              </div>

              <div className="text-[10px] text-[#6B665E] flex items-center justify-between">
                <span>Stylized interactive location placeholder</span>
                <span>No tracking cookies active</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
