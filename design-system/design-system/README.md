DevFest Pisa 2027 sits inside the global DevFest brand kit and adds one idea of its own: **Liber Abaci**. In 1202 Leonardo Pisano, known as Fibonacci, wrote in Pisa the book that brought Hindu-Arabic numerals to Europe. This system treats numbers as the main graphic material and the Fibonacci tiling, with its spiral, as the signature shape. The DevFest letters, the braces and Google Sans come from the official kit, so the event reads as DevFest first and as Pisa second.

## Concept in five rules

1. **The golden rectangle opens everything.** Every main surface (site hero, poster, social post, opening slide) starts with the Fibonacci tiling: squares of 5, 3, 2, 1 and 1 units in an 8 × 5 rectangle, crossed by the spiral. On the site it runs edge to edge.
2. **Content sits where the spiral turns.** Each quarter circle turns around one corner of its square, and the line never passes there. Put text in that corner: bottom right of the 5, bottom left of the 3, top left of the 2. Nothing else touches the line.
3. **Numbers are the image.** The year, the price, session times and audience figures are set big and bold in `numeral-*` styles. One `numeral-144` per layout.
4. **Rubric red marks the one thing.** As in medieval manuscripts, `red` highlights a single number per layout: the year, the session happening now.
5. **Two colour fields per page, no more.** Pages are `surface` grey with `ink` borders. At most two full-bleed colour fields: `blue` for the Call for Speakers, `yellow` for tickets or sponsors. Everything else stays quiet so those two land.

## Content fundamentals

- **Language:** English on the site, the call boxes and social headlines. Italian versions of the call copy are welcome on Italian channels; never mix both in one sentence.
- **Voice:** direct, friendly, a little nerdy. Speak to one person ("Got a talk in mind?"). Prefer a fact to an adjective: "500+ attendees, 30+ speakers" beats "an amazing day".
- **Casing:** sentence case for titles. Uppercase only in `label` eyebrows.
- **Section titles are plain words:** Agenda, Speakers, Venue, FAQ. Do not number sections with the Fibonacci sequence; it makes navigation hard to follow.
- **Numbers:** always digits ("3 workshops"). Times in 24h format (`09:30`). Audience figures carry their source ("DevFest Pisa 2026, as published on the event site").
- **No emoji.** Arrows (`→`, `↓`) are the only symbols in calls to action.
- **Call copy (approved):**
  - Call for Speakers: "Got a talk in mind? The Call for Papers is open. Send us your proposal." Action: "Submit on Sessionize".
  - Call for Sponsors: "Would your company like to take part, or have a table at the event? Get in touch." Action: "Get in touch".
- **Motto, not chosen yet.** Two candidates: **From abacus to AI.** (hero, press, opening slide) and **1, 1, 2, 3, 5, DevFest.** (stickers, social teasers). The site mockups use the first.

## Visual foundations

### Colour
- The palette is the Google set made **vivid**: `blue` #1f62ff, `green` #00c853, `yellow` #ffbf00, `red` #ff3d2e. These replace the kit's standard values everywhere except inside the official logo files.
- Ground is `surface` (#f0f0f0, the kit's Off White). Text and every border are `ink`; secondary text is `ink-muted`.
- Text on fills: `on-blue` (white) on `blue`; `on-pastel` (ink) on `yellow`, `green`, `red` and pastels. Never put `ink-muted` on `yellow`: it drops below 4.5:1; use `ink`.
- In the hero tiling the colours are fixed: 3-square `blue` (Call for Speakers or the year), 2-square `yellow` (Call for Sponsors or the price), 1-squares `green` and `red`, 5-square `surface-raised`.
- For small coloured text use `blue-text` (links) and `red-text` (an annotation).
- Track colours: Web = `blue`, Mobile = `green`, Cloud = `yellow`, AI = `red`, each with its pastel for chips. Every chip carries the track name, so colour is never the only signal.
- The dark theme is for ledwall and evening slides only; the site is light.

### Type
- **Google Sans Flex** (`sans`) for everything: the open release of Google Sans, so it matches the kit. **Google Sans Code** (`mono`) for code and emails.
- **Numbers** use the same face at weight 700, tight tracking and tabular figures (`numeral-*`). No second display face.
- Headlines are bold with negative tracking (-0.04em at hero size). The hero headline sits right-aligned in the bottom-right of the 5-square.
- Scale follows Fibonacci: 13, 21, 34, 55, 89, 144; `body` at 16px is the one exception.

### Layout
- Content width 1280px with `space-55` side padding; the hero tiling and the colour fields run full bleed.
- Section rhythm: `space-89` above and below each section; `space-34` to `space-55` inside.
- Use StatStrips for any row of figures (audience numbers, distances to the venue): the same bordered strip reused, never cards.
- The agenda is a list of AgendaRows separated by `stroke-2` lines, not cards.
- On phones the tiling stacks into a column of full-width blocks and the spiral is hidden.

### Shape, borders, shadows
- Square by default. `radius-pill` only for buttons, track chips and the PISA pill. `radius-0` everywhere else.
- Borders: `stroke-3` for structure (hero, strips, colour fields), `stroke-2` for seams and lines. No shadows, gradients, glow or blur.

### Motion and interaction
- **CallBoxes are clickable squares that reveal their copy on hover or keyboard focus.** Two reveals are approved: the **curtain** (a `reveal` panel slides up, used for the Call for Speakers) and the **flip** (the square turns over, used for the Call for Sponsors). Duration 450 to 600ms, ease-out. The visible face always names the call and shows an arrow, so touch users who cannot hover still understand where it leads; a tap goes straight to the section.
- Arrows nudge 5px right on hover. Nothing scales or lifts.
- Respect `prefers-reduced-motion`: the reveal appears without movement.
- Focus: 3px solid `focus` ring on every interactive element.

## Logos and lockups

- The DevFest letters and braces always come from the official files in **Logos**. Never redraw them or set "DevFest" in type.
- **LocationLockup** (the logo): the official location lockup, "DevFest" in the yellow braces with the white pill underneath reading "Pisa". It is the main mark everywhere: site header, posters, badges, slides. No edition-specific redesign of the logo.
- **Badge**: the same official braces lockup set inside the golden rectangle, with "Pisa" in the blue 3-square and "2027" in the yellow 2-square. A secondary format for social avatars, stickers and slide corners, never a replacement for the logo.
- The year files in the kit read 2026; swap them for the 2027 files when Google publishes them.
- The Leaning Tower is not part of the system: no tower drawings and no stacked-square marks.
- Keep clear space around every lockup at least the height of the "D".

## Iconography and glyphs

- The kit's sticker glyphs (Glyphs group) are not used on the site or in layouts. They may appear only on merch or social posts, composed into a true equation such as `2 + 3 = 5`, never scattered.
- For UI icons, use Material Symbols Rounded at weight 500 in `ink`. No emoji.

## Do and don't

- Do open with the full-width tiling and keep text in the spiral's turning corners. Don't let text, logos or photos cross the spiral.
- Do use one `red` number per layout. Don't use black text on red for a call to action; calls use `blue` + `on-blue` or `yellow` + `ink`.
- Do keep two colour fields per page at most. Don't paint every section.
- Do title sections in plain words. Don't number them with the sequence.
- Don't use purple, gradients, glassmorphism, stock 3D illustrations or the Leaning Tower.
