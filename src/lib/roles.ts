import { rolesByDate } from "@/data/experience.ts";
import type { Role } from "@/types/content.ts";

export const findRole = (slug: string | undefined): Role | undefined =>
  rolesByDate.find((role) => role.slug === slug);

export const stationName = (role: Role): string => role.client ?? role.company;

export const neighbours = (role: Role) => {
  const index = rolesByDate.indexOf(role);
  return { next: rolesByDate.at(index + 1), previous: rolesByDate[index - 1] };
};

export const rolesUsing = (skill: string): Role[] =>
  rolesByDate.filter((role) => role.stack.includes(skill)).toReversed();
