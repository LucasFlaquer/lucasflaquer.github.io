import NoBreakWords from "@/components/shared/no-break-words.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import { stationName } from "@/lib/roles.ts";
import { cn } from "@/lib/utils";
import type { Role } from "@/types/content.ts";

interface StationLabelProps {
  isActive: boolean;
  role: Role;
}

const StationLabel = ({ isActive, role }: StationLabelProps) => {
  const { pick } = useLocale();
  return (
    <>
      <span className="col-start-2 flex items-end self-end pt-3 md:col-start-1 md:row-start-1 md:justify-center md:px-1 md:pt-0 md:pb-2">
        <span
          className={cn(
            "group-hover:bg-primary group-hover:text-primary-foreground px-1.5 py-0.5 leading-tight font-black transition-colors md:text-sm",
            isActive && "bg-primary text-primary-foreground"
          )}
        >
          {stationName(role)}
        </span>
      </span>
      <span className="text-muted-foreground col-start-2 flex flex-col px-1.5 pb-3 text-xs md:col-start-1 md:row-start-3 md:px-1 md:pt-2 md:pb-0">
        <span className="text-foreground font-mono font-bold">
          {role.startYear}
        </span>
        <NoBreakWords text={pick(role.title)} />
      </span>
    </>
  );
};

export default StationLabel;
