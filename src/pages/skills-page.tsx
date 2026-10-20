import ContactSection from "@/components/home/contact-section.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import PageSign from "@/components/shared/page-sign.tsx";
import SkillGroupHeader from "@/components/skills/skill-group-header.tsx";
import SkillItem from "@/components/skills/skill-item.tsx";
import { profile } from "@/data/profile.ts";
import { skillGroups } from "@/data/skills.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const SkillsPage = () => {
  const { ui } = useLocale();
  return (
    <>
      <title>{`${ui.skills.heading} · ${profile.name}`}</title>
      <PageSign title={ui.skills.heading}>
        <p className="text-sign-muted max-w-[55ch] text-xl">{ui.skills.lead}</p>
      </PageSign>
      <PageContainer className="grid gap-x-12 gap-y-14 py-14 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            aria-labelledby={`skills-${group.id}`}
            className="flex flex-col gap-4"
            key={group.id}
          >
            <SkillGroupHeader group={group} level="h2" />
            <ul>
              {group.items.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </ul>
          </section>
        ))}
      </PageContainer>
      <ContactSection />
    </>
  );
};

export default SkillsPage;
