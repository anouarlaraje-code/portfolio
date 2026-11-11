/**
 * French strings.
 */
const I18N_FR = {
  nav: { home: 'Accueil', about: '\u00c0 propos', skills: 'Comp\u00e9tences', projects: 'Projets', contact: 'Contact' },

  ui: {
    skip: 'Aller au contenu',
    themeToLight: 'Passer en mode clair',
    themeToDark: 'Passer en mode sombre',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    changeLanguage: 'Changer de langue',
  },

  hero: {
    badge: 'Disponible pour un stage de 1 mois, janvier 2027',
    titleLead: 'Je suis Anouar,',
    titleAccent: 'd\u00e9veloppeur Full-Stack',
    description:
      'Je construis des applications web compl\u00e8tes et \u00e9volutives, de l\u2019interface \u00e0 la base de donn\u00e9es - React, Bootstrap, Python, PHP et Laravel.',
    scrollAria: 'Descendre vers la section \u00c0 propos',
    photoAlt: 'Portrait d\u2019Anouar Laraje, d\u00e9veloppeur web Full-Stack',
    labels: { about: '\u00c0 propos', work: 'Mes projets', follow: 'Suivez-moi' },
    ctas: { learn: 'En savoir plus', browse: 'Voir les projets' },
  },

  social: { github: 'GitHub', linkedin: 'LinkedIn', email: 'E-mail' },

  about: {
    label: '\u00c0 propos',
    heading: 'Construire des applications web compl\u00e8tes, de l\u2019interface \u00e0 la base de donn\u00e9es',
    bio: 'D\u00e9veloppeur web Full-Stack en formation, passionn\u00e9 par la cr\u00e9ation d\u2019applications web et la r\u00e9solution de probl\u00e8mes complexes par le code. Je construis des applications web compl\u00e8tes et \u00e9volutives, de l\u2019interface \u00e0 la base de donn\u00e9es. Je cherche un stage Full-Stack d\u2019un mois (React, Bootstrap, PHP/Laravel, Python) \u00e0 partir de janvier 2027 pour appliquer mes comp\u00e9tences et contribuer \u00e0 de vrais projets d\u2019entreprise.',
    stats: [
      { value: '2', label: 'Projets r\u00e9alis\u00e9s' },
      { value: '4', label: 'Stacks principales : React, Laravel, Bootstrap, Python' },
    ],
    more: 'En savoir plus sur moi',
  },

  story: {
    label: 'Mon histoire',
    heading: 'Mon parcours dans le d\u00e9veloppement web',
    p1: 'J\u2019\u00e9tudie le d\u00e9veloppement web Full-Stack \u00e0 l\u2019ISTA Bab Tizimi (OFPPT), o\u00f9 j\u2019ai appris les fondamentaux de la cr\u00e9ation d\u2019applications r\u00e9elles : HTML, CSS et JavaScript, puis React et Bootstrap c\u00f4t\u00e9 front-end, et PHP et Laravel avec MySQL et MongoDB c\u00f4t\u00e9 back-end.',
    p2: 'L\u2019essentiel de ce que je sais vient de projets construits de z\u00e9ro - une application m\u00e9t\u00e9o, un gestionnaire de t\u00e2ches et une boutique en ligne. Chaque projet m\u2019a appris \u00e0 structurer les donn\u00e9es, g\u00e9rer les entr\u00e9es utilisateur et livrer quelque chose qui fonctionne vraiment de bout en bout.',
    imageAlt: 'Ordinateur portable affichant du code, illustrant mon parcours d\u2019apprentissage',
  },

  internship: {
    heading: '\u00c0 la recherche d\u2019un stage Full-Stack de 1 mois, janvier 2027',
    cta: 'Me contacter',
    note: 'Ouvert \u00e0 une mission d\u2019un mois \u00e0 partir de janvier 2027 - Mekn\u00e8s, Maroc ou \u00e0 distance.',
  },

  skills: {
    label: 'Comp\u00e9tences',
    heading: 'Les technologies que j\u2019utilise au quotidien',
    intro: 'De l\u2019interface \u00e0 la base de donn\u00e9es - les outils que j\u2019utilise pour construire des applications web compl\u00e8tes.',
    groups: { frontend: 'Front-end', backend: 'Back-end', databases: 'Bases de donn\u00e9es', tools: 'Outils' },
    languagesTitle: 'Langues',
    languagesSubtitle: 'Les langues que je parle',
    levels: { native: 'langue maternelle', school: 'niveau scolaire' },
  },

  languages: { en: 'Anglais', fr: 'Fran\u00e7ais', ar: 'Arabe' },

  education: {
    label: 'Formation',
    heading: 'O\u00f9 je me forme',
    degree: 'Formation en d\u00e9veloppement web Full-Stack',
    description:
      'Formation ax\u00e9e sur la cr\u00e9ation d\u2019applications web compl\u00e8tes : interfaces front-end, API back-end et conception de bases de donn\u00e9es.',
  },

  security: {
    label: 'S\u00e9curit\u00e9 web',
    heading: 'Les bases que j\u2019applique \u00e0 chaque projet',
    intro: 'Les bonnes habitudes qui prot\u00e8gent les utilisateurs et les donn\u00e9es - du transport chiffr\u00e9 au soin port\u00e9 aux entr\u00e9es et aux secrets.',
    items: {
      https: {
        title: 'HTTPS & TLS',
        description: 'Servir chaque page en HTTPS avec des certificats valides pour garder les donn\u00e9es chiffr\u00e9es en transit.',
      },
      xss: {
        title: 'Protection XSS',
        description: 'Échapper et assainir les entr\u00e9es utilisateur avant affichage pour emp\u00eacher les scripts inject\u00e9s.',
      },
      csrf: {
        title: 'D\u00e9fense CSRF',
        description: 'Utiliser des jetons anti-CSRF et v\u00e9rifier l\u2019origine des requ\u00eates pour bloquer les requ\u00eates forg\u00e9es.',
      },
      sqli: {
        title: 'Injection SQL',
        description: 'Utiliser des requ\u00eates pr\u00e9par\u00e9es et param\u00e9tr\u00e9es au lieu de concat\u00e9ner des cha\u00eenes.',
      },
      auth: {
        title: 'Authentification s\u00e9curis\u00e9e',
        description: 'Hacher les mots de passe avec bcrypt, garder les sessions s\u00eaves et ne jamais stocker de clair.',
      },
      validation: {
        title: 'Validation des entr\u00e9es',
        description: 'Valider tout c\u00f4t\u00e9 serveur avec des listes autoris\u00e9es - ne jamais faire confiance au seul navigateur.',
      },
      secrets: {
        title: 'Secrets hors du d\u00e9p\u00f4t',
        description: 'Garder les cl\u00e9s API dans des variables d\u2019environnement, jamais committ\u00e9es au d\u00e9p\u00f4t.',
      },
    },
  },

  projects: {
    label: 'Projets',
    heading: 'Ce que j\u2019ai construit',
    intro: 'De vrais projets de mon GitHub - chacun construit de bout en bout et en open source.',
    githubBtn: 'Voir sur GitHub',
    ariaGitHub: 'Voir {title} sur GitHub (ouvre dans un nouvel onglet)',
    items: {
      meteo: {
        title: 'Application m\u00e9t\u00e9o',
        description:
          'Cherchez n\u2019importe quelle ville et obtenez la temp\u00e9rature, l\u2019humidit\u00e9, la vitesse du vent et les ic\u00f4nes de condition via l\u2019API OpenWeatherMap - elle s\u2019ouvre sur la m\u00e9t\u00e9o de Mekn\u00e8s.',
      },
      todo: {
        title: 'Liste de t\u00e2ches',
        description:
          'Gestionnaire de t\u00e2ches pour ajouter, terminer et supprimer des t\u00e2ches, avec la liste sauvegard\u00e9e dans localStorage pour survivre aux rechargements.',
      },
    },
  },

  contact: {
    label: 'Contact',
    heading: 'Construisons quelque chose ensemble',
    intro: 'Vous cherchez un stage Full-Stack d\u2019un mois \u00e0 partir de janvier 2027 ? Un projet en t\u00eate ? Envoyez-moi un message, je vous r\u00e9pondrai d\u00e8s que possible.',
    location: 'Mekn\u00e8s, Maroc',
    labels: { email: 'E-mail', phone: 'T\u00e9l\u00e9phone', github: 'GitHub', linkedin: 'LinkedIn' },
    viewProfile: 'Voir mon profil',
    form: {
      name: 'Nom',
      email: 'E-mail',
      message: 'Message',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'vous@exemple.com',
      messagePlaceholder: 'Parlez-moi de votre projet ou du stage...',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      errors: {
        nameRequired: 'Veuillez saisir votre nom.',
        nameShort: 'Votre nom est trop court.',
        emailRequired: 'Veuillez saisir votre adresse e-mail.',
        emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
        messageRequired: 'Veuillez \u00e9crire un message.',
        messageShort: 'Votre message est trop court (10 caract\u00e8res minimum).',
      },
      success: 'Merci ! Votre message a bien \u00e9t\u00e9 envoy\u00e9 - je vous r\u00e9pondrai d\u00e8s que possible.',
      error: 'Votre message n\u2019a pas pu \u00eatre envoy\u00e9. R\u00e9essayez, ou \u00e9crivez directement \u00e0 {email}.',
      preferSocial: 'Vous pr\u00e9f\u00e9rez les r\u00e9seaux sociaux ?',
      or: 'ou',
    },
  },

  footer: {
    rights: '\u00a9 2026 Anouar Laraje \u2014 Tous droits r\u00e9serv\u00e9s.',
    builtWith: 'Cr\u00e9\u00e9 avec',
    role: 'D\u00e9veloppeur web Full-Stack',
  },
};
