export type Project = {
  title: string;
  description: string;
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
    src: "/profile-photo.svg",
    alt: "Foto de perfil de João Vitor Batista",
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
    },
    {
      title: "E-commerce Premium",
      description:
        "Loja com checkout otimizado, arquitetura escalável e interface minimalista.",
    },
    {
      title: "Plataforma Educacional",
      description:
        "Ambiente moderno para cursos online com trilhas e progresso inteligente.",
    },
  ] as Project[],
};
