import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

import StationStrip from "@/components/experience/station-strip.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import { stationName } from "@/lib/roles.ts";
import type { Role } from "@/types/content.ts";

interface StationSignProps {
  role: Role;
}

const StationSign = ({ role }: StationSignProps) => {
  const { pick, ui } = useLocale();
  return (
    <div className="border-sign-muted/25 bg-sign text-sign-foreground dark:border-b">
      <PageContainer className="flex flex-col gap-5 pt-8 pb-12">
        <Link
          className="text-sign-muted hover:text-sign-foreground flex items-center gap-2 self-start text-sm font-bold"
          to="/#experience"
        >
          <ArrowLeftIcon aria-hidden="true" weight="bold" />
          {ui.experience.all}
        </Link>
        <StationStrip current={role} />
        <h1 className="text-5xl leading-none font-black tracking-[-0.03em] md:text-7xl">
          {stationName(role)}
        </h1>
        <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-lg">
          <span className="font-bold">{pick(role.title)}</span>
          {role.client ? (
            <span className="text-sign-muted">
              {role.company}
              {role.employer ? ` (${pick(role.employer)})` : null}
            </span>
          ) : null}
          <span className="text-sign-muted font-mono">{pick(role.period)}</span>
        </p>
      </PageContainer>
    </div>
  );
};

export default StationSign;
