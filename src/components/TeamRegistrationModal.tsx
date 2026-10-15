import React, { useState } from 'react';
import { X, Trophy, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { TournamentTier, Player } from '../types';

export const TeamRegistrationModal: React.FC = () => {
  const { isTeamModalOpen, setIsTeamModalOpen, addTeam } = useTournament();

  const [tier, setTier] = useState<TournamentTier>('competitive');
  const [teamName, setTeamName] = useState<string>('');
  const [captainName, setCaptainName] = useState<string>('');
  const [captainPhone, setCaptainPhone] = useState<string>('');
  const [captainEmail, setCaptainEmail] = useState<string>('');
  const [pledgeAmount, setPledgeAmount] = useState<number>(3000);

  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: '', jerseyNumber: 1, position: 'PG' },
    { id: '2', name: '', jerseyNumber: 2, position: 'SG' },
    { id: '3', name: '', jerseyNumber: 3, position: 'SF' },
    { id: '4', name: '', jerseyNumber: 4, position: 'PF' },
    { id: '5', name: '', jerseyNumber: 5, position: 'C' },
  ]);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isTeamModalOpen) return null;

  const handlePlayerChange = (id: string, field: 'name' | 'jerseyNumber', value: any) => {
    setPlayers(prev =>
      prev.map(p => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const addRosterSlot = () => {
    if (players.length >= 8) return;
    const nextNum = players.length + 1;
    setPlayers(prev => [
      ...prev,
      { id: `${Date.now()}`, name: '', jerseyNumber: nextNum, position: 'G/F' },
    ]);
  };

  const removeRosterSlot = (id: string) => {
    if (players.length <= 5) return;
    setPlayers(prev => prev.filter(p => p.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !captainName || !captainPhone) return;

    // Filter valid players
    const validPlayers = players.map((p, idx) => ({
      ...p,
      name: p.name.trim() || `Player ${idx + 1}`,
      jerseyNumber: Number(p.jerseyNumber) || idx + 1,
    }));

    addTeam({
      name: teamName,
      tier,
      captainName,
      captainPhone,
      captainEmail: captainEmail || `${captainName.toLowerCase().replace(/\s+/g, '')}@bballfest.com`,
      roster: validPlayers,
      fundraisingPledge: pledgeAmount,
      avatarColor: tier === 'competitive' ? 'from-amber-500 to-orange-600' : 'from-blue-600 to-indigo-700',
    });

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsTeamModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-white">
                {isSubmitted ? 'Team Registration Complete!' : 'Register 5v5 Basketball Team'}
              </h3>
              <p className="text-xs text-amber-400">
                Play for a Purpose · Support Acute Leukaemia &amp; Street Youth
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
                Welcome to the Tournament!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                <strong className="text-slate-900">{teamName}</strong> has been registered in the{' '}
                <strong className="capitalize">{tier} Division</strong>. Your roster has been added to the Tournament
                Directory, and your match times will be assigned on Court Central.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
            >
              View Registered Teams
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Division Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Select Tournament Tier:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTier('competitive')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    tier === 'competitive'
                      ? 'bg-amber-50/80 border-amber-500 shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="font-bold text-xs text-slate-900 block">Competitive Championship</span>
                  <span className="text-[11px] text-slate-500">Playoffs, trophy &amp; ranking points</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTier('community')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    tier === 'community'
                      ? 'bg-amber-50/80 border-amber-500 shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="font-bold text-xs text-slate-900 block">Community &amp; Charity Tier</span>
                  <span className="text-[11px] text-slate-500">Corporate, friendly &amp; youth showcase</span>
                </button>
              </div>
            </div>

            {/* Team & Captain Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Team Name:</label>
                <input
                  type="text"
                  placeholder="e.g. Ridge Warriors"
                  value={teamName}
                  onChange={e => setTeamName(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Captain Name:</label>
                <input
                  type="text"
                  placeholder="Captain full name"
                  value={captainName}
                  onChange={e => setCaptainName(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Captain Phone (WhatsApp):</label>
                <input
                  type="tel"
                  placeholder="+233 24 000 0000"
                  value={captainPhone}
                  onChange={e => setCaptainPhone(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Captain Email:</label>
                <input
                  type="email"
                  placeholder="captain@email.com"
                  value={captainEmail}
                  onChange={e => setCaptainEmail(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 text-xs"
                />
              </div>
            </div>

            {/* Fundraising Pledge */}
            <div className="text-xs space-y-1">
              <label className="font-semibold text-slate-700 block">
                Team Charity Fundraising Pledge (GH₵):
              </label>
              <input
                type="number"
                min="500"
                step="500"
                value={pledgeAmount}
                onChange={e => setPledgeAmount(Number(e.target.value))}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 font-mono font-bold"
              />
              <p className="text-[11px] text-slate-500">
                Suggested team commitment to support leukemia medicines and street children meals.
              </p>
            </div>

            {/* Roster Manager */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Player Roster (5 to 8 Players):
                </label>
                {players.length < 8 && (
                  <button
                    type="button"
                    onClick={addRosterSlot}
                    className="flex items-center gap-1 text-[11px] font-bold text-amber-700 hover:text-amber-800"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Player</span>
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {players.map((p, idx) => (
                  <div key={p.id} className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-slate-400 w-5 text-right">{idx + 1}.</span>
                    <input
                      type="number"
                      placeholder="#"
                      value={p.jerseyNumber}
                      onChange={e => handlePlayerChange(p.id, 'jerseyNumber', Number(e.target.value))}
                      className="w-14 p-1.5 bg-slate-50 border border-slate-300 rounded-md text-center font-mono font-bold text-slate-900"
                      title="Jersey #"
                    />
                    <input
                      type="text"
                      placeholder={`Player ${idx + 1} Name`}
                      value={p.name}
                      onChange={e => handlePlayerChange(p.id, 'name', e.target.value)}
                      className="flex-1 p-1.5 bg-slate-50 border border-slate-300 rounded-md text-slate-900"
                    />
                    {players.length > 5 && (
                      <button
                        type="button"
                        onClick={() => removeRosterSlot(p.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 rounded"
                        title="Remove player slot"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md active:scale-98"
            >
              Confirm 5v5 Team Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
