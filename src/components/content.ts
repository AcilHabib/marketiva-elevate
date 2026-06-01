import {
  Megaphone,
  Code2,
  Camera,
  TrendingUp,
  Share2,
  Palette,
  Printer,
  Clapperboard,
  Users,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Service & team text lives in the i18n dictionary (src/i18n/translations.ts),
 * keyed by the `id` fields below. Here we only keep non-translatable data:
 * icons, ordering, featured flag, member names and photos.
 */

export type Service = {
  id: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  { id: "media", icon: TrendingUp, featured: true },
  { id: "brand", icon: Palette },
  { id: "content", icon: Clapperboard },
  { id: "photography", icon: Camera },
  { id: "platforms", icon: Share2 },
  { id: "web", icon: Code2 },
  { id: "community", icon: Users },
  { id: "print", icon: Printer },
  { id: "sponsor", icon: Handshake },
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
  id: string;
  name: string;
  photo?: string;
};

export const team: Member[] = [
  { id: "assil", name: "Assil Habib" },
  { id: "mohamed", name: "Mohamed Derbal" },
  { id: "younes", name: "Tercha Younes" },
  { id: "aladdin", name: "Aichouche Aladdin" },
  { id: "abdenour", name: "Abdenour" },
  { id: "halla", name: "Halla Rdjm" },
  { id: "ayoub", name: "Ayoub Nasri" },
  { id: "aymen", name: "Aymen Gouga" },
];

export type TestimonialMeta = {
  id: string;
  avatarIndex: number;
};

export const testimonialsMeta: TestimonialMeta[] = [
  { id: "t1", avatarIndex: 2 },
  { id: "t2", avatarIndex: 5 },
  { id: "t3", avatarIndex: 1 },
  { id: "t4", avatarIndex: 4 },
  { id: "t5", avatarIndex: 3 },
  { id: "t6", avatarIndex: 0 },
];
