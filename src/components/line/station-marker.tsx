import { drawDelay } from "@/lib/line-geometry.ts";
import { cn } from "@/lib/utils";

interface StationMarkerProps {
  index: number;
  isActive: boolean;
  isInterchange: boolean;
}

const StationMarker = ({
  index,
  isActive,
  isInterchange,
}: StationMarkerProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "border-sign bg-background group-hover:bg-sign motion-safe:animate-stop absolute z-10 rounded-full border-[3px] transition-colors",
      "max-md:top-1/2 max-md:left-[4px] max-md:-translate-y-1/2 md:top-[4px] md:left-1/2 md:-translate-x-1/2",
      isInterchange ? "max-md:h-5 max-md:w-8 md:h-8 md:w-5" : "size-5",
      isActive && "bg-sign"
    )}
    style={{ animationDelay: drawDelay(index, false) }}
  />
);

export default StationMarker;
