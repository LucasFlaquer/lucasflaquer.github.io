export type Locale = "en" | "pt";

export type Localized<T> = Record<Locale, T>;

export type Track = "frontend" | "backend";

export interface Role {
  client?: string;
  company: string;
  context: Localized<string>;
  employer?: Localized<string>;
  headline: Localized<string>;
  highlights: Localized<string[]>;
  period: Localized<string>;
  slug: string;
  stack: string[];
  startYear: number;
  team?: Localized<string>;
  title: Localized<string>;
  tracks: Track[];
}

export interface Result {
  detail: Localized<string>;
  roleSlug: string;
  value: Localized<string>;
}

export interface SkillGroup {
  id: string;
  items: string[];
  name: Localized<string>;
  note?: Localized<string>;
  track?: Track;
}

export interface Education {
  degree: Localized<string>;
  period: string;
  school: string;
}

export interface Language {
  level: Localized<string>;
  name: Localized<string>;
}

export interface Profile {
  availability: Localized<string[]>;
  avatarUrl: string;
  email: string;
  githubUrl: string;
  intro: Localized<string>;
  linkedinUrl: string;
  location: Localized<string>;
  name: string;
  resumeFile: string;
  stackLine: string;
  summary: Localized<string>;
  title: Localized<string>;
}
