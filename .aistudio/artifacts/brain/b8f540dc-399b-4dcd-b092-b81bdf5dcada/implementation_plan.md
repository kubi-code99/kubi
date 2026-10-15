# Acute Leukaemia Basketball Fundraiser Festival Platform

A community-driven, dual-impact charity basketball tournament and festival platform supporting acute leukaemia patient care and uplifting vulnerable youth, "kaya girls", orphans, and street children through basketball, medical assistance, and community compassion.

## User Review & Critical Decisions

> [!IMPORTANT]
> The platform plan has been revised to incorporate your exact organizational contacts, humanitarian focus, and social outreach ecosystem:
> - **Direct Humanitarian Purpose & Need for Funds**: Highlighting the soaring costs of leukaemia medications, chemotherapy, and family support, paired with immediate relief (food, shelter, healthcare, education, basketball clinics) for street kids, orphans, and "kaya girls" (vulnerable young porters).
> - **Official Direct Contacts & Cash Aid Channels**: Prominently featuring official call/WhatsApp lines (`+233 20 750 1963` / `+233 59 709 1815`), official email (`acuteleukemiabballfoundation@gmail.com`), and social handles (`@al.basketballfestival`).
> - **Ubiquitous Social Integration**: Embedding `@al.basketballfestival` across headers, share modals, donor receipts, player share cards, and dedicated social follow/chat buttons (WhatsApp direct chat, Instagram, X/Twitter, TikTok, Facebook).
> - **Tournament Structure**: Open 5v5 tournament with Competitive and Community Tiers, team registration with roster manager, and live interactive match scoreboards & brackets.

---

## 1. Overview & Core Concept

- **What It Does**: The Acute Leukaemia Basketball Fundraiser Festival platform is a digital headquarters combining high-energy basketball tournament management with transparent fundraising and social advocacy. It empowers players to register teams, enables supporters worldwide to donate with clear impact visibility, tracks live games and brackets, broadcasts real-time court announcements, and facilitates direct communication and cash aid via Mobile Money and bank channels.
- **The Core Mission & Rallying Cry**:
  > *"Together, let us dribble for hope, play for a purpose, and change lives one basket at a time! Don't just watch the game—be part of the change. A powerful victory for that 'kaya girl', that street kid, that orphan, and that cancer patient!"*
- **Key Beneficiaries & The Dual Purpose**:
  1. *Acute Leukaemia Patients & Families*: Subsidizing exorbitant medication costs, chemotherapy cycles, pediatric hospital stays, and compassionate family care.
  2. *Vulnerable Children ("Kids on the Street", "Kaya Girls", Orphans)*: Providing nutrition, safe shelter referrals, emergency medical aid, school supplies, and life-changing basketball mentorship clinics that teach confidence and resilience.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Mission & Urgent Need for Funds**:
   - Deep narrative hero highlighting the dual crisis: the crippling financial burden of leukemia treatment and the plight of homeless youth and street workers.
   - Interactive **Dual-Impact Breakdown**: Visual metric cards illustrating tangible outcomes:
     - **Medical Relief**: GH₵ / $ funding lab tests, chemotherapy medication support, blood transfusion kits, and family care packages.
     - **Youth Uplift**: GH₵ / $ providing hot meals, clean clothing, footwear, school kits, and community basketball training camps.
2. **Donation & Direct Cash Aid / Mobile Money**:
   - Seamless donation flow with preset and custom amounts.
   - Multi-currency support (GH₵ and USD) with instant Mobile Money (MTN MoMo, Telecel Cash) instructions alongside credit/debit card checkout.
   - Direct helpline links (`+233 20 750 1963` / `+233 59 709 1815`) for direct cash aid, corporate sponsorships, and in-kind contributions (jerseys, balls, medical supplies, food).
   - Generates an instant downloadable **Digital Supporter Pass** with donor name, dedication note, and `@al.basketballfestival` branding.
3. **Open 5v5 Team Registration**:
   - Division selection: **Competitive Championship Tier** (leagues, club teams) vs. **Community & Charity Tier** (friends, corporate sponsors, youth exhibition teams).
   - Roster builder (captain contact, player names, jersey numbers).
   - Team pledge commitment tracker and instant team shareable roster card.
4. **Live Match Center & Tournament Hub**:
   - Live court switcher (Court 1 - Main Arena, Court 2 - Community Court, Court 3 - Skills & Youth Clinic Showcase).
   - Interactive Elimination Bracket (Quarterfinals, Semifinals, Finals) with live advancing scores.
   - Real-time tournament announcements ticker (game delays, 3-point contest, youth exhibition tip-off).
5. **Social Outreach & Ambassador Toolkit**:
   - Floating and section-level social handles: `@al.basketballfestival` on Instagram, TikTok, X, and Facebook.
   - One-click WhatsApp direct chat link (`+233 59 709 1815`) for immediate questions and donations.
   - Interactive social share card generator allowing supporters to share their donation or registered team on Instagram Stories, WhatsApp status, and X.

### Visual Identity & Theme

- **Aesthetic Direction**: Vibrant athletic charity aesthetic inspired by the tournament poster (`AL picture.jpeg`) and *Hoop for Hope*. Radiant golden amber, leukemia ribbon yellow, deep court navy, and compassionate crimson accents.
- **Color Palette (60-30-10 Rule)**:
  - *Canvas (60%)*: Crisp athletic slate (`#F8FAFC`) with pure white card surfaces (`#FFFFFF`).
  - *Structural Surfaces (30%)*: Championship navy (`#0B192C` / `#1E293B`) for navigation, scoreboards, and impact banners.
  - *Intent Accent (10%)*: Basketball amber (`#F59E0B` / `#D97706`), leukemia ribbon gold (`#FBBF24`), and compassionate rose (`#E11D48`).
