import React, { useState } from 'react';
import { Trophy, Users, Play, Clock, Flame, Shield, PlusCircle, Search, Filter } from 'lucide-react';
import { useTournament } from '../context/TournamentContext';
import { TournamentTier, Team, Fixture } from '../types';

interface TournamentHubProps {
  onSelectTeamRoster: (team: Team) => void;
}

export const TournamentHub: React.FC<TournamentHubProps> = ({ onSelectTeamRoster }) => {
  const {
    teams,
    fixtures,
    updateFixtureScore,
    isSimulating,
    toggleSimulation,
    setIsTeamModalOpen,
    formatCurrency,
  } = useTournament();

  const [activeTier, setActiveTier] = useState<TournamentTier | 'all'>('competitive');
  const [activeCourt, setActiveCourt] = useState<string>('Court 1 (Main Arena)');
  const [teamSearch, setTeamSearch] = useState<string>('');

  // Filter fixtures for live games
  const liveFixtures = fixtures.filter(f => f.status === 'live');
  const activeCourtFixture = fixtures.find(f => f.court === activeCourt && f.status === 'live') || fixtures[0];

  // Filtered teams for directory
  const filteredTeams = teams.filter(t => {
    const matchesTier = activeTier === 'all' || t.tier === activeTier;
    const matchesSearch =
      t.name.toLowerCase().includes(teamSearch.toLowerCase()) ||
      t.captainName.toLowerCase().includes(teamSearch.toLowerCase());
    return matchesTier && matchesSearch;
  });

  // Competitive bracket matches
  const competitiveFixtures = fixtures.filter(f => f.tier === 'competitive');
  const quarterFinals = competitiveFixtures.filter(f => f.round === 'Quarterfinal');
  const semiFinals = competitiveFixtures.filter(f => f.round === 'Semifinal');
  const championship = competitiveFixtures.find(f => f.round === 'Championship');

  return (
    <section id="tournament-hub" className="py-16 bg-slate-100 border-b border-slate-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
              <span>Game Day Central</span>
              <span aria-hidden="true">·</span>
              <span>Open 5v5 Dual-Tier Tournament</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Tournament Hub &amp; Live Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Follow real-time 5v5 match scores across 3 courts, view the competitive championship bracket,
              and check out the registered teams playing for our patients and street youth.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSimulation}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors border ${
                isSimulating
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'
              }`}
              title="Toggle live match ticker simulation"
            >
              <span className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              <span>{isSimulating ? 'Live Score Feed: ON' : 'Live Feed Paused'}</span>
            </button>

            <button
              onClick={() => setIsTeamModalOpen(true)}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors shadow-sm"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Register 5v5 Team</span>
            </button>
          </div>
        </div>

        {/* Live Scoreboard Arena Banner */}
        <div id="live-scores" className="bg-slate-950 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Court Live Stream &amp; Scoreboard
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-amber-400 font-semibold">{activeCourt}</span>
            </div>

            {/* Court Switcher */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              {['Court 1 (Main Arena)', 'Court 2 (Community Court)', 'Court 3 (Showcase Court)'].map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCourt(c)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    activeCourt === c
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c.split(' ')[0]} {c.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Main Selected Match Display */}
          {activeCourtFixture ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Match Score Display */}
              <div className="lg:col-span-8 bg-slate-900/90 rounded-xl p-6 border border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-400 uppercase">{activeCourtFixture.round}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{activeCourtFixture.tier} Division</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400 font-bold font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeCourtFixture.quarter || 'Q4'} · {activeCourtFixture.timeRemaining || '02:45'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-11 gap-3 items-center text-center">
                  {/* Team A */}
                  <div className="col-span-4 space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 font-black flex items-center justify-center text-lg shadow-md">
                      {activeCourtFixture.teamA.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="font-bold text-base sm:text-lg text-white leading-tight">
                      {activeCourtFixture.teamA.name}
                    </div>
                    <div className="text-4xl sm:text-5xl font-black font-mono text-amber-400 tabular-nums">
                      {activeCourtFixture.teamA.score}
                    </div>
                    {/* Score simulator controls for demo testing */}
                    <div className="flex items-center justify-center gap-1.5 pt-1">
                      <button
                        onClick={() => updateFixtureScore(activeCourtFixture.id, 2, 0)}
                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] rounded font-mono"
                        title="Add 2 pts"
                      >
                        +2
                      </button>
                      <button
                        onClick={() => updateFixtureScore(activeCourtFixture.id, 3, 0)}
                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] rounded font-mono"
                        title="Add 3 pts"
                      >
                        +3
                      </button>
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="col-span-3 space-y-1">
                    <span className="text-xs font-bold text-slate-500 tracking-wider">VS</span>
                    <div className="text-[11px] text-slate-400">Main Court</div>
                    <div className="text-xs text-amber-400 font-medium">LIVE ON COURT</div>
                  </div>

                  {/* Team B */}
                  <div className="col-span-4 space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-indigo-700 text-white font-black flex items-center justify-center text-lg shadow-md">
                      {activeCourtFixture.teamB.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="font-bold text-base sm:text-lg text-white leading-tight">
                      {activeCourtFixture.teamB.name}
                    </div>
                    <div className="text-4xl sm:text-5xl font-black font-mono text-amber-400 tabular-nums">
                      {activeCourtFixture.teamB.score}
                    </div>
                    {/* Score simulator controls for demo testing */}
                    <div className="flex items-center justify-center gap-1.5 pt-1">
                      <button
                        onClick={() => updateFixtureScore(activeCourtFixture.id, 0, 2)}
                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] rounded font-mono"
                        title="Add 2 pts"
                      >
                        +2
                      </button>
                      <button
                        onClick={() => updateFixtureScore(activeCourtFixture.id, 0, 3)}
                        className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] rounded font-mono"
                        title="Add 3 pts"
                      >
                        +3
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play-by-Play & Recent Highlights */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Real-Time Highlights</span>
                </span>
                <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800 max-h-56 overflow-y-auto">
                  {activeCourtFixture.highlights && activeCourtFixture.highlights.length > 0 ? (
                    activeCourtFixture.highlights.map((hl, i) => (
                      <div key={i} className="text-xs text-slate-300 border-b border-slate-800/80 pb-2 last:border-0 last:pb-0">
                        <span className="text-amber-400 font-bold mr-1.5">⚡</span>
                        <span>{hl}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">Game tips off shortly.</p>
                  )}
                </div>
                <p className="text-[11px] text-slate-400">
                  Scores update automatically during game play. Organizers can use +2/+3 to test live reactive changes.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Division Selector Tabs for Bracket & Teams */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-300 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTier('competitive')}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                  activeTier === 'competitive'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Competitive Tier Bracket (5v5)
              </button>
              <button
                onClick={() => setActiveTier('community')}
                className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                  activeTier === 'community'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Community &amp; Charity Tier (5v5)
              </button>
            </div>

            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              {activeTier === 'competitive' ? '8 Teams · Single Elimination' : '6 Teams · Exhibition & Showcase'}
            </span>
          </div>

          {/* Conditional View: Competitive Elimination Bracket vs Community Schedule */}
          {activeTier === 'competitive' ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs overflow-x-auto">
              <div className="min-w-[760px] space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Quarterfinals
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Semifinals
                  </span>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">
                    Championship Final
                  </span>
                </div>

                {/* 3-Column Visual Bracket Grid */}
                <div className="grid grid-cols-3 gap-6 items-center">
                  {/* Column 1: Quarterfinals (4 matches) */}
                  <div className="space-y-4">
                    {quarterFinals.map(fix => (
                      <div
                        key={fix.id}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 hover:border-amber-400 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold border-b border-slate-200/80 pb-1">
                          <span>{fix.court.split(' ')[0]} {fix.court.split(' ')[1]}</span>
                          <span className="text-emerald-700 font-bold uppercase">{fix.status}</span>
                        </div>
                        <div className="space-y-1 text-xs font-medium">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-800 font-semibold">{fix.teamA.name}</span>
                            <span className="font-mono font-bold text-slate-900">{fix.teamA.score}</span>
                          </div>
                          <div className="flex justify-between items-center text-slate-500">
                            <span>{fix.teamB.name}</span>
                            <span className="font-mono font-bold text-slate-600">{fix.teamB.score}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: Semifinals (2 matches) */}
                  <div className="space-y-8">
                    {semiFinals.map(fix => (
                      <div
                        key={fix.id}
                        className="bg-amber-50/60 border border-amber-300 rounded-xl p-3.5 space-y-2.5 shadow-xs"
                      >
                        <div className="flex items-center justify-between text-[11px] text-amber-800 font-bold border-b border-amber-200 pb-1">
                          <span>Semifinal Match</span>
                          <span className="text-rose-600 font-bold uppercase animate-pulse">{fix.status}</span>
                        </div>
                        <div className="space-y-1.5 text-xs font-semibold">
                          <div className="flex justify-between items-center text-slate-900">
                            <span>{fix.teamA.name}</span>
                            <span className="font-mono text-amber-700 font-extrabold text-sm">{fix.teamA.score}</span>
                          </div>
                          <div className="flex justify-between items-center text-slate-700">
                            <span>{fix.teamB.name}</span>
                            <span className="font-mono text-slate-800 font-extrabold text-sm">{fix.teamB.score}</span>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-500 pt-1">
                          Current Quarter: <strong className="text-slate-700">{fix.quarter}</strong> ({fix.timeRemaining})
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 3: Championship Final */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-500 rounded-2xl p-5 space-y-3 shadow-md text-center">
                      <div className="w-10 h-10 mx-auto rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block">
                          Festival Grand Championship
                        </span>
                        <div className="text-sm font-bold text-slate-900">
                          {championship ? `${championship.teamA.name} vs. ${championship.teamB.name}` : 'Accra Ballers Elite vs. Tema Titans'}
                        </div>
                        <div className="text-xs text-slate-500">
                          Scheduled for Today, 5:00 PM on Court 1
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 italic">
                        Followed by Trophy Ceremony &amp; Acute Leukaemia Foundation check presentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Community Tier Exhibition Showcase View */
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Charity &amp; Community Exhibition Matchups
                </span>
                <span className="text-xs text-slate-500">All proceeds support patients &amp; street kids</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fixtures
                  .filter(f => f.tier === 'community')
                  .map(fix => (
                    <div key={fix.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span className="text-amber-700 font-bold">{fix.round}</span>
                        <span className="font-mono text-slate-500">{fix.court}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-bold text-slate-900">
                        <span>{fix.teamA.name}</span>
                        <span className="text-xs font-normal text-slate-500">vs</span>
                        <span>{fix.teamB.name}</span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200">
                        <span>Status: <strong className="text-slate-800">{fix.status.toUpperCase()}</strong></span>
                        <span className="text-amber-700 font-medium">{fix.startTime}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Registered Teams Directory */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                Registered 5v5 Teams Directory
              </h3>
              <p className="text-xs text-slate-500">
                Explore rosters, cheer on your favorite squad, or make a donation in their name.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search team or captain..."
                value={teamSearch}
                onChange={e => setTeamSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTeams.map(t => (
              <div
                key={t.id}
                className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.avatarColor} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                        {t.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">{t.name}</h4>
                        <span className="text-[11px] text-slate-500 capitalize">
                          {t.tier} Division · Captain: {t.captainName}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Roster Size:</span>
                      <span className="font-semibold text-slate-800">{t.roster.length} Players</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Fundraising Pledge:</span>
                      <span className="font-semibold text-slate-800">{formatCurrency(t.fundraisingPledge)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Funds Raised:</span>
                      <span className="font-bold font-mono text-emerald-700">{formatCurrency(t.raisedAmount)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectTeamRoster(t)}
                    className="text-xs text-slate-700 hover:text-amber-700 font-bold py-1 px-2.5 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                  >
                    View Roster ({t.roster.length})
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Record: {t.wins}W - {t.losses}L
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
