import type { Role } from "@/types/content.ts";

export const btg: Role = {
  client: "BTG Pactual",
  company: "FCamara",
  context: {
    en: "Greenfield forestry funds platform managed by BTG Pactual and Timberland Investment Group.",
    pt: "Plataforma greenfield de fundos florestais gerida pelo BTG Pactual e pelo Timberland Investment Group.",
  },
  headline: {
    en: "Concept to MVP in under 2 months; test coverage raised from roughly 60–75% to close to 100%.",
    pt: "Do conceito ao MVP em menos de 2 meses; cobertura de testes de cerca de 60–75% para perto de 100%.",
  },
  highlights: {
    en: [
      "Contributed to the platform from concept to MVP in under 2 months and to the design of the next block of features involving external integrations.",
      "Built Next.js features, C#/.NET endpoints and refactors, and maintained a Python cron job that extracted data from three daily spreadsheets to compute daily account updates for clients.",
      "Integrated Pipefy via GraphQL (status queries and new entries) and WebSockets for real-time responses.",
      "Raised test coverage from roughly 60–75% to close to 100% across most projects, refactored code against a SonarQube quality gate (88% minimum, 100% target) and fixed a failing CI pipeline.",
      "Proposed architecture, folder-structure and testing standards for the team.",
    ],
    pt: [
      "Contribuí com a plataforma do conceito ao MVP em menos de 2 meses e com o desenho do bloco seguinte de funcionalidades, envolvendo integrações externas.",
      "Construí funcionalidades em Next.js, endpoints e refatorações em C#/.NET, e mantive um cron job em Python que extraía dados de três planilhas diárias para calcular as atualizações diárias das contas dos clientes.",
      "Integrei o Pipefy via GraphQL (consultas de status e novos registros) e WebSockets para respostas em tempo real.",
      "Elevei a cobertura de testes de cerca de 60–75% para perto de 100% na maioria dos projetos, refatorei código seguindo um quality gate do SonarQube (mínimo de 88%, meta de 100%) e corrigi um pipeline de CI quebrado.",
      "Propus padrões de arquitetura, estrutura de pastas e testes para o time.",
    ],
  },
  period: { en: "May 2025 – Aug 2025", pt: "mai 2025 – ago 2025" },
  slug: "btg-pactual",
  stack: [
    "Next.js",
    "C# (.NET)",
    "Python",
    "GraphQL",
    "WebSockets",
    "SonarQube",
  ],
  startYear: 2025,
  team: {
    en: "2 developers, a tech lead and a PO; weekly meetings in English with the Atlanta team",
    pt: "2 desenvolvedores, um tech lead e um PO; reuniões semanais em inglês com o time de Atlanta",
  },
  title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
  tracks: ["frontend", "backend"],
};
