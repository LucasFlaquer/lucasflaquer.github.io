import type { Role } from "@/types/content.ts";

export const printly: Role = {
  client: "Printly",
  company: "99x",
  context: {
    en: "New AI product with a customer chat, a print-shop admin panel and a backend. MVP delivered and live in beta with a pilot print shop.",
    pt: "Novo produto de IA com chat para o cliente, painel administrativo da gráfica e backend. MVP entregue e no ar em beta com uma gráfica piloto.",
  },
  employer: { en: "consultancy, PJ", pt: "consultoria, PJ" },
  headline: {
    en: "Took an AI print-ordering product from zero to a live beta in about 6 months, building the backend behind the chat, the admin panel and the RAG assistant.",
    pt: "Levei um produto de pedidos de impressão com IA do zero a um beta no ar em cerca de 6 meses, construindo o backend por trás do chat, do painel administrativo e do assistente RAG.",
  },
  highlights: {
    en: [
      "Took the product from zero to a live beta in about 6 months: designed and built the NestJS / PostgreSQL backend that connects the customer chat, the print-shop admin panel and a RAG assistant.",
      "Let customers place print orders in a conversation instead of a static form, with an AI-generated dynamic order form rendered in the chat and assistant replies streamed over SSE.",
      "Kept a person in the loop when a conversation needs one: built the hand-off from the AI assistant to a print-shop operator, plus lead management and admin tables with server-side pagination (Next.js, TanStack Query, Tailwind CSS).",
      "Gave each print shop its own isolated users, knowledge base and customer files through multi-tenant authentication (Better Auth) and file management feeding the RAG assistant.",
      "Left the team a safe base to keep shipping on: 100% test coverage on the critical MVP workflows, infrastructure provisioned with Terraform, error monitoring with Sentry, and Biome for linting and formatting.",
    ],
    pt: [
      "Levei o produto do zero a um beta no ar em cerca de 6 meses: projetei e construí o backend em NestJS / PostgreSQL que conecta o chat do cliente, o painel administrativo da gráfica e um assistente RAG.",
      "Permiti que clientes fizessem pedidos de impressão em uma conversa, em vez de um formulário estático, com um formulário dinâmico gerado por IA e renderizado no chat e respostas do assistente em streaming via SSE.",
      "Mantive uma pessoa no circuito quando a conversa precisa: construí a transferência do assistente de IA para um atendente da gráfica, além de gestão de leads e tabelas administrativas com paginação no servidor (Next.js, TanStack Query, Tailwind CSS).",
      "Dei a cada gráfica usuários, base de conhecimento e arquivos de clientes isolados, com autenticação multi-tenant (Better Auth) e gerenciamento de arquivos alimentando o assistente RAG.",
      "Deixei ao time uma base segura para continuar entregando: 100% de cobertura de testes nos fluxos críticos do MVP, infraestrutura provisionada com Terraform, monitoramento de erros com Sentry e Biome para lint e formatação.",
    ],
  },
  period: { en: "Mar 2026 – Oct 2026", pt: "mar 2026 – out 2026" },
  slug: "printly",
  stack: [
    "NestJS",
    "PostgreSQL",
    "Better Auth",
    "SSE",
    "Next.js",
    "TanStack Query",
    "Tailwind CSS",
    "Terraform",
    "Sentry",
    "Biome",
  ],
  startYear: 2026,
  team: {
    en: "2 developers and 1 architect",
    pt: "2 desenvolvedores e 1 arquiteto",
  },
  title: { en: "Full Stack Engineer", pt: "Engenheiro Full Stack" },
  tracks: ["frontend", "backend"],
};
