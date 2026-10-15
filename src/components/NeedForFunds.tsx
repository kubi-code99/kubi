import React from 'react';
import { Heart, ShieldAlert, Sparkles, Activity, Utensils, GraduationCap, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { useTournament } from '../context/TournamentContext';

export const NeedForFunds: React.FC = () => {
  const { setIsDonationModalOpen } = useTournament();

  return (
    <section id="cause-and-needs" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest">
            <span>The Reality & The Mission</span>
            <span aria-hidden="true">·</span>
            <span>Why Your Support Matters Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            The Urgent Need &amp; Reason for Funds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every donation, big or small, directly addresses two profound community crises.
            Here is the transparent reality of what your contribution achieves.
          </p>
        </div>

        {/* Dual Pillar Comparison: Leukaemia Care vs. Street Children Uplift */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Pillar 1: Acute Leukaemia Patient Crisis & Medical Burdens */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="/src/assets/images/pediatric_care_hope_1792078661136.jpg"
                  alt="Compassionate healthcare worker and brave young cancer patient"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs font-semibold text-rose-300 uppercase tracking-wide">
                      Cause 01 · 50% Allocation
                    </span>
                    <h3 className="text-xl font-bold font-display">Acute Leukaemia Patient Support</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">
                    The Financial Reality of Acute Leukaemia Treatment
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Acute leukaemia strikes aggressively and requires immediate, intensive treatment. In our hospitals,
                    families face catastrophic out-of-pocket costs for specialized chemotherapy medications, blood and
                    platelet transfusions, diagnostic cytogenetics, and round-the-clock infection control. Without
                    financial assistance, vulnerable patients risk interrupting their treatments due to lack of funds.
                  </p>
                </div>

                {/* Concrete Medical Fund Breakdown */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    What These Funds Deliver Directly:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-rose-600 mb-1">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Chemo Drug Co-Pays</span>
                      </div>
                      Subsidizing life-saving induction and consolidation chemotherapy protocols.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-rose-600 mb-1">
                        <Heart className="w-3.5 h-3.5" />
                        <span>Transfusions & Labs</span>
                      </div>
                      Screening and providing blood units, platelets, and vital monitoring tests.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-rose-600 mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Pediatric Comfort Kits</span>
                      </div>
                      Warm beanies, hygiene items, soft blankets, and nutritional meal bags for children.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-rose-600 mb-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Family Emergency Aid</span>
                      </div>
                      Hospital transport stipends and lodging support for guardians from distant regions.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-100/70 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-rose-700">Direct Partner: Acute Leukaemia Foundation</span>
              <span>Accountable &amp; Audited</span>
            </div>
          </div>

          {/* Pillar 2: Uplifting Vulnerable Children, Kaya Girls & Street Kids */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src="/src/assets/images/youth_outreach_clinic_1792078662156.jpg"
                  alt="African youth smiling during community basketball clinic drills"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
                      Cause 02 · 50% Allocation
                    </span>
                    <h3 className="text-xl font-bold font-display">
                      Street Kids, Kaya Girls &amp; Orphan Outreach
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900">
                    Lifting Vulnerable Children from the Street to the Court
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Across our markets and streets, hundreds of young girls (&ldquo;kaya girls&rdquo; carrying heavy loads)
                    and homeless boys sleep on open pavements without regular food, clean clothing, education, or healthcare.
                    This festival provides an immediate safety net while using basketball as a catalyst to instill confidence,
                    discipline, teamwork, and an enduring pathway out of poverty.
                  </p>
                </div>

                {/* Concrete Youth Outreach Fund Breakdown */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    What These Funds Deliver Directly:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-amber-600 mb-1">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Nutrition &amp; Clean Water</span>
                      </div>
                      Nutritious hot meals, clean water, and basic medical check-ups at tournament day clinics.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-amber-600 mb-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Education &amp; School Kits</span>
                      </div>
                      Backpacks, textbooks, and sponsorship for school re-enrollment and vocational skills.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-amber-600 mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Basketball Shoes &amp; Gear</span>
                      </div>
                      Brand-new basketball sneakers, jerseys, and balls for youth who play barefoot on concrete.
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs text-slate-700">
                      <div className="flex items-center gap-1.5 font-bold text-amber-600 mb-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Shelter &amp; Mentorship</span>
                      </div>
                      Year-round coach mentorship and referral to trusted shelters away from street hazards.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-100/70 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-amber-700">Kaya Girls &amp; Street Champions Program</span>
              <span>100% Direct Community Benefit</span>
            </div>
          </div>
        </div>

        {/* Founder Personal Note Tribute (from Event Flyer) */}
        <div className="mt-12 bg-amber-50 rounded-2xl border border-amber-200/80 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
              ♥
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <span className="text-xs font-bold text-amber-800 tracking-wider uppercase">
                A Personal Tribute &amp; Heartfelt Promise
              </span>
              <p className="text-base text-slate-800 font-medium italic leading-relaxed">
                &ldquo;This is a personal project because I have lost a dear one to cancer. I therefore want to do
                everything I can to help with the treatments of others and to make them realise their illness does
                not limit them. Together, we can make a difference.&rdquo;
              </p>
              <div className="text-xs text-slate-600 pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="font-semibold text-slate-900">AL Basketball Festival Organizing Committee</span>
                <span aria-hidden="true">·</span>
                <span>Follow updates at <strong className="text-slate-900">{CONTACT_INFO.socialHandle}</strong></span>
              </div>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Donate Now
              </button>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
