import type { Role } from "@/types/content.ts";

export const catho: Role = {
  company: "Catho",
  context: {
    en: "Recruiter management platform at Catho (Seek group).",
    pt: "Plataforma de gestão para recrutadores na Catho (grupo Seek).",
  },
  headline: {
    en: "+30% registered companies from a rebuilt registration flow, validated by a 15-day A/B test.",
    pt: "+30% de empresas cadastradas com um fluxo de cadastro reconstruído e validado por um teste A/B de 15 dias.",
  },
  highlights: {
    en: [
      "Rebuilt the company registration flow end to end (frontend and backend), simplifying the form and speeding up the journey; a 15-day A/B test against the legacy flow showed +30% completed registrations.",
      "Built Node.js AWS Lambda functions that automatically checked the eligibility of hundreds of companies per day (valid CNPJ, email and phone blacklists), replacing manual validation.",
      "Implemented SSR in Next.js, aggregating calls to an external microservice on the server to improve page performance.",
      "Migrated a legacy scheduled-cancellations system to an Express service and maintained APIs backed by a Redis cache.",
      "Cut a 100+ test frontend suite from 3 to 1.5 minutes by migrating from Jest to Vite, and set up the team's CI pipeline (unit and E2E tests, coverage gates, typecheck, lint).",
      "Contributed reusable components to the company design system, adopted by another product team.",
      "Frontend reference for the team: led library and code-organization decisions, reviewed PRs, and mentored a junior developer who was promoted to mid-level.",
    ],
    pt: [
      "Reconstruí de ponta a ponta o fluxo de cadastro de empresas (frontend e backend), simplificando o formulário e acelerando a jornada; um teste A/B de 15 dias contra o fluxo legado mostrou +30% de cadastros concluídos.",
      "Construí funções AWS Lambda em Node.js que verificavam automaticamente a elegibilidade de centenas de empresas por dia (CNPJ válido, blacklists de e-mail e telefone), substituindo a validação manual.",
      "Implementei SSR no Next.js, agregando no servidor as chamadas a um microsserviço externo para melhorar a performance das páginas.",
      "Migrei um sistema legado de cancelamentos agendados para um serviço Express e mantive APIs com cache em Redis.",
      "Reduzi uma suíte de mais de 100 testes de frontend de 3 para 1,5 minuto migrando do Jest para o Vite, e montei o pipeline de CI do time (testes unitários e E2E, gates de cobertura, typecheck, lint).",
      "Contribuí com componentes reutilizáveis para o design system da empresa, adotados por outro time de produto.",
      "Referência de frontend do time: liderei decisões de bibliotecas e organização de código, revisei PRs e mentorei um desenvolvedor júnior que foi promovido a pleno.",
    ],
  },
  period: { en: "Aug 2022 – Apr 2025", pt: "ago 2022 – abr 2025" },
  slug: "catho",
  stack: [
    "Next.js",
    "Node.js",
    "AWS",
    "Express",
    "Redis",
    "Jest",
    "Vite",
    "A/B testing",
  ],
  startYear: 2022,
  team: {
    en: "A tech lead, a backend developer, a junior developer and a PO",
    pt: "Um tech lead, um desenvolvedor backend, um desenvolvedor júnior e um PO",
  },
  title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
  tracks: ["frontend", "backend"],
};
