# Product Requirements Document (PRD)

## Senyu Holding Group — Corporate Introduction Website

**Project:** OIM3690 Mini Project 1 (mp1-client-site)
**Status:** Draft v1
**Date:** 2026-09-22

---

## 1. Overview

An English-language, four-page corporate introduction website for **Senyu Holding Group**, a Chinese company with 30 years of experience in traditional Chinese medicine (TCM) and health/wellness, whose health product brand is **Senshan (森山)**. The site builds credibility with potential international business partners ahead of global-market expansion.

## 2. Goals

- Present Senyu Holding Group as a credible, scientific, large-scale, and experienced partner for international business.
- Introduce the Senshan product brand (granules, capsules, beverages).
- Showcase Senyu Health Town as proof of long-term investment and scale.
- Drive the single key action: **email Senyu Holding Group to start a partnership conversation.**

## 3. Audience

- **Primary:** Potential international business partners.
- **Secondary:** Distributors and consumers.

## 4. Success Criteria

This is an academic deliverable (OIM3690 MP1) — no business KPIs are tracked. Success is defined as:

- All 4 pages implemented per this PRD and grading rubric.
- Responsive, semantic HTML/CSS site deployed via GitHub Pages.
- Layout sketch (`layout-sketch.jpg`) committed before code, per course requirement.

## 5. Scope

### In scope

- 4 static HTML pages: Home, Health Products, Senyu Health Town (nav label: "Where We Call Home"), Contact/Partnership.
- Shared nav bar and footer across all pages.
- One external stylesheet (`styles.css`), vanilla JS only if needed (e.g., mobile nav toggle).
- Placeholder images and placeholder partnership email until final assets/content are confirmed.

### Out of scope

- CMS/backend, forms with server processing (mailto: link only, unless changed later).
- E-commerce or checkout functionality.
- Chinese-language version.
- Framework/build tooling (React, Vite, Tailwind, etc.) — plain HTML/CSS/JS only.

## 6. Site Navigation

Shared nav bar, in this order:

1. Home
2. Product
3. Where We Call Home _(links to Senyu Health Town page)_
4. Contact

## 7. Brand & Visual Direction

- **Style:** Natural, premium, technology-driven. Balance TCM's natural origin with international corporate professionalism and scale.
- **Logo:** `logo_photo/Senshan Logo.jpg` (more assets to be added later).
- **Placeholder palette** (derived from logo, pending final brand hex codes):
  - Primary — deep forest green `#0E3A32`
  - Accent/secondary — warm cream/tan `#E7CDA4`
  - Neutral white/off-white for backgrounds, dark charcoal or the forest green for body text.
- **Imagery:** Placeholder images will be used for product photos, Health Town landscape, and hero images until approved client assets are supplied (client to provide more photos incrementally).
- **Layout sketch:** Hand-drawn `layout-sketch.jpg` required in repo before any page code is written — **pending**, to be added before implementation begins.

## 8. Page Specifications

### 8.1 Home

**Goal:** Introduce the company and build initial trust.

- Hero section: large image (Senshan product / Dendrobium officinale / Health Town — placeholder for now), headline, "30 years of experience" statement, partnership CTA.
- Key company facts / trust signals: technology, science, quality, scale, proven China market success, Dendrobium officinale industry standards role.
- Section linking to Health Products page.
- Section linking to Senyu Health Town page.
- Short technology/research/quality section.
- Partnership contact CTA.
- Shared footer (nav + company info).

### 8.2 Health Products

**Goal:** Introduce the Senshan brand.

- Page title + introduction.
- Product cards for the 3 categories: Granules, Capsules, Beverages (placeholder images/copy until approved assets confirmed).
- Research, quality, and production background section.
- Partnership contact CTA.
- Shared footer.
- **Constraint:** No unverified medical claims.

### 8.3 Senyu Health Town ("Where We Call Home")

**Goal:** Demonstrate scale and long-term vision.

- Hero: large landscape image (placeholder), stat callout — ~4.06 km² total area, ~RMB 5 billion investment.
- Page title + introduction.
- Key facts section.
- Grid of industries: medical care, education, real estate, agriculture, tourism, antioxidant-related industries.
- Section explaining this project's value as corporate credibility evidence.
- Partnership contact CTA.
- Shared footer.

### 8.4 Contact / Partnership

**Goal:** Convert visitor into a partnership inquiry.

- Heading for international partnership inquiries.
- Short invitation copy.
- Partnership email: **placeholder** (e.g., `partnership@senyu-example.com`) until client confirms official address — flagged as a pre-launch blocker.
- Optional: phone number, address, contact person (pending, not required for v1).
- Shared footer.

## 9. Content & Asset Status

| Item                                                                 | Status                                                                   |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Company background, Senshan product info, Health Town info (English) | Available from existing public site                                      |
| Brand colors (final hex)                                             | **Pending** — using logo-derived placeholder palette                     |
| Logo                                                                 | Available (`logo_photo/Senshan Logo.jpg`); more photos to follow         |
| Product / company / Health Town images                               | **Pending** — placeholders in v1, client to supply/approve incrementally |
| Official partnership email                                           | **Pending** — placeholder in v1                                          |
| Layout sketch (`layout-sketch.jpg`)                                  | **Pending** — required before page code is written                       |
| Final English copy review                                            | Pending                                                                  |

## 10. Technical Requirements

- Plain HTML5 (semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.), CSS3, vanilla JS only where necessary.
- One shared external stylesheet (`styles.css`) for all pages.
- Fully responsive (mobile, tablet, desktop breakpoints).
- Shared nav bar and footer markup consistent across all 4 pages.
- Deployment target: **GitHub Pages**.
- No unverified medical/health claims anywhere in copy.

## 11. Open Items / Blockers Before Launch

1. Layout sketch (`layout-sketch.jpg`) must be created and committed before implementation.
2. Confirm official partnership email address.
3. Receive and approve final product/company/Health Town images.
4. Confirm final brand hex codes (or approve logo-derived placeholder palette as final).
5. Final legal/factual review of English copy (avoid unverified claims).

## 12. AI Build Prompt (reference)

> Build an English-language, four-page corporate introduction website for Senyu Holding Group. The primary audience is potential international business partners. The visual direction is natural, premium, and technology-driven, using the group's established brand colors and approved images. Create the pages Home, Health Products, Senyu Health Town, and Contact / Partnership. Use concise, factual copy and make the main action on every page clear: contact the company by email for partnership inquiries. Do not make unverified medical claims. The website must be responsive, use semantic HTML, a shared navigation bar, and one external stylesheet. Use real content and images supplied from the existing public company website or approved by the client.
