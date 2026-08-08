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

export type Client = {
  id: string;
  name: string;
  logo?: string;
};

export const clients: Client[] = [
  { id: "detaunet", name: "Detaunet", logo: "/images/clients/detaunet.png" },
  { id: "afek2d", name: "Afek 2d", logo: "/images/clients/afek-2d.png" },
  { id: "prestige", name: "Prestige Setif 19" },
  { id: "alameen", name: "شركة العلميين الفلسطينية", logo: "/images/clients/alameen.png" },
  { id: "samisport", name: "Sami Sport", logo: "/images/clients/sami-sport.png" },
  { id: "dano", name: "Dano Nuts", logo: "/images/clients/dano-nuts.png" },
  { id: "eldjaouda", name: "El Djaouda Doors Setif", logo: "/images/clients/el-djaouda-doors.png" },
  { id: "starrnix", name: "Star Ronix", logo: "/images/clients/star-ronix.png" },
  { id: "hamid", name: "Hamid Imou", logo: "/images/clients/hamid-imou.png" },
  { id: "tadj", name: "Tadj Ben Arab", logo: "/images/clients/tadj-ben-arab.png" },
  { id: "tasfrites", name: "T'as la Frites", logo: "/images/clients/tas-la-frites.png" },
  { id: "emran", name: "Emran Logistics", logo: "/images/clients/emran-logistics.png" },
  { id: "lostacos", name: "Los Tacos", logo: "/images/clients/los-tacos.png" },
  { id: "novatech", name: "Nova Tech", logo: "/images/clients/nova-tech.png" },
  { id: "oodeksoo", name: "Oodeksoo", logo: "/images/clients/oodeksoo.png" },
  { id: "afiri", name: "Afiri", logo: "/images/clients/afiri.png" },
  { id: "3pindustrie", name: "3P Industrie", logo: "/images/clients/3p-industrie.png" },
  { id: "pizzaroute66", name: "Pizza Route 66", logo: "/images/clients/pizza-route-66.png" },
  { id: "benchallal", name: "Benchallal Immobilier", logo: "/images/clients/benchallal-immobilier.png" },
  { id: "g9immo", name: "EURL G9 IMMO Promotion Immobiliere", logo: "/images/clients/g9-immo.png" },
  { id: "liazidamrani", name: "Liazid Amrani Promotion Immobiliere", logo: "/images/clients/liazid-amrani.png" },
];

export type Member = {
  id: string;
  name: string;
  photo?: string;
};

export const team: Member[] = [
  { id: "assil", name: "Assil Habib", photo: "/images/team/assil-habib.png" },
  { id: "malik", name: "Malik Benabid", photo: "/images/team/malik-benabid.png" },
  { id: "mohamed", name: "Mohamed Derbal", photo: "/images/team/mohamed-derbal.png" },
  { id: "younes", name: "Younes Tarcha", photo: "/images/team/younes-tarcha.png" },
  { id: "roua", name: "Kassa Baghedouch Roua", photo: "/images/team/kassa-baghedouch-roua.png" },
  { id: "aladdin", name: "Aichouche Aladdin", photo: "/images/team/aladdin-aichouche.png" },
  { id: "zaki", name: "Zaki Bellout", photo: "/images/team/zaki-bellout.png" },
  { id: "abdenour", name: "Douamene Abdenour", photo: "/images/team/douamene-abdenour.png" },
  { id: "adem", name: "Cherfaoui Adem", photo: "/images/team/cherfaoui-adem.png" },
  { id: "halla", name: "Halla Djamla", photo: "/images/team/halla-djamla.png" },
  { id: "ayoub", name: "Ayoub Nasri", photo: "/images/team/ayoub-nasri.png" },
  { id: "aymen", name: "Aymen Gouga", photo: "/images/team/aymen-gouga.png" },
  { id: "salma", name: "Mami Salma", photo: "/images/team/mami-salma.png" },
  { id: "imene", name: "Imene Hareng", photo: "/images/team/imene-hareng.png" },
  { id: "amine", name: "Amine Chettih", photo: "/images/team/amine-chettih.png" },
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
