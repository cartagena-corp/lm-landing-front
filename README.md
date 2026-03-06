# LA MURALLA - Landing Page

Welcome to the official repository for the **LA MURALLA** landing page. This project is built using [Astro](https://astro.build/), providing a fast, modern, and SEO-optimized web experience. LA MURALLA is presented as a rapid, agile alternative to Jira for project management.

## ✨ Key Features

- **Blazing Fast Performance**: Built with Astro for maximum speed and zero Javascript by default.
- **Internationalization (i18n)**: Out-of-the-box support for both Spanish (`/es`) and English (`/en`).
- **Custom Interactive Booking Calendar**: Features a comprehensive demo scheduling system with real-time API integration to book meetings via Google Meet or Microsoft Teams.
- **SEO Optimized**: Includes Open Graph tags, Twitter cards, Canonical URLs, and JSON-LD structured data.
- **Pure CSS Styling**: No bulky frameworks, just clean, maintainable global CSS and native scoped Astro styles.
- **Responsive Components**: Pre-built sections including Hero, Stats, Features, Workflow, Testimonials, CTA, and Footer.

## 🚀 Project Structure

The repository follows standard Astro architecture:

```text
/
├── public/                 # Static assets (favicons, images, etc.)
├── src/
│   ├── components/         # Reusable Astro components (Hero, Calendar, Navbar, etc.)
│   ├── config/             # Project configurations (API endpoints, etc.)
│   ├── i18n/               # Translation files and utilities (`ui.ts`, `utils.ts`)
│   ├── layouts/            # Global layouts (e.g., `Layout.astro` with SEO metadata)
│   ├── pages/              # File-based routing (e.g., `[lang]/index.astro`)
│   └── styles/             # Global CSS files (`global.css`)
├── .env                    # Environment configurations
├── astro.config.mjs        # Astro framework configuration
└── package.json            # Project dependencies and script commands
```

## ⚙️ Environment Configuration

The application relies on a `.env` file for configuring the booking calendar and API endpoints. Create a `.env` file in the root based on this structure:

```env
# Enable/Disable booking platforms
PUBLIC_ENABLE_GOOGLE_MEET=true
PUBLIC_ENABLE_MICROSOFT_TEAMS=false

# Booking Timezone
PUBLIC_SCHEDULE_TIMEZONE=America/Bogota

# Backend API Configuration
PUBLIC_API_URL=http://localhost:8080/api
```

## 🧞 Local Development

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`                 | Starts local dev server at `localhost:4321`      |
| `bun build`               | Builds your production site to `./dist/`          |
| `bun preview`             | Previews your build locally, before deploying     |
| `bun astro ...`           | Runs CLI commands like `astro add`, `astro check` |

## 📅 Booking System Architecture

The `Calendar.astro` component handles demo scheduling by communicating with a backend REST API.
- **`GET /availability`**: Fetches available time slots for a given month and timezone.
- **`POST /sessions`**: Submits user booking details and creates a calendar event, falling back to Google Meet/Teams based on `.env` configuration.

## 🌐 Adding Translations

To add or modify translations, edit the `src/i18n/ui.ts` file. Ensure both `es` (Spanish, default) and `en` (English) keys are kept in sync to maintain a seamless localized experience.
