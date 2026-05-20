# Medibank Conversion Engine — AI Agent Ecosystem

**Document type:** Foundational reference  
**Scope:** Admin Conversion Engine · Student Companion App  
**Audience:** Product, Strategy, Technology, Operations teams

---

## Overview

The Medibank Conversion Engine operates on a **Human-in-the-Loop (HITL) intelligence model**. A network of specialised AI agents continuously analyses student behaviour, detects lifecycle moments, scores intent, and generates intervention recommendations. Human operators then review, approve, and execute those recommendations.

Agents do not act autonomously. They observe, reason, and recommend. People decide.

This document covers every agent in the ecosystem: what it does, what signals it monitors, how it collaborates with other agents, where it surfaces in the platform, and example workflows showing end-to-end operation.

---

## The Three-Layer Architecture

All agents operate within a structured three-layer model. Each layer has a distinct function, and agents are purpose-built for their layer.

```
┌─────────────────────────────────────────────────────┐
│  ORCHESTRATION LAYER                                │
│  Packages intelligence into actionable briefs       │
│  Agents: Campaign Optimisation · Insight Narrator   │
├─────────────────────────────────────────────────────┤
│  INTELLIGENCE LAYER                                 │
│  Scores intent, models behaviour, predicts outcomes │
│  Agents: Conversion · Activation · Community ·      │
│           Visa Transition Intent                    │
├─────────────────────────────────────────────────────┤
│  DETECTION LAYER                                    │
│  Identifies signals, clusters cohorts, flags risk   │
│  Agents: Segmentation · Retention Risk · Referral   │
└─────────────────────────────────────────────────────┘
```

**Detection** agents work closest to raw data — they watch for signals and raise alerts.  
**Intelligence** agents take detected signals and add meaning — scoring, predicting, and explaining.  
**Orchestration** agents take the intelligence and turn it into something a human can act on — recommending channels, timing, messaging, and packaging executive briefs.

A typical collaboration flows: Detection → Intelligence → Orchestration → Human Decision.

---

## Agent Directory

### 1. Segmentation Agent

**Layer:** Detection  
**Primary function:** Identifying and clustering student cohorts based on behavioural, demographic, and lifecycle signals.

The Segmentation Agent is the system's pattern recognition engine. It continuously ingests data from the student app, university CRM integrations, visa records, and engagement logs to identify which groups of students are exhibiting similar behaviour — and to flag when those groups cross thresholds that warrant attention.

**What it monitors:**
- Visa expiry timelines and OSHC coverage windows
- University enrollment status and graduation schedules
- App engagement frequency, recency, and depth
- Journey module completion rates
- Cross-referencing visa data with webinar attendance logs
- Community participation patterns by cohort
- Country of origin and language preference signals

**What it produces:**
- Named student segments (e.g. "High-Intent OVHC Explorers", "New Arrival Drop-off")
- Cohort size estimates with confidence scores
- Revenue opportunity sizing per segment
- Lifecycle moment triggers (see: Lifecycle Moments)
- Signals passed downstream to Intelligence layer agents

**Where it appears in the platform:**
- Student Segments page — generates and surfaces the segment feed
- Command Centre — populates the operational briefing narrative
- Conversion Funnel — assigned to Stage 1 (OVHC Eligible identification) and Stage 4 (Viewed Plans drop-off analysis)
- Action Studio — referenced in signal chains for workflows it originated

**Example output:**
> "3,240 students detected within the 6-month graduation window based on visa expiry and enrollment signals. Cross-referencing with webinar attendance identified 89% overlap with OVHC pricing page visits. Revenue opportunity estimated at +$240K."

---

### 2. Conversion Agent

**Layer:** Intelligence  
**Primary function:** Scoring each student's probability of converting from OSHC to OVHC, based on behavioural evidence.

The Conversion Agent is the system's predictive engine for the core business outcome. It takes behavioural signals — particularly around OVHC content engagement, pricing exploration, and community participation — and produces a propensity score for each student. It also models what messaging approaches are most likely to convert each cohort.

**What it monitors:**
- OVHC pricing page visits (frequency, dwell time, recency)
- Plan comparison page behaviour (time spent, plans compared)
- Graduate visa content engagement
- Healthcare webinar attendance
- Referral activity as a conversion signal
- Community forum posts about visa transition

