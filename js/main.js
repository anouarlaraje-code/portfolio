/* ============================================================
   main.js - site behaviour (vanilla JavaScript)
   ------------------------------------------------------------
   1. Theme (light / dark)
   2. Language switcher (EN / FR / AR + RTL)
   3. Navbar: scrolled state, active link, mobile menu
   4. Scroll-reveal animations
   5. Dynamic rendering (stats, skills, security, projects...)
   6. Contact form: validation + Netlify submit + status
   ============================================================ */

/* ---------- 1. Theme ---------- */
const THEME_KEY = 'anouar-portfolio-theme';
const themeToggle = document.getElementById('themeToggle');

/** Updates the theme button icon and its translated aria-label. */
function paintThemeButton(theme) {
  const isDark = theme === 'dark';
  const icon = themeToggle.querySelector('i');
  icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon';
  const key = isDark ? 'ui.themeToLight' : 'ui.themeToDark';
  themeToggle.setAttribute('data-i18n-al', key);
  themeToggle.setAttribute('aria-label', t(key));
}

/** Flips between light and dark and remembers the choice. */
function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch (error) {
    /* storage unavailable - the theme still applies for this session */
  }
  paintThemeButton(next);
}

themeToggle.addEventListener('click', toggleTheme);

/* ---------- 2. Language switcher ---------- */
const langMenuBtn = document.getElementById('langMenuBtn');
const langMenu = document.getElementById('langMenu');

/** Syncs the checkmarks in the language menu with the active language. */
function paintLanguageMenu() {
  langMenu.querySelectorAll('[data-lang]').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === getLang();
    btn.querySelector('i').classList.toggle('d-none', !active);
    btn.setAttribute('aria-current', active ? 'true' : 'false');
  });
}

langMenu.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLang(btn.getAttribute('data-lang'));
    // close the Bootstrap dropdown after picking a language
    const dropdown = bootstrap.Dropdown.getInstance(langMenuBtn);
    if (dropdown) dropdown.hide();
  });
});

/* ---------- 3a. Navbar: scrolled state ---------- */
const navbar = document.querySelector('.site-navbar');

function updateNavbar() {
  navbar.classList.toggle('is-scrolled', window.scrollY > 16);
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ---------- 3b. Navbar: active link while scrolling ---------- */
const navLinks = Array.from(document.querySelectorAll('[data-nav]'));

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('data-nav') === id;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveLink(entry.target.id);
    });
  },
  // the section crossing the middle of the viewport is the active one
  { rootMargin: '-45% 0px -50% 0px' }
);

['home', 'about', 'skills', 'projects', 'contact'].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

/* ---------- 3c. Navbar: mobile menu (Bootstrap collapse) ---------- */
const menuEl = document.getElementById('mobileMenu');
const menuCollapse = bootstrap.Collapse.getOrCreateInstance(menuEl, { toggle: false });
let menuOpen = false;

/** Swaps the hamburger icon and its translated label. */
function paintToggler(open) {
  menuOpen = open;
  const icon = document.querySelector('.navbar-toggler i');
  icon.className = open ? 'bi bi-x-lg' : 'bi bi-list';
  const key = open ? 'ui.menuClose' : 'ui.menuOpen';
  document.querySelector('.navbar-toggler').setAttribute('data-i18n-al', key);
  document.querySelector('.navbar-toggler').setAttribute('aria-label', t(key));
}

menuEl.addEventListener('shown.bs.collapse', () => paintToggler(true));
menuEl.addEventListener('hidden.bs.collapse', () => paintToggler(false));

// Close the panel after choosing a section
menuEl.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menuCollapse.hide());
});

// Escape closes the panel
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuOpen) menuCollapse.hide();
});

/* ---------- 4. Scroll-reveal animations ---------- */
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

function observeReveals(root) {
  (root || document).querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    revealObserver.observe(el);
  });
}

/* Hero scroll-down button */
document.getElementById('scrollToAbout').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

/* ---------- 5. Dynamic rendering ---------- */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Builds a social button (hero + footer). */
function socialButton(social) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const isExternal = social.url.startsWith('http');
  a.href = social.url;
  a.className = 'social-btn';
  a.setAttribute('aria-label', t('social.' + social.id));
  a.setAttribute('title', t('social.' + social.id));
  if (isExternal) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer'; // security: never allow the new tab to reach back
  }
  a.innerHTML = '<i class="bi ' + social.icon + '" aria-hidden="true"></i>';
  li.appendChild(a);
  return li;
}

