import React from 'react';
import { Heart, Phone, Mail, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { useTournament } from '../context/TournamentContext';

export const Footer: React.FC = () => {
  const { setIsDonationModalOpen, setIsTeamModalOpen, setIsShareModalOpen } = useTournament();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow-sm">
                AL
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight">
                AL Basketball Festival
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              A community-driven sports philanthropy initiative with a powerful dual purpose: funding
              acute leukaemia patient treatment, chemotherapy, and family support, while rescuing and
              empowering street children, orphans, and young &ldquo;kaya girls&rdquo; through basketball and basic necessities.
            </p>

            <div className="flex items-center gap-3 text-xs text-amber-400 font-medium">
              <span>Play. Support. Give Hope.</span>
              <span aria-hidden="true">·</span>
              <span>Dribble for a Purpose</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Festival Hub
            </h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li>
                <a href="#cause-and-needs" className="hover:text-amber-400 transition-colors">
                  The Urgent Need for Funds
                </a>
              </li>
              <li>
                <a href="#dual-impact" className="hover:text-amber-400 transition-colors">
                  50/50 Dual-Impact Guarantee
                </a>
              </li>
              <li>
                <a href="#tournament-hub" className="hover:text-amber-400 transition-colors">
                  5v5 Tournament &amp; Teams
                </a>
              </li>
              <li>
                <a href="#live-scores" className="hover:text-amber-400 transition-colors">
                  Live Court Scoreboard
                </a>
              </li>
              <li>
                <a href="#direct-aid" className="hover:text-amber-400 transition-colors">
                  MoMo &amp; Cash Aid Numbers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts & Handles */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Direct Contact Lines
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`} className="hover:text-white">
                  {CONTACT_INFO.displayPhones}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block text-[11px] mb-1">Official Social Handle:</span>
                <span className="font-bold text-amber-400 text-sm">{CONTACT_INFO.socialHandle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Acute Leukaemia Basketball Fundraiser Festival. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="text-amber-400 hover:underline font-semibold"
            >
              Donate
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsTeamModalOpen(true)}
              className="hover:text-white"
            >
              Register Team
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="hover:text-white"
            >
              Share Hub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