- **Typography**:
  - *Headings*: Bold athletic neo-grotesque (`Plus Jakarta Sans`), uppercase court accents.
  - *Body Text*: Clean, approachable `DM Sans` (15–16px).
  - *Data & Timers*: Monospace tabular figures (`tabular-nums font-mono`) for live clocks, scores, and currency totals.
- **Top Bar Contract (1-Row, 3-Zone)**:
  - *Zone 1*: Brand wordmark: `AL Basketball Festival` with ribbon icon.
  - *Zone 2*: Navigation links: `Why We Play`, `Tournament`, `Live Scores`, `Dual Impact`, `Contact & Cash Aid`.
  - *Zone 3*: Single primary action: `Donate Now`.

---

## 3. Key Product Decisions & Trade-Offs

- **Prominent Mobile Money & Direct Contacts**:
  - *Chosen Approach*: Alongside automated card processing, prominently display direct Ghana Mobile Money / cash aid phone numbers (`+233 20 750 1963` and `+233 59 709 1815`) with tap-to-call, tap-to-WhatsApp, and copyable MoMo payment instructions.
  - *Why*: In community and regional charity events, a large portion of individual and business donations occur via MoMo and direct cash transfers.
- **"Why We Need Funds" Dedicated Transparency Matrix**:
  - *Chosen Approach*: An interactive cost-transparency grid that candidly explains where every cedi/dollar goes (chemotherapy cycles, emergency pediatric meds, hospital transportation, street outreach meals, sports equipment for orphans and kaya girls).
  - *Why*: Eliminates donor ambiguity and inspires corporate sponsorships.
- **Pervasive Social Handles & Sharing Engine**:
  - *Chosen Approach*: Embed `@al.basketballfestival` into the header, footer, share preview cards, donor receipts, and team profiles, backed by direct Web Share API and fallbacks for WhatsApp, X, Facebook, and Instagram.
  - *Why*: Maximizes grassroots viral distribution across mobile messaging and social platforms.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│               AL Basketball Fundraiser Festival Platform               │
│                                                                        │
│   ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐  │
│   │ Hero & Foundation │  │  Need for Funds   │  │  Live Match Hub   │  │
│   │ (Flyer Tribute,   │  │ (Leukaemia Costs, │  │ (Scores, Quarters,│  │
│   │ Kaya Girls/Youth) │  │  Street Outreach) │  │  Bracket Engine)  │  │
│   └─────────┬─────────┘  └─────────┬─────────┘  └─────────┬─────────┘  │
│             │                      │                      │            │
│   ┌─────────▼──────────────────────▼──────────────────────▼─────────┐  │
│   │                     Shared State Management                     │  │
│   │    - Teams & 5v5 Rosters (Competitive / Community Tiers)        │  │
│   │    - Donations & Cash Aid Records (Card, MoMo, Dedications)    │  │
│   │    - Fixtures & Live Court Scores (Quarters, Courts 1-3)        │  │
│   │    - Announcements Feed & Organizer Simulation Mode             │  │
│   └────────────────────────────────┬────────────────────────────────┘  │
│                                    │                                   │
│   ┌───────────────────┐  ┌─────────▼─────────┐  ┌───────────────────┐  │
│   │ Team Registration │  │ Donation & MoMo   │  │ Social Engine &   │  │
│   │   Modal & Roster  │  │  Cash Aid Portal  │  │ @al.basketball... │  │
│   └───────────────────┘  └───────────────────┘  └───────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Key Data Entities

- **`Donation`**: `id`, `donorName`, `amount`, `currency` (`'GHS' | 'USD'`), `paymentMethod` (`'card' | 'momo' | 'cash'`), `isAnonymous`, `dedication`, `message`, `allocation` (`{ leukaemia: 50, youth: 50 }`), `createdAt`.
- **`Team`**: `id`, `name`, `captainName`, `captainPhone`, `email`, `tier` (`'competitive' | 'community'`), `roster` (array of names/numbers), `pledgeAmount`, `wins`, `losses`.
- **`Fixture`**: `id`, `round`, `tier`, `court`, `teamA`, `teamB`, `scoreA`, `scoreB`, `status` (`'live' | 'upcoming' | 'final'`), `quarter`, `timeRemaining`, `highlights`.
- **`Announcement`**: `id`, `title`, `content`, `tag` (`'urgent' | 'schedule' | 'fundraiser' | 'clinic'`), `timestamp`, `isPinned`.

---

## 5. Execution Roadmap

1. **Batch Image Generation**:
   - Generate high-fidelity athletic and community charity photography (hero basketball action, youth clinic, and leukemia support theme).
2. **Core Components**:
   - Top Bar with 3-Zone contract and `@al.basketballfestival` badge.
   - Hero Section with the powerful call to action: "Dribble for hope, play for a purpose, change lives one basket at a time".
   - "Why We Need Funds" deep-dive section (Leukaemia medical expense reality + Street children & Kaya girls empowerment).
   - Dual-Impact dynamic calculator and live goal meter.
   - Interactive 5v5 Tournament Center (Live court switcher, quarter scoreboards, dynamic bracket, registered teams list).
   - Team Registration Modal with multi-step roster inputs.
   - Donation & Cash Aid Modal supporting instant card simulation, Mobile Money instructions (+233 20 750 1963 / +233 59 709 1815), and dedication messages.
   - Digital Supporter Badge & Certificate generator with 1-click social sharing to WhatsApp, X, Facebook, and Instagram.
   - Contact & Direct Help Section with official email (`acuteleukemiabballfoundation@gmail.com`), phone lines, and social follow links.
3. **Verification**:
   - Build validation with `compile_applet`, checking all click interactions, responsive breakpoints, and copy actions.
