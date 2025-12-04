# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Infinite Learner AI is a static educational website for Dr. MTD Lakshan's AI-powered learning courses. The site is hosted on Cloudflare Pages and features a component-based architecture with dynamic course content loading.

## Development Commands

### Local Development
```bash
# Serve locally using Wrangler (Cloudflare Pages)
npx wrangler pages dev .

# Alternative: Use any static file server
python -m http.server 8000
# or
npx serve
```

### Deployment
```bash
# Deploy to Cloudflare Pages
npx wrangler pages deploy .
```

## Architecture

### Component-Based Structure
The site uses a lightweight component system without a framework. HTML components are loaded dynamically via `fetch()` and injected into slots.

**Component Loading Flow:**
1. `js/app.js` waits for `DOMContentLoaded`
2. `loadHeaderAndInitMenu()` loads header and initializes hamburger menu
3. `loadPageComponents()` loads page-specific components (hero, course-list, overlay)
4. `loadCourses()` fetches course data and renders dynamically

**Key Pattern:** The header component (`components/header.html`) contains two navigation elements:
- `.header-content` - Inserted into `#header` or `#header-slot`
- `.mobile-overlay-nav-menu` - Appended directly to `<body>` for full-screen overlay

### File Organization
```
├── index.html              # Main landing page
├── about.html              # About Dr. Lakshan
├── contact.html            # Contact page (uses Google Form)
├── components/             # Reusable HTML components
│   ├── header.html         # Navigation (desktop + mobile overlay)
│   ├── hero.html           # Hero section
│   ├── course-list.html    # Course container
│   └── available-soon.html # "Coming soon" overlay
├── data/
│   └── courses.json        # Course content and structure
├── js/
│   └── app.js              # Component loading and interactivity
├── css/
│   └── style.css           # All styles (includes animations)
├── functions/
│   └── contact.js          # Cloudflare Pages Function for contact form
└── wrangler.toml           # Cloudflare Pages configuration
```

### Course Data Structure
Courses are defined in `data/courses.json` with this hierarchy:
- **Course** (e.g., "Medicine") contains multiple **SubCourses**
- **SubCourse** (e.g., "Basic", "Advanced") contains **Topics**
- Each course card displays first 3 topics + count of remaining topics

To add new courses, edit `data/courses.json` following the existing structure.

### Mobile Navigation
The hamburger menu implementation splits header navigation into:
1. Desktop navigation (`.desktop-nav-menu`) - visible on larger screens
2. Mobile overlay (`.mobile-overlay-nav-menu`) - full-screen overlay with close button

The overlay is appended to `<body>` (not inside header) to achieve full-screen positioning. Menu state is controlled via `.active` class and `body.menu-open` class.

## Cloudflare Pages Functions

### Contact Form Handler
`functions/contact.js` is a Cloudflare Pages Function that:
- Accepts POST requests (JSON or form-encoded)
- Validates name, email, and message
- Forwards to webhook defined in `CONTACT_WEBHOOK_URL` environment variable
- Returns JSON responses

**Environment Variable Required:**
- `CONTACT_WEBHOOK_URL` - Set in Cloudflare Pages dashboard (e.g., Discord/Slack webhook)

**Note:** Contact page currently uses an external Google Form. The `contact.js` function is available for future integration if switching to a native form.

## Styling

The site uses a glassmorphism design with:
- CSS custom properties (`:root`) for theme colors
- Gradient animations (`gradientBG`, `gorgeous-animation`)
- Fixed header with `padding-top: 82px` on body
- Global loader (`.spinner`) shown on initial page load

## Common Tasks

### Adding a New Page
1. Create HTML file in root (e.g., `new-page.html`)
2. Include standard structure with `#header-slot` or `#header`
3. Load `js/app.js` at end of body
4. Add link to `components/header.html` navigation menus

### Modifying Courses
Edit `data/courses.json` - changes appear immediately on reload. No JS changes needed.

### Updating Contact Information
- Email/phone in `contact.html`
- About content in `about.html`
- Google Form link in `contact.html` (line 53)

### Working with Styles
All styles are in `css/style.css`. The file uses:
- BEM-style naming for some components
- CSS custom properties for theming
- Mobile-first responsive design with media queries
