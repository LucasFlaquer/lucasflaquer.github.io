import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

import { useLocale } from "@/hooks/use-locale.ts";
import { neighbours, stationName } from "@/lib/roles.ts";
import { cn } from "@/lib/utils";
import type { Role } from "@/types/content.ts";

interface StationNavProps {
  role: Role;
}

const StationLink = ({
  direction,
  target,
}: {
  direction: "previous" | "next";
  target: Role;
}) => {
  const { ui } = useLocale();
  const isNext = direction === "next";
  return (
    <Link
      className={cn(
        "group border-foreground hover:bg-muted flex flex-col gap-1 border-t-4 pt-3",
        isNext && "items-end text-right sm:col-start-2"
      )}
      to={`/experience/${target.slug}`}
    >
      <span className="text-muted-foreground flex items-center gap-2 text-sm">
        {isNext ? null : <ArrowLeftIcon aria-hidden="true" weight="bold" />}
        {isNext ? ui.experience.next : ui.experience.previous}
        {isNext ? <ArrowRightIcon aria-hidden="true" weight="bold" /> : null}
      </span>
      <span className="text-xl font-black tracking-tight group-hover:underline">
        {stationName(target)}
      </span>
    </Link>
  );
};

const StationNav = ({ role }: StationNavProps) => {
  const { ui } = useLocale();
  const { next, previous } = neighbours(role);
  return (
    <nav
      aria-label={ui.experience.heading}
      className="grid gap-6 sm:grid-cols-2"
    >
      {previous ? <StationLink direction="previous" target={previous} /> : null}
      {next ? <StationLink direction="next" target={next} /> : null}
    </nav>
  );
};

export default StationNav;
