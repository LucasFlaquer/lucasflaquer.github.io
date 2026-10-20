import {
  drawDelay,
  HALF_POSITION,
  LANE_COLOR,
  LANE_POSITION,
  LANES,
} from "@/lib/line-geometry.ts";
import type { HalfStyle } from "@/lib/line-geometry.ts";
import { cn } from "@/lib/utils";

interface TrackHalvesProps {
  end: HalfStyle;
  index: number;
  start: HalfStyle;
}

const TrackHalf = ({
  half,
  index,
  style,
}: {
  half: "start" | "end";
  index: number;
  style: HalfStyle;
}) => {
  if (style === "none") {
    return null;
  }
  return LANES.map((lane) => (
    <span
      aria-hidden="true"
      className={cn(
        "motion-safe:max-md:animate-draw-y motion-safe:md:animate-draw-x absolute block",
        HALF_POSITION[half],
        LANE_POSITION[lane],
        LANE_COLOR[lane],
        style === "planned" &&
          "track-planned bg-transparent max-md:[--track-angle:180deg]"
      )}
      key={lane}
      style={{ animationDelay: drawDelay(index, half === "end") }}
    />
  ));
};

const TrackHalves = ({ end, index, start }: TrackHalvesProps) => (
  <>
    <TrackHalf half="start" index={index} style={start} />
    <TrackHalf half="end" index={index} style={end} />
  </>
);

export default TrackHalves;
