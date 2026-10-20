import { Link } from "react-router";

import { useLocale } from "@/hooks/use-locale.ts";
import { rolesUsing, stationName } from "@/lib/roles.ts";

interface SkillItemProps {
  skill: string;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  const { ui } = useLocale();
  const roles = rolesUsing(skill);
  return (
    <li className="border-border flex flex-col gap-1 border-t py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <span className="font-bold">{skill}</span>
      {roles.length > 0 ? (
        <span className="flex flex-wrap items-baseline gap-1.5 text-sm">
          <span className="text-muted-foreground">{ui.skills.usedIn}</span>
          {roles.map((role) => (
            <Link
              className="bg-primary text-primary-foreground hover:bg-primary/85 px-1.5 font-bold"
              key={role.slug}
              to={`/experience/${role.slug}`}
            >
              {stationName(role)}
            </Link>
          ))}
        </span>
      ) : null}
    </li>
  );
};

export default SkillItem;
