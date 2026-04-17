export type Locale = "pt" | "en";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  title: string;
  description: LocalizedText;
  repositoryUrl: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export const portfolio = {
  name: "João Vitor Batista",
  role: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer",
  } as LocalizedText,
  tagline: {
    pt: "Crio experiências digitais rápidas, elegantes e focadas em resultado.",
    en: "I build fast, elegant digital experiences focused on real outcomes.",
  } as LocalizedText,
  about: {
    pt: "Sou focado em construir produtos com excelente acabamento visual, código limpo e atenção aos detalhes. Minha abordagem combina estratégia de produto, engenharia sólida e design funcional para criar experiências fluidas de ponta a ponta.",
    en: "I focus on building products with polished visuals, clean code, and attention to detail. My approach combines product strategy, solid engineering, and functional design to deliver fluid end-to-end experiences.",
  } as LocalizedText,
  availability: {
    pt: "Disponível para projetos",
    en: "Available for projects",
  } as LocalizedText,
  image: {
    src: "/profile-photo.jpg",
    alt: "Foto de perfil de João Vitor Batista",
  },
  mini3d: {
    src: "/mini-3d-avatar.png",
    alt: "Miniatura 3D de João Vitor Batista",
    label: "Mini 3D",
  },
  contact: {
    email: "jvitorbatista@gmail.com",
    linkedin: "https://www.linkedin.com/in/joão-vitor-batista-silva-50b280279",
    github: "https://github.com/JVitorbs",
    cv: {
      pt: "/cv-joao-vitor-batista-pt.pdf",
      en: "/cv-joao-vitor-batista-en.pdf",
    } as LocalizedText,
  },
  labels: {
    pt: {
      contact: "Contato",
      seeProjects: "Ver projetos",
      aboutMe: "Sobre mim",
      aboutTitle: "Sobre",
      stacksTitle: "Stacks",
      projectsTitle: "Projetos",
      ctaTitle: "Quer tornar seu projeto realidade?",
      ctaDescription: "Me chame por e-mail ou LinkedIn para conversarmos.",
      email: "E-mail",
      cv: "Baixar CV",
      loading: "Carregando experiência...",
    },
    en: {
      contact: "Contact",
      seeProjects: "View projects",
      aboutMe: "About me",
      aboutTitle: "About",
      stacksTitle: "Stack",
      projectsTitle: "Projects",
      ctaTitle: "Want to bring your project to life?",
      ctaDescription: "Reach out by email or LinkedIn and let's talk.",
      email: "Email",
      cv: "Download CV",
      loading: "Loading experience...",
    },
  },
  projects: [
    {
      title: "SomosIBP",
      description: {
        pt: "Plataforma web para divulgação de eventos, história e atividades da IBP.",
        en: "Web platform for sharing IBP events, history, and community activities.",
      },
      repositoryUrl: "https://github.com/JVitorbs/ibp-next",
      images: [
        {
          src: "/projects/somosibp.png",
          alt: "Capa do projeto SomosIBP",
        },
      ],
    },
    {
      title: "Mini Marketplace",
      description: {
        pt: "Loja com checkout otimizado, arquitetura escalável e interface minimalista.",
        en: "Store with optimized checkout, scalable architecture, and minimalist interface.",
      },
      repositoryUrl: "https://github.com/JVitorbs/mini-marketplace-services",
      images: [
        {
          src: "/projects/ecommerce.png",
          alt: "Capa do projeto Mini Marketplace",
        },
      ],
    },
    {
      title: "Mini TT",
      description: {
        pt: "Rede social microblog com autenticação, posts, curtidas, busca e timeline paginada.",
        en: "Microblog social network with authentication, posts, likes, search, and paginated timeline.",
      },
      repositoryUrl: "https://github.com/JVitorbs/teste-dev-frontend",
      images: [
        {
          src: "/projects/mini_tt/login-light.png",
          alt: "Tela de login do Mini TT em tema claro",
        },
        {
          src: "/projects/mini_tt/login-dark.png",
          alt: "Tela de login do Mini TT em tema escuro",
        },
        {
          src: "/projects/mini_tt/timeline-light.png",
          alt: "Timeline do Mini TT em tema claro",
        },
        {
          src: "/projects/mini_tt/timeline-dark.png",
          alt: "Timeline do Mini TT em tema escuro",
        },
      ],
    },
    {
      title: "Site Estático para Laboratório",
      description: {
        pt: "Momentos importantes do laboratório e divulgação de dados.",
        en: "Virtual environment to record important moments of the laboratory and share data.",
      },
      repositoryUrl: "https://github.com/Lavat-Moderador/entrarlavat",
      images: [
        {
          src: "/projects/lab_website.png",
          alt: "Capa do projeto Site Estático para Laboratório",
        },
      ],
    },
  ] as Project[],
  stacks: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "Prisma",
    "Tailwind",
    "Docker",
    "Git",
    "Linux",
  ] as string[],
};
