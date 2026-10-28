/**
 * English strings - the base language of the site.
 * Keys are referenced from index.html via data-i18n="key"
 * and from main.js via t('key').
 */
const I18N_EN = {
  nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },

  ui: {
    skip: 'Skip to content',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    changeLanguage: 'Change language',
  },

  hero: {
    badge: 'Available for internship, January 2027',
    titleLead: 'I\u2019m Anouar, a',
    titleAccent: 'Full-Stack Developer',
    description:
      'I build complete, scalable web apps from the interface to the database - React, Bootstrap, Python, PHP and Laravel.',
    scrollAria: 'Scroll down to the About section',
    photoAlt: 'Portrait of Anouar Laraje, full-stack web developer',
    labels: { about: 'About me', work: 'My work', follow: 'Follow me' },
    ctas: { learn: 'Learn more', browse: 'Browse projects' },
  },

  social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },

  about: {
    label: 'About me',
    heading: 'Building complete web apps, from interface to database',
    bio: 'Full-Stack web developer in training, passionate about building web applications and solving complex problems with code. I build complete, scalable web apps from the interface to the database. I am looking for a one-month Full-Stack internship (React, Bootstrap, PHP/Laravel, Python) starting January 2027 to apply my skills and contribute to real company projects.',
    stats: [
      { value: '2', label: 'Projects built' },
      { value: '4', label: 'Core stacks: React, Laravel, Bootstrap, Python' },
    ],
    more: 'More about me',
  },

  story: {
    label: 'My story',
    heading: 'My journey into web development',
    p1: 'I am studying Full-Stack Web Development at ISTA Bab Tizimi (OFPPT), where I learned the fundamentals of building real applications: HTML, CSS and JavaScript, then React and Bootstrap on the front-end, and PHP and Laravel with MySQL and MongoDB on the back-end.',
    p2: 'Most of what I know came from building projects from scratch - a weather app, a task manager and an online store. Every project taught me how to structure data, handle user input and ship something that actually works end to end.',
    imageAlt: 'Laptop showing source code, illustrating my learning journey',
  },

  internship: {
    heading: 'Looking for a 1-month Full-Stack internship, January 2027',
    cta: 'Get in touch',
    note: 'Open to a one-month mission starting January 2027 - Mekn\u00e8s, Morocco or remote.',
  },

  skills: {
    label: 'Skills',
    heading: 'Technologies I work with every day',
    intro: 'From the interface down to the database - the tools I use to build complete web applications.',
    groups: { frontend: 'Front-end', backend: 'Back-end', databases: 'Databases', tools: 'Tools' },
    languagesTitle: 'Languages',
    languagesSubtitle: 'Languages I speak',
    levels: { native: 'native', school: 'school level' },
  },

  languages: { en: 'English', fr: 'French', ar: 'Arabic' },

  education: {
    label: 'Education',
    heading: 'Where I am learning',
    degree: 'Full-Stack Web Development training',
    description:
      'Training focused on building complete web applications: front-end interfaces, back-end APIs and database design.',
  },

  security: {
    label: 'Web Security',
    heading: 'Basics I apply to every project',
    intro: 'Core habits that keep users and data safe - from encrypted transport to careful handling of input and secrets.',
    items: {
      https: {
        title: 'HTTPS & TLS',
        description: 'Serve every page over HTTPS with valid certificates so data stays encrypted in transit.',
      },
      xss: {
        title: 'XSS protection',
        description: 'Escape and sanitise user input before rendering it so injected scripts never run.',
      },
      csrf: {
        title: 'CSRF defence',
        description: 'Use anti-CSRF tokens and verify request origins so forged cross-site requests fail.',
      },
      sqli: {
        title: 'SQL injection',
        description: 'Use prepared statements and parameterised queries instead of string concatenation.',
      },
      auth: {
        title: 'Secure authentication',
        description: 'Hash passwords with bcrypt, keep sessions safe and never store credentials in plain text.',
      },
      validation: {
        title: 'Input validation',
        description: 'Validate everything on the server with allow-lists - never trust the browser alone.',
      },
      secrets: {
        title: 'Secrets out of git',
        description: 'Keep API keys in environment variables, never committed to the repository.',
      },
    },
  },

  projects: {
    label: 'Projects',
    heading: 'Things I have built',
    intro: 'Real projects from my GitHub - each one built end to end and open source.',
    githubBtn: 'View on GitHub',
    ariaGitHub: 'View {title} on GitHub (opens in a new tab)',
    items: {
      meteo: {
        title: 'Weather App',
        description:
          'Search any city and get the current temperature, humidity, wind speed and condition icons from the OpenWeatherMap API - it opens with the weather in Mekn\u00e8s.',
      },
      todo: {
        title: 'To-Do List',
        description:
          'Task manager to add, complete and delete tasks, with the list saved in localStorage so it survives page reloads.',
      },
    },
  },

  contact: {
    label: 'Contact',
    heading: 'Let us build something together',
    intro: 'Looking for a one-month Full-Stack internship starting January 2027? Have a project in mind? Send me a message, I will get back to you as soon as possible.',
    location: 'Mekn\u00e8s, Morocco',
    labels: { email: 'Email', phone: 'Phone', github: 'GitHub', linkedin: 'LinkedIn' },
    viewProfile: 'View my profile',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Tell me about your project or internship...',
      submit: 'Send message',
      sending: 'Sending...',
      errors: {
        nameRequired: 'Please enter your name.',
        nameShort: 'Your name is too short.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please write a message.',
        messageShort: 'Your message is too short (10 characters minimum).',
      },
      success: 'Thanks! Your message has been sent - I will get back to you as soon as possible.',
      error: 'Your message could not be sent. Please try again, or write directly to {email}.',
      preferSocial: 'Prefer social media?',
      or: 'or',
    },
  },

  footer: {
    rights: '\u00a9 2026 Anouar Laraje \u2014 All rights reserved.',
    builtWith: 'Built with',
    role: 'Full-Stack Web Developer',
  },
};
