# Anouar Laraje - Portfolio

A modern, responsive personal portfolio for **Anouar Laraje**, Full-Stack Web Developer -
in **English, French and Arabic** (with RTL for Arabic) and **light/dark mode**.

Built with **plain HTML5, CSS3, vanilla JavaScript and Bootstrap 5 (via CDN)**.
No Next.js, no Node.js, no build step, no API keys - it is a fully static site.

## Run it

Just open `index.html` in your browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8000
# or simply double-click index.html
```

## What is inside

- Single page with smooth-scroll navbar: Home, About, Skills, Projects, Contact
- Bootstrap 5.3 + Bootstrap Icons, loaded from the CDN (grid, navbar collapse, dropdowns, forms)
- Custom design tokens on `:root` - dark theme (#0f1720 / #1a2230) and light mode,
  switched from the navbar; the choice is saved in localStorage
- Three languages with a globe switcher (English / Français / العربية). First-time
  visitors get their browser language; Arabic flips the layout to **RTL** and swaps
  Bootstrap for its official RTL stylesheet
- **Web Security** section (HTTPS/TLS, XSS, CSRF, SQL injection, secure authentication,
  input validation, secrets out of git)
- Real GitHub projects with "View on GitHub" links, real LinkedIn/GitHub social buttons
- Contact form via **Netlify Forms** (honeypot + client-side validation + success/error
  messages) - no backend of our own
- Fade-in-on-scroll animations (IntersectionObserver, respects `prefers-reduced-motion`)
- Accessible: skip link, labels, alt texts, aria attributes, visible focus

## File tree

```
portfolio/
  index.html               <- the whole page (semantic sections + data-i18n keys)
  css/
    style.css              <- design tokens, dark/light themes, all custom styles
  js/
    data.js                <- personal info, links, skills, security items, projects
    i18n.js                <- translation core: t(), setLang(), RTL handling
    main.js                <- theme, language, navbar, animations, form
    lang/
      en.js fr.js ar.js    <- every user-facing string, one file per language
  assets/
    favicon.svg
    profile.jpeg           <- your photo
    story.svg
```

## Editing your content

- **Personal details, links, skills, projects** -> `js/data.js`
  (email, phone, GitHub/LinkedIn URLs, skill columns, security cards, project list).
- **Any sentence in any language** -> `js/lang/en.js`, `fr.js`, `ar.js` - all files share
  the same keys. To add a language, copy `en.js`, translate it, and register it in
  `js/i18n.js` (the `LANGUAGES` array).
- **Colours / spacing** -> `css/style.css` (the `:root` and `html[data-theme="light"]`
  token blocks at the top).
- To swap the photo, replace `assets/profile.jpeg`.

## Contact form (how messages reach you)

The form uses **Netlify Forms** (`data-netlify="true"` + hidden `form-name` field +
`bot-field` honeypot). Nothing to configure in the code:

1. Deploy the site to **Netlify** (drag-and-drop or connect the GitHub repo).
   The included `netlify.toml` already sets the right build settings for this
   static site (no build command, publish the repo root) - no Base directory or
   build command to fill in the UI.
2. Netlify auto-detects the form in `index.html` and forwards submissions to the
   account e-mail (`anouarlaraje@gmail.com`).
3. In the Netlify dashboard: *Site settings > Forms > Form notifications* to confirm
   the notification e-mail.

Prefer **Formspree** instead? Create a form at formspree.io, then in `index.html`
remove the `data-netlify` / hidden `form-name` fields and set the form's `action` to
your Formspree URL; in `js/main.js` change the `fetch('/')` URL to that same endpoint.

> Deployed anywhere else (GitHub Pages, etc.)? The form will show its error message
> because nothing processes it there - keep a `mailto:` link as fallback (already in
> the footer and contact section).

## Quality checklist

- No secrets or API keys anywhere (the weather project's key lives only in its own repo)
- `rel="noopener noreferrer"` on every external link
- Works from `file://` as well as from any static host
