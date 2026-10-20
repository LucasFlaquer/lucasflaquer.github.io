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
      "Rebuilt the company registration flow (frontend and backend) and ran a 15-day A/B test against the legacy flow, resulting in +30% registered companies.",
      "Implemented SSR in Next.js, aggregating calls to an external microservice on the server for performance while keeping the Lighthouse score as high as possible.",
      "Built Node.js Lambda functions for automatic company eligibility checks (valid CNPJ, email and phone blacklist), reducing manual validation; refactored an Express service for scheduled cancellations; maintained APIs with a Redis cache layer.",
      "Cut a suite of 100+ frontend tests from 3 min to 1.5 min by migrating from Jest to Vite.",
      "Set up the base CI pipeline (unit and E2E tests, minimum coverage, typecheck, lint) and turned app-specific components into reusable ones through PRs to the company design system.",
      "Mentored a junior developer, led frontend decisions on libraries and code organization, and reviewed PRs under a two-approval policy.",
    ],
    pt: [
      "Reconstruí o fluxo de cadastro de empresas (frontend e backend) e conduzi um teste A/B de 15 dias contra o fluxo legado, resultando em +30% de empresas cadastradas.",
      "Implementei SSR no Next.js, agregando no servidor as chamadas a um microsserviço externo para ganhar performance e mantendo a nota do Lighthouse o mais alta possível.",
      "Construí funções Lambda em Node.js para verificar automaticamente a elegibilidade das empresas (CNPJ válido, blacklist de e-mail e telefone), reduzindo a validação manual; refatorei um serviço Express de cancelamentos agendados; mantive APIs com uma camada de cache em Redis.",
      "Reduzi uma suíte de mais de 100 testes de frontend de 3 min para 1,5 min migrando do Jest para o Vite.",
      "Montei o pipeline de CI base (testes unitários e E2E, cobertura mínima, typecheck, lint) e transformei componentes específicos da aplicação em componentes reutilizáveis por meio de PRs para o design system da empresa.",
      "Mentorei um desenvolvedor júnior, liderei decisões de frontend sobre bibliotecas e organização do código e revisei PRs sob uma política de duas aprovações.",
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
