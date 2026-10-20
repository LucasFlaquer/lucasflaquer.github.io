import type { Education, Language, Localized } from "@/types/content.ts";

export const workflow: Localized<string> = {
  en: "Spec-driven workflow with Claude Code: PRD and ADRs before coding, task generation and refinement, sequential (or parallel) execution, then automated review and QA before opening the PR. In daily use for the last ~3 months.",
  pt: "Fluxo orientado a especificação com Claude Code: PRD e ADRs antes do código, geração e refinamento de tarefas, execução sequencial (ou paralela) e, por fim, revisão automatizada e QA antes de abrir o PR. Em uso diário nos últimos ~3 meses.",
};

export const teamwork: Localized<string> = {
  en: "I work with distributed teams in the US, Asia and Brazil, hold meetings in English, mentor developers and review pull requests.",
  pt: "Trabalho com times distribuídos nos EUA, na Ásia e no Brasil, participo de reuniões em inglês, mentoro desenvolvedores e reviso pull requests.",
};

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor's in Computer Engineering",
      pt: "Bacharelado em Engenharia de Computação",
    },
    period: "2018 – 2022",
    school: "FACENS University Center",
  },
  {
    degree: {
      en: "Bachelor's in Systems Analysis and Development",
      pt: "Graduação em Análise e Desenvolvimento de Sistemas",
    },
    period: "2014 – 2017",
    school: "FATEC Sorocaba",
  },
];

export const languages: Language[] = [
  {
    level: {
      en: "Advanced / fluent (Senac certificate)",
      pt: "Avançado / fluente (certificado Senac)",
    },
    name: { en: "English", pt: "Inglês" },
  },
  {
    level: { en: "Native", pt: "Nativo" },
    name: { en: "Portuguese", pt: "Português" },
  },
];
