import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageCircle, Heart } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { CONTACT_INFO } from '../data/mockData';

export const ShareModal: React.FC = () => {
  const { isShareModalOpen, setIsShareModalOpen } = useTournament();
  const [copied, setCopied] = useState(false);

  if (!isShareModalOpen) return null;

  const shareText = `🏀 Join us at the Acute Leukaemia Basketball Fundraiser Festival!
Play for a purpose, fight leukaemia & uplift vulnerable children living on the street and young kaya girls.
Donate, sponsor a team, or dribble for hope!
Official Handle: ${CONTACT_INFO.socialHandle}
Direct Aid / Enquiries: ${CONTACT_INFO.phones[0]} / ${CONTACT_INFO.phones[1]}
Website: ${window.location.origin}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-white">Share the Movement</h3>
              <p className="text-xs text-amber-400">Tag us: {CONTACT_INFO.socialHandle}</p>
            </div>
          </div>

          <button
            onClick={() => setIsShareModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Help spread the word to your networks, church groups, basketball clubs, and corporate partners.
            Every share can help fund a child's chemotherapy or provide sneakers and meals for street kids.
          </p>

          {/* Social Channels */}
          <div className="grid grid-cols-2 gap-2.5 text-xs font-bold">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleTwitter}
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl transition-colors shadow-xs"
            >
              <span>X (Twitter)</span>
            </button>
            <button
              onClick={handleFacebook}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-colors shadow-xs"
            >
              <span>Facebook</span>
            </button>
            <button
              onClick={handleLinkedIn}
              className="flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-600 text-white p-3 rounded-xl transition-colors shadow-xs"
            >
              <span>LinkedIn</span>
            </button>
          </div>

          {/* Copyable text snippet */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Copy Ready-to-Post Campaign Text:
            </label>
            <div className="relative">
              <textarea
                readOnly
                rows={4}
                value={shareText}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-mono text-slate-700 leading-relaxed select-all focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="absolute right-2.5 bottom-2.5 flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold py-1 px-2.5 rounded-md transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 text-center">
            Official Hashtags: <span className="font-semibold text-slate-700">#ALBasketballFestival #DribbleForHope</span>
          </div>
        </div>
      </div>
    </div>
  );
};
