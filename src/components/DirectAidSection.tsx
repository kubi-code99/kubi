import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Copy, Check, HeartHandshake, Package, ShieldCheck, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { useTournament } from '../context/TournamentContext';

export const DirectAidSection: React.FC = () => {
  const { setIsShareModalOpen, setIsDonationModalOpen } = useTournament();
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num.replace(/\s+/g, ''));
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  return (
    <section id="direct-aid" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <span>Direct Community Channels</span>
            <span aria-hidden="true">·</span>
            <span>Cash Aid, MoMo &amp; In-Kind Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Offer Aid, Enquiries &amp; Sponsorship
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We welcome cash donations, corporate sponsorships, and aid in kind. Use the verified official numbers and
            channels below to reach our organizing committee directly.
          </p>
        </div>

        {/* 3-Column Core Contact & Payment Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Official Call Lines & WhatsApp */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                Official Enquiries &amp; Call Lines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Available 24/7 for team inquiries, cash donation drops, corporate sponsorship pledges, and logistics.
              </p>

              <div className="space-y-3 font-mono text-sm">
                {CONTACT_INFO.phones.map((phone, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 block font-sans">
                        Line {idx + 1} ({idx === 0 ? 'Telecel / Cash Aid' : 'MTN MoMo / WhatsApp'})
                      </span>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-amber-400">
                        {phone}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(phone)}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                      title="Copy number"
                    >
                      {copiedNumber === phone ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+233 59 709 1815)</span>
            </a>
          </div>

          {/* Card 2: Ghana Mobile Money Transfer Guide */}
          <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-lg relative">
            <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
              Instant MoMo
            </span>

            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                Mobile Money (Ghana)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Transfer directly from your phone to support leukemia medicine and youth meals immediately.
              </p>

              <div className="space-y-3 font-mono text-xs">
                {CONTACT_INFO.momoNumbers.map((momo, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center font-sans font-semibold text-amber-300">
                      <span>{momo.network}</span>
                      <button
                        onClick={() => handleCopy(momo.number)}
                        className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                      >
                        {copiedNumber === momo.number ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <div className="text-base font-bold text-white tracking-wider">{momo.number}</div>
                    <div className="text-[11px] text-slate-400 font-sans">
                      Account Name: <strong className="text-slate-200">{momo.name}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors text-center"
            >
              Generate Official MoMo Receipt
            </button>
          </div>

          {/* Card 3: In-Kind Aid & Email Support */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                Help in Kind &amp; Supplies
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Donations of goods and equipment directly support the kids and festival operations:
              </p>

              <ul className="text-xs text-slate-300 space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Basketballs, nets, jerseys &amp; youth sneakers (Sizes 34-44)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Drinking water, electrolytes &amp; tournament lunch packs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>Sterile medical bandages, hand sanitizers &amp; comfort bags</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>School backpacks &amp; stationery for street children &amp; kaya girls</span>
                </li>
              </ul>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <span className="text-slate-400 block text-[11px]">Official Foundation Email:</span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-bold text-amber-400 hover:underline break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors border border-slate-700"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Aid Request to Socials</span>
            </button>
          </div>
        </div>

        {/* Global Social Handles Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-orange-500/10 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Join Our Global Awareness Campaign
            </span>
            <h4 className="text-xl font-bold font-display text-white">
              Follow Us Everywhere at <span className="text-amber-400">{CONTACT_INFO.socialHandle}</span>
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Tag your tournament photos, post encouragement for the children, and spread leukaemia awareness
              with hashtags <strong>#ALBasketballFestival #DribbleForHope #CancerDoesntDefineLimits</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-700 transition-colors"
            >
              Instagram
            </a>
            <a
              href={CONTACT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-700 transition-colors"
            >
              TikTok
            </a>
            <a
              href={CONTACT_INFO.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-700 transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold border border-slate-700 transition-colors"
            >
              Facebook
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
