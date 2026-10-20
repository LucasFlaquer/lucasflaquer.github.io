import AboutSection from "@/components/home/about-section.tsx";
import ContactSection from "@/components/home/contact-section.tsx";
import ExperienceSection from "@/components/home/experience-section.tsx";
import Hero from "@/components/home/hero.tsx";
import LineSection from "@/components/home/line-section.tsx";
import ResultsSection from "@/components/home/results-section.tsx";
import SkillsSection from "@/components/home/skills-section.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const HomePage = () => {
  const { pick } = useLocale();
  return (
    <>
      <title>{`${profile.name} · ${pick(profile.title)}`}</title>
      <meta content={pick(profile.intro)} name="description" />
      <Hero />
      <LineSection />
      <ResultsSection />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
