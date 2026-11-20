import type { ImageMetadata } from "astro";
import launcherImg from "../assets/projects/blockforsalelauncher-profile.png";
import webImg from "../assets/projects/BlockForSaleWeb/BlockForSaleWeb-Profile.png"
import genesgymImg from "../assets/projects/GenesGym/landing_page_icon.png"

export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image?: ImageMetadata;
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "blockforsale-launcher",
    title: "Block For Sale Launcher",
    description:
      "Launcher personalizado de Minecraft Java Edition con instancias personalizadas, hecho para la gestión de eventos.",
    details:
      "Aquí cuentas con más detalle qué construiste, por qué lo hiciste, qué retos tuviste y qué aprendiste.",
    tags: ["Electron", "JavaScript", "CSS"],
    image: launcherImg,
    repo: "https://github.com/PaioAr/blockforsale-launcher",
  },
  {
    slug: "blockforsale-web",
    title: "Block For Sale Web",
    description:
      "Página web para promocionar los eventos de la comunidad de Block For Sale y brindar información sobre ellos.",
    details: "Detalles completos del segundo proyecto.",
    tags: ["Astro", "CSS", "JavaScript"],
    image: webImg,
    repo: "https://github.com/PaioAr/blockforsale-of-web",
  },
  {
    slug: "genesgym",
    title: "Genes Gym",
    description:
      "Página web para la comunidad de Genes Gym, con información sobre los entrenamientos y eventos.",
    details: "Detalles completos del tercer proyecto.",
    tags: ["Astro", "CSS", "JavaScript", "SQL", "PHP", "React", "TypeScript"],
    image: genesgymImg,
    repo: "https://github.com/PaioAr/GenesGym",
  },
];