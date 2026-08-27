# Noctilucenty — Leon Kelvin Li's portfolio

Independent software-engineering portfolio for [Leon Kelvin Li](https://noctilucenty.github.io/). This is intentionally separate from [Leon Builds](https://leonbuilds.org/), Leon's client-services business.

## Selected work

### Curio

An iPhone app for learning something new without leaving the scroll. Each card is a short, sourced story, and Curio AI lets readers ask questions or keep digging. I built the app, backend, content pipeline, and App Store release.

**Status:** Public App Store release, actively maintained

**Stack:** React, TypeScript, Vite, Capacitor 8, Node/Express, PostgreSQL, OpenAI, ElevenLabs, RevenueCat

**Links:** [App Store](https://apps.apple.com/app/id6781121127) · [trycurio.app](https://trycurio.app/)

### Loqol Disclosures

Loqol helps California home sellers complete the TDS form without staring at a long PDF. It guides them through 82 questions by tap or voice, flags answers that conflict, and fills the form for signature.

**Status:** Public seller-side demo. Email OTP, buyer/agent signing, seller delivery, and overlong-answer handling remain in progress.

**Stack:** Python, FastAPI, React, TypeScript, PostgreSQL, OpenAI Realtime, pypdf, DocuSeal

**Links:** [Demo](https://loqol-tds.onrender.com/agent) · [Source](https://github.com/Noctilucenty/loqol-tds)

### ALLCPR Site Intelligence

ALLCPR needed a faster way to compare possible new locations. I built a bilingual map that screens all 33,772 U.S. ZIP codes using demand, competition, demographics, and the limits of the available data.

**Status:** Live client system

**Stack:** Python, FastAPI, pandas, Leaflet, Census ACS, Google Places

**Link:** [Live system](https://allcpr-site-intelligence.onrender.com/)

### BEASTY PAGES

Glenn wanted local businesses to feel as easy to browse as apps on a phone. I built a mobile-first directory where each business gets an icon, customers can browse menus, and one cart can hold items from several vendors.

**Status:** Public client prototype. Food payment, kitchen operations, and fulfillment remain simulated.

**Stack:** React, TypeScript, Vite, Node/Express, SQLite, Render

**Link:** [beastypages.com](https://beastypages.com/)

### FLORES Boxing Gloves

FLORES has been making boxing gloves in the Bay Area for about a century. I rebuilt the site around the family archive and handmade products, with galleries, a lightbox, and a direct enquiry form.

**Status:** Production client site

**Stack:** HTML, CSS, JavaScript, Squarespace, Render

**Links:** [Production](https://www.floresboxinggloves.com/) · [Current preview](https://flores-boxing-gloves-v2.onrender.com/)

### Leon Builds

Leon Builds is my client-services site. It brings the service pages, quotes, bookings, lead intake, ad tracking, receipts, reviews, and site analytics into one place.

**Status:** Live and separately branded from this portfolio

**Stack:** HTML, CSS, JavaScript, Node/Express, Python, Render

**Links:** [leonbuilds.org](https://leonbuilds.org/) · [Source](https://github.com/Noctilucenty/leon-dev-site)

## More work

The portfolio's **All work** filter includes ATLAS, the ALLCPR iOS app, Curio Automation Platform, Continuity, Scenara, ALLCPR operational agents, 明途, Yelp Review Desk, ONPECY, 安安, Noctilucente, ExpertFlow, Orryin, MIDAS, AIngle, catnap, GX-Ambient, and earlier freelance/Max4Live work. Every card includes its current status or boundary.

## Local development

The site is dependency-free and hosted with GitHub Pages.

```sh
python3 -m http.server 8789
```

Then open `http://127.0.0.1:8789/`.

Run the repository checks with:

```sh
npm test
```
