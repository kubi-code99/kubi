import React from 'react';
import { Heart, MessageSquare, Plus, Sparkles } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';

export const SupporterWall: React.FC = () => {
  const { donations, setIsDonationModalOpen, formatCurrency } = useTournament();

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 fill-rose-600" />
              <span>Wall of Hope &amp; Compassion</span>
              <span aria-hidden="true">·</span>
              <span>Supporters &amp; Dedications</span>
            </div>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 tracking-tight mt-1">
              Messages of Strength &amp; Solidarity
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Heartfelt words from our sponsors, families, and everyday champions standing shoulder-to-shoulder with our cancer warriors and street youth.
            </p>
          </div>

          <button
            onClick={() => setIsDonationModalOpen(true)}
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Your Message &amp; Support</span>
          </button>
        </div>

        {/* Masonry / Grid of Donor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {donations.map(don => (
            <div
              key={don.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-3 hover:border-rose-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {don.isAnonymous ? 'Kind Anonymous Supporter' : don.donorName}
                    </h3>
                    <div className="text-[11px] text-slate-400">
                      <span>{don.createdAt}</span>
                      <span className="mx-1">·</span>
                      <span className="uppercase font-mono text-[10px] text-slate-500 font-semibold">
                        Via {don.paymentMethod}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono font-extrabold text-sm text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                    {don.currency === 'USD' ? `$${don.amount}` : `GH₵ ${don.amount.toLocaleString()}`}
                  </span>
                </div>

                {/* Dedication Tag */}
                {don.dedication && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60 mb-2 font-medium">
                    <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate">{don.dedication}</span>
                  </div>
                )}

                {/* Message */}
                {don.message && (
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{don.message}&rdquo;
                  </p>
                )}
              </div>

              {/* Allocation split indicator */}
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span>50% Leukaemia Care</span>
                <span>50% Street Kids Outreach</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