function renderSocials() {
  const hero = document.getElementById('heroSocials');
  const footer = document.getElementById('footerSocials');
  hero.innerHTML = '';
  footer.innerHTML = '';
  SITE.socials.forEach((social) => {
    hero.appendChild(socialButton(social));
    footer.appendChild(socialButton(social));
  });
}

/** Real stats from the translations (about.stats). */
function renderStats() {
  const grid = document.getElementById('statsGrid');
  grid.innerHTML = '';
  getDict().about.stats.forEach((stat) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6';
    col.innerHTML =
      '<div class="card-custom stat-card reveal">' +
      '<p class="stat-card__value">' + stat.value + '</p>' +
      '<p class="stat-card__label mb-0">' + stat.label + '</p>' +
      '</div>';
    grid.appendChild(col);
  });
}

/** The four skill columns (Bootstrap + Python included). */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  SITE.skillGroups.forEach((group, index) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3';
    col.innerHTML =
      '<article class="card-custom skill-card reveal" style="transition-delay: ' + index * 90 + 'ms">' +
      '<span class="skill-card__icon" aria-hidden="true"><i class="bi ' + group.icon + '"></i></span>' +
      '<h3 class="skill-card__title">' + t('skills.groups.' + group.id) + '</h3>' +
      '<ul class="chip-list">' +
      group.items.map((item) => '<li class="chip">' + item + '</li>').join('') +
      '</ul></article>';
    grid.appendChild(col);
  });
}

/** Languages spoken with their translated names and levels. */
function renderLanguages() {
  const list = document.getElementById('languagesList');
  list.innerHTML = '';
  SITE.languages.forEach((language) => {
    const li = document.createElement('li');
    li.innerHTML =
      '<span class="name">' + t('languages.' + language.id) + '</span>' +
      '<span class="level">(' + t('skills.levels.' + language.level) + ')</span>';
    list.appendChild(li);
  });
}

/** Web Security cards. */
function renderSecurity() {
  const grid = document.getElementById('securityGrid');
  grid.innerHTML = '';
  SITE.security.forEach((item, index) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-3';
    col.innerHTML =
      '<article class="card-custom security-card reveal" style="transition-delay: ' + index * 70 + 'ms">' +
      '<span class="security-card__icon" aria-hidden="true"><i class="bi ' + item.icon + '"></i></span>' +
      '<h3 class="security-card__title">' + t('security.items.' + item.id + '.title') + '</h3>' +
      '<p class="security-card__text mb-0">' + t('security.items.' + item.id + '.description') + '</p>' +
      '</article>';
    grid.appendChild(col);
  });
}

/** Project cards with a real "View on GitHub" link. */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  SITE.projects.forEach((project, index) => {
    const title = t('projects.items.' + project.id + '.title');
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6';
    col.innerHTML =
      '<article class="card-custom project-card reveal" style="transition-delay: ' + index * 100 + 'ms">' +
      '<div class="project-card__head">' +
      '<span class="project-card__icon" aria-hidden="true"><i class="bi ' + project.icon + '"></i></span>' +
      '<h3 class="project-card__title mb-0">' + title + '</h3>' +
      '</div>' +
      '<div class="project-card__body">' +
      '<p class="project-card__text mb-0">' + t('projects.items.' + project.id + '.description') + '</p>' +
      '<ul class="chip-list">' +
      project.tags.map((tag) => '<li class="chip">' + tag + '</li>').join('') +
      '</ul>' +
      '<a class="btn-ghost" href="' + project.url + '" target="_blank" rel="noopener noreferrer" ' +
      'aria-label="' + t('projects.ariaGitHub', { title: title }) + '">' +
      '<i class="bi bi-github" aria-hidden="true"></i>' + t('projects.githubBtn') + '</a>' +
      '</div></article>';
    grid.appendChild(col);
  });
}