**What it produces:**
- Per-student OVHC conversion probability scores (e.g. "82% conversion probability")
- Baseline conversion rates for comparison (e.g. "34% baseline")
- Cohort-level conversion readiness rankings
- Messaging personalisation guidance by university and nationality cohort
- Revenue impact projections tied to conversion scenarios
- Funnel drop-off analysis at each stage of the OVHC purchase journey

**Where it appears in the platform:**
- Student Segments — contributes intelligence to segment profiles
- Conversion Funnel — assigned to Stage 3 (Clicked Through) and Stage 6 (Converted) analysis
- Action Studio — named as the originating agent for graduate transition workflows
- Command Centre — surface in the AI collaboration flow
- Campaign Intelligence — informs recommended campaign targeting

**Example output:**
> "Scored OVHC conversion probability at 82% — above the 34% baseline — based on pricing page dwell time and repeat visits. University-specific cohorts respond 2.1× better to tailored offers than generic messaging."

---

### 3. Campaign Optimisation Agent

**Layer:** Orchestration  
**Primary function:** Determining the optimal channel, timing, messaging format, and cadence for each intervention — and continuously learning from campaign performance.

The Campaign Optimisation Agent is the system's channel intelligence engine. Once Detection and Intelligence agents have identified a cohort and scored intent, the Campaign Optimisation Agent decides *how* to reach them — and why that approach will outperform alternatives. It also retrospectively analyses live campaigns and generates optimisation recommendations.

**What it monitors:**
- Open rates, click-through rates, and conversion rates by channel per cohort
- Channel preference signals (which channels individual students respond to)
- Message fatigue indicators (declining open rates over campaign duration)
- Time-of-day and day-of-week engagement patterns
- Campaign A/B test outcomes
- Historical performance data across university cohorts

**What it produces:**
- Channel recommendations (WhatsApp vs. Email vs. Push vs. In-App vs. Community)
- Message timing recommendations
- Campaign performance summaries ("what worked / what underperformed")
- Optimisation recommendations for active campaigns
- Projected uplift estimates per channel switch
- Proactive new campaign suggestions based on emerging behavioural patterns

**Where it appears in the platform:**
- Campaign Intelligence page — central to the page narrative, generates the intelligence brief, performance analysis, and AI detected opportunities
- Action Studio — referenced in every workflow signal chain as the channel selection authority
- Conversion Funnel — assigned to Stage 2 (Nudge Received) — diagnoses why students aren't being reached
- Activation Engine — informs WhatsApp vs. email vs. QR deployment decisions

**Example output:**
> "WhatsApp onboarding sequence outperforming email by 24% for this cohort. Email open rates have dropped below 15% for new arrivals inactive 7+ days. Recommend shifting to WhatsApp for the unreached segment — 4.2× higher open rate for this profile."

---

### 4. Retention Risk Agent

**Layer:** Detection  
**Primary function:** Identifying students who are at risk of silent disengagement, churn, or failure to convert — before those risks become irreversible.

The Retention Risk Agent is the system's early warning system. It monitors engagement decay signals and flags students who are moving from active to at-risk, and from at-risk to effectively lost. Its output creates urgency — it quantifies both the probability of churn and the revenue impact of inaction.

**What it monitors:**
- App session frequency over rolling 7, 14, and 30-day windows
- Notification interaction rates (opens, dismissals, ignores)
- Journey module abandonment points
- OVHC checkout abandonment signals
- Email unsubscribe and push notification opt-out events
- Students who have reached the OSHC/OVHC transition window without taking action

**What it produces:**
- Churn risk scores per student and cohort
- Disengagement timeline estimates ("students inactive beyond 45 days have 80% probability of failing to convert")
- Revenue at risk quantification per cohort
- Urgency flags for human review (48h intervention windows)
- Signals passed to Activation Agent for root cause analysis

**Where it appears in the platform:**
- Student Segments — generates the "Silent Disengagement" segment and associated risk cards
- Action Studio — originating agent for silent churn re-engagement workflows
- Command Centre — populates churn risk metric in the operational strip
- Conversion Funnel — assigned to Stage 5 (Started Checkout) — identifies checkout abandonment risk

