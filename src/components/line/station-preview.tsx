import ArrowLink from "@/components/shared/arrow-link.tsx";
import SeparatorDot from "@/components/shared/separator-dot.tsx";
import TrackBullets from "@/components/shared/track-bullets.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import { stationName } from "@/lib/roles.ts";
import type { Role } from "@/types/content.ts";

interface StationPreviewProps {
  role: Role | null;
}

const StationPreview = ({ role }: StationPreviewProps) => {
  const { pick, ui } = useLocale();
  if (!role) {
    return null;
  }
  return (
    <section
      aria-label={ui.line.preview}
      aria-live="polite"
      className="border-foreground bg-muted mt-6 hidden grid-cols-[minmax(15rem,auto)_1fr_auto] items-center gap-8 border-t-4 px-6 py-5 md:grid"
    >
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-2 text-lg font-black">
          <TrackBullets tracks={role.tracks} />
          {stationName(role)}
        </p>
        <p className="text-muted-foreground text-sm">
          {pick(role.title)}
          <SeparatorDot />
          <span className="font-mono">{pick(role.period)}</span>
        </p>
      </div>
      <p className="max-w-[62ch] text-lg leading-snug">{pick(role.headline)}</p>
      <ArrowLink to={`/experience/${role.slug}`}>
        {ui.experience.details}
      </ArrowLink>
    </section>
  );
};

export default StationPreview;
