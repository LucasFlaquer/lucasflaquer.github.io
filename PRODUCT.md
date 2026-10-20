# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech recruiters and hiring managers evaluating Lucas Flaquer for a full-time engineering role. They arrive from a LinkedIn profile, a resume link or a job application, scan quickly, and decide whether to reach out or pass the profile along.

## Product Purpose

Personal portfolio of Lucas Flaquer at https://lucasflaquer.github.io. It exists to show what Lucas can do and has done professionally, so a recruiter can judge fit fast. Success means the visitor contacts Lucas (email or LinkedIn) or downloads the resume.

## Positioning

Lucas is a full-stack engineer: frontend in React and TypeScript plus backend work. The site must present both halves with equal weight, not as a frontend developer who also touches APIs, or the reverse.

From the resume: Senior Full Stack Engineer, 7+ years, Sorocaba, SP, Brazil (GMT-3), remote, available as contractor (PJ), flexible hours with São Paulo time zone preferred. The resume (`public/Lucas_Flaquer_CV_Fullstack.pdf`) is the source of every fact on the site.

## Operating Context

- Visitors read on desktop between other tabs and on phones from LinkedIn links; expect short visits and skimming.
- The resume PDF is a parallel artifact: the site and the resume tell the same story, and the site links to it.
- Content is bilingual: English and Brazilian Portuguese, with a visitor-facing language switch. Every piece of copy needs both versions.

## Capabilities and Constraints

- Static single-page app on GitHub Pages: no server, no backend, no secrets in the bundle. Contact happens through links (mailto, LinkedIn), not a form backend.
- No router yet; a language switch must work without server-side routing (GitHub Pages has no SPA fallback).
- Content lives in typed modules under `src/data/`, separate from components, in both languages.
- Required sections by intent: professional work, work timeline, skills spanning frontend and backend, contact.
- Contact paths: email, LinkedIn, GitHub (github.com/LucasFlaquer), resume PDF download. Email lucas.flaquer@gmail.com, LinkedIn linkedin.com/in/lucas-flaquer. The resume ships in English only for now.

## Brand Commitments

- Name: Lucas Flaquer. Page title "Lucas Flaquer".
- Nothing from the previous site (2018-era "Web Developer in training", skill-percentage bars, study projects) is binding; treat it as outdated.

## Evidence on Hand

- Professional work and the work timeline come from the resume, including the client names it lists (Printly, SteepRock, BTG Pactual).
- Old study projects (Freshness, Boot Gulp, Hidden Blade, Merlin's Potions, Niver Invitation, Chaordic) exist in git history before commit `99dd01f`; not chosen as evidence.
- Photo: Lucas's GitHub avatar. Metrics only as stated in the resume (+30% registered companies, test suite 3 → 1.5 min, coverage ~60–75% → ~100%, concept to MVP in under 2 months). No testimonials, client logos or press; do not invent any.

## Product Principles

1. Recruiter speed first: role, stack and how to contact must be clear within seconds.
2. Show real professional work, never filler projects or fabricated claims.
3. Full-stack is the claim: frontend and backend evidence carry equal weight.
4. Parity across languages: EN and PT say the same thing, neither is an afterthought.
5. Resume and site agree: one source of facts, no contradictions.

## Accessibility & Inclusion

Follow the accessibility checklist in `.claude/rules/react.md` (semantic landmarks, labelled icon links, one h1, keyboard reachability, `prefers-reduced-motion`). Set `lang` correctly for the active language (`en` / `pt-BR`).
