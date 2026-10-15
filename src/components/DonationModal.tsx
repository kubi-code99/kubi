import React, { useState } from 'react';
import { X, Heart, Sparkles, CheckCircle2, Shield, Phone, Copy, Check } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { CONTACT_INFO } from '../data/mockData';
import { Currency } from '../types';

export const DonationModal: React.FC = () => {
  const {
    isDonationModalOpen,
    setIsDonationModalOpen,
    addDonation,
    teams,
    currency,
    formatCurrency,
    donationPreselectedTeam,
    setDonationPreselectedTeam,
  } = useTournament();

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currency);
  const [amount, setAmount] = useState<number>(250);
  const [donorName, setDonorName] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [dedication, setDedication] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | 'cash'>('momo');
  const [selectedTeamId, setSelectedTeamId] = useState<string>(donationPreselectedTeam ? donationPreselectedTeam.id : '');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedMoMo, setCopiedMoMo] = useState(false);

  if (!isDonationModalOpen) return null;

  const presets = selectedCurrency === 'GHS' ? [50, 100, 250, 500, 1000, 2500] : [10, 25, 50, 100, 200, 500];

  const handleCopyMoMo = (num: string) => {
    navigator.clipboard.writeText(num.replace(/\s+/g, ''));
    setCopiedMoMo(true);
    setTimeout(() => setCopiedMoMo(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;

    const chosenTeam = teams.find(t => t.id === selectedTeamId);

    addDonation({
      donorName: isAnonymous ? 'Kind Anonymous Supporter' : (donorName.trim() || 'Generous Supporter'),
      amount,
      currency: selectedCurrency,
      paymentMethod,
      isAnonymous,
      message: message.trim() || undefined,
      dedication: dedication.trim() || undefined,
      targetTeamId: chosenTeam ? chosenTeam.id : undefined,
      targetTeamName: chosenTeam ? chosenTeam.name : undefined,
      allocation: {
        leukaemiaPercent: 50,
        youthPercent: 50,
      },
    });

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsDonationModalOpen(false);
    setIsSubmitted(false);
    setDonationPreselectedTeam(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Heart className="w-4 h-4 fill-slate-950" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-white">
                {isSubmitted ? 'Donation Confirmed!' : 'Donate to the Festival'}
              </h3>
              <p className="text-xs text-amber-400">
                50% Leukaemia Care · 50% Street Kids &amp; Kaya Girls
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Medaase! Thank You!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your generous gift of <strong className="text-slate-900">{selectedCurrency === 'USD' ? `$${amount}` : `GH₵ ${amount.toLocaleString()}`}</strong> has been added to our live total and recorded on the Wall of Hope.
              </p>
            </div>

            {paymentMethod === 'momo' && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-left text-slate-800 space-y-1.5">
                <span className="font-bold text-amber-900 block">Mobile Money Transfer Instructions:</span>
                <p>Send your pledge to: <strong>059 709 1815 (AL BBALL FOUNDATION)</strong></p>
                <p className="text-[11px] text-slate-500">Reference: Your Name / Festival Support</p>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                Return to Festival
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Currency & Amount Selection */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Donation Amount:
                </label>
                <div className="flex items-center bg-slate-100 rounded-md p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setSelectedCurrency('GHS')}
                    className={`px-2 py-0.5 rounded ${selectedCurrency === 'GHS' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-600'}`}
                  >
                    GH₵ (Cedi)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCurrency('USD')}
                    className={`px-2 py-0.5 rounded ${selectedCurrency === 'USD' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-600'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Preset buttons */}
              <div className="grid grid-cols-3 gap-2">
                {presets.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all border ${
                      amount === p
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {selectedCurrency === 'USD' ? `$${p}` : `GH₵ ${p}`}
                  </button>
                ))}
              </div>

              {/* Custom input */}
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-mono font-bold text-slate-400">
                  {selectedCurrency === 'USD' ? '$' : 'GH₵'}
                </span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                  className="w-full pl-12 pr-3 py-2 text-sm font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
                  placeholder="Custom amount"
                  required
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Payment Channel:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('momo')}
                  className={`p-2.5 rounded-lg border text-center font-bold transition-all ${
                    paymentMethod === 'momo'
                      ? 'bg-amber-50 border-amber-500 text-amber-900'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  MTN / Telecel MoMo
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-lg border text-center font-bold transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-amber-50 border-amber-500 text-amber-900'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  Card / Online
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-2.5 rounded-lg border text-center font-bold transition-all ${
                    paymentMethod === 'cash'
                      ? 'bg-amber-50 border-amber-500 text-amber-900'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  Cash Aid Call
                </button>
              </div>

              {paymentMethod === 'momo' && (
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs space-y-1">
                  <div className="flex justify-between items-center text-amber-950 font-bold">
                    <span>MoMo Line: 059 709 1815</span>
                    <button
                      type="button"
                      onClick={() => handleCopyMoMo('0597091815')}
                      className="text-[10px] text-amber-800 hover:underline flex items-center gap-1"
                    >
                      {copiedMoMo ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Network: MTN Mobile Money · Name: AL BBALL FOUNDATION
                  </p>
                </div>
              )}
            </div>

            {/* Donor Information */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ama Asante"
                  disabled={isAnonymous}
                  value={donorName}
                  onChange={e => setDonorName(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs text-slate-900 disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anon"
                  checked={isAnonymous}
                  onChange={e => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                />
                <label htmlFor="anon" className="text-xs text-slate-600 select-none">
                  Make my donation anonymous on the public Supporter Wall
                </label>
              </div>

              {/* Dedication */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Personal Dedication (Optional):</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. In loving memory of Auntie Ama / For all pediatric warriors"
                  value={dedication}
                  onChange={e => setDedication(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs text-slate-900"
                />
              </div>

              {/* Message of Hope */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Message of Encouragement:
                </label>
                <textarea
                  rows={2}
                  placeholder="Leave words of strength for the patients, teams, and street children..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs text-slate-900"
                />
              </div>

              {/* Cheer on a specific team */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Cheer for a Registered 5v5 Team (Optional):
                </label>
                <select
                  value={selectedTeamId}
                  onChange={e => setSelectedTeamId(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs text-slate-900"
                >
                  <option value="">General Festival Fund</option>
                  {teams.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.tier} tier)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md active:scale-98"
            >
              Complete Donation of {selectedCurrency === 'USD' ? `$${amount}` : `GH₵ ${amount.toLocaleString()}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
