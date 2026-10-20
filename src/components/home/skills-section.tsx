import ArrowLink from "@/components/shared/arrow-link.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import SectionHeading from "@/components/shared/section-heading.tsx";
import SkillGroupHeader from "@/components/skills/skill-group-header.tsx";
import { skillGroups } from "@/data/skills.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const SkillsSection = () => {
  const { ui } = useLocale();
  return (
    <section aria-labelledby="skills-heading" className="bg-muted py-16">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading id="skills-heading">{ui.skills.heading}</SectionHeading>
        <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <li className="flex flex-col gap-3" key={group.id}>
              <SkillGroupHeader group={group} level="h3" />
              <ul className="flex flex-wrap gap-x-3 gap-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ArrowLink to="/skills">{ui.skills.more}</ArrowLink>
      </PageContainer>
    </section>
  );
};

export default SkillsSection;
