import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Heart, Trophy, Users, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface FAQItem {
  id: string;
  category: 'tournament' | 'transparency' | 'leukaemia' | 'street-youth';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Tournament Rules
  {
    id: 'faq-1',
    category: 'tournament',
    question: 'What are the rules and format for the 5v5 tournament?',
    answer:
      'The tournament features two distinct divisions: the Competitive Championship Tier and the Community & Charity Tier. Competitive matches follow FIBA 5v5 guidelines with 10-minute running-clock quarters, regulated stopped time in the final two minutes, and certified regional referees. The Community Tier offers a more relaxed, exhibition-style atmosphere for corporate sponsors, community groups, and friendly showcases.',
  },
  {
    id: 'faq-2',
    category: 'tournament',
    question: 'How many players can be registered on a 5v5 roster?',
    answer:
      'Each team must register a minimum of 5 players and can include up to 8 players on their official tournament roster (5 on court + 3 substitutes). Substitutions are unlimited during stoppages. All players must wear matching jerseys with visible numbers.',
  },
  {
    id: 'faq-3',
    category: 'tournament',
    question: 'What are the registration fees and team fundraising pledges?',
    answer:
      'Team registration is designed to be accessible. While basic team registration covers referee and court fees, each team is encouraged to submit a voluntary fundraising commitment (recommended GH₵ 2,500 – GH₵ 5,000). Every cedi raised by your team counts toward our collective hospital and street youth goals.',
  },

  // Donation Transparency
  {
    id: 'faq-4',
    category: 'transparency',
    question: 'How is the 50/50 dual-impact split managed and audited?',
    answer:
      'Every cedi and dollar collected is logged in our real-time transparency register. Exactly 50% is transferred directly to the Acute Leukaemia Foundation for patient hospital bills, medications, and testing. The remaining 50% is dedicated to our street youth and kaya girls outreach—funding hot meals, sneakers, school supplies, and basketball mentorship. Our financial records and disbursements are reviewed by independent community trustees.',
  },
  {
    id: 'faq-5',
    category: 'transparency',
    question: 'Can I donate directly via Ghana Mobile Money (MoMo)?',
    answer:
      'Yes! Direct Mobile Money is one of our primary channels. You can transfer directly to MTN Mobile Money at 059 709 1815 (AL BBALL FOUNDATION) or Telecel Cash at 020 750 1963. Use your name or team name as reference. You can also generate an official digital MoMo receipt pass right on this website.',
  },
  {
    id: 'faq-6',
    category: 'transparency',
    question: 'Can corporate donors and businesses sponsor teams or courts?',
    answer:
      'Absolutely. Corporate sponsors can sponsor specific courts, tournament awards, player jerseys, or provide medical/nutrition grants. Corporate partners receive on-court branding, social media recognition across @al.basketballfestival, and certified charity sponsorship certificates. Call +233 20 750 1963 or +233 59 709 1815 for official corporate sponsorship packages.',
  },

  // Leukaemia Patient Impact
  {
    id: 'faq-7',
    category: 'leukaemia',
    question: 'How do acute leukaemia patients directly receive financial support?',
    answer:
      'Funds are coordinated with oncology social work departments and the Acute Leukaemia Foundation. When a family is unable to afford crucial chemotherapy doses, laboratory profiling, or emergency blood/platelet transfusions, the fund directly covers hospital billing to prevent any gap in life-saving care.',
  },
  {
    id: 'faq-8',
    category: 'leukaemia',
    question: 'What specific medical expenses are covered?',
    answer:
      'The fund primarily subsidizes: (1) Chemotherapy drug procurement and infusion co-pays; (2) Diagnostic bone marrow biopsies and cytogenetics; (3) Blood screening and platelet transfusion packs; (4) Infection management antibiotics; and (5) Pediatric comfort care packages containing beanies, blankets, and high-protein nutrition.',
  },

  // Street Youth & Kaya Girls Outreach
  {
    id: 'faq-9',
    category: 'street-youth',
    question: 'Who are the "kaya girls" and street children supported by the festival?',
    answer:
      '"Kaya girls" are young female head-porters who migrate to urban markets, often working under intense physical strain and sleeping on street pavements without shelter, healthcare, or security. Alongside homeless street boys and orphans, they represent our most vulnerable urban youth. The festival brings them off the pavement and onto the court, providing immediate human dignity and structured athletic mentorship.',
  },
  {
    id: 'faq-10',
    category: 'street-youth',
    question: 'What happens beyond game day for these children?',
    answer:
      'Tournament day is just the beginning. The festival funds ongoing weekend basketball clinics, nutritional food relief, health screenings, school re-enrollment kits (backpacks, books, uniforms), and safe shelter coordination with community partners to help children permanently transition away from street living.',
  },
];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tournament' | 'transparency' | 'leukaemia' | 'street-youth'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQ_DATA.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
            <span aria-hidden="true">·</span>
            <span>Everything You Need to Know</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Clear, transparent answers about tournament rules, donation auditing, acute leukaemia patient support,
            and our outreach for street youth and kaya girls.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setActiveCategory('tournament')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeCategory === 'tournament'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Tournament Rules</span>
          </button>
          <button
            onClick={() => setActiveCategory('transparency')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeCategory === 'transparency'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Donations &amp; Auditing</span>
          </button>
          <button
            onClick={() => setActiveCategory('leukaemia')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeCategory === 'leukaemia'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Leukaemia Care</span>
          </button>
          <button
            onClick={() => setActiveCategory('street-youth')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeCategory === 'street-youth'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-amber-500" />
            <span>Street Kids &amp; Kaya Girls</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 transition-colors"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className="p-1 rounded-md bg-white border border-slate-200 text-slate-500 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Have a question not answered here?
            </h4>
            <p className="text-xs text-slate-600">
              Our organizing committee is available around the clock to support teams, donors, and media partners.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3.5 rounded-xl text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3.5 rounded-xl text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