/** Contact details (email, phone, LinkedIn, GitHub). */
function renderContactDetails() {
  const grid = document.getElementById('contactDetails');
  const p = SITE.personal;
  const details = [
    { id: 'email', value: p.email, href: 'mailto:' + p.email, icon: 'bi-envelope' },
    { id: 'phone', value: p.phone, href: 'tel:' + p.phone, icon: 'bi-telephone' },
    { id: 'linkedin', value: t('contact.viewProfile'), href: p.linkedin, icon: 'bi-linkedin' },
    { id: 'github', value: t('contact.viewProfile'), href: p.github, icon: 'bi-github' },
  ];
  grid.innerHTML = '';
  details.forEach((detail) => {
    const external = detail.href.startsWith('http');
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6';
    col.innerHTML =
      '<a class="card-custom contact-detail h-100 d-block text-decoration-none" href="' + detail.href + '"' +
      (external ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
      '<span class="contact-detail__icon" aria-hidden="true"><i class="bi ' + detail.icon + '"></i></span>' +
      '<span>' +
      '<span class="contact-detail__label">' + t('contact.labels.' + detail.id) + '</span>' +
      '<span class="contact-detail__value">' + detail.value + '</span>' +
      '</span></a>';
    grid.appendChild(col);
  });
}

/** Renders everything that depends on data or translations. */
function renderAll() {
  renderSocials();
  renderStats();
  renderSkills();
  renderLanguages();
  renderSecurity();
  renderProjects();
  renderContactDetails();
  observeReveals(); // pick up any new .reveal elements
}

/* ---------- 6. Contact form (Netlify Forms) ---------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('contactSubmit');

/** Holds the validation state: { name: 'nameRequired', ... } (keys, not
 *  messages, so the errors re-translate when the language changes). */
let formErrors = {};
let statusKind = 'none'; // none | sending | success | error

const FIELDS = ['name', 'email', 'message'];

/** Client-side validation (the server re-validates on Netlify). */
function validateForm() {
  const values = {};
  FIELDS.forEach((field) => {
    values[field] = contactForm.elements[field].value.trim();
  });

  const errors = {};
  if (!values.name) errors.name = 'nameRequired';
  else if (values.name.length < 2) errors.name = 'nameShort';

  if (!values.email) errors.email = 'emailRequired';
  else if (!EMAIL_REGEX.test(values.email)) errors.email = 'emailInvalid';

  if (!values.message) errors.message = 'messageRequired';
  else if (values.message.length < 10) errors.message = 'messageShort';

  return errors;
}

/** Paints the current errors (or clears them) under each field. */
function paintErrors() {
  FIELDS.forEach((field) => {
    const input = contactForm.elements[field];
    const box = document.getElementById(field + 'Error');
    const key = formErrors[field];
    if (key) {
      box.textContent = t('contact.form.errors.' + key);
      box.classList.remove('d-none');
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    } else {
      box.textContent = '';
      box.classList.add('d-none');
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
    }
  });
}

/** Shows the status bar (sending / success / error). */
function paintStatus() {
  if (statusKind === 'none') {
    formStatus.classList.remove('is-visible', 'is-success', 'is-error');
    formStatus.textContent = '';
    return;
  }
  formStatus.classList.add('is-visible');
  formStatus.classList.toggle('is-success', statusKind === 'success' || statusKind === 'sending');
  formStatus.classList.toggle('is-error', statusKind === 'error');

  if (statusKind === 'sending') formStatus.textContent = t('contact.form.sending');
  else if (statusKind === 'success') formStatus.textContent = t('contact.form.success');
  else formStatus.textContent = t('contact.form.error', { email: SITE.personal.email });
}

/** Clears an error as soon as the visitor edits the field. */
FIELDS.forEach((field) => {
  contactForm.elements[field].addEventListener('input', () => {
    if (formErrors[field]) {
      delete formErrors[field];
      paintErrors();
    }
  });
});

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Honeypot: bots fill the hidden field - drop the submission silently.
  if (contactForm.elements['bot-field'].value) return;

  formErrors = validateForm();
  paintErrors();

  const firstInvalid = FIELDS.find((field) => formErrors[field]);
  if (firstInvalid) {
    contactForm.elements[firstInvalid].focus();
    return;
  }

  // Static hosting: post to the current URL, where Netlify
  // receives and forwards the message to anouarlaraje@gmail.com.
  statusKind = 'sending';
  paintStatus();
  submitBtn.disabled = true;

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(contactForm)).toString(),
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);

    statusKind = 'success';
    contactForm.reset();
    formErrors = {};
  } catch (error) {
    // Network error or a host that does not process forms (local preview).
    statusKind = 'error';
  } finally {
    submitBtn.disabled = false;
    paintErrors();
    paintStatus();
  }
});

/* ---------- Init ---------- */
// Re-render translations-driven UI whenever the language changes.
onLanguageChange(() => {
  renderAll();
  paintErrors();
  paintStatus();
  paintLanguageMenu();
  paintToggler(menuOpen);
  paintThemeButton(document.documentElement.dataset.theme);
});

// The head script already restored language + theme before first paint.
syncInitialLanguage();
renderAll();
paintLanguageMenu();
paintThemeButton(document.documentElement.dataset.theme);
observeReveals();
