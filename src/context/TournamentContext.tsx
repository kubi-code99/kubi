import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Team, Fixture, Donation, Announcement, Currency } from '../types';
import { INITIAL_TEAMS, INITIAL_FIXTURES, INITIAL_DONATIONS, INITIAL_ANNOUNCEMENTS } from '../data/mockData';

const USD_TO_GHS_RATE = 12.5;

interface TournamentContextType {
  teams: Team[];
  fixtures: Fixture[];
  donations: Donation[];
  announcements: Announcement[];
  currency: Currency;
  setCurrency: (c: Currency) => void;
  goalGHS: number;
  totalRaisedGHS: number;
  totalRaisedUSD: number;
  percentFunded: number;
  leukaemiaFundsGHS: number;
  youthFundsGHS: number;
  isSimulating: boolean;
  toggleSimulation: () => void;
  addDonation: (donation: Omit<Donation, 'id' | 'createdAt'>) => void;
  addTeam: (team: Omit<Team, 'id' | 'raisedAmount' | 'wins' | 'losses' | 'registeredAt'>) => void;
  updateFixtureScore: (fixtureId: string, deltaA: number, deltaB: number) => void;
  isDonationModalOpen: boolean;
  setIsDonationModalOpen: (open: boolean) => void;
  isTeamModalOpen: boolean;
  setIsTeamModalOpen: (open: boolean) => void;
  isShareModalOpen: boolean;
  setIsShareModalOpen: (open: boolean) => void;
  donationPreselectedTeam: Team | null;
  setDonationPreselectedTeam: (team: Team | null) => void;
  formatCurrency: (amountGHS: number) => string;
}

const TournamentContext = createContext<TournamentContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_PREFIX = 'al_bball_fest_';

