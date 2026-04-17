"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine } from "react-icons/fa6";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSass,
  SiScikitlearn,
  SiSvelte,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import AnimatedProfileImage from "@/components/AnimatedProfileImage";
import ThemeToggle from "@/components/ThemeToggle";
import TiltCard from "@/components/TiltCard";
import { Locale, portfolio } from "@/data/portfolio";

const stackIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Svelte: SiSvelte,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  Sass: SiSass,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "Scikit-Learn": SiScikitlearn,
  Matplotlib: FaChartLine,
  Seaborn: FaChartBar,
  TensorFlow: SiTensorflow,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Docker: SiDocker,
  Git: SiGit,
  Linux: SiLinux,
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "pt";
    }

    const storedLocale = localStorage.getItem("portfolio-locale");
    if (storedLocale === "pt" || storedLocale === "en") {
      return storedLocale;
    }

    return navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
  });
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  const [expandedProjectImageIndex, setExpandedProjectImageIndex] = useState(0);
  const projectsScrollRef = useRef<HTMLDivElement | null>(null);

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "pt" ? "en" : "pt";
    setLocale(nextLocale);
    localStorage.setItem("portfolio-locale", nextLocale);
  };

  const openProject = (index: number) => {
    setExpandedProjectIndex(index);
    setExpandedProjectImageIndex(0);
  };

  const closeProject = () => {
    setExpandedProjectIndex(null);
    setExpandedProjectImageIndex(0);
  };

  const showPreviousProjectImage = () => {
    if (!expandedProject) {
      return;
    }

    setExpandedProjectImageIndex((currentIndex) =>
      (currentIndex - 1 + expandedProject.images.length) % expandedProject.images.length,
    );
  };

  const showNextProjectImage = () => {
    if (!expandedProject) {
      return;
    }

    setExpandedProjectImageIndex((currentIndex) =>
      (currentIndex + 1) % expandedProject.images.length,
    );
  };

  const scrollProjects = (direction: "previous" | "next") => {
    const container = projectsScrollRef.current;

    if (!container) {
      return;
    }

    const scrollAmount = Math.round(container.clientWidth * 0.85);
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const text = portfolio.labels[locale];
  const expandedProject =
    expandedProjectIndex === null ? null : portfolio.projects[expandedProjectIndex];
  const expandedProjectImage = expandedProject?.images[expandedProjectImageIndex] ?? null;
  const useHorizontalProjectGallery = portfolio.projects.length >= 4;

  return (
    <div className="background-texture relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-200/70 blur-3xl dark:bg-zinc-800/50" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-zinc-100/70 blur-3xl dark:bg-zinc-900/60" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-10 pt-4 sm:gap-28 sm:px-10 sm:pt-10 lg:px-16">
        <header className="animate-fade-down flex items-center justify-between">
          <p className="text-sm font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
            {portfolio.name}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-zinc-300 px-3 py-2 text-xs font-semibold tracking-wide text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              aria-label="Switch language"
            >
              {locale === "pt" ? "EN" : "PT"}
            </button>
            <ThemeToggle />
            <a
              href="#contato"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
            >
              {text.contact}
            </a>
          </div>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-reveal-left delay-1 space-y-7">
            <p className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {portfolio.availability[locale]}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              {portfolio.name}
            </h1>
            <h2 className="text-xl font-medium tracking-tight text-zinc-700 sm:text-2xl dark:text-zinc-300">
              {portfolio.role[locale]}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              {portfolio.tagline[locale]}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {text.seeProjects}
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              >
                {text.aboutMe}
              </a>
              <a
                href={portfolio.contact.cv[locale]}
                download
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              >
                {text.cv}
              </a>
            </div>
          </div>

          <div className="animate-reveal-right delay-2 relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <TiltCard className="rounded-4xl border border-zinc-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="animate-float">
                <AnimatedProfileImage
                  src={portfolio.image.src}
                  alt={portfolio.image.alt}
                  width={640}
                  height={760}
                  priority
                />
              </div>
            </TiltCard>
          </div>
        </section>

        <section
          id="sobre"
          className="animate-rise-blur delay-2 scroll-mt-24 space-y-4"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
            {text.aboutTitle}
          </h3>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            {portfolio.about[locale]}
          </p>
        </section>

        <section
          id="stacks"
          className="animate-rise-blur delay-3 scroll-mt-24 space-y-6"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
            {text.stacksTitle}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {portfolio.stacks.map((stack, index) => {
              const Icon = stackIcons[stack];

              return (
                <span
                  key={stack}
                  style={{ animationDelay: `${480 + index * 40}ms` }}
                  className="animate-chip-in inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-xs font-medium tracking-tight text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {stack}
                </span>
              );
            })}
          </div>
        </section>

        <section
          id="projetos"
          className="animate-rise-blur delay-4 scroll-mt-24 space-y-6"
        >
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
              {text.projectsTitle}
            </h3>
            {useHorizontalProjectGallery ? (
              <div className="hidden items-center gap-2 md:flex">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Arraste ou use as setas
                </p>
                <button
                  type="button"
                  onClick={() => scrollProjects("previous")}
                  aria-label="Ver projetos anteriores"
                  className="rounded-full border border-zinc-300 bg-white/90 px-3 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollProjects("next")}
                  aria-label="Ver próximos projetos"
                  className="rounded-full border border-zinc-300 bg-white/90 px-3 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                >
                  →
                </button>
              </div>
            ) : null}
          </div>
          <div
            ref={projectsScrollRef}
            className={
              useHorizontalProjectGallery
                ? "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scroll-smooth sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
                : "grid gap-4 md:grid-cols-3"
            }
          >
            {portfolio.projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => openProject(index)}
                className={
                  useHorizontalProjectGallery
                    ? "min-w-[82%] shrink-0 snap-start text-left sm:min-w-[46%] lg:min-w-[32%]"
                    : "text-left"
                }
              >
                <TiltCard
                  enableLight={false}
                  style={{ animationDelay: `${560 + index * 120}ms` }}
                  className="animate-card-in group overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description[locale]}
                    </p>
                  </div>
                </TiltCard>
              </button>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="animate-rise-blur delay-5 scroll-mt-24 pb-8"
        >
          <div className="flex flex-col gap-5 rounded-3xl border border-zinc-200/80 bg-zinc-50/70 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <div className="w-20 rounded-2xl border border-zinc-200/90 bg-white/85 p-1.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-900/80 sm:w-24">
                <div className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={portfolio.mini3d.src}
                    alt={portfolio.mini3d.alt}
                    width={120}
                    height={120}
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-1 pt-1.5 text-[10px] font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
                  {portfolio.mini3d.label}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                  {text.ctaTitle}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {text.ctaDescription}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${portfolio.contact.email}`}
                  className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {text.email}
                </a>
                <a
                  href={portfolio.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                >
                  LinkedIn
                </a>
                <a
                  href={portfolio.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
                >
                  GitHub
                </a>
            </div>
          </div>
        </section>
      </main>

      {expandedProject ? (
        <div
          className="fixed inset-0 z-140 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closeProject}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-zinc-100 dark:bg-zinc-800">
              {expandedProjectImage ? (
                <Image
                  src={expandedProjectImage.src}
                  alt={expandedProjectImage.alt}
                  fill
                  className="object-cover"
                />
              ) : null}
              <button
                type="button"
                onClick={closeProject}
                className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black/70"
              >
                {locale === "pt" ? "Fechar" : "Close"}
              </button>
              {expandedProject && expandedProject.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousProjectImage}
                    aria-label={locale === "pt" ? "Imagem anterior" : "Previous image"}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/70"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNextProjectImage}
                    aria-label={locale === "pt" ? "Próxima imagem" : "Next image"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/70"
                  >
                    →
                  </button>
                </>
              ) : null}
              {expandedProject && expandedProject.images.length > 1 ? (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                  {expandedProjectImageIndex + 1}/{expandedProject.images.length}
                </div>
              ) : null}
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100">
                {expandedProject.title}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {expandedProject.description[locale]}
              </p>
              <div className="mt-6">
                <a
                  href={expandedProject.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {locale === "pt" ? "Ver repositório" : "View repository"}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
