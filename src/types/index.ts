export type TournamentTier = 'competitive' | 'community';

export type Currency = 'GHS' | 'USD';

export interface Player {
  id: string;
  name: string;
  jerseyNumber: number;
  position?: string;
}

export interface Team {
  id: string;
  name: string;
  tier: TournamentTier;
  captainName: string;
  captainPhone: string;
  captainEmail: string;
  roster: Player[];
  fundraisingPledge: number; // in GHS
  raisedAmount: number;
  seed?: number;
  wins: number;
  losses: number;
  avatarColor: string;
  registeredAt: string;
}

export type FixtureStatus = 'upcoming' | 'live' | 'final';

export interface Fixture {
  id: string;
  round: 'Quarterfinal' | 'Semifinal' | 'Championship' | 'Charity Exhibition' | 'Youth Clinic Showcase';
  court: 'Court 1 (Main Arena)' | 'Court 2 (Community Court)' | 'Court 3 (Showcase Court)';
  tier: TournamentTier;
  teamA: {
    id: string;
    name: string;
    score: number;
    color: string;
  };
  teamB: {
    id: string;
    name: string;
    score: number;
    color: string;
  };
  status: FixtureStatus;
  quarter?: 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'OT' | 'Halftime';
  timeRemaining?: string;
  startTime: string;
  highlights?: string[];
}

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  currency: Currency;
  paymentMethod: 'momo' | 'card' | 'cash';
  isAnonymous: boolean;
  message?: string;
  dedication?: string; // e.g. "In loving memory of Auntie Ama", "For all the brave warriors"
  targetTeamId?: string;
  targetTeamName?: string;
  allocation: {
    leukaemiaPercent: number; // 50
    youthPercent: number; // 50
  };
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  tag: 'urgent' | 'schedule' | 'fundraiser' | 'clinic' | 'general' | 'tournament';
  timestamp: string;
  isPinned?: boolean;
}
