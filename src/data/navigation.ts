export type NavKey = "about" | "contact" | "experience" | "skills";

export interface NavItem {
  key: NavKey;
  to: string;
}

export const navItems: NavItem[] = [
  { key: "experience", to: "/#experience" },
  { key: "skills", to: "/skills" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/#contact" },
];
