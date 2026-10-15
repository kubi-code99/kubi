import React, { useState } from 'react';
import { TournamentProvider } from './context/TournamentContext';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { NeedForFunds } from './components/NeedForFunds';
import { ImpactCalculator } from './components/ImpactCalculator';
import { TournamentHub } from './components/TournamentHub';
import { LiveBulletin } from './components/LiveBulletin';
import { SupporterWall } from './components/SupporterWall';
import { DirectAidSection } from './components/DirectAidSection';
import { FAQ } from './components/FAQ';
import { SocialHub } from './components/SocialHub';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { TeamRegistrationModal } from './components/TeamRegistrationModal';
import { RosterViewModal } from './components/RosterViewModal';
import { ShareModal } from './components/ShareModal';
import { Team } from './types';

const MainLayout: React.FC = () => {
  const [selectedTeamRoster, setSelectedTeamRoster] = useState<Team | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      <TopBar />
      <main className="flex-1">
        <Hero />
        <NeedForFunds />
        <ImpactCalculator />
        <TournamentHub onSelectTeamRoster={team => setSelectedTeamRoster(team)} />
        <LiveBulletin />
        <SupporterWall />
        <FAQ />
        <DirectAidSection />
        <SocialHub />
      </main>
      <Footer />

      {/* Global Interactive Modals */}
      <DonationModal />
      <TeamRegistrationModal />
      <RosterViewModal
        team={selectedTeamRoster}
        onClose={() => setSelectedTeamRoster(null)}
      />
      <ShareModal />
    </div>
  );
};

export default function App() {
  return (
    <TournamentProvider>
      <MainLayout />
    </TournamentProvider>
  );
}
