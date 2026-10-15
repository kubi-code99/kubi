import React from 'react';
import { X, Trophy, Users, Heart, Phone, Mail } from 'lucide-react';
import { Team } from '../types';
import { useTournament } from '../context/TournamentContext';

interface RosterViewModalProps {
  team: Team | null;
  onClose: () => void;
}

export const RosterViewModal: React.FC<RosterViewModalProps> = ({ team, onClose }) => {
  const { formatCurrency, setIsDonationModalOpen, setDonationPreselectedTeam } = useTournament();

  if (!team) return null;

  const handleCheerDonate = () => {
    setDonationPreselectedTeam(team);
    onClose();
    setIsDonationModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden">
        {/* Header with team banner */}
        <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${team.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-md`}>
              {team.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h3 className="font-bold font-display text-base text-white">{team.name}</h3>
              <span className="text-xs text-amber-400 capitalize">
                {team.tier} Division · {team.wins}W - {team.losses}L
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Captain & Stats Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Team Captain:</span>
              <span className="font-bold text-slate-900">{team.captainName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Captain Phone:</span>
              <span className="font-mono text-slate-800">{team.captainPhone}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Fundraising Target:</span>
              <span className="font-mono font-bold text-slate-900">{formatCurrency(team.fundraisingPledge)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Funds Raised to Date:</span>
              <span className="font-mono font-bold text-emerald-700">{formatCurrency(team.raisedAmount)}</span>
            </div>
          </div>

          {/* Roster Table */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Official 5v5 Player Roster:
            </span>
            <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 max-h-56 overflow-y-auto">
              {team.roster.map((player, idx) => (
                <div key={player.id || idx} className="p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-mono font-bold flex items-center justify-center text-[11px]">
                      {player.jerseyNumber}
                    </span>
                    <span className="font-semibold text-slate-800">{player.name}</span>
                  </div>
                  {player.position && (
                    <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                      {player.position}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCheerDonate}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-xs"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Donate in Honor of {team.name}</span>
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
