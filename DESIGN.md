---
name: Lucas Flaquer
description: A career drawn as a transit line, signed like a metro platform.
colors:
  charcoal-sign: "#1d1d1b"
  platform-white: "#ffffff"
  platform-stone: "#f2f2ee"
  worn-ink: "#585853"
  tile-joint: "#d6d6d0"
  sign-dim: "#b9b9b3"
  platform-edge-yellow: "#ffcd00"
  line-blue: "#0455a1"
  line-red: "#e3342f"
typography:
  display:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
  station-name:
    fontFamily: "Overpass Variable, Overpass Fallback, ui-sans-serif, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 900
    lineHeight: 1.25
  timetable:
    fontFamily: "Overpass Mono Variable, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 700
rounded:
  none: "0px"
  station: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  panel: "28px"
  section: "64px"
  terminus: "80px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal-sign}"
    textColor: "{colors.platform-white}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-light:
    backgroundColor: "{colors.platform-white}"
    textColor: "{colors.charcoal-sign}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline:
    backgroundColor: "{colors.platform-white}"
    textColor: "{colors.charcoal-sign}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.charcoal-sign}"
    textColor: "{colors.platform-white}"
  button-inverse:
    backgroundColor: "{colors.charcoal-sign}"
    textColor: "{colors.platform-white}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-inverse-hover:
    backgroundColor: "{colors.platform-white}"
    textColor: "{colors.charcoal-sign}"
  nav-link:
    textColor: "{colors.sign-dim}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "64px"
  nav-link-active:
    textColor: "{colors.platform-white}"
  station-plate:
    backgroundColor: "{colors.charcoal-sign}"
    textColor: "{colors.platform-white}"
    typography: "{typography.station-name}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  terminus-plate:
    backgroundColor: "{colors.platform-edge-yellow}"
    textColor: "{colors.charcoal-sign}"
    typography: "{typography.station-name}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  stack-tag:
    textColor: "{colors.worn-ink}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  calm-panel:
    backgroundColor: "{colors.platform-stone}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: Lucas Flaquer

## Overview

**Creative North Star: "The Platform Sign"**

The site reads like a metro platform: a white floor, charcoal enamel sign bands carrying white Overpass, and a route diagram that does the storytelling. The career is one line with two parallel tracks, frontend in line blue and backend in line red, and every role is a station on it. Full-stack roles are interchanges (a capsule where both tracks stop); frontend-only roles let the red track run straight through. The rest of the system exists to stay out of the diagram's way.

Density is low and confident. Each view has one word set big enough to win (the name, the station name, the page sign) and one calm stone panel that carries the facts and the actions. Everything is flat: no shadows, no gradients, no card stacks. Hierarchy comes from scale, weight 900 against 400, heavy charcoal rules, and the switch between white platform and charcoal sign. The rejected alternative is the dark developer hero with a gradient name and a cloud of coloured skill pills.

**Key Characteristics:**

- White platform ground with full-bleed charcoal sign bands (header, page signs, contact terminus, footer).
- Two territory colours only, blue and red, always meaning frontend and backend.
- Yellow is the platform edge: rare, reserved for "you are here" and focus on dark.
- Square corners everywhere except route-diagram marks, which are round.
- Overpass Black for every heading; Overpass Mono only for dates.
- Motion is the line drawing itself once on load, then plain colour transitions.

## Colors

A near-neutral warm-grey signage palette with two transit colours that carry meaning and one yellow that marks position.

### Primary

