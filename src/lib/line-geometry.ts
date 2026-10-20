import type { Track } from "@/types/content.ts";

export type HalfStyle = "none" | "solid" | "planned";

export const STATION_STEP_MS = 110;

export const HALF_POSITION = {
  end: "max-md:top-1/2 max-md:h-1/2 md:left-1/2 md:w-1/2 max-md:origin-top md:origin-left",
  start:
    "max-md:top-0 max-md:h-1/2 md:left-0 md:w-1/2 max-md:origin-top md:origin-left",
} as const;

export const LANE_POSITION: Record<Track, string> = {
  backend: "max-md:left-[22px] max-md:w-2 md:top-[22px] md:h-2",
  frontend: "max-md:left-[10px] max-md:w-2 md:top-[10px] md:h-2",
};

export const LANE_COLOR: Record<Track, string> = {
  backend: "bg-line-backend text-line-backend",
  frontend: "bg-line-frontend text-line-frontend",
};

export const LANES: Track[] = ["frontend", "backend"];

export const drawDelay = (index: number, isEnd: boolean): string =>
  `${index * STATION_STEP_MS + (isEnd ? STATION_STEP_MS / 2 : 0)}ms`;

export const STATION_GRID =
  "group grid h-full grid-cols-[2.5rem_1fr] gap-x-3 max-md:min-h-16 md:grid-cols-1 md:grid-rows-[3.5rem_2.5rem_auto] md:gap-x-0 md:text-center";

export const RAIL_CELL = "relative row-span-2 md:row-span-1 md:row-start-2";