**Example output:**
> "1,200 students showing zero app sessions across a 14-day window, crossing the critical disengagement threshold. Students inactive beyond 45 days have an 80% probability of failing to convert to OVHC. Delaying intervention by 7 days reduces projected re-engagement by an estimated 35%."

---

### 5. Activation Agent

**Layer:** Intelligence  
**Primary function:** Diagnosing why students fail to activate the Medibank app after purchasing OSHC, and identifying the specific friction points preventing their first meaningful engagement.

The Activation Agent operates in the earliest part of the student lifecycle — the critical window between OSHC purchase and app setup completion. Its role is not simply to flag drop-off, but to understand *why* it is happening and recommend the specific fix.

**What it monitors:**
- App download status post-OSHC purchase
- OTP verification completion rates and failure patterns
- Profile setup completion rates
- Journey module first-touch events
- App session duration for first-time users
- Correlation of drop-off with device type, country code, and purchase channel (direct vs. agent)

**What it produces:**
- Drop-off stage identification (downloaded but not registered, registered but profile incomplete, etc.)
- Root cause diagnoses (e.g. "OTP failures correlating with international phone numbers")
- Activation funnel metrics by cohort and channel
- Specific product or operational fix recommendations
- Recovery flow recommendations for students already in drop-off

**Where it appears in the platform:**
- Student Activation Engine — the primary data source for the entire page's funnel analysis, cohort intelligence, and root cause diagnostics
- Student Segments — contributes to "New Arrival Drop-off" segment
- Action Studio — generates workflows around OTP fallback, WhatsApp onboarding, and re-engagement sequences
- Campaign Intelligence — informs new arrival onboarding campaign analysis

**Example output:**
> "1,820 users dropped at the OTP verification step this week. Correlation analysis identifies international phone numbers from specific country codes as the primary failure vector — SMS delivery failing due to carrier routing issues. Recommend email OTP as an immediate fallback."

---

### 6. Referral Agent

**Layer:** Detection  
**Primary function:** Monitoring referral activity across the student network, identifying momentum peaks, detecting ambassador-ready students, and quantifying the upstream revenue impact of referral growth.

The Referral Agent treats the student network as an asset. It understands that students who refer peers behave differently — they are more engaged, more likely to convert to OVHC, and more valuable over their lifetime. The agent identifies the students most likely to become high-value advocates and times interventions to capitalise on peak referral momentum.

**What it monitors:**
- Referral link shares (WhatsApp, email, direct)
- Successful referral completions (referred student purchases OSHC)
- Referral velocity per student (rate of referrals over time)
- Community forum posts that include referral intent signals
- Ambassador tier progression (1 referral → 2 → 3+)
- Time elapsed since last referral action (momentum decay tracking)

**What it produces:**
- Ambassador-ready cohort identification (students crossing the 3-referral threshold)
- Referral revenue impact estimates
- Network amplification projections ("127 ambassador-ready students could drive 35% referral volume increase")
- Referral momentum decay alerts (ambassador momentum peaks within 7 days of 3rd referral)
- LTV uplift projections for referred-student cohorts

**Where it appears in the platform:**
- Referral Operations Centre — primary intelligence source for the entire page
- Student Segments — generates "Ambassador Ready" segment
- Action Studio — originating agent for ambassador activation workflows
- Campaign Intelligence — "Ambassador-Led Referral Activation" suggested campaign
- Command Centre — referral revenue metric and AI feed insight

**Example output:**
> "127 students completed 3+ successful referrals within a 14-day window. Ambassador momentum peaks within 7 days of the 3rd referral — missing this window reduces subsequent referral probability by 40%. Referred students convert to OVHC at 2.6× the baseline rate."

---

### 7. Community Agent

**Layer:** Intelligence  
**Primary function:** Monitoring community engagement across university groups, hometown communities, and interest cohorts — and connecting community participation to conversion and retention outcomes.

The Community Agent is the system's social intelligence layer. It understands that community engagement is not just a loyalty metric — it is a leading indicator of OVHC conversion readiness. Students who attend healthcare webinars, participate in graduation-focused forums, and engage with peer networks convert earlier and at higher rates.