- **Charcoal Sign** (#1d1d1b): Sign bands, primary button fill on light, text, focus ring on light, station markers' stroke, section-heading rules, station name plates. The system's "ink" and its "enamel" are the same colour.

### Secondary

- **Line Blue** (#0455a1): The frontend track. Track lanes, frontend bullets, legend swatch, skill-group bars for frontend.
- **Line Red** (#e3342f): The backend track. Same roles as Line Blue for backend. Blue and red always appear together when a role or person is both (track bullets pair, page-sign double bar).

### Tertiary

- **Platform Edge Yellow** (#ffcd00): Active nav underline, focus ring inside charcoal bands, text selection, skip link, the "Your team" terminus plate, and the current stop on the station strip. Text on it is always Charcoal Sign.

### Neutral

- **Platform White** (#ffffff): Page ground; text on charcoal; light-button fill on charcoal.
- **Platform Stone** (#f2f2ee): The calm panel behind the hero facts, the station preview strip, the results band.
- **Worn Ink** (#585853): Secondary text on white and stone (stack lines, role titles under stations, notes).
- **Tile Joint** (#d6d6d0): Default border and the 2px row rules between list items.
- **Sign Dim** (#b9b9b3): Secondary text on charcoal (inactive nav, back links, periods on station signs, footer). At 25-30% alpha it draws hairlines between stacked charcoal bands.

### Named Rules

**The Territory Rule.** Blue and red fill only territory marks: tracks, track bullets, legend swatches, track bars. They never fill a button, a panel, a heading or a status. If a mark is not about frontend or backend, it is charcoal.

**The Platform Edge Rule.** Yellow marks where you are or where the eye must land on charcoal: active nav, focus on dark, selection, skip link, current stop, terminus plate. It is never a call-to-action fill. Primary actions are charcoal on white and white on charcoal.

## Typography

**Display Font:** Overpass Variable (with "Overpass Fallback", a metric-matched local Arial, then ui-sans-serif) **Body Font:** Overpass Variable (same stack) **Label/Mono Font:** Overpass Mono Variable (with ui-monospace)

**Character:** One highway-signage family carries everything; contrast comes from weight (Black 900 against Regular 400) and size, not from a second face. The mono cut is the timetable: it sets years and periods and nothing else.

### Hierarchy

- **Display** (900, clamp(3.5rem, 9vw, 6rem), 0.9): The person's name in the home hero only.
- **Headline** (900, 3rem to 4.5rem, 1): The h1 inside a charcoal page sign or station sign; the 404 heading.
- **Section** (900, 1.875rem to 2.25rem): Home section headings, always under a 4px charcoal rule. The contact terminus heading steps up to 2.25rem to 3.75rem.
- **Title** (900, 1.25rem to 1.5rem): Role titles, result values, skill-group names, station-detail subheads.
- **Body** (400, 1rem, relaxed 1.625): Running copy, capped at 60-70ch. Lead copy steps to 1.125rem.
- **Label** (700, 0.875rem): Nav, buttons (1rem at default size), arrow links, legend, availability items.
- **Station Name** (900, 0.875rem, 1.25): Station names on the line map, set on or near a plate.
- **Timetable** (Overpass Mono 700, 0.75rem to 0.875rem): Start years, periods, date ranges.

### Named Rules

**The Timetable Rule.** Overpass Mono sets dates, years and periods only. Codes, labels, tags and buttons stay in Overpass.

**The Signage Weight Rule.** Every heading is Black (900) with tight tracking (-0.025em, down to -0.035em at display size). Body never goes bold for emphasis inside paragraphs; emphasis is a label or a plate.

## Layout

A single centred column (max 72rem) with gutters of 16px, 24px from 640px and 32px from 1024px. The hero is a 12-column grid: name and calm panel across 9, square portrait across 3, portrait moves above the name on mobile at 10rem wide. Sections stack with 64px vertical padding; the contact terminus gets 80px. Lists are rows divided by 2px Tile Joint rules (experience rows, results), with a 13rem / fluid / auto three-column row from 768px.

The line map is an 8-column grid from 768px (seven stations plus the terminus, equal pitch); below 768px it turns vertical with the tracks running down a 2.5rem rail column and labels to the right. The station preview strip appears only from 768px. Charcoal bands are full-bleed; their content uses the same container. The header is sticky at 64px; on mobile the nav moves to a second scrollable row inside the band.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is tonal and structural: charcoal bands against white, the stone panel against white, and heavy 4px charcoal rules that open sections and the preview strip. Hover states change fill, never lift.

### Named Rules

**The Enamel Rule.** Dark surfaces are full-bleed sign bands, not floating dark cards. Stacked bands are separated by a Sign Dim hairline at 25-30% alpha.

## Shapes

Square corners throughout: the theme radius is 0 and every radius step maps to it, so buttons, panels, plates, tags and the portrait frame are rectangles. The one exception is the route diagram's own vocabulary, which is round by nature: station markers (20px circle, 3px charcoal stroke), interchange capsules (20 by 32px), track bullets (12px dots), the LF roundel, the frontend/backend dots in the portrait caption, and the ring bullets in station highlights.

Tracks are 8px bars (4px on the station strip). A planned or future track is a dashed bar: 10px of colour, 6px gap, along the track's direction. The terminus is a solid charcoal (or white, on charcoal) end bar across both tracks. Small square dots (6px) act as list bullets and inline separators.

## Components

### Buttons

Blocky and certain, like a sign plate you can press.

- **Shape:** Square (0), 2px border, bold label, 20px Phosphor bold icon before the label. Heights 36 / 44 / 48px.
- **Primary (on white):** Charcoal fill, white text. Hover drops the fill to 85%.
- **Light (primary on charcoal):** White fill, charcoal text. Hover 85%.
- **Outline (secondary on white):** White fill, 2px charcoal border; hover inverts to charcoal fill.
- **Inverse (secondary on charcoal):** Transparent, 2px white border, white text; hover inverts to white fill.
- **Focus:** 3px outline offset 3px, charcoal on white, yellow inside charcoal bands.
- **Grouping:** The first action in a contact group (Email) is primary; the rest are secondary.

### Chips (stack tags)

- **Style:** Square, 1px charcoal border at 25% alpha, Worn Ink 0.75rem semibold text. Neutral only; never territory-coloured.

### Cards / Containers

- **Corner Style:** Square (0).
- **Background:** Platform Stone for the one calm panel per view (hero facts, preview strip); white elsewhere.
- **Shadow Strategy:** None (see Elevation).
- **Border:** None on the calm panel; the preview strip and aside blocks open with a charcoal top rule (4px and 2px).
- **Internal Padding:** 20px, 28px from 640px.

### Navigation

- **Style:** Inside the charcoal header band. Labels 0.875rem bold in Sign Dim; hover to white.
- **Active:** White text with a 4px yellow bottom edge, full band height (64px; 48px in the mobile row).
- **Language switch:** A 2px Sign Dim-bordered pair (EN / PT); the selected side is a white plate with charcoal text.
- **Header actions:** Resume download as a small inverse button.

### Line Map (signature)

The home page's route diagram. Two parallel lanes (blue above red, 12px apart) run through equal station cells and draw in from the left once on load (520ms per half, 110ms stagger, expo ease-out, motion-safe only); markers pop in with a 420ms scale. Each station is a link: hover or focus fills its marker and its name plate charcoal and loads the station preview strip below. The last segment to the terminus is dashed (planned); the terminus is a charcoal end bar under a yellow "Your team" plate linking to contact.

### Station Preview

A stone strip with a 4px charcoal top rule, three columns: track bullets plus station name (title, Black) over role and period; the headline result at 1.125rem; an underlined bold arrow link. Announced politely when it changes.

### Page Sign / Station Sign

Every internal page opens with a full-bleed charcoal band holding the headline-size h1. Page signs lead with a short blue-and-red double bar (48 by 8px each); station signs lead with a back link and the station strip: a miniature of the line (4px lanes, white-stroked 16px stops, white end bar) where the current stop is yellow and its name plate is always visible, other plates appearing on hover or focus.

### Section Heading

A 4px charcoal rule directly above a Black heading, 12px gap. This rule is the section opener; nothing sits above it.

## Do's and Don'ts

### Do:

- **Do** keep blue and red for frontend and backend marks only, and show both together whenever a role is full-stack.
- **Do** put the primary action in charcoal on white and white on charcoal; secondary actions outline the same colour.
- **Do** open every internal page with a full-bleed charcoal sign band and a headline-size Black h1.
- **Do** keep corners at 0; reserve round forms for stations, interchanges, track bullets and the roundel.
- **Do** set dates, years and periods in Overpass Mono, and nothing else.
- **Do** gate the draw-in and stop animations behind motion-safe; everything else is a colour transition.

### Don't:

- **Don't** use yellow as a button or CTA fill.
- **Don't** add shadows, gradients or glows; the dashed planned track is the only patterned fill.
- **Don't** round buttons, panels, plates, tags or image frames.
- **Don't** colour skill tags or stack lists by territory, or build a pill cloud.
- **Don't** place a label, kicker or eyebrow above a section heading; the charcoal rule is the opener.
- **Don't** float a dark card on the white platform; dark means a full-bleed sign band.
