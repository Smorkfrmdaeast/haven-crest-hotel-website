/**
 * Haven Crest Hotel & Suites - Photography Registry
 * 
 * NOTE FOR PRODUCTION:
 * All images in this configuration file are curated, royalty-free luxury photography
 * placeholders. When onboarding Haven Crest Hotel or preparing for live deployment,
 * replace these URLs with the hotel's high-resolution professional photography.
 */

// Generate an SVG data URI fallback with gold crest and charcoal gradient
export const FALLBACK_IMAGE_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="charcoalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121214" />
      <stop offset="50%" stop-color="#1C1C1E" />
      <stop offset="100%" stop-color="#242428" />
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#C9A96E" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#C9A96E" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#charcoalGrad)" />
  <rect width="100%" height="100%" fill="url(#goldGlow)" />
  <rect x="40" y="40" width="1120" height="720" fill="none" stroke="#C9A96E" stroke-opacity="0.25" stroke-width="1.5" />
  <rect x="52" y="52" width="1096" height="696" fill="none" stroke="#C9A96E" stroke-opacity="0.1" stroke-width="1" />
  
  <!-- Crest Icon -->
  <g transform="translate(560, 310)">
    <path d="M40 0 L70 18 L70 55 L40 85 L10 55 L10 18 Z" fill="none" stroke="#C9A96E" stroke-width="2" />
    <path d="M40 10 L60 22 L60 50 L40 73 L20 50 L20 22 Z" fill="#C9A96E" fill-opacity="0.15" stroke="#C9A96E" stroke-width="1" />
    <path d="M25 35 L25 50 M55 35 L55 50 M25 42 L55 42" stroke="#F7F2E9" stroke-width="2.5" stroke-linecap="round" />
  </g>
  
  <text x="600" y="445" font-family="'Cormorant Garamond', Georgia, serif" font-size="28" fill="#F7F2E9" text-anchor="middle" letter-spacing="4">HAVEN CREST</text>
  <text x="600" y="480" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#C9A96E" text-anchor="middle" letter-spacing="6">HOTEL &amp; SUITES • ENUGU</text>
  <text x="600" y="530" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#6B665E" text-anchor="middle" letter-spacing="2">LUXURY PHOTOGRAPHY PREVIEW</text>
</svg>
`)}`;

export const IMAGES = {
  // Hero & Brand
  hero: {
    main: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85',
    alt: 'Haven Crest Hotel & Suites grand architectural facade and evening illuminated grounds in Enugu',
    width: 2400,
    height: 1600,
  },
  heroMobile: {
    main: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Haven Crest Hotel & Suites facade at sunset',
    width: 1200,
    height: 1400,
  },
  editorialIntro: {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
    alt: 'Lavish interior lobby lounge with refined Nigerian timber details and warm champagne accents',
    width: 1400,
    height: 950,
  },

  // Rooms
  rooms: {
    classic: {
      primary: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85'
      ],
      alt: 'Haven Crest Classic Room with king plush bed and warm mood lighting',
    },
    deluxe: {
      primary: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85'
      ],
      alt: 'Deluxe Room featuring private balcony overlooking the lush gardens of Independence Layout',
    },
    executive: {
      primary: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85'
      ],
      alt: 'Executive Room with dedicated marble workstation, lounge seating and espresso bar',
    },
    havenSuite: {
      primary: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85'
      ],
      alt: 'Haven Suite expansive living salon, dining area, and panoramic bedroom suite',
    },
    presidential: {
      primary: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=85',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85'
      ],
      alt: 'Presidential Suite private penthouse sanctuary with private dining room, whirlpool bath, and personal butler service',
    },
  },

  // Dining & Facilities
  facilities: {
    restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    lounge: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1400&q=85',
    breakfast: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1400&q=85',
    roomService: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=85',
    pool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85',
    spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
    gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85',
    events: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85',
    shuttle: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1400&q=85',
  },

  // Special Offers
  offers: {
    weekend: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    business: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    honeymoon: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    extended: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    event: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },

  // About & Brand story
  about: {
    heritage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85',
    architecture: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=85',
    hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
  }
};
