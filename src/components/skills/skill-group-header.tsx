import { useLocale } from "@/hooks/use-locale.ts";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types/content.ts";

interface SkillGroupHeaderProps {
  group: SkillGroup;
  level: "h2" | "h3";
}

const BAR_COLOR = {
  backend: "bg-line-backend",
  frontend: "bg-line-frontend",
  neutral: "bg-primary",
} as const;

const SkillGroupHeader = ({ group, level: Heading }: SkillGroupHeaderProps) => {
  const { pick } = useLocale();
  return (
    <div className="flex flex-col gap-2">
      <span
        aria-hidden="true"
        className={cn("h-2 w-12", BAR_COLOR[group.track ?? "neutral"])}
      />
      <Heading
        className="text-xl font-black tracking-tight"
        id={`skills-${group.id}`}
      >
        {pick(group.name)}
      </Heading>
      {group.note ? (
        <p className="text-muted-foreground text-sm">{pick(group.note)}</p>
      ) : null}
    </div>
  );
};

export default SkillGroupHeader;
