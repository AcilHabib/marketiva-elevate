export type ProjectItem = {
  id: string;
  name: string;
  /** Display hostname / label shown under the name */
  domain: string;
  url: string;
  logo: string;
};

export type VideoProject = {
  id: string;
  name: string;
  src: string;
  poster: string;
  orientation: "portrait" | "landscape";
};

export const videographyProjects: VideoProject[] = [
  {
    id: "design-interieur",
    name: "Design intérieur",
    src: "/videos/projects/design-interieur.mp4",
    poster: "/images/projects/video/design-interieur.jpg",
    orientation: "portrait",
  },
  {
    id: "ak-agency",
    name: "AK Agency",
    src: "/videos/projects/ak-agency.mp4",
    poster: "/images/projects/video/ak-agency.jpg",
    orientation: "landscape",
  },
  {
    id: "costa-azhar",
    name: "Costa Azhar",
    src: "/videos/projects/costa-azhar.mp4",
    poster: "/images/projects/video/costa-azhar.jpg",
    orientation: "landscape",
  },
  {
    id: "valise-musculation",
    name: "Valise de musculation",
    src: "/videos/projects/valise-musculation.mp4",
    poster: "/images/projects/video/valise-musculation.jpg",
    orientation: "portrait",
  },
  {
    id: "tadj-ben-aarab",
    name: "Tadj Ben Aarab",
    src: "/videos/projects/tadj-ben-aarab.mp4",
    poster: "/images/projects/video/tadj-ben-aarab.jpg",
    orientation: "portrait",
  },
  {
    id: "burger",
    name: "Burger",
    src: "/videos/projects/burger.mp4",
    poster: "/images/projects/video/burger.jpg",
    orientation: "portrait",
  },
  {
    id: "video-global",
    name: "Vidéo globale",
    src: "/videos/projects/video-global.mp4",
    poster: "/images/projects/video/video-global.jpg",
    orientation: "portrait",
  },
];

export const softwareProjects: ProjectItem[] = [
  {
    id: "benchallal",
    name: "Benchallal Immo",
    domain: "benchallal-immo.com",
    url: "https://www.benchallal-immo.com/",
    logo: "/images/projects/benchallal-immo.png",
  },
  {
    id: "gsimmo",
    name: "GS Immo",
    domain: "eurlgsimmo.com",
    url: "https://www.eurlgsimmo.com/",
    logo: "/images/projects/gs-immo.png",
  },
  {
    id: "hamidimmo",
    name: "Hamid Immobilier",
    domain: "hamidimmobilier.com",
    url: "https://hamidimmobilier.com/",
    logo: "/images/projects/hamid-immobilier.png",
  },
  {
    id: "eldjaouda",
    name: "El Djaouda Doors",
    domain: "eldjaoudadoors.com",
    url: "https://el-djaouda-doors.htrans.workers.dev/",
    logo: "/images/projects/el-djaouda.png",
  },
  {
    id: "novabaies",
    name: "Nova Baies",
    domain: "novabaiesdz.com",
    url: "https://novabaiesdz.com",
    logo: "/images/projects/nova-baies.png",
  },
];
