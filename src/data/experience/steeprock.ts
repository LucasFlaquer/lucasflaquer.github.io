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
      "Refactored the UI with the composition pattern and extracted a reusable Storybook component library.",
      "Cut lint time from over 1 minute to 30 seconds on a large codebase by leading the ESLint to Biome migration.",
      "Delivered an internal admin application end to end (React, Material UI), giving internal teams one place to review and manage the data imported from CSV files.",
      "Coordinated releases and quality with QA teams in India.",
    ],
    pt: [
      "Refatorei a UI com o padrão de composição e extraí uma biblioteca de componentes reutilizáveis no Storybook.",
      "Reduzi o tempo de lint de mais de 1 minuto para 30 segundos em uma base de código grande, liderando a migração do ESLint para o Biome.",
      "Entreguei de ponta a ponta uma aplicação administrativa interna (React, Material UI), dando aos times internos um único lugar para revisar e gerenciar os dados importados de arquivos CSV.",
      "Coordenei releases e qualidade com times de QA na Índia.",
    ],
  },
  period: { en: "Sep 2025 – Feb 2026", pt: "set 2025 – fev 2026" },
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
