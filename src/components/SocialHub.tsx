import React, { useState } from 'react';
import { Share2, Sparkles, Download, Check, MessageCircle, Copy, Trophy, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { useTournament } from '../context/TournamentContext';

export const SocialHub: React.FC = () => {
  const { totalRaisedGHS, percentFunded, formatCurrency } = useTournament();

  const [supporterName, setSupporterName] = useState<string>('');
  const [supporterRole, setSupporterRole] = useState<string>('Tournament Cheerleader');
  const [favoriteCause, setFavoriteCause] = useState<string>('Acute Leukaemia & Street Youth Dual Mission');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(false);

  const shareText = `🏀 I am supporting the Acute Leukaemia Basketball Fundraiser Festival! Raising vital funds for acute leukaemia patient care & uplifting vulnerable street youth and kaya girls through basketball. Together we dribble for hope! Join us or donate: ${window.location.origin} @al.basketballfestival`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyStatus = () => {
    navigator.clipboard.writeText(shareText);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
            <Share2 className="w-3.5 h-3.5" />
            <span>Community Outreach Engine</span>
            <span aria-hidden="true">·</span>
            <span>Spread the Word</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Amplify the Movement &amp; Generate Your Badge
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every share reaches a potential sponsor, donor, or volunteer. Customize your official digital supporter
            pass and share our mission across your social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Supporter Pass Customizer */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Create Your Digital Supporter Pass</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Full Name or Organization:</label>
                <input
                  type="text"
                  placeholder="e.g. Kwame Mensah / Accra Tech Hub"
                  value={supporterName}
                  onChange={e => setSupporterName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Festival Role / Cheer Tag:</label>
                <select
                  value={supporterRole}
                  onChange={e => setSupporterRole(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-sm"
                >
                  <option value="Tournament Cheerleader">Tournament Cheerleader</option>
                  <option value="Proud Charity Sponsor">Proud Charity Sponsor</option>
                  <option value="Cancer Warrior Advocate">Cancer Warrior Advocate</option>
                  <option value="Street Youth Champion">Street Youth Champion</option>
                  <option value="Kaya Girls Supporter">Kaya Girls Supporter</option>
                  <option value="Court 1 Superfan">Court 1 Superfan</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Dedicated Cause Focus:</label>
                <input
                  type="text"
                  value={favoriteCause}
                  onChange={e => setFavoriteCause(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-sm"
                />
              </div>
            </div>

            {/* Quick 1-Click Social Share Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 block">
                Instant Share to Social Media &amp; Groups:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>X (Twitter)</span>
                </button>
                <button
                  onClick={handleShareFacebook}
                  className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Facebook</span>
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="flex items-center justify-center gap-1.5 bg-sky-700 hover:bg-sky-600 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>LinkedIn</span>
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyStatus}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg text-xs font-medium transition-colors"
                >
                  {copiedStatus ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedStatus ? 'Copied Post Text!' : 'Copy Post Text'}</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg text-xs font-medium transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Graphic Supporter Pass Preview */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-7 border-2 border-amber-500/80 shadow-2xl relative overflow-hidden space-y-6">
              {/* Background Basketball Texture motif */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full border-[12px] border-amber-500/10 pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                    AL
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 block tracking-wide uppercase">
                      Official Supporter Credential
                    </span>
                    <h4 className="text-base font-bold font-display text-white">
                      AL Basketball Festival
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono">HANDLE</span>
                  <span className="text-xs font-bold text-amber-400">{CONTACT_INFO.socialHandle}</span>
                </div>
              </div>

              {/* Pass Body */}
              <div className="space-y-4 py-2">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">
                    REGISTERED SUPPORTER NAME
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-display text-white tracking-tight">
                    {supporterName.trim() || 'Champion of Hope'}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    {supporterRole}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-mono">MISSION PLEDGE</span>
                    <span className="text-slate-200 font-medium">50% Leukaemia · 50% Youth</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block font-mono">CAMPAIGN TOTAL</span>
                    <span className="text-amber-400 font-bold font-mono">{formatCurrency(totalRaisedGHS)} ({percentFunded}%)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 italic bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  &ldquo;Play. Support. Give Hope. Together, we dribble for hope and make cancer patients and street children realize their potential!&rdquo;
                </p>
              </div>

              {/* Pass Footer */}
              <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
                <span>Direct Enquiries: {CONTACT_INFO.phones[0]}</span>
                <span className="font-mono text-amber-400 font-bold">#DribbleForHope</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
