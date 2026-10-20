import AboutFacts from "@/components/about/about-facts.tsx";
import ArrowLink from "@/components/shared/arrow-link.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import SectionHeading from "@/components/shared/section-heading.tsx";
import { workflow } from "@/data/about.ts";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const AboutSection = () => {
  const { pick, ui } = useLocale();
  return (
    <section aria-labelledby="about-heading" className="py-16">
      <PageContainer className="flex flex-col gap-10">
        <SectionHeading id="about-heading">{ui.about.heading}</SectionHeading>
        <div className="grid gap-8 md:grid-cols-12">
          <p className="max-w-[65ch] text-xl leading-relaxed md:col-span-7">
            {pick(profile.summary)}
          </p>
          <div className="flex flex-col gap-2 md:col-span-5">
            <h3 className="text-lg font-black tracking-tight">
              {ui.about.workflow}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pick(workflow)}
            </p>
          </div>
        </div>
        <AboutFacts level="h3" />
        <ArrowLink to="/about">{ui.about.more}</ArrowLink>
      </PageContainer>
    </section>
  );
};

export default AboutSection;
