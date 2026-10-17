# Anouar Laraje - Portfolio

A modern, responsive, dark-mode personal portfolio for **Anouar Laraje**, Full-Stack Web
Developer. Built with **React (Vite)** and **Tailwind CSS**.

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
- Space Grotesk from Google Fonts
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
      Reveal.jsx                  <- fade-in-on-scroll wrapper
    data/
      personal.js                 <- name, contact, social links, bio, stats
      nav.js                      <- navbar links
      projects.js                 <- the 5 projects
      skills.js                   <- skill groups and languages
    hooks/
      useActiveSection.js         <- highlights the current navbar link
      useLockBodyScroll.js        <- locks scroll while the mobile menu is open
```

## Editing your content

All text lives in `src/data/`:

- `personal.js` - name, title, badge, bio, stats, story, internship text, education, contact
  details and social links. Change `github` and `linkedin` from `#` to your real profiles.
- `projects.js` - the project cards. Add or remove objects; fill in `github` and `live`.
- `skills.js` - the four skill columns and the languages list.
- `nav.js` - the navbar anchors (each `href` must match a section `id` in `App.jsx`).

To swap the hero photo, drop a file in `public/assets/` and update `photo` in
`personal.js`. The contact form has no server: on a valid submit it opens the visitor's
email app with the message pre-filled to `anwarlaraje3@gmail.com`. To use a real form
backend, replace the `handleSubmit` logic in `components/Contact.jsx`."# portfolio" 
