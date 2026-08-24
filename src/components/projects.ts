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

export const voixOffProjects: VideoProject[] = [
  {
    id: "creme-hydratante",
    name: "Crème hydratante",
    src: "/videos/projects/creme-hydratante.mp4",
    poster: "/images/projects/video/creme-hydratante.jpg",
    orientation: "portrait",
  },
  {
    id: "kit-5-en-1",
    name: "Kit 5 en 1",
    src: "/videos/projects/kit-5-en-1.mp4",
    poster: "/images/projects/video/kit-5-en-1.jpg",
    orientation: "portrait",
  },
  {
    id: "invention-marketing",
    name: "Invention marketing",
    src: "/videos/projects/invention-marketing.mp4",
    poster: "/images/projects/video/invention-marketing.jpg",
    orientation: "portrait",
  },
];

export type DesignProject = {
  id: string;
  name: string;
  client: string;
  src: string;
  orientation: "portrait" | "square";
};

export type PhotoProject = {
  id: string;
  name: string;
  client: string;
  src: string;
  orientation: "portrait" | "landscape";
};

export const photographyProjects: PhotoProject[] = [
  {
    id: "porte-eco",
    name: "Porte économique",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-eco.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-hopital",
    name: "Porte hôpital",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-hopital.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-mdf-1",
    name: "Porte MDF",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-mdf-1.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-mdf-2",
    name: "Porte MDF",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-mdf-2.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-entree-3",
    name: "Porte d'entrée",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-entree-3.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-entree-1",
    name: "Porte d'entrée",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-entree-1.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-entree-4",
    name: "Porte d'entrée",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-entree-4.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-entree-5",
    name: "Porte d'entrée",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-entree-5.jpg",
    orientation: "portrait",
  },
  {
    id: "porte-coupe-feu",
    name: "Porte coupe-feu",
    client: "El Djaouda",
    src: "/images/projects/photography/porte-coupe-feu.jpg",
    orientation: "portrait",
  },
  {
    id: "cuisine-mdf-1",
    name: "Cuisine MDF",
    client: "El Djaouda",
    src: "/images/projects/photography/cuisine-mdf-1.jpg",
    orientation: "landscape",
  },
  {
    id: "cuisines",
    name: "Cuisines",
    client: "El Djaouda",
    src: "/images/projects/photography/cuisines.jpg",
    orientation: "landscape",
  },
  {
    id: "cuisine-high-gloss",
    name: "Cuisine high gloss",
    client: "El Djaouda",
    src: "/images/projects/photography/cuisine-high-gloss.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-atelier",
    name: "Atelier CTS",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-atelier.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-cuve-rouge-1",
    name: "Cuve industrielle",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-cuve-rouge-1.jpg",
    orientation: "portrait",
  },
  {
    id: "cts-cuve-rouge-2",
    name: "Cuve CTS Chibane",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-cuve-rouge-2.jpg",
    orientation: "portrait",
  },
  {
    id: "cts-chibane-vp1000",
    name: "Chaudière Louiza VP 1000",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chibane-vp1000.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-chaudiere-blue-1",
    name: "Chaudière bleue",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chaudiere-blue-1.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-chaudiere-blue-2",
    name: "Chaudière bleue",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chaudiere-blue-2.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-chaudiere-blue-3",
    name: "Chaudière bleue",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chaudiere-blue-3.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-chaudiere-p1000",
    name: "Chaudière P 1000",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chaudiere-p1000.jpg",
    orientation: "landscape",
  },
  {
    id: "cts-chibane-louiza",
    name: "Louiza VP 8000",
    client: "CTS Chibane",
    src: "/images/projects/photography/cts-chibane-louiza.jpg",
    orientation: "landscape",
  },
  {
    id: "siesta-chips-palette",
    name: "Palette Siesta Chips",
    client: "DGA Production",
    src: "/images/projects/photography/siesta-chips-palette.jpg",
    orientation: "portrait",
  },
  {
    id: "silver-chips-chili-front",
    name: "Silver Chips Chili & Lime",
    client: "DGA Production",
    src: "/images/projects/photography/silver-chips-chili-front.jpg",
    orientation: "portrait",
  },
  {
    id: "silver-chips-chili-back",
    name: "Silver Chips — verso",
    client: "DGA Production",
    src: "/images/projects/photography/silver-chips-chili-back.jpg",
    orientation: "portrait",
  },
  {
    id: "silver-chips-chili-back-dga",
    name: "Silver Chips — nutrition",
    client: "DGA Production",
    src: "/images/projects/photography/silver-chips-chili-back-dga.jpg",
    orientation: "portrait",
  },
  {
    id: "silver-chips-oignon",
    name: "Silver Chips Crème & Oignon",
    client: "DGA Production",
    src: "/images/projects/photography/silver-chips-oignon.jpg",
    orientation: "portrait",
  },
  {
    id: "silver-chips-oignon-back",
    name: "Silver Chips — nutrition",
    client: "DGA Production",
    src: "/images/projects/photography/silver-chips-oignon-back.jpg",
    orientation: "portrait",
  },
  {
    id: "tubes-kraft",
    name: "Tubes kraft",
    client: "DGA Production",
    src: "/images/projects/photography/tubes-kraft.jpg",
    orientation: "portrait",
  },
  {
    id: "pom-dor-front",
    name: "Pom D'or Purée",
    client: "DGA Production",
    src: "/images/projects/photography/pom-dor-front.jpg",
    orientation: "portrait",
  },
  {
    id: "pom-dor-angle",
    name: "Pom D'or — packaging",
    client: "DGA Production",
    src: "/images/projects/photography/pom-dor-angle.jpg",
    orientation: "portrait",
  },
  {
    id: "pom-dor-back",
    name: "Pom D'or — recette",
    client: "DGA Production",
    src: "/images/projects/photography/pom-dor-back.jpg",
    orientation: "portrait",
  },
];

