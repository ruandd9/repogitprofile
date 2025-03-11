// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ruandd9', // Seu usuário do GitHub
    location: 'Brasília, Brasil'
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Meus Projetos',
      mode: 'automatic', // Voltando para o modo automático para exibir todos os projetos
      automatic: {
        sortBy: 'updated',
        limit: 50,
        exclude: {
          forks: false,
          projects: [
            'ruandd9/ruandd9.git.io',
            'ruandd9/Atividades-java-js-html-css-phyton-sql',
            'ruandd9/atividade-pratica014',
            'ruandd9/atividadetds.github.io'
          ]
        },
      },
    },
    external: {
      header: 'Projetos Externos',
      projects: [],  // Você pode adicionar projetos externos aqui depois
    },
  },
  seo: {
    title: 'Portfolio de Ruan Lobo',
    description: 'Desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/ruan-lobo-b95008308/',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'https://www.instagram.com/ruandiparis/',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: '',
    phone: '+55 61 61991932496',
    email: 'ruanoliveiralobo@gmail.com',
    location: 'Brasília, Brasil'
  },
  resume: {
    fileUrl: '', // Adicione o link do seu currículo aqui
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Java',
    'Git',
    'SQL'
  ],
  experiences: [
    {
      company: '...',
      position: '...',
      from: '2024',
      to: 'Presente',
      companyLink: '',
    },
    {
      company: '...',
      position: '...',
      from: '2024',
      to: 'Presente',
      companyLink: '',
    }
  ],
  educations: [
    {
      institution: 'Análise e Desenvolvimento de Sistemas',
      degree: 'Graduação',
      from: '2024',
      to: 'Presente',
    },
    {
      institution: 'Técnico em Desenvolvimento de Sistemas',
      degree: 'Curso Técnico',
      from: '2024',
      to: 'Presente',
    }
  ],
  certifications: [ //colocar futuramente os certificados
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  publications: [
    {
      title: 'Desenvolvimento de Sistemas Web Modernos',
      description: 'Artigo sobre as melhores práticas no desenvolvimento de aplicações web usando React, Node.js e outras tecnologias modernas.',
      url: '', // Adicionar URL quando publicar
      thumbnail: '', // Adicionar URL da imagem quando publicar
      date: '2024',
    }
  ],
  blog: {
    source: 'dev', 
    username: 'ruandd9', 
    limit: 5, 
  },
  articles: [
    {
      title: 'Introdução ao Desenvolvimento Web',
      description: 'Um guia prático sobre HTML, CSS e JavaScript para iniciantes',
      date: '2024',
      url: '', 
    },
    {
      title: 'Boas Práticas em React',
      description: 'Dicas e truques para melhorar seus projetos React',
      date: '2024',
      url: '', 
    }
  ],
  googleAnalytics: {
    id: '', // ID do Google Analytics (opcional)
  },
  hotjar: {
    id: '', // ID do Hotjar (opcional)
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon'
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
