import { btg } from "@/data/experience/btg.ts";
import { catho } from "@/data/experience/catho.ts";
import { crb } from "@/data/experience/crb.ts";
import { grupoPrimo } from "@/data/experience/grupo-primo.ts";
import { icertus } from "@/data/experience/icertus.ts";
import { printly } from "@/data/experience/printly.ts";
import { steeprock } from "@/data/experience/steeprock.ts";
import type { Role } from "@/types/content.ts";

export const rolesByDate: Role[] = [
  crb,
  icertus,
  grupoPrimo,
  catho,
  btg,
  steeprock,
  printly,
];

export const rolesLatestFirst: Role[] = rolesByDate.toReversed();
