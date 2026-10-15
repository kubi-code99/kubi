import React, { useState } from 'react';
import { Heart, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';

export const ImpactCalculator: React.FC = () => {
  const { currency, formatCurrency, setIsDonationModalOpen } = useTournament();

  // Slider amount in GHS
  const [sliderAmountGHS, setSliderAmountGHS] = useState<number>(500);

  const presetsGHS = [100, 250, 500, 1000, 2500, 5000];

  const leukaemiaAmount = Math.round(sliderAmountGHS * 0.5);
  const youthAmount = Math.round(sliderAmountGHS * 0.5);

  // Dynamic calculations of tangible outcomes
  const getTangibleOutcomes = (amountGHS: number) => {
    const medShare = amountGHS * 0.5;
    const youthShare = amountGHS * 0.5;

    let medText = '';
    if (medShare < 100) {
      medText = 'Co-funds essential oral antibiotics & sterile clinical dressings for 1 patient.';
    } else if (medShare < 300) {
      medText = 'Funds 1 pediatric hospital comfort kit (warm beanies, nutritional drinks & fleece blanket).';
    } else if (medShare < 700) {
      medText = 'Covers 1 blood and platelet transfusion screening lab panel for acute leukaemia stabilization.';
    } else if (medShare < 1500) {
      medText = 'Subsidizes 1 complete chemotherapy cycle infusion and anti-nausea therapy.';
    } else {
      medText = 'Provides comprehensive inpatient diagnostic profiling and multi-week family emergency lodging.';
    }

    let youthText = '';
    if (youthShare < 100) {
      youthText = 'Provides hot nutritious lunch and fresh drinking water for 3 street children during tournament play.';
    } else if (youthShare < 300) {
      youthText = 'Provides 1 official tournament basketball and safety knee/ankle pads for a young player.';
    } else if (youthShare < 700) {
      youthText = 'Equips 1 street kid or young kaya girl with new basketball shoes, team jersey & 2 weeks of meals.';
    } else if (youthShare < 1500) {
      youthText = 'Sponsors 2 youth for the 6-month basketball mentorship and after-school tutoring program.';
    } else {
      youthText = 'Full vocational scholarship and athletic sponsorship package for a team of 5 vulnerable girls.';
    }

    return { medText, youthText };
  };

  const { medText, youthText } = getTangibleOutcomes(sliderAmountGHS);

  return (
    <section id="dual-impact" className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <span>Transparent Accountability</span>
            <span aria-hidden="true">·</span>
            <span>50 / 50 Dual-Impact Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
            Interactive Dual-Impact Calculator
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            See exactly how your gift is split equally between saving lives in the leukemia ward and
            giving hope to children on the street.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          {/* Preset Buttons */}
          <div className="space-y-3 mb-6">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Choose an Amount to Preview Impact:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {presetsGHS.map(amt => (
                <button
                  key={amt}
                  onClick={() => setSliderAmountGHS(amt)}
                  className={`py-2 px-3 rounded-lg text-sm font-bold font-mono transition-all ${
                    sliderAmountGHS === amt
                      ? 'bg-amber-500 text-slate-950 shadow-md scale-102'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {formatCurrency(amt)}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="space-y-2 mb-8">
            <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
              <span>{formatCurrency(50)}</span>
              <span className="text-base sm:text-lg font-bold text-amber-400">
                Selected: {formatCurrency(sliderAmountGHS)}
              </span>
              <span>{formatCurrency(10000)}</span>
            </div>
            <input
              type="range"
              min="50"
              max="10000"
              step="50"
              value={sliderAmountGHS}
              onChange={e => setSliderAmountGHS(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* 50/50 Dual Allocation Split Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* 50% Leukaemia Box */}
            <div className="bg-slate-900 border border-rose-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  <span>50% Acute Leukaemia Care</span>
                </span>
                <span className="text-lg font-bold font-mono text-rose-200">
                  {formatCurrency(leukaemiaAmount)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                {medText}
              </p>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <span>Beneficiary:</span>
                <span className="text-slate-200 font-medium">Acute Leukaemia Patient Support Fund</span>
              </div>
            </div>

            {/* 50% Street Kids & Kaya Girls Box */}
            <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>50% Street Kids &amp; Kaya Girls</span>
                </span>
                <span className="text-lg font-bold font-mono text-amber-200">
                  {formatCurrency(youthAmount)}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                {youthText}
              </p>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <span>Beneficiary:</span>
                <span className="text-slate-200 font-medium">Underprivileged Youth &amp; Kaya Girls Clinic</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              <span>Ready to transform lives? Donate with Mobile Money or Card.</span>
              <span className="block text-slate-500">Every donation generates an official digital supporter badge.</span>
            </div>
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <span>Donate {formatCurrency(sliderAmountGHS)} Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Festival Milestones Journey */}
        <div className="mt-14 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block text-center">
            Festival Funding Milestones
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GH₵ 25,000 · Achieved</span>
              </div>
              <p className="text-[11px] text-slate-400">
                First 30 hospital comfort bags &amp; 50 tournament balls secured.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GH₵ 50,000 · Achieved</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Chemotherapy co-pay pool launched &amp; street teams outfitted in uniforms.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-amber-500 text-slate-200 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>GH₵ 75,000 · In Progress</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Hospital transit assistance &amp; 30 Kaya Girls vocational school kits.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 font-bold">
                <span>GH₵ 150,000 · Grand Goal</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Year-round acute leukaemia patient support and continuous youth academy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
