Design a web-based internal platform for Medibank called the “Student Lifecycle Conversion Engine” that works alongside the student mobile app to drive engagement, retention, and OSHC to OVHC conversion.

---

## Objective

This is NOT a traditional CRM or analytics dashboard.

It is a behavioural conversion engine that:

- Understands student behaviour
- Identifies lifecycle stages and intent
- Recommends and triggers actions
- Influences user decisions
- Drives OVHC conversion

---

## System Context (VERY IMPORTANT)

The platform works together with the student mobile app.

---

### Mobile App Role:

- Where students interact
- Where behaviour happens
- Where nudges, journeys, health, and community features exist

---

### Admin Platform Role:

- Observes user behaviour from the app
- Interprets user intent and lifecycle stage
- Decides what action should be taken
- Triggers interventions back into the app and other channels

---

### Core Flow:

Student behaviour (app)
→ Engine analyses behaviour
→ Engine determines user state
→ Engine recommends or triggers action
→ Action is delivered (in-app / email / push / events)
→ User behaviour changes
→ Conversion outcome improves

---

## What We Are Building

A **control centre** that helps Medibank teams:

- Understand students at scale
- Identify conversion opportunities
- Take targeted actions
- Measure impact

---

## Platform Structure (User-Facing Sections)

---

### 1. Command Centre

Main dashboard that shows:

- Total OSHC users
- Users nearing graduation
- Conversion-ready users
- At-risk users
- Conversion rate (OSHC → OVHC)
- Active campaigns
- Upcoming events
- Recommended actions (Next Best Actions)

---

### 2. Student Segments

Behaviour-driven cohorts such as:

- Graduating in 60 days
- High engagement but not converted
- Low engagement and at risk
- High rewards users
- Dropped from conversion flow

Each segment should show:

- Number of users
- Risk/opportunity level
- Recommended action
- CTA to trigger intervention

---

### 3. Action Studio

Rule-based automation system.

Admins can define:

IF (condition)
→ THEN (action)

Examples:

- If user is near expiry → show OVHC nudge
- If user inactive → trigger re-engagement
- If user is conversion-ready → push personalised offer

Actions include:

- In-app cards
- Push notifications
- Emails
- SMS
- Community invitations
- Event invitations

---

### 4. Campaigns & Communications

Create and manage targeted communications:

- Personalised messaging
- Channel selection (push, email, in-app)
- Scheduling
- Performance tracking

Should feel like a **conversion-focused messaging system**, not generic marketing tool.

---

### 5. Community & Events

Admins can:

- Create community groups:
  - University-based
  - Country-based
  - Interest-based

- Organise events:
  - Webinars
  - Meetups
  - Orientation sessions
  - Career sessions

- Invite specific cohorts

- Track engagement and participation

This module should emphasise:

- Belonging
- Peer interaction
- Community-driven engagement

---

### 6. Conversion Funnel

Track the full OSHC → OVHC journey:

- Eligible users
- Saw nudge
- Clicked
- Viewed plans
- Started checkout
- Converted

Also show:

- Drop-off points
- Best performing campaigns
- Conversion by cohort
- Revenue impact

---

## Design Philosophy

- Clean, premium, and structured
- Not data-heavy or overwhelming
- Focus on clarity and actionability
- Highlight insights over raw data
- Use cards and visual summaries

---

## Experience Goal

Admin should feel:

- “I know what’s happening”
- “I know who to act on”
- “I know what to do next”
- “I can influence outcomes directly”

---

## Important

- Do NOT design this as a generic CRM
- Do NOT show raw tables as primary UI
- Focus on insights, decisions, and actions
- Ensure strong connection between app behaviour and admin actions