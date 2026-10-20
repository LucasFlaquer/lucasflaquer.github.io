import HeroPanel from "@/components/home/hero-panel.tsx";
import HeroPortrait from "@/components/home/hero-portrait.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import { profile } from "@/data/profile.ts";

const Hero = () => (
  <section aria-labelledby="hero-heading">
    <PageContainer className="grid gap-8 pt-8 pb-10 md:grid-cols-12 md:gap-10 md:pt-10">
      <div className="flex flex-col gap-6 md:col-span-9">
        <h1
          className="text-[clamp(3.5rem,9vw,6rem)] leading-[0.9] font-black tracking-[-0.035em]"
          id="hero-heading"
        >
          {profile.name}
        </h1>
        <HeroPanel />
      </div>
      <HeroPortrait className="max-md:row-start-1 max-md:w-40 md:col-span-3" />
    </PageContainer>
  </section>
);

export default Hero;
