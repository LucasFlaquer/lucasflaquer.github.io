import portrait from "@/assets/lucas-flaquer.jpg";
import type { Profile } from "@/types/content.ts";

export const profile: Profile = {
  availability: {
    en: [
      "Remote",
      "Open to full-time and contract roles",
      "Flexible hours, São Paulo time zone preferred",
    ],
    pt: [
      "Remoto",
      "Aberto a vagas full-time e contrato",
      "Horário flexível, de preferência no fuso de São Paulo",
    ],
  },
  avatarUrl: portrait,
  email: "lucas.flaquer@outlook.com",
  githubUrl: "https://github.com/LucasFlaquer",
  intro: {
    en: "I build and ship web products end to end: React and Next.js on the front, Node.js and NestJS on the back.",
    pt: "Construo e entrego produtos web de ponta a ponta: React e Next.js no front, Node.js e NestJS no back.",
  },
  linkedinUrl: "https://www.linkedin.com/in/lucas-flaquer",
  location: {
    en: "Sorocaba, SP, Brazil (GMT-3)",
    pt: "Sorocaba, SP, Brasil (GMT-3)",
  },
  name: "Lucas Flaquer",
  resumeFile: {
    en: "/Lucas_Flaquer_CV_Fullstack.pdf",
    pt: "/Lucas_Flaquer_CV_Fullstack_PT.pdf",
  },
  stackLine: "React, Next.js, Node.js, TypeScript",
  summary: {
    en: "Senior Full Stack Engineer with 7+ years taking web products from idea to production with TypeScript, React, Next.js and Node.js, across banking, recruitment, life sciences and AI-powered SaaS. Strong in SSR and performance, API design (REST, GraphQL, SSE, WebSockets), automated testing and CI. Rebuilt a registration flow that delivered +30% completed registrations in an A/B test, took a banking platform from concept to production in under 2 months, and halved the run time of a 100+ test suite. Most recently built the backend of an AI print-ordering product (RAG chat, SSE streaming) from scratch to a live beta in about 6 months, using a spec-driven, AI-assisted workflow (Claude Code).",
    pt: "Engenheiro Full Stack Sênior com mais de 7 anos levando produtos web da ideia à produção com TypeScript, React, Next.js e Node.js, nos setores bancário, de recrutamento, de ciências da vida e de SaaS com IA. Forte em SSR e performance, design de APIs (REST, GraphQL, SSE, WebSockets), testes automatizados e CI. Reconstruiu um fluxo de cadastro que entregou +30% de cadastros concluídos em um teste A/B, levou uma plataforma bancária do conceito à produção em menos de 2 meses e reduziu pela metade o tempo de uma suíte com mais de 100 testes. Mais recentemente, construiu do zero o backend de um produto de pedidos de impressão com IA (chat RAG, streaming via SSE) até um beta no ar em cerca de 6 meses, com um fluxo assistido por IA e orientado a especificação (Claude Code).",
  },
  title: {
    en: "Senior Full Stack Engineer",
    pt: "Engenheiro Full Stack Sênior",
  },
};
