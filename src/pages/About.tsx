import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { SafeImage } from '../components/common/SafeImage';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQ } from '../components/common/FAQ';
import { IMAGES } from '../config/images';
import { ShieldCheck, HeartHandshake, Award, Leaf, Users, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const leadershipRoles = [
    {
      title: 'General Management',
      subtitle: 'Hospitality & Operations Leadership',
      focus: 'Orchestrating seamless five-star service standards with international luxury benchmarks.',
    },
    {
      title: 'Executive Culinary Direction',
      subtitle: 'The Crest Haute Cuisine Brigade',
      focus: 'Harmonizing indigenous Eastern Nigerian botanical flavors with classical European gastronomy.',
    },
    {
      title: 'Head of Concierge & Protocol',
      subtitle: 'Diplomatic & Guest Relations',
      focus: 'Managing bespoke itineraries, secure motorcade escorts, and confidential executive discretion.',
    },
    {
      title: 'Director of Wellness & Spa',
      subtitle: 'Aura Holistic Therapeutics',
      focus: 'Curating botanical restorative therapies rooted in African wellness rituals.',
    },
  ];

  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C9A96E]" />,
      title: 'Discreet Exclusivity',
      description: 'Your privacy is sacred. From acoustic insulation in our suites to gated security protocols, our guests find peace and undisturbed focus.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C9A96E]" />,
      title: 'Authentic Eastern Warmth',
      description: 'We believe true luxury is warm and attentive, not aloof. We honor traditional Igbo hospitality with thoughtful, intuitive service.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#C9A96E]" />,
      title: 'Uncompromising Craft',
      description: 'From 400-thread Egyptian cotton beddings to custom Nigerian mahogany joinery and culinary mastery, every detail is engineered for perfection.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#C9A96E]" />,
      title: 'Sustainable Stewardship',
      description: 'Responsible stewardship of our Enugu environment through solar-hybrid power integration, energy-efficient HVAC systems, and local sourcing.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Haven Crest Hotel &amp; Suites | Luxury Heritage in Enugu"
        description="Learn the fictional brand story, core values, leadership philosophy, and standards of Haven Crest Hotel &amp; Suites in Independence Layout, Enugu."
        canonicalPath="/about"
      />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121214] border-b border-[#C9A96E]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#161618] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Brand Heritage &amp; Ethos
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F7F2E9] font-light tracking-tight">
            The Haven Crest Story
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A39D93] max-w-2xl mx-auto leading-relaxed">
            Born from an aspiration to bring bespoke world-class hospitality to the historic heart of the Coal City.
          </p>
        </div>
      </section>

      {/* Brand Story Editorial */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/5 rounded-[3px] overflow-hidden border border-[#C9A96E]/30 shadow-2xl">
              <SafeImage
                src={IMAGES.about.heritage}
                alt="Architectural details and tranquil garden at Haven Crest"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#C9A96E]/15 -z-10 rounded-[3px] hidden sm:block" />
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium font-sans block">
              An Architectural Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F2E9] leading-tight">
              A Quiet Haven in the Historic Coal City
            </h2>
            <p className="text-sm sm:text-base text-[#A39D93] leading-relaxed">
              Enugu has always occupied a legendary position in Nigerian history: a city of stately tree-lined avenues, renowned intellectual vigor, and majestic rolling hills. Yet for discerning visitors, senior diplomats, and traveling leaders, there was an enduring longing for a residence that combined the privacy of a private club with the services of a grand European hotel.
            </p>
            <p className="text-sm sm:text-base text-[#A39D93] leading-relaxed">
              Haven Crest was conceived as the answer. Constructed in the diplomatic enclave of Independence Layout, every space was drafted with deliberate proportion: natural daylight filtering through fluted timber louvers, water cascading into stone courtyard fountains, and acoustic double-glazing ensuring absolute silence within every bedroom.
            </p>
            <div className="p-5 rounded-[2px] bg-[#161618] border-l-2 border-[#C9A96E] text-xs sm:text-sm text-[#E8E0D2] italic font-serif">
              "We built Haven Crest not merely as a hotel, but as a peaceful sanctuary where the spirit is restored and every necessity is quietly anticipated."
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#161618] border-y border-[#C9A96E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Pillars"
            title="The Values That Define Us"
            subtitle="The uncompromising principles behind our five-star hospitality standards in Nigeria."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[3px] bg-[#121214] border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-colors shadow-lg"
              >
                <div className="mb-4">{val.icon}</div>
                <h3 className="font-serif text-xl text-[#F7F2E9]">{val.title}</h3>
                <p className="mt-2.5 text-xs text-[#A39D93] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team / Leadership (Tasteful Illustrative Style) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Hospitality Custodians"
          title="The Stewardship Team"
          subtitle="A passionate brigade of hospitality veterans, master chefs, and concierges dedicated to perfection (Illustrative leadership profiles)."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[3px] bg-[#161618] border border-[#C9A96E]/20 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C9A96E] font-medium block">
                  Department Leadership
                </span>
                <h3 className="font-serif text-xl text-[#F7F2E9] mt-2">
                  {role.title}
                </h3>
                <p className="text-xs text-[#C9A96E] mt-1 font-sans">
                  {role.subtitle}
                </p>
                <p className="mt-3 text-xs text-[#A39D93] leading-relaxed">
                  {role.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9A96E]/15 text-[10px] text-[#6B665E] uppercase tracking-wider">
                Haven Crest Executive Board
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-[#6B665E] italic">
          * Note: Leadership profiles above represent illustrative functional roles designed for the SMORK'S TECH hotel client pitch.
        </p>
      </section>

      {/* Why Choose Haven Crest */}
      <section className="py-20 bg-[#121214] border-t border-[#C9A96E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="The Haven Crest Difference"
            title="Why Choose Haven Crest Hotel &amp; Suites"
            subtitle="The definitive reasons dignitaries and luxury travelers select our property in Enugu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
            <div className="p-6 rounded-[3px] bg-[#161618] border border-[#C9A96E]/15">
              <h4 className="font-serif text-lg text-[#C9A96E] mb-2">Unfailing 24/7 Power</h4>
              <p className="text-xs text-[#A39D93] leading-relaxed">
                Triple-redundancy power plant combining solar arrays, industrial battery banks, and dual heavy generators for zero-flicker continuity.
              </p>
            </div>
            <div className="p-6 rounded-[3px] bg-[#161618] border border-[#C9A96E]/15">
              <h4 className="font-serif text-lg text-[#C9A96E] mb-2">Diplomatic Security</h4>
              <p className="text-xs text-[#A39D93] leading-relaxed">
                Biometric perimeter controls, dedicated executive motorcade staging, and certified diplomatic protection liaisons.
              </p>
            </div>
            <div className="p-6 rounded-[3px] bg-[#161618] border border-[#C9A96E]/15">
              <h4 className="font-serif text-lg text-[#C9A96E] mb-2">Artisan Gastronomy</h4>
              <p className="text-xs text-[#A39D93] leading-relaxed">
                Everything is made fresh from scratch: from morning sourdough croissants to bespoke seven-course Coal City tasting menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQ className="border-t border-[#C9A96E]/20" />
    </>
  );
};