**What it monitors:**
- Forum post frequency and topic classification (visa, healthcare, graduation, etc.)
- Webinar registration and attendance rates
- Event participation by cohort
- Peer influence signals (reply rates, content shares within communities)
- Community activity before and after OVHC exploration events
- University-specific community engagement patterns

**What it produces:**
- Community-to-conversion correlation insights ("students attending healthcare webinars convert 38% earlier")
- Event-driven conversion impact analysis
- High-influence student identification (top forum contributors)
- Community segment insights for campaign targeting
- Cross-signals passed to Conversion Agent for intent scoring

**Where it appears in the platform:**
- Community & Events page — primary intelligence source
- Student Segments — contributes to "Community Conversion Signal" segment
- Action Studio — referenced in referral ambassador workflows for community influence scoring
- Campaign Intelligence — informs community channel recommendations
- Conversion Funnel — community webinar attendance cross-referenced with OVHC intent

**Example output:**
> "Students attending the Graduate Visa Q&A webinar showed OVHC engagement within 48 hours at a 28.5% rate — 3.1× the platform baseline. Community-led referral campaigns generate the strongest long-term OVHC conversion behaviour."

---

### 8. Visa Transition Intent Agent

**Layer:** Intelligence  
**Primary function:** Detecting signals that indicate a student intends to remain in Australia after graduating — a critical prerequisite for OVHC conversion — and scoring their post-study stay intent.

The Visa Transition Intent Agent addresses a unique challenge in the Medibank student lifecycle: OVHC is only relevant to students who intend to stay in Australia after their studies end. Without identifying intent to stay, the system would waste resources targeting students planning to return home. This agent resolves that ambiguity.

**What it monitors:**
- Graduate visa page views and dwell time on the Medibank app
- Webinar attendance for graduate visa and post-study work topics
- Job search and employment-related community posts
- State-specific cost-of-living research patterns in the app
- Healthcare system enquiries (Medicare, OVHC comparisons)
- TAFE/further education enquiries (indicator of extending Australia stay)

**What it produces:**
- Per-student post-study stay intent scores (e.g. "94% intent to remain in Australia")
- Cohort-level intent distributions
- Intent confirmation signals passed to Conversion Agent for propensity scoring
- High-intent cohort identification for priority targeting

**Where it appears in the platform:**
- Action Studio — appears in the agent collaboration chain for Graduate Transition workflows, confirming intent before the intervention is recommended
- Student Segments — contributes to "High-Intent OVHC Explorers" segment scoring
- Conversion Funnel — cross-signals used to qualify OVHC Eligible students

**Example output:**
> "94% of the 3,240-student graduation cohort engaged with graduate visa content, confirming strong intent to remain in Australia post-study. This cohort represents the highest-confidence OVHC conversion opportunity in the current window."

---

### 9. Insight Narrator Agent

**Layer:** Orchestration  
**Primary function:** Synthesising the outputs of all other agents into coherent, human-readable executive briefs that package intelligence, recommended actions, projected impact, and confidence scores for human review.

The Insight Narrator Agent is the final step before intelligence reaches a human. It takes structured outputs from Detection and Intelligence agents — signals, scores, probabilities, channel recommendations — and translates them into clear, strategic summaries. It is responsible for the narrative quality of what Medibank teams actually read and act on.

**What it monitors:**
- Outputs from all other agents within a given workflow or lifecycle moment
- Historical intervention outcomes (to calibrate revenue projections)
- Confidence score aggregation across contributing agents
- Revenue opportunity sizing from Conversion Agent

**What it produces:**
- Executive intervention briefs (the "Why" sections in Action Studio cards)
- Revenue impact narratives with confidence ranges
- Risk-of-inaction statements (quantifying the cost of delay)
- Campaign intelligence brief narratives (Campaign Intelligence page hero section)
- Command Centre AI briefing narratives

**Where it appears in the platform:**
- Action Studio — generates the recommendation narrative and risk framing for every workflow card
- Command Centre — generates the morning operational briefing
- Campaign Intelligence — generates the Campaign Intelligence Brief hero section
- Agent Hub — the final step in every cross-agent collaboration flow

