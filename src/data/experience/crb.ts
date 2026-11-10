import type { Role } from "@/types/content.ts";

export const crb: Role = {
  company: "CRB Construtora",
  context: {
    en: "Institutional website and a custom content management system for a large construction company.",
    pt: "Site institucional e um sistema próprio de gestão de conteúdo para uma grande construtora.",
  },
  headline: {
    en: "Sole developer on the marketing team: built a CMS and a new institutional website from scratch in ~5 months.",
    pt: "Único desenvolvedor do time de marketing: construí um CMS e um novo site institucional do zero em ~5 meses.",
  },
  highlights: {
    en: [
      "Sole developer on the marketing team; built a CMS and a new institutional website from scratch in ~5 months (Laravel, React, TypeScript, MySQL), including the migration of existing content.",
      "Gave the marketing team autonomy to publish campaign banners, images and product information without developer involvement.",
      "Improved Lighthouse and accessibility scores on the new site.",
    ],
    pt: [
      "Único desenvolvedor do time de marketing; construí um CMS e um novo site institucional do zero em ~5 meses (Laravel, React, TypeScript, MySQL), incluindo a migração do conteúdo existente.",
      "Dei autonomia ao time de marketing para publicar banners de campanha, imagens e informações de produtos sem depender de desenvolvedores.",
      "Melhorei as notas de Lighthouse e acessibilidade do novo site.",
    ],
  },
  period: { en: "Dec 2019 – May 2021", pt: "dez 2019 – mai 2021" },
  slug: "crb-constructora",
  stack: ["React", "Laravel", "TypeScript", "MySQL"],
  startYear: 2019,
  title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
  tracks: ["frontend", "backend"],
};
