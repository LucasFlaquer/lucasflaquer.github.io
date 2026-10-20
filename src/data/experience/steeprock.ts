import type { Role } from "@/types/content.ts";

export const steeprock: Role = {
  client: "SteepRock",
  company: "99x",
  context: {
    en: "AI-powered SaaS platform for the life sciences industry connecting doctors, organizations and hospitals.",
    pt: "Plataforma SaaS com IA para o setor de ciências da vida, conectando médicos, organizações e hospitais.",
  },
  employer: { en: "consultancy, PJ", pt: "consultoria, PJ" },
  headline: {
    en: "Refactored the UI with the composition pattern and extracted a reusable Storybook component library.",
    pt: "Refatorei a UI com o padrão de composição e extraí uma biblioteca de componentes reutilizáveis no Storybook.",
  },
  highlights: {
    en: [
      "Refactored the UI with the composition pattern, reducing console errors and extracting a reusable Storybook component library.",
      "Owned an internal administrative project end to end (React, Material UI).",
      "Led the migration from ESLint to Biome, significantly reducing lint time.",
      "Coordinated releases and quality with QA teams overseas (mostly in India).",
    ],
    pt: [
      "Refatorei a UI com o padrão de composição, reduzindo erros no console e extraindo uma biblioteca de componentes reutilizáveis no Storybook.",
      "Fui responsável de ponta a ponta por um projeto administrativo interno (React, Material UI).",
      "Liderei a migração do ESLint para o Biome, reduzindo bastante o tempo de lint.",
      "Coordenei releases e qualidade com times de QA no exterior (principalmente na Índia).",
    ],
  },
  period: { en: "Sep 2025 – Early 2026", pt: "set 2025 – início de 2026" },
  slug: "steeprock",
  stack: ["React", "Material UI", "Storybook", "Biome", "ESLint"],
  startYear: 2025,
  team: {
    en: "Teams across the US, Asia and Brazil",
    pt: "Times nos EUA, na Ásia e no Brasil",
  },
  title: { en: "Frontend Engineer", pt: "Engenheiro Frontend" },
  tracks: ["frontend"],
};
