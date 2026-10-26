# Scotia One

A mobile-first web prototype of **Scotia One**, a concept feature inside the Scotiabank app that uses banking transaction data to surface investable surplus ("Money Moments") and keeps the user's investment risk profile up to date based on their actual financial behaviour (the "Living Risk Profile").

Built as a demo for [case]Hacks 2026. All data is mocked on the client. There is no backend, no real banking data and no real trading.

## Features

- **Home dashboard** (`/`): balances, banking, credit card and investment sections, a "My updates" tab and a Scotia One alert that leads into the Money Moment flow.
- **Open a TFSA** (`/open-tfsa`): a short questionnaire (experience, time horizon, risk) plus an optional Smart Trading account, shown before the first Money Moment if the user doesn't have a TFSA yet.
- **Money Moment detail** (`/moment`): spending summary, an adjustable contribution amount and a TFSA contribution room check.
- **Confirmation** (`/confirm`): success screen with confetti and animated balance count-up. Confirming moves the amount from chequing to the TFSA in app state.
- **Advice+** (`/advice`): insight cards plus entry points to Scotia Smart Investor (`/smart-investor`) and Scotia Smart Trading (`/smart-trading`).
- **Smart Trading** (`/smart-trading`): simulated portfolio, watchlist, stock search and detail charts, buy/sell orders, activity and account tabs, all using hard-coded sample stock data.
- **30-day forecast** (`/forecast`): expected money in/out and upcoming transactions.
- **Moments history** (`/history`): timeline of detected Money Moments.
- **Living Risk Profile** (`/risk-profile`): behaviour signals and recommended profile changes.
- **Portfolio** (`/portfolio`): TFSA growth chart and holdings. No in-app link points here, so open it by URL.
- **Lock-screen notification demo** (`/notification` → `/splash`): a simulated phone notification that opens the app through a splash screen into the Money Moment or TFSA flow.

The app always renders inside a fixed 430×920 phone frame, whatever the browser size.

## Tech stack

- React 19 + Vite 8
- React Router 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animations)
- Recharts (charts)
- Lucide React (icons)
- ESLint 10 (flat config)

## Project structure

```
index.html              Vite entry HTML
public/                 Static assets (favicon, Scotiabank icon) and Netlify `_redirects`
src/
  main.jsx              React root
  App.jsx               Phone frame and routing (full-screen routes vs. AppShell routes)
  index.css             Tailwind import, theme colours and custom styles
  context/              AppContext: balances, TFSA/trading state, moment history, buy/sell actions
  data/mockData.js      Mock user, accounts, Money Moment, history, portfolio and risk-profile data
  hooks/useBalances.js  useCountUp animation hook
  components/layout/    AppShell, StatusBar, BottomNav
  components/cards/     Home dashboard sections and alerts
  screens/              One component per route
vercel.json             SPA rewrite for Vercel
```

All state lives in React context and resets on page reload.

## Prerequisites

- Node.js 20.19+ or 22.12+ (required by Vite 8)
- npm

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server                |
| `npm run build`   | Production build to `dist/`              |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint                               |

There are no tests.

## Environment variables

None. The app has no configuration and doesn't call any external APIs.

## Deployment

It's a static SPA, so deploy the `dist/` output of `npm run build`. Client-side routing fallbacks are already set up for both:

- **Vercel**: `vercel.json` rewrites all paths to `/index.html`.
- **Netlify**: `public/_redirects` (`/* /index.html 200`).

## Demo flow

1. Open Home and tap the Scotia One alert.
2. Open a TFSA by answering the questionnaire. You'll return to Home.
3. Tap the alert again to review the Money Moment, then adjust and confirm the $25 contribution.
4. Watch the balances update on the confirmation screen.
5. Explore Advice+ (Smart Investor and Smart Trading), History and Risk from the bottom nav.

## Disclaimer

This was built purely as a demo for [case]Hacks 2026. It is not a real product and should not be treated as one.
