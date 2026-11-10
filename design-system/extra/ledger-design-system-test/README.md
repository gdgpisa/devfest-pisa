DevFest Ledger is a **test** design system for DevFest Pisa 2027 in the style of a financial data brand: neutral first, numbers forward, colour used to reveal order rather than decorate. It keeps the official DevFest logo and the four Google colours, but treats them the way an analytics product would.

## Five loud moves

Ledger is sober by default and loud on purpose. Each page uses these moves, each one at most once, and everything around them stays quiet.

1. **The chart is the hero.** Pages open with a real chart at full width (the Fibonacci sequence, the schedule, the editions), bars in the Google 50 stops, bleeding off the edge.
2. **The ticker.** A dark band in `neutral-90` that runs session times and tracks like a market feed: `AI 09:30 ▲ MAIN HALL`. Real data only.
3. **One giant number.** A single `display-144` figure per page: the price, the year, a start time.
4. **Ramp bands.** Section dividers made of the nine stops of one ramp, from 10 to 90, side by side. They show the system's colour logic as decoration.
5. **The brand moment.** One full-bleed field in `brand` yellow, for the call to action that matters most (tickets or the Call for Speakers).

## Principles

- **Useful.** Every element informs or equips. If a shape carries no information, remove it.
- **Logical.** Colour and size reveal hierarchy and meaning. The most important number is the biggest thing on the page.
- **Precise.** Exact numbers, aligned figures, stated sources. Precision is how a technical audience learns to trust us.
- **Beautiful.** Restraint makes the one bright moment land. Whitespace is a feature.
- **Human.** Speak frankly and kindly. A conference is people, not a dashboard.

## Content fundamentals

- Voice: frank, warm, specific. "Talks start at 09:30. Coffee is at 08:30." beats "Join us for an amazing day".
- Sentence case everywhere. Acronyms (GDG, AI, CFP, WTM) use `lowcaps-12` inside running text so they do not shout.
- Always give the number and the unit: "45 min", "4 min walk", "0 €". Times in 24h format.
- Every chart has a title that states the finding and a source line in `caption-12`.
- No emoji, no exclamation marks.

## Colour

- **Neutral first.** Pages are `surface` (white) with `text` (`neutral-80`). Use `neutral-80` rather than black for text: it reads softer. `text-secondary` (`neutral-60`) for labels.
- **One brand moment.** `brand` (DevFest yellow) appears only in the logo and in one branded moment per composition, such as the hero band. Never in UI controls or text.
- **Ramps, not swatches.** Each Google colour is a ramp from 10 (lightest) to 90 (darkest), with the Google core value at 50. For UI and text use the 60 stop and darker; the 50 stop is for fills and large marks.
- **Families.** Choose colours by how many the data needs:
  - one family (a single ramp, e.g. `blue-30` to `blue-80`) for most charts and quiet illustrations;
  - two colours (`blue-60` + `yellow-50`) for binary comparisons;
  - three or four (the Google set) only for categorical data with that many series, or for the brand moment.
- **Pairings.** Do not put `red-*` next to `green-*` as the only difference between two series: many people cannot tell them apart. Pair `blue` with `yellow` instead, and add labels.
- **Contrast.** Check every pair: stops with the same number do not have the same contrast. `yellow-50` is never text. Text on tints uses the 70 or 80 stop of the same hue.
- No gradients.

## Type

- Google Sans Flex for everything, Google Sans Code for code. Medium (500) for display and titles, regular (400) for text. Bold is not used.
- Figures: **tabular** (`font-variant-numeric: tabular-nums`) in tables, agendas and stats so columns align; **proportional** in running text.
- Large type is set tight (`display-64`, `headline-40` have negative tracking); small type is left at default.

## Layout and shape

- 4px grid, `space-*` tokens. Generous margins: `space-64` between sections on desktop.
- 12-column grid, 1280px max width. Text columns stay under 68 characters.
- Separation by **hairlines** (`border`, 1px) and whitespace, not by shadows or heavy cards. No drop shadows.
- Small radii: `radius-4` on controls, `radius-8` on cards, `radius-0` on bars and tables.

## Data visualisation

- Charts are the hero imagery of this system. Prefer a bar chart with direct labels over a pie or donut.
- Gridlines in `border`, axis labels in `caption-12` `text-secondary`, no chart borders, no 3D, no shadows.
- Highlight one series in a strong stop and keep the rest in light stops of the same ramp.
- State the source under every chart.

## Iconography

- Material Symbols Rounded, weight 400, 20px, in `text` or `text-secondary`. No emoji.

## Logos

- Use the official DevFest lockups in **Logos** unchanged. The location pill must read "Pisa" (make it from the kit's editable file).