export const designProjects: DesignProject[] = [
  {
    id: "design-01",
    name: "Bilan TCR",
    client: "Grand livre",
    src: "/images/projects/design/design-01.png",
    orientation: "square",
  },
  {
    id: "design-02",
    name: "Présence AFAK",
    client: "AFAK ID",
    src: "/images/projects/design/design-02.png",
    orientation: "square",
  },
  {
    id: "design-03",
    name: "Devis final",
    client: "Nova Baies",
    src: "/images/projects/design/design-03.png",
    orientation: "portrait",
  },
  {
    id: "design-04",
    name: "Durée de pose",
    client: "Nova Baies",
    src: "/images/projects/design/design-04.png",
    orientation: "portrait",
  },
  {
    id: "design-05",
    name: "5 questions",
    client: "Nova Baies",
    src: "/images/projects/design/design-05.png",
    orientation: "portrait",
  },
  {
    id: "design-06",
    name: "Places du mois",
    client: "Nova Baies",
    src: "/images/projects/design/design-06.png",
    orientation: "portrait",
  },
  {
    id: "design-07",
    name: "Avant / Après",
    client: "Nova Baies",
    src: "/images/projects/design/design-07.png",
    orientation: "portrait",
  },
  {
    id: "design-08",
    name: "Pose & délais",
    client: "Nova Baies",
    src: "/images/projects/design/design-08.png",
    orientation: "portrait",
  },
  {
    id: "design-09",
    name: "Gamme produit",
    client: "Nova Baies",
    src: "/images/projects/design/design-09.png",
    orientation: "portrait",
  },
  {
    id: "design-10",
    name: "Mesure sur site",
    client: "Nova Baies",
    src: "/images/projects/design/design-10.png",
    orientation: "portrait",
  },
  {
    id: "design-11",
    name: "Univers produit",
    client: "Nova Baies",
    src: "/images/projects/design/design-11.png",
    orientation: "portrait",
  },
  {
    id: "design-12",
    name: "Écrit au contrat",
    client: "Nova Baies",
    src: "/images/projects/design/design-12.png",
    orientation: "portrait",
  },
  {
    id: "design-13",
    name: "Nos services",
    client: "Nova Baies",
    src: "/images/projects/design/design-13.png",
    orientation: "portrait",
  },
  {
    id: "design-14",
    name: "Qui sommes-nous",
    client: "Nova Baies",
    src: "/images/projects/design/design-14.png",
    orientation: "portrait",
  },
  {
    id: "design-15",
    name: "Campagne visuelle",
    client: "Nova Baies",
    src: "/images/projects/design/design-15.png",
    orientation: "portrait",
  },
  {
    id: "design-16",
    name: "Identité & offre",
    client: "Nova Baies",
    src: "/images/projects/design/design-16.png",
    orientation: "portrait",
  },
  {
    id: "design-17",
    name: "Journée entrepreneuriat",
    client: "AFAK ID",
    src: "/images/projects/design/design-17.png",
    orientation: "square",
  },
  {
    id: "design-18",
    name: "Offres spéciales",
    client: "AFAK ID",
    src: "/images/projects/design/design-18.png",
    orientation: "square",
  },
  {
    id: "design-20",
    name: "Présence campus",
    client: "AFAK ID",
    src: "/images/projects/design/design-20.png",
    orientation: "square",
  },
  {
    id: "design-21",
    name: "Open Days",
    client: "AFAK ID",
    src: "/images/projects/design/design-21.png",
    orientation: "square",
  },
];

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
    id: "drone-voix-off",
    name: "Drone & voix off",
    src: "/videos/projects/drone-voix-off.mp4",
    poster: "/images/projects/video/drone-voix-off.jpg",
    orientation: "landscape",
  },
  {
    id: "detaunet",
    name: "Detaunet",
    src: "/videos/projects/detaunet.mp4",
    poster: "/images/projects/video/detaunet.jpg",
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
  {
    id: "gs-immo",
    name: "GS Immo",
    src: "/videos/projects/gs-immo.mp4",
    poster: "/images/projects/video/gs-immo.jpg",
    orientation: "portrait",
  },
  {
    id: "reel-1",
    name: "Reel 1",
    src: "/videos/projects/reel-1.mp4",
    poster: "/images/projects/video/reel-1.jpg",
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
