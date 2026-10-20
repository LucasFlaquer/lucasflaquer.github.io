import ArrowLink from "@/components/shared/arrow-link.tsx";
import SeparatorDot from "@/components/shared/separator-dot.tsx";
import StackList from "@/components/shared/stack-list.tsx";
import TrackBullets from "@/components/shared/track-bullets.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import { stationName } from "@/lib/roles.ts";
import type { Role } from "@/types/content.ts";

interface ExperienceRowProps {
  role: Role;
}

const RoleSummary = ({ role }: ExperienceRowProps) => {
  const { pick } = useLocale();
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-black tracking-tight">
        {pick(role.title)}
        <SeparatorDot />
        {stationName(role)}
      </h3>
      {role.client ? (
        <p className="text-muted-foreground text-sm">
          {role.company}
          {role.employer ? ` (${pick(role.employer)})` : null}
        </p>
      ) : null}
      <p className="max-w-[65ch]">{pick(role.headline)}</p>
      <StackList items={role.stack} />
    </div>
  );
};

const ExperienceRow = ({ role }: ExperienceRowProps) => {
  const { pick, ui } = useLocale();
  return (
    <li className="border-border grid gap-3 border-t-2 py-6 md:grid-cols-[13rem_1fr_auto] md:gap-8">
      <div className="flex items-center gap-3 md:flex-col md:items-start">
        <TrackBullets tracks={role.tracks} />
        <span className="font-mono text-sm font-bold">{pick(role.period)}</span>
      </div>
      <RoleSummary role={role} />
      <ArrowLink to={`/experience/${role.slug}`}>
        {ui.experience.details}
        <span className="sr-only">: {stationName(role)}</span>
      </ArrowLink>
    </li>
  );
};

export default ExperienceRow;
