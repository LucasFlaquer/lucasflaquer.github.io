import type { Education, Language, Localized } from "@/types/content.ts";

export const workflow: Localized<string> = {
  en: "Spec-driven workflow with Claude Code: PRD and ADRs before coding, task generation and refinement, sequential (or parallel) execution, then automated review and QA before opening the PR.",
  pt: "Fluxo orientado a especificação com Claude Code: PRD e ADRs antes do código, geração e refinamento de tarefas, execução sequencial (ou paralela) e, por fim, revisão automatizada e QA antes de abrir o PR.",
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
      en: "Technologist Degree in Systems Analysis and Development",
      pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    },
    period: "2014 – 2017",
    school: "FATEC Sorocaba",
  },
];

export const languages: Language[] = [
  {
    level: {
      en: "Full professional proficiency (C1, Senac certificate)",
      pt: "Proficiência profissional plena (C1, certificado Senac)",
    },
    name: { en: "English", pt: "Inglês" },
  },
  {
    level: { en: "Native or bilingual", pt: "Nativo ou bilíngue" },
    name: { en: "Portuguese", pt: "Português" },
  },
];
