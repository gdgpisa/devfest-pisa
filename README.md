# Website DevFest Pisa 

[![Netlify Status](https://api.netlify.com/api/v1/badges/996efb3d-5136-4b7f-af08-2fd99ddc40ef/deploy-status)](https://app.netlify.com/sites/gdgpisa-devfest-2025/deploys)

The official website for **DevFest Pisa** — a community-driven technology event organized by [GDG Pisa](https://gdg.community.dev/gdg-pisa/) (Google Developer Groups).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Technology Stack

- **Framework**: [Astro 5](https://astro.build) - Static site generation with Islands Architecture

- **UI Components**: [Preact 10](https://preactjs.com) via `@astrojs/preact` integration for interactive sections

- **Language**: [TypeScript](https://www.typescriptlang.org) with strict type checking

- **Styling**: Cascading CSS with CSS layers and custom design system

- **Icons**: `astro-icon` with Material Symbols and Material Design Icons

- **(Preferred) Package Manager**: [Bun](https://bun.sh) or [npm](https://www.npmjs.com)

- **Deployment**: [Netlify](https://netlify.com) with continuous deployment

## Project Structure

```
src/
├── assets/                   # Content & data files
│   ├── data-*/               # Structured data (sponsors, supporters, partners)
│   ├── gallery/              # Event photography with responsive grid naming
│   ├── news/                 # Blog posts and announcements
│   ├── speakers/             # Speaker data (Sessionize JSON exports + sessions)
│   ├── team/                 # Team member photos
│   ├── icons/                # SVG icon assets
│   └── fonts/                # Custom typography files
├── components/
│   ├── astro/                # Server-rendered components (Header, Footer, Gallery)
│   └── preact/               # Interactive components (Schedule filtering, icons)
├── layouts/
│   └── Base.astro            # Root layout with meta tags and global styles
├── lib/
│   ├── astro/                # Server utilities (Sessionize parsing, data transformations)
│   └── client/               # Browser utilities and helpers
├── pages/                     # File-based routing
└── styles/                    # Global styles and component CSS
```

### Data Management

**Speaker & Talk Data:**

- Source: Integrated with [Sessionize](https://sessionize.com) conference management platform

- Files: `src/assets/sessionize/sessions.json` and `speakers.json`

- Processing: `src/lib/astro/sessionize.ts` transforms raw exports into typed Speaker and Talk objects

- Features: Speaker deduplication, GDE (Google Developer Expert) badge detection, room/language/level categorization

**Static Content:**

- Simple Markdown-based can be created directly in `src/pages/` using the `MarkdownPage.astro` layout

- Blog posts and news announcements in `src/assets/news/`

- Team photos automatically discovered from `src/assets/team/` directory

- Sponsor/partner data in modular TypeScript files with image imports

**Social preview:** `src/layouts/Base.astro` sets the Open Graph image and its dimensions. Netlify preview builds use `DEPLOY_PRIME_URL` for the image URL without changing the production canonical URL. When replacing the artwork in `public/`, use a new filename to avoid stale cached previews and update the declared dimensions to match.

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Access at http://localhost:4321

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Homepage hero

At widths up to 760px, the 3rem header and hero fill the dynamic viewport (`100dvh`). The date, introduction, and speaker call share one blue tile, with no spiral segment. The lower block is a 3:2 Fibonacci rectangle sized from its actual width: one 2×2 yellow square and stacked 1×1 green/red squares. Its height is two-thirds of its width, independent of viewport aspect ratio. The original mirrored three-arc path, endpoint, and tile colors are preserved; the arcs remain circular and fully opaque. On short screens the hero grows and scrolls rather than clipping text or flattening the squares. Soft blue text shadows separate the white lettering from the artwork; these halos do not apply to the dark hover/focus reveals.

The mobile blue panel matches the supplied artwork reference: brand blue `#1f62ff`, deep-blue pavement and solid tower/base fill `#184bc1`, and pale-blue tower/base outlines `#5987ff`. An SVG source-alpha filter colors the tower lines directly rather than blending white over the background. The two-point-perspective pavement preserves the asset's base corners and uses an off-panel horizon. A silhouette mask removes the original parallel-sided base and keeps the pavement behind the tower body. The tower retains its 80%-height, 70%-width contain-fit frame and slight right-edge crop. Floor tiles and seams are baked into two SVG paths at build time, without client-side geometry or per-tile elements.

The tower fill and image mask share the original SVG's tower-only contour, including individual column feet. Neither adds an expanding stroke, so the fill follows the drawing without a blue rim around the feet.

Sponsor copy remains right-aligned inside the lower curve. Mobile typography and spacing respond to viewport width and small-viewport height, while the blue row retains enough height for its content. Wider screens retain the original unmasked tower, white introduction panel, and desktop tile arrangement. The desktop hero prefers an 8:5 aspect ratio, with its height capped at `100vh` minus the 72px header on viewports taller than 600px; once capped, the full-width grid and spiral can stretch. At desktop widths above 760px and viewport heights of 600px or less, the cap is removed so the hero keeps its full 8:5 height and its text has room to remain readable. Mobile has no maximum-height cap. Secondary hover/focus copy can scroll within its card on short screens. Layout styles live in `src/components/astro/FibTiling.astro`; hero typography, tower positioning, and perspective geometry live in `src/pages/index.astro`.

On desktop, the tower is bottom-anchored and horizontally centered in the white tile. Its height is `calc(84.5% - 6px)` of that tile, with automatic width preserving the SVG aspect ratio. This fits its outline just below the spiral, including the spiral stroke, in both capped and uncapped layouts.

On page load, a CSS-only entrance lifts the tower into place over 1.8 seconds after a 120ms delay. On mobile, the pavement stays fixed: a stationary SVG clip follows the platform's front two edges, hiding the tower below the plane while it rises through the darkened square. The front rim stays above the moving artwork, and the opening's shading fades back to the original tile color as the tower settles. `prefers-reduced-motion: reduce` skips both animations and shows the completed composition immediately.

The desktop spiral sits above tile backgrounds and below text. Curtain and flip faces reuse cropped views of the same path to preserve that order during hover and keyboard-focus reveals.

Desktop and mobile spirals draw from the screen-left endpoint along the curve to the other endpoint, using the tower's duration, easing, and delay. An SVG mask animates the exact quarter-circle arc lengths while the visible stroke stays solid and 3px wide. Cropped desktop tile faces share the same path and progress, and the mirrored mobile path also starts on screen left. Reduced-motion users see the complete spiral immediately.

Hero tile hover reveals and arrow motion require `(hover: hover) and (pointer: fine)`. Touch taps navigate directly to the speakers or sponsors section without opening the curtain or flipping the tile. Keyboard-focus reveals remain available.

### Navigation

`src/components/astro/Header.astro` pairs `src/assets/devfest-logo.svg` with the DevFest Pisa 2027 name in a full-width, fixed-height header. Desktop shows inline links; at widths up to 760px, a keyboard-accessible hamburger menu contains Team and Links (https://links.gdgpisa.it/). The menu overlays the hero without changing its height and locks background scrolling while open. Escape closes it and returns focus to the toggle; outside clicks, link activation, and switching to desktop also close it.

The header scrolls with the page rather than becoming a floating bar. Vertical page overscroll is disabled at desktop widths (761px and above). Mobile keeps native overscroll and pull-to-refresh, as on `main`; anchor navigation uses native scrolling.

The footer's 21px color bar and mobile page backdrop share `--footer-bar-background`, preserving the six Fibonacci-width segments (1:1:2:3:5:8). The opaque body covers a fixed backdrop whose lower half matches the bar; the upper half keeps the neutral surface color for pull-to-refresh. This CSS-only treatment adds no scrollable space or scroll listeners and does not disable native bounce/stretch.

### Path Aliases

The project uses convenient path aliases configured in `tsconfig.json` and `astro.config.mjs`:

- `@/*` maps to `src/*` for cleaner imports

### Key Configuration Files

- `astro.config.mjs` - Astro framework configuration with integrations

- `tsconfig.json` - TypeScript configuration with strict mode

- `package.json` - Project dependencies and npm scripts

- `public/` - Static assets and service worker

- `src/env.d.ts` - TypeScript declarations for custom modules and assets

## Deployment

The site is automatically deployed to [Netlify](https://app.netlify.com/sites/gdgpisa-devfest-2025) whenever changes are pushed to the main branch.

**Deployment Configuration:**

- Build command: `npm run build`

- Publish directory: `./dist/`

- Custom headers in `public/_headers`

- Redirect rules in `public/_redirects`
