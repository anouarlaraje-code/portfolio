# Anouar Laraje - Portfolio

A modern, responsive, dark/light-mode personal portfolio for **Anouar Laraje**, Full-Stack
Web Developer, in **English, French and Arabic**. Built with **React (Vite)** and
**Tailwind CSS**.

## Requirements

- Node.js 18+ (node -v)
- npm 9+

## Install and run

```bash
cd portfolio
npm install
npm run dev      # dev server, http://localhost:5173
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

## What is inside

- Single page with smooth-scroll navbar anchors: Home, About, Skills, Projects, Contact
- Dark theme (#0f1720 / #1a2230) with one blue accent (#1a63f0)
- Light mode: switch in the navbar (sun/moon). The choice is saved in
  localStorage and the system preference is used on the first visit
- Colours are theme tokens (`bg`, `surface`, `line`, `heading`, `body`, `muted`, `accent`)
  defined as CSS variables in `src/index.css` - both themes edit only that one file
- Three languages: English, French and Arabic - switch with the globe button in the
  navbar. The choice is saved in localStorage, and first-time visitors get the language
  matching their browser (fr / ar / en)
- Arabic switches the whole layout to RTL (`html[dir="rtl"]` is set automatically),
  arrows flip, and letter-spacing is disabled so the Arabic script stays properly joined
- Space Grotesk + IBM Plex Sans Arabic from Google Fonts (browsers pick per glyph:
  Latin in Space Grotesk, Arabic in IBM Plex Sans Arabic)
- Fade-in-on-scroll animations (IntersectionObserver + CSS, respects prefers-reduced-motion)
- Fully responsive: hamburger menu on mobile, grids step 1 -> 2 -> 4 columns
- Contact form with front-end validation (no backend needed)
- lucide-react icons, semantic HTML, alt text and aria-labels throughout

## File tree

```
portfolio/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  public/
    assets/
      favicon.svg
      profile.jpeg                 <- your photo
      story.svg
      project-*.svg                <- 5 project previews
  src/
    App.jsx
    index.css
    main.jsx
    components/
      Navbar.jsx  Hero.jsx  About.jsx  Story.jsx  Internship.jsx
      Skills.jsx  Education.jsx  Projects.jsx  Contact.jsx  Footer.jsx
      LanguageSwitcher.jsx      <- globe menu (English / Français / العربية)
      Reveal.jsx                <- fade-in-on-scroll wrapper
    data/
      personal.js               <- name, contact details, social links, photo
      nav.js                    <- navbar links
      projects.js               <- the 5 projects (ids, tags, image, urls)
      skills.js                 <- skill groups and languages
    hooks/
      useActiveSection.js       <- highlights the current navbar link
      useLockBodyScroll.js      <- locks scroll while the mobile menu is open
      useTheme.js               <- light/dark state + localStorage
    i18n/
      en.js fr.js ar.js         <- every user-facing string, one file per language
      LanguageContext.jsx       <- language provider + t() helper
```

## Editing your content

Every user-facing sentence lives in `src/i18n/` - one file per language, all with the
same keys:

- `en.js` / `fr.js` / `ar.js` - nav labels, hero text, bio, stats, story, internship
  note, skill group titles, education, project titles + descriptions, contact form
  labels/validation messages, footer. To add a language, copy `en.js`, translate it, and
  register it in `LanguageContext.jsx` (the `LANGUAGES` list).
- Placeholders like `{title}` or `{email}` in a string are filled in by `t('key', { title })`.

Language-neutral data stays in `src/data/`:

- `personal.js` - name, email, phone, social URLs, photo path, education entry. Change
  `github` and `linkedin` from `#` to your real profiles.
- `projects.js` - ids, tech tags, preview image and `github` / `live` URLs of the 5
  projects. Add or remove objects freely; the titles/descriptions are in `src/i18n/`.
- `skills.js` - the four skill columns (group ids map to `skills.groups.*` in the
  translations) and the languages list.
- `nav.js` - the navbar anchors (each `href` must match a section `id` in `App.jsx`, and
  each `id` maps to `nav.*` in the translations).

To swap the hero photo, drop a file in `public/assets/` and update `photo` in
`personal.js`. The contact form has no server: on a valid submit it opens the visitor's
email app with the message pre-filled to `anwarlaraje3@gmail.com`. To use a real form
backend, replace the `handleSubmit` logic in `components/Contact.jsx`.
