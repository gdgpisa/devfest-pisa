# Website DevFest Pisa 2026

[![Netlify Status](https://api.netlify.com/api/v1/badges/996efb3d-5136-4b7f-af08-2fd99ddc40ef/deploy-status)](https://app.netlify.com/sites/gdgpisa-devfest-2025/deploys)

The official website for **DevFest Pisa 2026** — a community-driven technology event organized by [GDG Pisa](https://gdg.community.dev/gdg-pisa/) (Google Developer Groups). Scheduled for **April 18, 2026** at MACC (Meeting Art Craft Center) in Pisa, Italy.

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

Sponsor copy remains right-aligned inside the lower curve. Mobile typography and spacing respond to viewport width and small-viewport height, while the blue row retains enough height for its content. Wider screens retain the original unmasked tower, white introduction panel, and desktop tile arrangement. The desktop hero prefers an 8:5 aspect ratio, with its height capped at `100vh` minus the 72px header; once capped, the full-width grid and spiral can stretch. Mobile has no maximum-height cap. Secondary hover/focus copy can scroll within its card on short screens. Layout styles live in `src/components/astro/FibTiling.astro`; hero typography, tower positioning, and perspective geometry live in `src/pages/index.astro`.

### Navigation

`src/components/astro/Header.astro` pairs `src/assets/devfest-logo.svg` with the DevFest Pisa 2027 name in a full-width, fixed-height header. Desktop shows inline links; at widths up to 760px, a keyboard-accessible hamburger menu contains Location, Team, and Telegram. The menu overlays the hero without changing its height. Escape closes it and returns focus to the toggle; outside clicks, link activation, and switching to desktop also close it.

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