**Example output:**
> "Packaged full intervention brief with projected $180K revenue impact for human review. Risk of inaction: an estimated 15% of this cohort will lapse to a competitor if no intervention is made within 30 days. Students who miss the graduation approach window are 3× harder to re-engage post-expiry."

---

## Lifecycle Moments

Lifecycle moments are the named events that agents collectively monitor and trigger actions around. They represent the specific points in a student's journey where Medibank can meaningfully intervene.

| Lifecycle Moment | Detection Agent | Description | Severity |
|---|---|---|---|
| **Graduation Approach** | Segmentation Agent | Student within 6 months of OSHC expiry, approaching the OVHC transition window | High Opportunity |
| **OVHC High Intent** | Conversion Agent | Student viewed OVHC pricing 3+ times — active purchase consideration | High Opportunity |
| **Silent Disengagement** | Retention Risk Agent | Student inactive 14+ days with no app sessions | Critical Risk |
| **New Arrival Drop-off** | Activation Agent | Student downloaded app but failed to activate or complete profile | Critical Risk |
| **Ambassador Ready** | Referral Agent | Student completed 3+ successful referrals within a 14-day window | Growth |
| **Community Conversion Signal** | Community Agent | Student attended a healthcare webinar AND viewed OVHC within 48 hours | High Opportunity |

Each lifecycle moment, once triggered, initiates a cross-agent collaboration chain that produces a recommendation for human review in Action Studio.

---

## Cross-Agent Collaboration Workflows

Agents do not operate in isolation. The most powerful intelligence in the system emerges from agents combining their outputs. The following workflows show how agents collaborate in sequence.

---

### Workflow 1: Graduate Transition Sequence

**Trigger:** Graduation Approach lifecycle moment  
**Originating agent:** Segmentation Agent  
**Recommended intervention:** Email + In-App graduate transition campaign  
**Projected revenue impact:** +$180K  
**Confidence:** 94%

**Collaboration chain:**

```
Step 1 — Segmentation Agent (Detection)
Detected 3,240 students entering the 6-month graduation window
based on visa expiry and enrollment signals.
↓
Step 2 — Conversion Agent (Intelligence)
Scored OVHC conversion probability at 82% — above the 34% baseline —
based on OVHC pricing page dwell time and repeat visits.
↓
Step 3 — Visa Transition Intent Agent (Intelligence)
Confirmed 94% of this cohort engaged with graduate visa content,
indicating strong intent to remain in Australia post-study.
↓
Step 4 — Campaign Optimisation Agent (Orchestration)
Recommended Email + In-App channel mix based on 3.1× higher
engagement for this demographic versus WhatsApp.
↓
Step 5 — Insight Narrator Agent (Orchestration)
Packaged full intervention brief with $180K revenue opportunity estimate.
Risk of inaction: 15% of cohort will lapse to a competitor within 30 days.
↓
Human Review in Action Studio → Approve → Execute
```

**Signal chain used by Action Studio:**

| Signal | Contributing Agent | Weight |
|---|---|---|
| 3,240 students detected within the 6-month graduation window | Segmentation Agent | Primary |
| Average OVHC page views at 4.2 per session — 3.1× above baseline | Conversion Agent | Strong |
| Email + In-App delivers highest engagement for this demographic | Campaign Optimisation Agent | Supporting |

---

### Workflow 2: Silent Churn Re-engagement

**Trigger:** Silent Disengagement lifecycle moment  
**Originating agent:** Retention Risk Agent  
**Recommended intervention:** WhatsApp re-engagement sequence  
**Projected impact:** Recover 400 students / mitigate $85K churn risk  
**Confidence:** 88%

**Collaboration chain:**

```
Step 1 — Retention Risk Agent (Detection)
Flagged 1,200 users with zero app sessions across a 14-day window,
crossing the critical disengagement threshold.
↓
Step 2 — Activation Agent (Intelligence)
Correlated inactivity with incomplete profiles (80% overlap).
Identified incomplete profile as the primary friction point
blocking re-engagement.
↓
Step 3 — Campaign Optimisation Agent (Orchestration)
Determined WhatsApp outperforms push 4.2× for this profile
due to notification fatigue. Recommended immediate deployment.
↓
Step 4 — Insight Narrator Agent (Orchestration)
Estimated $85K churn risk mitigation. Packaged recovery brief for review.
Risk of delay: 7-day delay reduces projected re-engagement by 35%.
↓
Human Review in Action Studio → Approve → Execute
```

