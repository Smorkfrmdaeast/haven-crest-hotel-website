import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, AlertCircle, RotateCcw } from 'lucide-react';

export const Newsletter: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (val: string): string => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Please enter your email address.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address (e.g. guest@havencrest.ng).';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    setError('');
    setStatus('submitting');

    try {
      // Simulate asynchronous subscription dispatch
      await new Promise((resolve) => setTimeout(resolve, 950));
      setStatus('success');
    } catch {
      setError('An unexpected error occurred while saving your subscription. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setEmail('');
    setError('');
    setStatus('idle');
  };

  return (
    <section 
      className={`rounded-[3px] bg-gradient-to-b from-[#161618] to-[#121214] border border-[#C9A96E]/30 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl ${className}`}
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative ambient gold radial glow */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 bg-[#C9A96E]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#121214] border border-[#C9A96E]/30 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#C9A96E] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The Haven Crest Dispatch
        </div>

        {/* Heading */}
        <h2 
          id="newsletter-heading"
          className="font-serif text-2xl sm:text-4xl text-[#F7F2E9] font-light tracking-tight leading-snug"
        >
          Subscribe to Upcoming Offers &amp; Seasonal Experiences
        </h2>

        {/* Value-Proposition Text */}
        <p 
          id="newsletter-value-prop"
          className="mt-3 text-xs sm:text-sm text-[#A39D93] max-w-xl mx-auto leading-relaxed"
        >
          Receive privileged access to private suite releases, curated seasonal dining menus at The Crest, and bespoke Coal City weekend retreats in Independence Layout.
        </p>

        {/* State Display: Success vs Form */}
        {status === 'success' ? (
          <div 
            className="mt-8 p-6 rounded-[2px] bg-[#121214] border border-[#C9A96E]/40 text-center animate-in fade-in duration-300 max-w-lg mx-auto"
            role="status"
            aria-live="polite"
          >
            <div className="w-12 h-12 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F7F2E9] font-light">
              Demonstration Subscription Recorded
            </h3>
            <p className="mt-2 text-xs text-[#A39D93] leading-relaxed">
              Thank you for exploring our hotel portfolio demo. In a live production environment, <strong className="text-[#F7F2E9] font-medium">{email}</strong> would receive our curated Coal City seasonal updates and private stay privileges.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-[#C9A96E] hover:text-[#D8BD85] uppercase tracking-[0.16em] font-medium cursor-pointer underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Subscribe another email address</span>
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            noValidate 
            className="mt-8 max-w-xl mx-auto"
          >
            {/* Accessible Form Label for Screen Readers */}
            <label htmlFor="newsletter-email-input" className="sr-only">
              Email Address for Haven Crest Newsletter
            </label>

            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* Gold-Bordered Email Input Field */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#C9A96E]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="newsletter-email-input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) {
                      setError('');
                      setStatus('idle');
                    }
                  }}
                  placeholder="Enter your email address (e.g. guest@havencrest.ng)"
                  aria-required="true"
                  aria-invalid={status === 'error' || !!error}
                  aria-describedby={error ? 'newsletter-error-desc' : 'newsletter-value-prop'}
                  className={`w-full bg-[#121214] text-[#F7F2E9] placeholder-[#6B665E] text-xs sm:text-sm pl-10 pr-4 py-3 rounded-[2px] border ${
                    error 
                      ? 'border-red-400 focus:border-red-400' 
                      : 'border-[#C9A96E] hover:border-[#D8BD85] focus:border-[#C9A96E]'
                  } focus:outline-none focus:ring-1 focus:ring-[#C9A96E] transition-all shadow-inner`}
                  disabled={status === 'submitting'}
                  required
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 sm:px-8 py-3 bg-[#C9A96E] hover:bg-[#D8BD85] active:bg-[#B39358] text-[#121214] font-medium text-xs uppercase tracking-[0.2em] rounded-[2px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
                aria-label="Subscribe to Haven Crest seasonal offers newsletter"
              >
                {status === 'submitting' ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-3.5 w-3.5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Subscribing...</span>
                  </span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Error Message with Accessible Notification */}
            {error && (
              <div 
                id="newsletter-error-desc" 
                role="alert"
                aria-live="assertive"
                className="mt-2.5 text-xs text-red-400 flex items-center justify-center gap-1.5 animate-in fade-in"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Privacy note */}
            <p className="mt-3 text-[11px] text-[#6B665E] font-sans">
              We respect your absolute privacy. Unsubscribe at any time. Demonstration form for portfolio display.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
