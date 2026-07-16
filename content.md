# Advanced Spade Company — Website Content

All user-facing copy on the site, grouped by page. Each block notes the file it lives in so edits can be re-synced back into the code.

---

## Global

### Header
_file: `src/app/_components/PageHeader.tsx`_

- Wordmark (desktop): **Advanced Spade Company**
- Wordmark (mobile): **ASC**
- Back link format: `← {section}`
- Crumb separator: `//`

### Footer
_file: `src/app/_components/PageFooter.tsx`_

- Copyright: **© {year} Advanced Spade Co**
- Link: **The Problem →** (routes to `/news`)
- Region: **California + Nevada**
- Tagline: **Made in America 🇺🇸**

---

## Home
_file: `src/app/page.tsx`_

### Hero
- Headline: **Proven Underground.**
- Body: The overhead grid is failing. Advanced Spade Company builds precision tools and intelligent systems for underground utility detection, mapping, and drilling.

### Section tiles
- **Services** — Maps. Damage prevention. Trenchless construction.
- **Technology** — Hardware and software for underground work.
- **Careers** — Build something that matters underground.
- **Contact** — California + Nevada. Let's talk.

---

## Services
_file: `src/app/services/page.tsx`_

- Sublabel: **Maps · Damage Prevention · Trenchless Construction**
- Lead: Underground utility detection, mapping, and trenchless construction. Delivered as one continuous workflow.

### 01 / Underground Utility Maps
Accurate subsurface maps are the foundation of safe, efficient underground work. We produce survey-grade deliverables built for engineering, design, and construction planning — not just field reference.

**Offerings**
- **Survey-Grade / Stamped Maps** — Legally defensible, stamped deliverables suitable for permitting, design, and record documentation.
- **Engineering / Design / Planning** — Subsurface data formatted and delivered to support engineering workflows and project planning from concept through construction.

### 02 / Damage Prevention
Striking an underground utility is expensive, dangerous, and avoidable. We provide the field verification and ongoing map maintenance to keep projects moving without incident.

**Offerings**
- **Field Mark & Verify** — On-site utility marking and verification. Accurate locates, documented and defensible.
- **Map Generation & Maintenance** — We build and maintain subsurface utility records over time, so your data doesn't go stale between projects.

### 03 / Trenchless Construction
Trenching is slow and expensive. We support trenchless utility installation — a faster, lower-impact path to getting lines underground. This is where our technology advantage is most direct: precise pre-bore data means fewer surprises underground.

**Offerings**
- **Utility Installation** — Trenchless placement of new lines, guided by precise subsurface data — faster, with less site impact than open-trench methods.

---

## Technology
_file: `src/app/technology/page.tsx`_

- Sublabel: **Hardware + Software for underground work**
- Lead: A connected stack — purpose-built sensors, field hardware, and a data platform that turns subsurface signals into decisions.

### Products
- **CRKT** — Handheld Locator — Software-defined sensor. Modular antenna array. Real-time tuning.
- **Ayer** — Data Platform — Web application. Mapping. Physics-backed analysis.
- **SQID** — Sensor Platform — In development.
- **CRBK** — Field System — In development.

---

## Technology / CRKT
_file: `src/app/technology/crkt/page.tsx`_

- Sublabel: **Handheld Utility Locator**
- Lead: A software-defined locator built for the field. Modular antennas, real-time tuning, and over-the-air upgrades that turn one device into many.
- Panels: **01 / Hardware — Handheld**, **02 / Software — Companion App**

### Feature blocks
- **User Device** — Application runs on any user device.
- **Software Defined Sensor** — Firmware updates for performance upgrades and expanded capabilities.
- **Modular Array** — Application-specific antennas. · Performance upgrades · Function expansion
- **Antennas** — Real-time tuning. · High Q · High sensitivity

---

## Technology / Ayer
_file: `src/app/technology/ayer/page.tsx`_

- Sublabel: **Data Platform**
- Lead: Field data, planning, mapping, and physics — unified in one platform that all stakeholders can see and shape.
- Top color strip labels: **Electrical · Gas · Comms · Water · Sewer · Survey · Irrigation**
- Panel label: **01 / Platform — Dashboard**

### Feature blocks
- **Web Application** — Visibility and input for all stakeholders. · Real-time planning · Tracking · Analytics
- **Data Integration** — QL-A / B / C / D. · Automated collection · Analysis · Handling
- **Mapping** — Data visualization and context. · For excavation · For trenchless navigation
- **Physics** — Large data set for training and analysis. · Signal verification in simulation · Verification in lab · Verification in field

---

## Careers
_file: `src/app/careers/page.tsx`_

- Sublabel: **Build something that matters underground**
- Lead: Join the team building the next generation of underground utility detection, mapping, and drilling technology.
- CTA button: **View open roles →** (Dover application link)
- Fallback: Or reach us at **careers@aspadeco.com**

---

## Contact
_file: `src/app/contact/page.tsx`_

- Sublabel: **California + Nevada**
- Lead: Get in touch.

### Cards
- **01 / Careers** — CAREERS@ASPADECO.COM — → Open mail
- **02 / Service & Support** — SERVICE@ASPADECO.COM — → Open mail
- **03 / Phone** — 562-737-3416 — → Call

---

## The Problem
_file: `src/app/news/page.tsx` (route: `/news`)_

- Sublabel: **Evidence / The Case for Underground**
- Lead: The overhead grid is failing. The underground is mismarked. We track the field reports that prove why this work matters.

### Article 01 — CBS Sacramento — Jun 8, 2026
- Headline: PG&E says Northern California power shutoffs expected to continue Thursday
- Excerpt: PG&E cut power to nearly 5,000 customers across 8 Northern California counties — a public-safety shutoff to keep overhead lines from sparking wildfires in red-flag wind conditions.
- Tag: **[ The Overhead Grid is Failing ]**

### Article 02 — Boyle Heights Beat — Jun 9, 2026
- Headline: Company tied to East LA oil spill says pipeline was improperly marked
- Excerpt: HP Communications alleges the pipeline operator failed to properly mark the line's location before excavation — leading to a strike and crude-oil spill onto East LA streets.
- Tag: **[ Why We Mark + Verify ]**

- Card CTA: → Read more about the problem
