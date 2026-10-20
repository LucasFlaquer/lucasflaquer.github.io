import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

import TrackHalves from "@/components/line/track-halves.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import { RAIL_CELL, STATION_GRID } from "@/lib/line-geometry.ts";

interface LineTerminusProps {
  index: number;
}

const LineTerminus = ({ index }: LineTerminusProps) => {
  const { ui } = useLocale();
  return (
    <li>
      <Link className={STATION_GRID} to="/#contact">
        <span className={RAIL_CELL}>
          <TrackHalves end="none" index={index} start="planned" />
          <span
            aria-hidden="true"
            className="bg-sign absolute max-md:top-1/2 max-md:left-0 max-md:h-2 max-md:w-9 max-md:-translate-y-1/2 md:top-0 md:left-1/2 md:h-10 md:w-2 md:-translate-x-1/2"
          />
        </span>
        <span className="col-start-2 flex items-end self-end pt-3 md:col-start-1 md:row-start-1 md:justify-center md:pt-0 md:pb-2">
          <span className="bg-signal text-signal-foreground px-1.5 py-0.5 leading-tight font-black md:text-sm">
            {ui.line.terminus}
          </span>
        </span>
        <span className="col-start-2 flex items-center gap-1 px-1.5 pb-3 text-xs font-bold underline-offset-4 group-hover:underline md:col-start-1 md:row-start-3 md:justify-center md:pt-2 md:pb-0">
          {ui.line.terminusAction}
          <ArrowRightIcon aria-hidden="true" weight="bold" />
        </span>
      </Link>
    </li>
  );
};

export default LineTerminus;
