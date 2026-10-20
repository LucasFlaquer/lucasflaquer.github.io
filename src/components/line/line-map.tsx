import LineStation from "@/components/line/line-station.tsx";
import LineTerminus from "@/components/line/line-terminus.tsx";
import type { HalfStyle } from "@/lib/line-geometry.ts";
import type { Role } from "@/types/content.ts";

interface LineMapProps {
  activeSlug: string;
  onPreview: (slug: string) => void;
  roles: Role[];
}

const stationHalves = (
  index: number,
  lastIndex: number
): { end: HalfStyle; start: HalfStyle } => ({
  end: index === lastIndex ? "planned" : "solid",
  start: index === 0 ? "none" : "solid",
});

const LineMap = ({ activeSlug, onPreview, roles }: LineMapProps) => (
  <ol className="flex flex-col md:grid md:grid-cols-8">
    {roles.map((role, index) => (
      <LineStation
        isActive={role.slug === activeSlug}
        key={role.slug}
        onPreview={onPreview}
        station={{ ...stationHalves(index, roles.length - 1), index, role }}
      />
    ))}
    <LineTerminus index={roles.length} />
  </ol>
);

export default LineMap;
