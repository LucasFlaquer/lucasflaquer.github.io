import { Link, NavLink } from "react-router";

import { navItems } from "@/data/navigation.ts";
import type { NavItem } from "@/data/navigation.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { cn } from "@/lib/utils";

interface SiteNavProps {
  className?: string;
}

const LINK_CLASS =
  "flex h-12 items-center border-transparent border-b-4 px-3 font-bold text-sign-muted text-sm transition-colors hover:text-sign-foreground md:h-16";

const NavItemLink = ({ item, label }: { item: NavItem; label: string }) => {
  if (item.to.includes("#")) {
    return (
      <Link className={LINK_CLASS} to={item.to}>
        {label}
      </Link>
    );
  }
  return (
    <NavLink
      className={({ isActive }) =>
        cn(LINK_CLASS, isActive && "border-signal text-sign-foreground")
      }
      to={item.to}
    >
      {label}
    </NavLink>
  );
};

const SiteNav = ({ className }: SiteNavProps) => {
  const { ui } = useLocale();
  return (
    <nav aria-label={ui.nav.label} className={className}>
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.key}>
            <NavItemLink item={item} label={ui.nav[item.key]} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
