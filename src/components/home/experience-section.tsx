import ExperienceRow from "@/components/experience/experience-row.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import SectionHeading from "@/components/shared/section-heading.tsx";
import { rolesLatestFirst } from "@/data/experience.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const ExperienceSection = () => {
  const { ui } = useLocale();
  return (
    <section
      aria-labelledby="experience-heading"
      className="scroll-mt-28 py-16"
      id="experience"
    >
      <PageContainer className="flex flex-col gap-6">
        <SectionHeading id="experience-heading">
          {ui.experience.heading}
        </SectionHeading>
        <ol>
          {rolesLatestFirst.map((role) => (
            <ExperienceRow key={role.slug} role={role} />
          ))}
        </ol>
      </PageContainer>
    </section>
  );
};

export default ExperienceSection;
