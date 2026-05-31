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

/**
 * Service & team text lives in the i18n dictionary (src/i18n/translations.ts),
 * keyed by the `id` fields below. Here we only keep non-translatable data:
 * icons, ordering, featured flag, member names and photos.
 */

export type Service = {
  id: string;
  icon: LucideIcon;
  featured?: boolean;
  hasItems?: boolean;
};

export const services: Service[] = [
  { id: "web", icon: Code2, featured: true },
  { id: "brand", icon: Palette },
  { id: "content", icon: Camera },
  { id: "media", icon: ShoppingCart },
  { id: "social", icon: Share2 },
  { id: "sponsor", icon: Megaphone },
  { id: "print", icon: Printer, hasItems: true },
  { id: "storefront", icon: Store, hasItems: true },
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
