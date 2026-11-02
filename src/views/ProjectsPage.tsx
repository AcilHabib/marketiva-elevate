"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/i18n/ThemeProvider";
import { cn } from "@/lib/utils";
import type { AdminProject } from "@/admin/types";

type LiveSectionId = "software" | "videography" | "design" | "photography" | "voixOff" | "prints";

type VideoView = {
  id: string;
  name: string;
  src: string;
  poster: string;
  orientation: "portrait" | "landscape";
};

type ImageView = {
  id: string;
  name: string;
  src: string;
  orientation: "portrait" | "landscape" | "square";
};

type SoftwareView = {
  id: string;
  name: string;
  domain: string;
  url: string;
  logo: string;
};

const liveSections: { id: LiveSectionId; icon: LucideIcon }[] = [
  { id: "software", icon: Code2 },
  { id: "videography", icon: Clapperboard },
  { id: "design", icon: Palette },
  { id: "photography", icon: Camera },
  { id: "voixOff", icon: AudioLines },
  { id: "prints", icon: Printer },
];

const SERVICE_FILTERS: Record<string, { live: LiveSectionId[]; showUpcoming: boolean }> = {
  brand: { live: ["design"], showUpcoming: false },
  content: { live: ["videography", "voixOff"], showUpcoming: false },
  web: { live: ["software"], showUpcoming: false },
  photography: { live: ["photography"], showUpcoming: false },
  print: { live: ["prints"], showUpcoming: false },
};

function toSoftware(p: AdminProject): SoftwareView | null {
  if (p.category !== "software" || !p.logoUrl || !p.linkUrl) return null;
  return {
    id: p.id,
    name: p.name,
    domain: p.description || p.linkUrl,
    url: p.linkUrl,
    logo: p.logoUrl,
  };
}

function toVideo(p: AdminProject): VideoView | null {
  if ((p.category !== "videography" && p.category !== "voixOff") || !p.videoUrl) return null;
  return {
    id: p.id,
    name: p.name,
    src: p.videoUrl,
    poster: p.thumbnailUrl || "",
    orientation: p.orientation === "landscape" ? "landscape" : "portrait",
  };
}

function toImage(p: AdminProject): ImageView | null {
  if (
    (p.category !== "design" && p.category !== "photography" && p.category !== "prints") ||
    !p.imageUrl
  ) {
    return null;
  }
  return {
    id: p.id,
    name: p.name,
    src: p.imageUrl,
    orientation: p.orientation ?? "portrait",
  };
}

function sectionCopy(
  t: ReturnType<typeof useI18n>["t"],
  id: LiveSectionId,
): { title: string; description: string } {
  if (id === "prints") return t.projectsPage.sections.impression;
  return t.projectsPage.sections[id];
}

