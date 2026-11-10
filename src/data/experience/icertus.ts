import type { Role } from "@/types/content.ts";

export const icertus: Role = {
  company: "iCertus",
  context: {
    en: "Fiscal management SaaS covering invoicing, inventory, products and receivables.",
    pt: "SaaS de gestão fiscal com faturamento, estoque, produtos e contas a receber.",
  },
  headline: {
    en: "Led the JavaScript to TypeScript migration, cutting duplicated code by more than 15%.",
    pt: "Liderei a migração de JavaScript para TypeScript, reduzindo em mais de 15% o código duplicado.",
  },
  highlights: {
    en: [
      "Integrated a Ruby API and delivered the invoicing, inventory, product and receivables interfaces (React, Vue.js), in a squad with a backend developer, a tech lead and a PO.",
      "Led the JavaScript to TypeScript migration and broke down oversized components, cutting duplicated code by more than 15%.",
      "Introduced the project's first automated test suite, starting with the critical flows, and co-designed a new Express service.",
    ],
    pt: [
      "Integrei uma API em Ruby e entreguei as interfaces de faturamento, estoque, produtos e contas a receber (React, Vue.js), em um squad com um desenvolvedor backend, um tech lead e um PO.",
      "Liderei a migração de JavaScript para TypeScript e quebrei componentes grandes demais, reduzindo em mais de 15% o código duplicado.",
      "Introduzi a primeira suíte de testes automatizados do projeto, começando pelos fluxos críticos, e co-projetei um novo serviço Express.",
    ],
  },
  period: { en: "May 2021 – Jan 2022", pt: "mai 2021 – jan 2022" },
  slug: "icertus",
  stack: ["React", "Vue.js", "TypeScript", "Express"],
  startYear: 2021,
  team: {
    en: "A backend developer, a tech lead and a PO",
    pt: "Um desenvolvedor backend, um tech lead e um PO",
  },
  title: { en: "Frontend Developer", pt: "Desenvolvedor Frontend" },
  tracks: ["frontend"],
};
