import type { Role } from "@/types/content.ts";

export const btg: Role = {
  client: "BTG Pactual",
  company: "FCamara",
  context: {
    en: "Greenfield forestry funds platform for the Timberland Investment Group, managed by BTG Pactual.",
    pt: "Plataforma greenfield de fundos florestais para o Timberland Investment Group, gerida pelo BTG Pactual.",
  },
  headline: {
    en: "Platform from concept to production in under 2 months; fund managers now use it in place of spreadsheets.",
    pt: "Plataforma do conceito à produção em menos de 2 meses; os gestores de fundos passaram a usá-la no lugar de planilhas.",
  },
  highlights: {
    en: [
      "Helped take the platform from concept to production in under 2 months; fund managers now use it in place of spreadsheets.",
      "Built Next.js features and C#/.NET endpoints, and integrated Pipefy via GraphQL and WebSockets for real-time operations approval.",
      "Replaced a manual process with a Python job that computes daily account updates for 20 clients from three daily spreadsheets.",
      "Raised test coverage to meet the SonarQube quality gate (88% minimum) in 4 of 6 repositories.",
      "Fixed the frontend CI pipeline, removing a duplicated environment setup between build and tests.",
      "Introduced a PR template and review standard that other teams adopted to support AI-assisted first-pass reviews.",
    ],
    pt: [
      "Ajudei a levar a plataforma do conceito à produção em menos de 2 meses; os gestores de fundos passaram a usá-la no lugar de planilhas.",
      "Construí funcionalidades em Next.js e endpoints em C#/.NET, e integrei o Pipefy via GraphQL e WebSockets para aprovação de operações em tempo real.",
      "Substituí um processo manual por um job em Python que calcula as atualizações diárias das contas de 20 clientes a partir de três planilhas diárias.",
      "Elevei a cobertura de testes para atender ao quality gate do SonarQube (mínimo de 88%) em 4 de 6 repositórios.",
      "Corrigi o pipeline de CI do frontend, removendo uma configuração de ambiente duplicada entre build e testes.",
      "Introduzi um template de PR e um padrão de revisão que outros times adotaram para apoiar revisões iniciais assistidas por IA.",
    ],
  },
  period: { en: "Apr 2025 – Aug 2025", pt: "abr 2025 – ago 2025" },
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
