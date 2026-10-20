import { Link } from "react-router";

import StationLabel from "@/components/line/station-label.tsx";
import StationMarker from "@/components/line/station-marker.tsx";
import TrackHalves from "@/components/line/track-halves.tsx";
import { RAIL_CELL, STATION_GRID } from "@/lib/line-geometry.ts";
import type { HalfStyle } from "@/lib/line-geometry.ts";
import type { Role } from "@/types/content.ts";

interface LineStationProps {
  isActive: boolean;
  onPreview: (slug: string) => void;
  station: { end: HalfStyle; index: number; role: Role; start: HalfStyle };
}

const LineStation = ({ isActive, onPreview, station }: LineStationProps) => {
  const { end, index, role, start } = station;
  return (
    <li>
      <Link
        className={STATION_GRID}
        onFocus={() => onPreview(role.slug)}
        onMouseEnter={() => onPreview(role.slug)}
        to={`/experience/${role.slug}`}
      >
        <span className={RAIL_CELL}>
          <TrackHalves end={end} index={index} start={start} />
          <StationMarker
            index={index}
            isActive={isActive}
            isInterchange={role.tracks.length > 1}
          />
        </span>
        <StationLabel isActive={isActive} role={role} />
      </Link>
    </li>
  );
};

export default LineStation;
