import StackList from "@/components/shared/stack-list.tsx";
import { useLocale } from "@/hooks/use-locale.ts";
import type { Role } from "@/types/content.ts";

interface StationDetailsProps {
  role: Role;
}

const HEADING = "font-black text-2xl tracking-tight";
const ASIDE_BLOCK = "flex flex-col gap-3 border-sign border-t-2 pt-3";

const StationStory = ({ role }: StationDetailsProps) => {
  const { pick, ui } = useLocale();
  return (
    <div className="flex flex-col gap-10 md:col-span-8">
      <section className="flex flex-col gap-3">
        <h2 className={HEADING}>{ui.experience.context}</h2>
        <p className="max-w-[65ch] text-lg leading-relaxed">
          {pick(role.context)}
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className={HEADING}>{ui.experience.highlights}</h2>
        <ul className="flex max-w-[70ch] flex-col gap-4">
          {pick(role.highlights).map((item) => (
            <li
              className="grid grid-cols-[1.25rem_1fr] gap-3 leading-relaxed"
              key={item}
            >
              <span
                aria-hidden="true"
                className="border-sign mt-1.5 size-3.5 rounded-full border-[3px]"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const StationAside = ({ role }: StationDetailsProps) => {
  const { pick, ui } = useLocale();
  return (
    <aside className="flex flex-col gap-8 md:col-span-4">
      {role.team ? (
        <section className={ASIDE_BLOCK}>
          <h2 className="text-lg font-black">{ui.experience.team}</h2>
          <p>{pick(role.team)}</p>
        </section>
      ) : null}
      {role.stack.length > 0 ? (
        <section className={ASIDE_BLOCK}>
          <h2 className="text-lg font-black">{ui.experience.stack}</h2>
          <StackList items={role.stack} />
        </section>
      ) : null}
    </aside>
  );
};

const StationDetails = ({ role }: StationDetailsProps) => (
  <div className="grid gap-12 md:grid-cols-12">
    <StationStory role={role} />
    <StationAside role={role} />
  </div>
);

export default StationDetails;