**Signal chain:**

| Signal | Contributing Agent | Weight |
|---|---|---|
| 1,200 students with zero sessions in 14 days | Retention Risk Agent | Primary |
| 80% of silent users have incomplete profiles | Activation Agent | Strong |
| WhatsApp bypasses ignored push notifications — 4.2× open rate | Campaign Optimisation Agent | Supporting |

---

### Workflow 3: Referral Ambassador Activation

**Trigger:** Ambassador Ready lifecycle moment  
**Originating agent:** Referral Agent  
**Recommended intervention:** Push notification — ambassador tier upgrade  
**Projected impact:** +35% referral volume / High LTV  
**Confidence:** 96%

**Collaboration chain:**

```
Step 1 — Referral Agent (Detection)
Identified 127 users crossing the 3-referral threshold
within a 14-day window, activating the ambassador eligibility trigger.
↓
Step 2 — Community Agent (Intelligence)
Confirmed these users show 3× higher forum activity than average.
Identified them as strong community influencers with network
amplification potential.
↓
Step 3 — Referral Agent (Intelligence)
Calculated: ambassador status increases subsequent referral volume
by 35% based on prior cohort performance data.
Momentum window: peaks within 7 days of 3rd referral.
↓
Step 4 — Campaign Optimisation Agent (Orchestration)
Recommended push notification — 94% open rate for recent-referral
users — as the highest-impact delivery channel.
↓
Step 5 — Insight Narrator Agent (Orchestration)
Packaged ambassador activation brief with LTV projections.
Risk of inaction: missing the 7-day window reduces subsequent
referral probability by 40%.
↓
Human Review in Action Studio → Approve → Execute
```

---

### Workflow 4: OTP Verification Recovery (Activation Engine)

**Trigger:** New Arrival Drop-off lifecycle moment  
**Originating agent:** Activation Agent  
**Recommended intervention:** Email OTP fallback + 3-day recovery flow  
**Projected impact:** +12% activation rate / recover $85K  
**Confidence:** 94%

**Collaboration chain:**

```
Step 1 — Activation Agent (Detection + Intelligence)
Flagged 1,820 users stuck at OTP verification in the current week.
Correlated failure with specific international phone country codes.
↓
Step 2 — Segmentation Agent (Intelligence)
Identified correlation: 94% of failures originate from students
using non-Australian SIM cards purchased before arrival.
↓
Step 3 — Campaign Optimisation Agent (Orchestration)
Recommended switching to email OTP as an immediate fallback.
Additional recommendation: 3-day WhatsApp recovery flow for
students who dropped off before receiving OTP.
↓
Step 4 — Insight Narrator Agent (Orchestration)
Estimated $85K activation revenue recovery. Packaged product
fix recommendation alongside campaign recovery brief.
↓
Human Review in Action Studio → Approve → Execute
```

---

## How Agents Surface in the Platform

Each platform page draws intelligence from specific agents. This table maps every page to the agents that power it.

| Platform Page | Primary Agents | What They Power |
|---|---|---|
| **Command Centre** | All agents · Insight Narrator | Morning briefing narrative, operational metrics strip, AI collaboration flow, live insights feed |
| **Student Segments** | Segmentation Agent · Conversion Agent · Community Agent | Segment generation, behavioural clustering, revenue opportunity sizing, segment cards |
| **Action Studio** | All agents | Workflow recommendations, signal chains, agent collaboration logs, risk-of-inaction framing |
| **Activation Engine** | Activation Agent · Segmentation Agent | Funnel drop-off analysis, root cause diagnostics, cohort intelligence, recommended actions |
| **Campaign Intelligence** | Campaign Optimisation Agent · Insight Narrator · Retention Risk | Intelligence brief, campaign performance analysis, channel intelligence, AI suggested campaigns |
| **Conversion Funnel** | Segmentation · Conversion · Campaign Optimisation · Retention Risk | Per-stage agent insights, drop-off reasoning, recommendations at each funnel stage |
| **Referral Ops** | Referral Agent · Community Agent | Referral funnel analysis, ambassador intelligence, warm lead queue |
| **Agent Hub** | All agents | Full visibility into agent collaboration flows, performance metrics, cross-agent workflows |
| **Community & Events** | Community Agent · Conversion Agent | Engagement intelligence, event conversion impact, OVHC correlation analysis |

