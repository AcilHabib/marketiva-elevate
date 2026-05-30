import {
  Megaphone,
  Code2,
  Camera,
  ShoppingCart,
  Share2,
  Palette,
  Printer,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Bespoke, high-performance websites and applications engineered for speed, scale and conversion.",
    featured: true,
  },
  {
    icon: Palette,
    title: "Brand Identity & Graphic Design",
    description:
      "Distinctive logos, visual systems and brand guidelines that command attention and build trust.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Cinematic photography and videography that tells your brand story with cinematic polish.",
  },
  {
    icon: ShoppingCart,
    title: "Media Buying for E-commerce",
    description:
      "Data-driven paid campaigns that turn ad spend into measurable, profitable growth.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategy, content and community management that keeps your audience engaged and growing.",
  },
  {
    icon: Megaphone,
    title: "Sponsoring",
    description:
      "Strategic sponsorships and partnerships that amplify reach and elevate brand prestige.",
  },
  {
    icon: Printer,
    title: "Printing Services",
    description: "Premium print production with refined finishing across every format.",
    items: [
      "Business cards",
      "Trifold brochures",
      "Folders",
      "Flyers",
      "Catalogs",
      "Notebooks",
      "Branded shirts",
      "Badges",
      "Custom pens",
    ],
  },
  {
    icon: Store,
    title: "Storefront Branding",
    description: "Turn physical spaces into landmark brand experiences.",
    items: ["Window dressing", "Aluco bond signage"],
  },
];

export const clients: string[] = [
  "Detaunet",
  "Afek 2d",
  "Prestige Setif 19",
  "شركة العلميين الفلسطينية",
  "Sami Sport",
  "Dano Nuts",
  "El Djaouda Doors Setif",
  "AK Agency",
  "Star Ronix",
  "Hamid Imou",
  "Tadj Ben Arab",
  "T'as la Frites",
  "Emran Logistics",
];

export type Member = {
  name: string;
  role: string;
  photo?: string;
};

export const team: Member[] = [
  { name: "Assil Habib", role: "Full Stack Developer" },
  { name: "Mohamed Derbal", role: "Media Buying" },
  { name: "Tercha Younes", role: "Commercial Manager & Animator" },
  { name: "Aichouche Aladdin", role: "Infographist, Designer & 3D Designer" },
  { name: "Abdenour", role: "Video Editing & Motion Graphics" },
  { name: "Halla Rdjm", role: "Community Manager" },
  { name: "Ayoub Nasri", role: "Sponsoring" },
  { name: "Aymen Gouga", role: "Printing" },
];