export const TournamentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load or fallback to mock
  const [teams, setTeams] = useState<Team[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'teams');
      return saved ? JSON.parse(saved) : INITIAL_TEAMS;
    } catch {
      return INITIAL_TEAMS;
    }
  });

  const [fixtures, setFixtures] = useState<Fixture[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'fixtures');
      return saved ? JSON.parse(saved) : INITIAL_FIXTURES;
    } catch {
      return INITIAL_FIXTURES;
    }
  });

  const [donations, setDonations] = useState<Donation[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'donations');
      return saved ? JSON.parse(saved) : INITIAL_DONATIONS;
    } catch {
      return INITIAL_DONATIONS;
    }
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PREFIX + 'announcements');
      return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const [currency, setCurrency] = useState<Currency>('GHS');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Modals state
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [donationPreselectedTeam, setDonationPreselectedTeam] = useState<Team | null>(null);

  // Save changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'teams', JSON.stringify(teams));
    } catch {
      // ignore
    }
  }, [teams]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'fixtures', JSON.stringify(fixtures));
    } catch {
      // ignore
    }
  }, [fixtures]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_PREFIX + 'donations', JSON.stringify(donations));
    } catch {
      // ignore
    }
  }, [donations]);

  // Campaign goal: 150,000 GHS (~ $12,000 USD)
  const goalGHS = 150000;

  // Compute total raised
  const totalRaisedGHS = useMemo(() => {
    let sum = 0;
    donations.forEach(d => {
      if (d.currency === 'USD') {
        sum += d.amount * USD_TO_GHS_RATE;
      } else {
        sum += d.amount;
      }
    });
    // Add baseline community pledges
    sum += 48200;
    return sum;
  }, [donations]);

  const totalRaisedUSD = useMemo(() => {
    return Math.round(totalRaisedGHS / USD_TO_GHS_RATE);
  }, [totalRaisedGHS]);

  const percentFunded = useMemo(() => {
    return Math.min(100, Math.round((totalRaisedGHS / goalGHS) * 100));
  }, [totalRaisedGHS, goalGHS]);

  const leukaemiaFundsGHS = useMemo(() => Math.round(totalRaisedGHS * 0.5), [totalRaisedGHS]);
  const youthFundsGHS = useMemo(() => Math.round(totalRaisedGHS * 0.5), [totalRaisedGHS]);

  // Live simulation tick: every 6 seconds if simulating, increments live game scores or highlights
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setFixtures(prev =>
        prev.map(f => {
          if (f.status === 'live') {
            const teamATurn = Math.random() > 0.5;
            const points = Math.random() > 0.4 ? 2 : 3;
            const newScoreA = teamATurn ? f.teamA.score + points : f.teamA.score;
            const newScoreB = !teamATurn ? f.teamB.score + points : f.teamB.score;

            // Generate realistic commentary highlight
            const scorer = teamATurn ? f.teamA.name : f.teamB.name;
            const shotType = points === 3 ? 'clutch 3-pointer from deep!' : 'driving layup in traffic!';
            const newHighlight = `${scorer} scores with a ${shotType} (${f.quarter || 'Q4'})`;

            const updatedHighlights = [newHighlight, ...(f.highlights || []).slice(0, 3)];

            return {
              ...f,
              teamA: { ...f.teamA, score: newScoreA },
              teamB: { ...f.teamB, score: newScoreB },
              highlights: updatedHighlights,
            };
          }
          return f;
        })
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const toggleSimulation = () => {
    setIsSimulating(prev => !prev);
  };

  const addDonation = (newDonationData: Omit<Donation, 'id' | 'createdAt'>) => {
    const id = `don-${Date.now()}`;
    const newDonation: Donation = {
      ...newDonationData,
      id,
      createdAt: 'Just now',
    };

    setDonations(prev => [newDonation, ...prev]);

    // Also credit target team if applicable
    if (newDonation.targetTeamId) {
      setTeams(prev =>
        prev.map(t => {
          if (t.id === newDonation.targetTeamId) {
            const addedGHS =
              newDonation.currency === 'USD'
                ? newDonation.amount * USD_TO_GHS_RATE
                : newDonation.amount;
            return {
              ...t,
              raisedAmount: t.raisedAmount + addedGHS,
            };
          }
          return t;
        })
      );
    }
  };

  const addTeam = (teamData: Omit<Team, 'id' | 'raisedAmount' | 'wins' | 'losses' | 'registeredAt'>) => {
    const id = `team-${Date.now()}`;
    const colors = [
      'from-amber-500 to-orange-600',
      'from-blue-600 to-indigo-700',
      'from-emerald-600 to-teal-700',
      'from-rose-600 to-red-700',
      'from-purple-600 to-violet-800',
    ];
    const avatarColor = colors[Math.floor(Math.random() * colors.length)];

    const newTeam: Team = {
      ...teamData,
      id,
      raisedAmount: 0,
      wins: 0,
      losses: 0,
      avatarColor,
      registeredAt: new Date().toISOString().split('T')[0],
    };

    setTeams(prev => [newTeam, ...prev]);

    // Add celebration announcement
    const announcement: Announcement = {
      id: `ann-${Date.now()}`,
      title: `New 5v5 Team Registered: ${newTeam.name}!`,
      content: `${newTeam.captainName} just enrolled ${newTeam.name} into the ${newTeam.tier === 'competitive' ? 'Competitive Championship' : 'Community'} Tier with a pledge of GH₵ ${newTeam.fundraisingPledge.toLocaleString()}!`,
      tag: 'tournament',
      timestamp: 'Just now',
    };
    setAnnouncements(prev => [announcement, ...prev]);
  };

  const updateFixtureScore = (fixtureId: string, deltaA: number, deltaB: number) => {
    setFixtures(prev =>
      prev.map(f => {
        if (f.id === fixtureId) {
          return {
            ...f,
            teamA: { ...f.teamA, score: Math.max(0, f.teamA.score + deltaA) },
            teamB: { ...f.teamB, score: Math.max(0, f.teamB.score + deltaB) },
          };
        }
        return f;
      })
    );
  };

  const formatCurrency = (amountGHS: number) => {
    if (currency === 'USD') {
      const inUSD = Math.round(amountGHS / USD_TO_GHS_RATE);
      return `$${inUSD.toLocaleString()}`;
    }
    return `GH₵ ${amountGHS.toLocaleString()}`;
  };

  return (
    <TournamentContext.Provider
      value={{
        teams,
        fixtures,
        donations,
        announcements,
        currency,
        setCurrency,
        goalGHS,
        totalRaisedGHS,
        totalRaisedUSD,
        percentFunded,
        leukaemiaFundsGHS,
        youthFundsGHS,
        isSimulating,
        toggleSimulation,
        addDonation,
        addTeam,
        updateFixtureScore,
        isDonationModalOpen,
        setIsDonationModalOpen,
        isTeamModalOpen,
        setIsTeamModalOpen,
        isShareModalOpen,
        setIsShareModalOpen,
        donationPreselectedTeam,
        setDonationPreselectedTeam,
        formatCurrency,
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
};

export const useTournament = () => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error('useTournament must be used within a TournamentProvider');
  }
  return context;
};
