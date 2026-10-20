---
version: 1
slug: "src-app-tsx"
primary_target: "src/app.tsx"
related_targets: ["src/pages"]
---

# Portfolio home and internal pages

Scope: home (`/`) plus internal pages `/experience/:slug`, `/about`, `/skills`. Mode: Persuade. Code-led (no image generation).

Audience/job: recruiters and hiring managers decide in seconds whether to contact Lucas. Action: email, LinkedIn or resume PDF download, visible in the first viewport and at the line's terminus. Proof: the resume's real roles, results and stack only. Home summarises everything; internal pages carry the full detail. EN + PT-BR with a switch. Clean URLs with a 404.html fallback.

## Direction contract

THESIS: The career is a transit line. Frontend (blue) and backend (red) run as two parallel tracks; full-stack roles are interchanges where both stop, frontend-only roles let the red track pass through. Refuses the dark gradient-name dev hero with a skill-pill cloud.

OWN-WORLD: White platform ground, charcoal enamel sign bands with white Overpass, line blue #0455a1 and line red #e3342f used only for territory (frontend/backend), white interchange capsules with charcoal outline, yellow platform-edge for selection and focus on dark. Flat, no shadows, no gradients, square sign corners. Overpass Mono only for dates and station codes. Raises: colour maps territory never state (zine); one word big enough to win plus one calm panel (flyer); preview before boarding (darkroom); every station addressable, back retraces (HyperCard); whole modules on one station pitch (azulejo).

STORY: Visitor reads name, role and availability, sees seven years as one line with equal frontend/backend weight, previews a station, boards one for detail, and ends at the terminus "Next stop: your team" with contact actions.

FIRST VIEWPORT: Charcoal sign band (LF roundel, nav, EN/PT, Resume). Name at signage scale left, photo in a square sign frame right, calm panel under the name: role, location/remote/PJ, Email, LinkedIn, Download resume. The line map starts in the lower third, full width, seven stations plus terminus, legend beside it.

FORM: strip-map wayfinding, candidate 5 of 7. seed:1c6ee6cc958d3995. Signature interaction: station hover/focus fills the preview strip with that role's headline result; the line draws in once on load (motion-safe).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
