export type Project = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const portfolio = {
  name: "João Vitor Batista",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Crio experiências digitais rápidas, elegantes e focadas em resultado.",
  about:
    "Sou focado em construir produtos com excelente acabamento visual, código limpo e atenção aos detalhes. Minha abordagem combina estratégia de produto, engenharia sólida e design funcional para criar experiências fluidas de ponta a ponta.",
  availability: "Disponível para projetos",
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
    email: "seuemail@dominio.com",
    linkedin: "https://www.linkedin.com/in/joão-vitor-batista-silva-50b280279",
    github: "https://github.com/JVitorbs",
  },
  projects: [
    {
      title: "SomosIBP",
      description:
        "Plataforma Web para divulgação de eventos, história e atividades da IBP.",
      image: {
        src: "/projects/somosibp.svg",
        alt: "Capa do projeto SomosIBP",
      },
    },
    {
      title: "E-commerce Premium",
      description:
        "Loja com checkout otimizado, arquitetura escalável e interface minimalista.",
      image: {
        src: "/projects/ecommerce.svg",
        alt: "Capa do projeto E-commerce Premium",
      },
    },
    {
      title: "Plataforma Educacional",
      description:
        "Ambiente moderno para cursos online com trilhas e progresso inteligente.",
      image: {
        src: "/projects/educacional.svg",
        alt: "Capa do projeto Plataforma Educacional",
      },
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
