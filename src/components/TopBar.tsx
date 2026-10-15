import React from 'react';
import { Heart, Phone, Mail, Share2 } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { CONTACT_INFO } from '../data/mockData';

export const TopBar: React.FC = () => {
  const { currency, setCurrency, setIsDonationModalOpen, setIsShareModalOpen } = useTournament();

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-md border-b border-slate-800">
      {/* Quiet top utility banner with contacts and social handle */}
      <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded text-[11px] font-bold tracking-wide">
              OFFICIAL ENQUIRIES & CASH AID
            </span>
            <a
              href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:underline whitespace-nowrap"
            >
              <Phone className="w-3 h-3" />
              <span>{CONTACT_INFO.displayPhones}</span>
            </a>
            <span className="hidden md:inline text-amber-900/60">|</span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden md:flex items-center gap-1 hover:underline"
            >
              <Mail className="w-3 h-3" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden sm:inline">Follow & Share:</span>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              {CONTACT_INFO.socialHandle}
            </a>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-1 bg-slate-950/10 hover:bg-slate-950/20 px-2 py-0.5 rounded transition-colors"
              title="Share Festival"
            >
              <Share2 className="w-3 h-3" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - 1-Row, 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Zone 1: Single element brand wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow-sm group-hover:bg-amber-400 transition-colors">
            AL
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold font-display tracking-tight text-white leading-none">
              AL Basketball Festival
            </span>
            <span className="text-[11px] text-amber-400 font-medium tracking-wide">
              Dribble for Hope · Dual-Impact Fundraiser
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#cause-and-needs" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            The Cause & Needs
          </a>
          <a href="#dual-impact" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Dual Impact
          </a>
          <a href="#tournament-hub" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            5v5 Tournament
          </a>
          <a href="#live-scores" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Live Matches
          </a>
          <a href="#direct-aid" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            MoMo & Cash Aid
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: Currency selector and 1 primary CTA button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-800 rounded-md p-0.5 text-xs font-semibold border border-slate-700">
            <button
              onClick={() => setCurrency('GHS')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'GHS'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              GH₵
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2 py-1 rounded transition-colors ${
                currency === 'USD'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD $
            </button>
          </div>

          {/* Primary Action */}
          <button
            onClick={() => setIsDonationModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-md active:scale-95 whitespace-nowrap shrink-0"
          >
            <Heart className="w-4 h-4 fill-slate-950" />
            <span>Donate Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};
