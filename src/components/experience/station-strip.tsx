import { Link } from "react-router";

import { rolesByDate } from "@/data/experience.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { stationName } from "@/lib/roles.ts";
import { cn } from "@/lib/utils";
import type { Role } from "@/types/content.ts";

interface StationStripProps {
  current: Role;
}

const StripStop = ({ isCurrent, role }: { isCurrent: boolean; role: Role }) => (
  <li className="relative z-10 flex">
    <Link
      aria-current={isCurrent ? "page" : undefined}
      className="group focus-visible:outline-signal relative -m-1 flex p-1"
      to={`/experience/${role.slug}`}
    >
      <span
        aria-hidden="true"
        className={cn(
          "border-sign-foreground group-hover:bg-sign-foreground block rounded-full border-[3px] transition-colors",
          role.tracks.length > 1 ? "h-6 w-4" : "size-4 self-start",
          isCurrent ? "bg-signal border-signal" : "bg-sign"
        )}
      />
      <span
        className={cn(
          "bg-sign-foreground text-sign absolute top-full left-1/2 mt-1 -translate-x-1/2 px-1.5 py-0.5 text-xs font-bold whitespace-nowrap transition-opacity",
          isCurrent
            ? "opacity-100 [nav:has(a:not([aria-current]):focus-visible)_&]:opacity-0 [nav:has(a:not([aria-current]):hover)_&]:opacity-0"
            : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        )}
      >
        {stationName(role)} <span className="font-mono">{role.startYear}</span>
      </span>
    </Link>
  </li>
);

const StationStrip = ({ current }: StationStripProps) => {
  const { ui } = useLocale();
  return (
    <nav aria-label={ui.line.heading} className="relative mb-7 w-full max-w-md">
      <span
        aria-hidden="true"
        className="bg-line-frontend absolute inset-x-2 top-1.5 h-1"
      />
      <span
        aria-hidden="true"
        className="bg-line-backend absolute inset-x-2 top-3.5 h-1"
      />
      <ol className="flex h-6 items-start justify-between">
        {rolesByDate.map((role) => (
          <StripStop
            isCurrent={role.slug === current.slug}
            key={role.slug}
            role={role}
          />
        ))}
        <li
          aria-hidden="true"
          className="bg-sign-foreground relative z-10 h-6 w-1.5"
        />
      </ol>
    </nav>
  );
};

export default StationStrip;
