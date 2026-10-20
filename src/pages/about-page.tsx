import AboutFacts from "@/components/about/about-facts.tsx";
import AboutStory from "@/components/about/about-story.tsx";
import ContactSection from "@/components/home/contact-section.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import PageSign from "@/components/shared/page-sign.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const AboutPage = () => {
  const { pick, ui } = useLocale();
  return (
    <>
      <title>{`${ui.about.heading} · ${profile.name}`}</title>
      <PageSign title={ui.about.heading}>
        <p className="text-sign-muted max-w-[55ch] text-xl">
          {pick(profile.intro)}
        </p>
      </PageSign>
      <PageContainer className="flex flex-col gap-14 py-14">
        <AboutStory />
        <AboutFacts level="h2" />
      </PageContainer>
      <ContactSection />
    </>
  );
};

export default AboutPage;