---

## Confidence Scoring

Every agent output carries a confidence score. This score reflects how much supporting evidence the agent has accumulated for its recommendation — it is not a guarantee of accuracy.

**Score bands and their meaning:**

| Band | Range | Interpretation |
|---|---|---|
| Very High | 93–100% | Multiple strong signals aligned. Recommendation supported by historical evidence from equivalent cohorts. Proceed with confidence. |
| High | 85–92% | Strong primary signal with supporting evidence. Human review recommended before action. |
| Medium | 75–84% | Moderate signal clarity. Human judgement required — consider requesting additional data before approving. |
| Low | Below 75% | Signal ambiguous or insufficient. Do not approve without independent validation. |

Confidence scores are displayed on every workflow card in Action Studio, every segment in Student Segments, and in the Campaign Intelligence brief. They are always shown to the human reviewer — never hidden.

---

## Human-in-the-Loop Protocol

The HITL protocol defines what the system does autonomously and what always requires human approval.

**Agents do autonomously:**
- Monitor all behavioural data in real time
- Detect lifecycle moment triggers
- Score intent and propensity
- Generate recommendations with confidence scores
- Package briefs for human review
- Update the Command Centre operational briefing

**Agents never do autonomously:**
- Launch campaigns or communications
- Modify student data
- Approve or execute workflows
- Change platform configuration
- Commit budget or commercial decisions

**Human responsibilities:**
- Review all recommendations in Action Studio before approval
- Modify recommended messaging or targeting before execution
- Approve channel selection and timing
- Execute the approved workflow
- Provide feedback on outcomes (which feeds agent learning)

Every workflow card in Action Studio clearly labels its origin ("Recommended by Campaign Optimisation Agent"), its confidence ("91%"), and its expected impact — so the human reviewer can make an informed decision, not just rubber-stamp AI output.

---

## Agent Collaboration Language

The platform uses a consistent vocabulary to communicate agent involvement. Teams should understand these terms when reviewing intelligence.

| Term | Meaning |
|---|---|
| **AI Detected Opportunity** | A Detection layer agent identified a cohort or signal worth acting on |
| **Recommended Intervention** | An Orchestration layer agent has packaged a full action recommendation for human review |
| **AI Confidence** | The aggregate confidence score across all contributing agents |
| **Suggested Optimisation** | Campaign Optimisation Agent recommends a change to an existing campaign |
| **Signal Chain** | The sequence of signals from multiple agents that led to this recommendation |
| **Risk of Inaction** | Insight Narrator's quantified estimate of what happens if no action is taken |
| **Send to Action Studio** | Route the agent's recommendation to the human decision queue |
| **Lifecycle Moment** | A named point in a student's journey that triggers agent collaboration |

---

## Extending the Ecosystem

The current ecosystem includes nine active agents. As the platform matures, additional agents can be introduced by following the same three-layer pattern.

**Candidate future agents (conceptual):**

- **Health Engagement Agent** — Monitors wellbeing module usage to predict long-term retention and OVHC engagement. Students with high health app engagement are stronger OVHC converters.

- **Language & Localisation Agent** — Detects language preference signals to trigger localised communications. Chinese national cohorts, for example, respond significantly better to Mandarin-first messaging.

- **Payment Friction Agent** — Monitors checkout behaviour specifically for payment method abandonment — a known drop-off point in the OVHC purchase flow.

- **Post-Conversion Retention Agent** — Monitors OVHC customer behaviour post-purchase to predict renewal likelihood and flag at-risk customers before their OVHC expires.

New agents should always be introduced into one of the three existing layers, with clearly defined input signals, output formats, and downstream handoff protocols. They should not act autonomously — the HITL protocol applies to all agents unconditionally.

---

*This document reflects the agent ecosystem as designed and prototyped in the Medibank Conversion Engine. All data, projections, and agent outputs referenced are illustrative of the intended system behaviour.*
