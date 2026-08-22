import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  AudioLines,
  Camera,
  Code2,
  Clapperboard,
  Palette,
  Play,
  Printer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, SectionHeading, GradientTitle } from "@/components/primitives";
import {
  softwareProjects,
  videographyProjects,
  type ProjectItem,
  type VideoProject,
} from "@/components/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { cn } from "@/lib/utils";

const liveSections = [
  { id: "software" as const, icon: Code2 },
  { id: "videography" as const, icon: Clapperboard },
];

const upcomingSections: {
  id: "design" | "impression" | "photography" | "voixOff";
  icon: LucideIcon;
}[] = [
  { id: "design", icon: Palette },
  { id: "impression", icon: Printer },
  { id: "photography", icon: Camera },
  { id: "voixOff", icon: AudioLines },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Algeria Marketiva — Our Projects" },
      {
        name: "description",
        content:
          "Explore Algeria Marketiva projects across software, videography and design.",
      },
      { property: "og:title", content: "Algeria Marketiva — Our Projects" },
      {
        property: "og:description",
        content:
          "A showcase of our work across software, videography and design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/logo-full.png" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  return (
    <div className="relative overflow-x-hidden bg-background">
      <Navbar />
      <main className="section-pad container-px relative pt-[clamp(7rem,14vw,10rem)]">
        <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-32 h-64 w-64 rounded-full bg-[oklch(0.55_0.16_262)]/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.projectsPage.eyebrow}
            title={<GradientTitle {...t.projectsPage.title} />}
            subtitle={t.projectsPage.subtitle}
          />

          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
            {liveSections.map((section, i) => {
              const copy = t.projectsPage.sections[section.id];
              const Icon = section.icon;

              return (
                <Reveal key={section.id} delay={i * 0.08}>
                  <section id={section.id} className="scroll-mt-28">
                    <div className="mb-6 flex items-start gap-4 sm:mb-8">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                        <Icon size={22} strokeWidth={1.75} />
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                          {copy.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {copy.description}
                        </p>
                      </div>
                    </div>

                    {section.id === "software" ? (
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {softwareProjects.map((project, pi) => (
                          <Reveal key={project.id} delay={0.04 + pi * 0.05}>
                            <ProjectCard
                              project={project}
                              visitLabel={t.projectsPage.visitSite}
                            />
                          </Reveal>
                        ))}
                      </div>
                    ) : (
                      <VideographyGrid
                        playLabel={t.projectsPage.playVideo}
                        onPlay={setActiveVideo}
                      />
                    )}
                  </section>
                </Reveal>
              );
            })}

            <UpcomingStudios />
          </div>

          <Reveal delay={0.3} className="mt-16 text-center sm:mt-20">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
      <Toaster theme={theme} position="top-center" richColors />

      <Dialog
        open={activeVideo !== null}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
      >
        <DialogContent
          className={cn(
            "gap-0 overflow-hidden border-0 bg-black p-0 text-white shadow-[var(--shadow-elegant)] sm:rounded-2xl [&>button]:text-white [&>button]:opacity-80 hover:[&>button]:opacity-100",
            activeVideo?.orientation === "portrait"
              ? "w-[min(92vw,24rem)] max-w-[24rem]"
              : "w-[min(94vw,56rem)] max-w-[56rem]",
          )}
        >
          <DialogTitle className="sr-only">
            {activeVideo?.name ?? t.projectsPage.playVideo}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t.projectsPage.playVideo}
          </DialogDescription>
          {activeVideo ? (
            <video
              key={activeVideo.id}
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className={cn(
                "w-full bg-black",
                activeVideo.orientation === "portrait"
                  ? "max-h-[85vh] object-contain"
                  : "aspect-video object-contain",
              )}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function UpcomingStudios() {
  const { t } = useI18n();

  return (
    <Reveal delay={0.16}>
      <div>
        <div className="mb-6 sm:mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {t.projectsPage.upcoming.eyebrow}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.projectsPage.upcoming.subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border">
          <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl soon-glow" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[var(--gold)]/15 blur-3xl soon-glow [animation-delay:-4s]" />

          <div className="relative grid sm:grid-cols-2">
            {upcomingSections.map((section, i) => {
              const copy = t.projectsPage.sections[section.id];
              const Icon = section.icon;
              const index = String(i + 1).padStart(2, "0");

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "group relative min-h-[15.5rem] overflow-hidden scroll-mt-28 p-7 sm:min-h-[17rem] sm:p-8",
                    i % 2 === 0 && "sm:border-e sm:border-border",
                    i < 2 && "border-b border-border",
                  )}
                >
                  <span
                    aria-hidden
                    dir="ltr"
                    className="pointer-events-none absolute -bottom-3 end-3 font-display text-[6.5rem] font-semibold leading-none tracking-tight text-foreground/[0.045] transition-transform duration-700 group-hover:-translate-y-1 sm:text-[7.5rem]"
                  >
                    {index}
                  </span>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ backgroundImage: "var(--gradient-sheen)" }}
                  />

                  <div className="relative flex h-full min-h-[13rem] flex-col justify-between sm:min-h-[14.5rem]">
                    <Icon
                      size={22}
                      strokeWidth={1.6}
                      className="text-primary transition-transform duration-500 group-hover:translate-x-0.5"
                    />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--gold)]">
                        {t.projectsPage.comingSoon}
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                        {copy.title}
                      </h2>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {copy.description}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function VideographyGrid({
  playLabel,
  onPlay,
}: {
  playLabel: string;
  onPlay: (video: VideoProject) => void;
}) {
  const landscape = videographyProjects.filter((v) => v.orientation === "landscape");
  const portrait = videographyProjects.filter((v) => v.orientation === "portrait");

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {landscape.map((video, i) => (
          <Reveal key={video.id} delay={0.04 + i * 0.06}>
            <VideoCard video={video} playLabel={playLabel} onPlay={() => onPlay(video)} />
          </Reveal>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {portrait.map((video, i) => (
          <Reveal key={video.id} delay={0.08 + i * 0.05}>
            <VideoCard video={video} playLabel={playLabel} onPlay={() => onPlay(video)} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  visitLabel,
}: {
  project: ProjectItem;
  visitLabel: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass flex h-full flex-col rounded-2xl border border-border p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--shadow-elegant)] sm:p-6"
    >
      <div className="flex h-24 items-center justify-center rounded-xl bg-secondary/40 px-4 py-3 sm:h-28">
        <img
          src={project.logo}
          alt={project.name}
          loading="lazy"
          className="max-h-16 max-w-full object-contain sm:max-h-[4.5rem]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground" dir="ltr">
          {project.domain}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
          {visitLabel}
          <ArrowUpRight size={15} className="shrink-0" />
        </span>
      </div>
    </a>
  );
}

function VideoCard({
  video,
  playLabel,
  onPlay,
}: {
  video: VideoProject;
  playLabel: string;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`${playLabel}: ${video.name}`}
      className="group relative block w-full overflow-hidden rounded-2xl text-start"
    >
      <span
        className={cn(
          "relative block overflow-hidden bg-black",
          video.orientation === "landscape" ? "aspect-video" : "aspect-[9/16]",
        )}
      >
        <img
          src={video.poster}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 group-hover:scale-110">
          <Play size={22} fill="currentColor" className="ml-0.5" />
        </span>
        <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            {video.name}
          </span>
        </span>
      </span>
    </button>
  );
}