export function ProjectsPage({ projects }: { projects: AdminProject[] }) {
  const { t } = useI18n();
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const service = serviceParam && serviceParam in SERVICE_FILTERS ? serviceParam : undefined;
  const filter = service ? SERVICE_FILTERS[service] : null;

  const byCategory = useMemo(() => {
    const software = projects.map(toSoftware).filter(Boolean) as SoftwareView[];
    const videography = projects
      .filter((p) => p.category === "videography")
      .map(toVideo)
      .filter(Boolean) as VideoView[];
    const voixOff = projects
      .filter((p) => p.category === "voixOff")
      .map(toVideo)
      .filter(Boolean) as VideoView[];
    const design = projects
      .filter((p) => p.category === "design")
      .map(toImage)
      .filter(Boolean) as ImageView[];
    const photography = projects
      .filter((p) => p.category === "photography")
      .map(toImage)
      .filter(Boolean) as ImageView[];
    const prints = projects
      .filter((p) => p.category === "prints")
      .map(toImage)
      .filter(Boolean) as ImageView[];
    return { software, videography, voixOff, design, photography, prints };
  }, [projects]);

  const visibleLive = (
    filter ? liveSections.filter((s) => filter.live.includes(s.id)) : liveSections
  ).filter((section) => {
    if (section.id === "prints") return byCategory.prints.length > 0;
    return true;
  });

  const showUpcomingPrints =
    filter?.showUpcoming === true ||
    (!filter && byCategory.prints.length === 0 && (!service || service === "print"));

  const [activeVideo, setActiveVideo] = useState<VideoView | null>(null);
  const [activeDesign, setActiveDesign] = useState<ImageView | null>(null);
  const [activePhoto, setActivePhoto] = useState<ImageView | null>(null);

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

          {service ? (
            <Reveal delay={0.05} className="mt-6 flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {t.projectsPage.viewAll}
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
            {visibleLive.map((section, i) => {
              const copy = sectionCopy(t, section.id);
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
                        {byCategory.software.map((project, pi) => (
                          <Reveal key={project.id} delay={0.04 + pi * 0.05}>
                            <ProjectCard project={project} visitLabel={t.projectsPage.visitSite} />
                          </Reveal>
                        ))}
                      </div>
                    ) : section.id === "videography" ? (
                      <VideographyGrid
                        videos={byCategory.videography}
                        playLabel={t.projectsPage.playVideo}
                        onPlay={setActiveVideo}
                      />
                    ) : section.id === "voixOff" ? (
                      <VoixOffGrid
                        videos={byCategory.voixOff}
                        playLabel={t.projectsPage.playVideo}
                        onPlay={setActiveVideo}
                      />
                    ) : section.id === "photography" ? (
                      <PhotographyGrid
                        photos={byCategory.photography}
                        viewLabel={t.projectsPage.viewPhoto}
                        onOpen={setActivePhoto}
                      />
                    ) : section.id === "prints" ? (
                      <DesignGrid
                        designs={byCategory.prints}
                        viewLabel={t.projectsPage.viewDesign}
                        onOpen={setActiveDesign}
                      />
                    ) : (
                      <DesignGrid
                        designs={byCategory.design}
                        viewLabel={t.projectsPage.viewDesign}
                        onOpen={setActiveDesign}
                      />
                    )}
                  </section>
                </Reveal>
              );
            })}

            {showUpcomingPrints ? <UpcomingStudios /> : null}
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
          <DialogDescription className="sr-only">{t.projectsPage.playVideo}</DialogDescription>
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

      <Dialog
        open={activeDesign !== null}
        onOpenChange={(open) => {
          if (!open) setActiveDesign(null);
        }}
      >
        <DialogContent
          className={cn(
            "gap-0 overflow-hidden border-border bg-background p-0 shadow-[var(--shadow-elegant)] sm:rounded-2xl",
            activeDesign?.orientation === "portrait"
              ? "w-[min(92vw,26rem)] max-w-[26rem]"
              : "w-[min(92vw,34rem)] max-w-[34rem]",
          )}
        >
          <DialogTitle className="sr-only">
            {activeDesign?.name ?? t.projectsPage.viewDesign}
          </DialogTitle>
          <DialogDescription className="sr-only">{t.projectsPage.viewDesign}</DialogDescription>
          {activeDesign ? (
            <img
              src={activeDesign.src}
              alt={activeDesign.name}
              className="max-h-[80vh] w-full object-contain bg-secondary/30"
            />
          ) : null}
        </DialogContent>
      </Dialog>

      <Dialog
        open={activePhoto !== null}
        onOpenChange={(open) => {
          if (!open) setActivePhoto(null);
        }}
      >
        <DialogContent
          className={cn(
            "gap-0 overflow-hidden border-border bg-background p-0 shadow-[var(--shadow-elegant)] sm:rounded-2xl",
            activePhoto?.orientation === "portrait"
              ? "w-[min(92vw,26rem)] max-w-[26rem]"
              : "w-[min(94vw,48rem)] max-w-[48rem]",
          )}
        >
          <DialogTitle className="sr-only">
            {activePhoto?.name ?? t.projectsPage.viewPhoto}
          </DialogTitle>
          <DialogDescription className="sr-only">{t.projectsPage.viewPhoto}</DialogDescription>
          {activePhoto ? (
            <img
              src={activePhoto.src}
              alt={activePhoto.name}
              className="max-h-[80vh] w-full object-contain bg-black"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function UpcomingStudios() {
  const { t } = useI18n();
  const copy = t.projectsPage.sections.impression;

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

          <section
            id="impression"
            className="group relative min-h-[15.5rem] overflow-hidden scroll-mt-28 p-7 sm:min-h-[17rem] sm:p-8"
          >
            <span
              aria-hidden
              dir="ltr"
              className="pointer-events-none absolute -bottom-3 end-3 font-display text-[6.5rem] font-semibold leading-none tracking-tight text-foreground/[0.045] transition-transform duration-700 group-hover:-translate-y-1 sm:text-[7.5rem]"
            >
              01
            </span>
            <div className="relative flex h-full min-h-[13rem] flex-col justify-between sm:min-h-[14.5rem]">
              <Printer
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
        </div>
      </div>
    </Reveal>
  );
}

function VideographyGrid({
  videos,
  playLabel,
  onPlay,
}: {
  videos: VideoView[];
  playLabel: string;
  onPlay: (video: VideoView) => void;
}) {
  const landscape = videos.filter((v) => v.orientation === "landscape");
  const portrait = videos.filter((v) => v.orientation === "portrait");

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {landscape.map((video, i) => (
          <Reveal key={video.id} delay={0.04 + i * 0.06}>
            <VideoCard
              video={video}
              title={video.name || playLabel}
              playLabel={playLabel}
              onPlay={() => onPlay(video)}
            />
          </Reveal>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {portrait.map((video, i) => (
          <Reveal key={video.id} delay={0.08 + i * 0.05}>
            <VideoCard
              video={video}
              title={video.name || playLabel}
              playLabel={playLabel}
              onPlay={() => onPlay(video)}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function VoixOffGrid({
  videos,
  playLabel,
  onPlay,
}: {
  videos: VideoView[];
  playLabel: string;
  onPlay: (video: VideoView) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {videos.map((video, i) => (
        <Reveal key={video.id} delay={0.04 + i * 0.06}>
          <VideoCard
            video={video}
            title={video.name || playLabel}
            playLabel={playLabel}
            onPlay={() => onPlay(video)}
          />
        </Reveal>
      ))}
    </div>
  );
}

function DesignGrid({
  designs,
  viewLabel,
  onOpen,
}: {
  designs: ImageView[];
  viewLabel: string;
  onOpen: (design: ImageView) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {designs.map((design, i) => (
        <Reveal key={design.id} delay={0.03 + (i % 8) * 0.04}>
          <DesignCard design={design} viewLabel={viewLabel} onOpen={() => onOpen(design)} />
        </Reveal>
      ))}
    </div>
  );
}

function PhotographyGrid({
  photos,
  viewLabel,
  onOpen,
}: {
  photos: ImageView[];
  viewLabel: string;
  onOpen: (photo: ImageView) => void;
}) {
  const portraits = photos.filter((p) => p.orientation === "portrait");
  const landscapes = photos.filter((p) => p.orientation !== "portrait");

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {portraits.map((photo, i) => (
          <Reveal key={photo.id} delay={0.03 + (i % 8) * 0.04}>
            <PhotoCard photo={photo} viewLabel={viewLabel} onOpen={() => onOpen(photo)} />
          </Reveal>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {landscapes.map((photo, i) => (
          <Reveal key={photo.id} delay={0.08 + i * 0.05}>
            <PhotoCard photo={photo} viewLabel={viewLabel} onOpen={() => onOpen(photo)} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, visitLabel }: { project: SoftwareView; visitLabel: string }) {
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
  title,
  playLabel,
  onPlay,
}: {
  video: VideoView;
  title: string;
  playLabel: string;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`${playLabel}: ${title}`}
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
            {title}
          </span>
        </span>
      </span>
    </button>
  );
}

function DesignCard({
  design,
  viewLabel,
  onOpen,
}: {
  design: ImageView;
  viewLabel: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={viewLabel}
      className="group relative block w-full overflow-hidden rounded-2xl text-start shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <img
        src={design.src}
        alt={design.name}
        loading="lazy"
        className={cn(
          "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
          design.orientation === "portrait" ? "aspect-[4/5]" : "aspect-square",
        )}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}

function PhotoCard({
  photo,
  viewLabel,
  onOpen,
}: {
  photo: ImageView;
  viewLabel: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={viewLabel}
      className="group relative block w-full overflow-hidden rounded-2xl bg-black text-start shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <img
        src={photo.src}
        alt={photo.name}
        loading="lazy"
        className={cn(
          "w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]",
          photo.orientation === "portrait" ? "aspect-[3/5]" : "aspect-video",
        )}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}
