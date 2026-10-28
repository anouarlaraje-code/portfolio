/**
 * ============================================================
 *  data.js - language-neutral site data
 * ------------------------------------------------------------
 *  Edit this file to change personal details, links, skill
 *  lists, security topics and projects.
 *  Every sentence (headings, descriptions, labels) lives in
 *  the translation files: js/lang/en.js, fr.js and ar.js.
 * ============================================================
 */

const SITE = {
  /** Contact details. The email is used by the contact form,
   *  every mailto link and the footer. */
  personal: {
    firstName: 'Anouar',
    name: 'Anouar Laraje',
    email: 'anouarlaraje@gmail.com',
    phone: '0616504875',
    github: 'https://github.com/anouarlaraje-code',
    linkedin: 'https://www.linkedin.com/in/anouar-laraje-62bb43443/',
    photo: 'assets/profile.jpeg',
  },

  /** Navbar anchors - each href must match a section id in index.html */
  nav: [
    { id: 'home', href: '#home' },
    { id: 'about', href: '#about' },
    { id: 'skills', href: '#skills' },
    { id: 'projects', href: '#projects' },
    { id: 'contact', href: '#contact' },
  ],

  /** Social buttons - real profiles, opened in a new tab */
  socials: [
    { id: 'linkedin', url: 'https://www.linkedin.com/in/anouar-laraje-62bb43443/', icon: 'bi-linkedin' },
    { id: 'github', url: 'https://github.com/anouarlaraje-code', icon: 'bi-github' },
    { id: 'email', url: 'mailto:anouarlaraje@gmail.com', icon: 'bi-envelope' },
  ],

  /** Skill columns. `icon` is a Bootstrap Icons class; group
   *  titles and language levels are translated. Tech names
   *  (React, PHP...) stay the same in every language. */
  skillGroups: [
    { id: 'frontend', icon: 'bi-code-slash', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'jQuery', 'Bootstrap'] },
    { id: 'backend', icon: 'bi-hdd-stack', items: ['Python', 'PHP', 'Laravel'] },
    { id: 'databases', icon: 'bi-database', items: ['MySQL', 'MongoDB'] },
    { id: 'tools', icon: 'bi-wrench', items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Jira', 'Microsoft Word', 'Microsoft Excel'] },
  ],

  /** Languages spoken - names and levels come from the translations */
  languages: [
    { id: 'ar', level: 'native' },
    { id: 'fr', level: 'school' },
    { id: 'en', level: 'school' },
  ],

  /** Web Security cards (titles/descriptions in js/lang/*.js) */
  security: [
    { id: 'https', icon: 'bi-lock' },
    { id: 'xss', icon: 'bi-code-slash' },
    { id: 'csrf', icon: 'bi-arrow-repeat' },
    { id: 'sqli', icon: 'bi-database-exclamation' },
    { id: 'auth', icon: 'bi-person-lock' },
    { id: 'validation', icon: 'bi-check2-circle' },
    { id: 'secrets', icon: 'bi-eye-slash' },
  ],

  /** Projects - real repositories on GitHub. Titles and
   *  descriptions are translated in js/lang/*.js under
   *  `projects.items.<id>`. */
  projects: [
    {
      id: 'meteo',
      url: 'https://github.com/anouarlaraje-code/application-meteo',
      icon: 'bi-cloud-sun',
      tags: ['React', 'JavaScript', 'CSS3', 'OpenWeatherMap API'],
    },
    {
      id: 'todo',
      url: 'https://github.com/anouarlaraje-code/TO-DO-LIST',
      icon: 'bi-check2-square',
      tags: ['React', 'JavaScript', 'CSS3', 'localStorage'],
    },
  ],
};
