import React from 'react';
import { Heart, Users, Trophy, ArrowRight, Share2, PhoneCall } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';

export const Hero: React.FC = () => {
  const {
    formatCurrency,
    totalRaisedGHS,
    goalGHS,
    percentFunded,
    leukaemiaFundsGHS,
    youthFundsGHS,
    teams,
    setIsDonationModalOpen,
    setIsTeamModalOpen,
    setIsShareModalOpen,
  } = useTournament();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-14 border-b border-slate-800">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.18),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 2-Column Responsive Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mission Kicker (Clean unboxed metadata) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Dual-Impact Charity Festival</span>
              <span aria-hidden="true">·</span>
              <span>Acute Leukaemia Care</span>
              <span aria-hidden="true">·</span>
              <span>Street Youth & Kaya Girls</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight text-balance">
              Play. Support.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Give Hope.
              </span>
            </h1>

            {/* Subtitle & Core Message */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Because cancer doesn't define their limits. We harness the excitement and unity of basketball to
              tackle a dual crisis: providing vital medical care and medication for acute leukaemia patients, and
              lifting children living on the street, orphans, and young porter &ldquo;kaya girls&rdquo; with food, shelter,
              education, and basketball mentorship.
            </p>

            {/* The Inspiring Rallying Cry Box */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-4 sm:p-5 relative">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-xl font-serif select-none leading-none">&ldquo;</span>
                <p className="text-sm sm:text-base text-amber-100 font-medium italic">
                  Together, let us dribble for hope, play for a purpose, and change lives one basket at a time!
                  Don't just watch the game—be part of the change. A victory for that kaya girl, that street kid,
                  that orphan, and that cancer patient!
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-base shadow-lg hover:shadow-amber-500/20 transition-all active:scale-95"
              >
                <Heart className="w-5 h-5 fill-slate-950" />
                <span>Donate to Campaign</span>
              </button>

              <button
                onClick={() => setIsTeamModalOpen(true)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl text-base border border-slate-700 transition-colors"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Register 5v5 Team</span>
              </button>

              <a
                href="#direct-aid"
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 px-3 py-3 text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>MoMo & Cash Aid</span>
              </a>

              <button
                onClick={() => setIsShareModalOpen(true)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 px-3 py-3 text-sm font-medium transition-colors ml-auto sm:ml-0"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Share Hub</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Photography Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_basketball_festival_1792078661306.jpg"
                alt="Children in bright yellow jerseys smiling and playing basketball with hope and joy"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold mb-1">
                  <span>Accra Basketball Festival</span>
                  <span aria-hidden="true">·</span>
                  <span>Court Action Live</span>
                </div>
                <p className="text-white font-bold text-sm sm:text-base leading-snug">
                  &ldquo;It's more than a game... it's a lifeline.&rdquo;
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Every basket scored funds pediatric leukemia therapies and opens court doors for children living in hardship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Live Quantitative Progress & Impact Strip */}
        <div className="mt-12 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Metric 1: Total Raised */}
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Total Funds Raised
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                {formatCurrency(totalRaisedGHS)}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <span>Goal: {formatCurrency(goalGHS)}</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400 font-semibold">{percentFunded}% reached</span>
              </div>
            </div>

            {/* Metric 2: Leukaemia Patient Care Fund (50%) */}
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                <span>Leukaemia Patient Care (50%)</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-rose-100">
                {formatCurrency(leukaemiaFundsGHS)}
              </div>
              <p className="text-xs text-slate-400">
                Chemo medications, diagnostics & family care
              </p>
            </div>

            {/* Metric 3: Street Youth & Kaya Girls Outreach (50%) */}
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                <span>Street Kids & Kaya Girls (50%)</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-100">
                {formatCurrency(youthFundsGHS)}
              </div>
              <p className="text-xs text-slate-400">
                Meals, emergency shelter, gear & coaching
              </p>
            </div>

            {/* Metric 4: Registered Teams & Action */}
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Tournament Rosters
                </span>
                <span className="text-xs font-bold text-amber-400">{teams.length} Teams Enrolled</span>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(100, percentFunded)}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Competitive: 8 Teams</span>
                <span>Community: {teams.length - 8 > 0 ? teams.length - 8 : 6} Teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
