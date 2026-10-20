import type { ReactNode } from "react";

import { teamwork, workflow } from "@/data/about.ts";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

interface StorySectionProps {
  children: ReactNode;
  heading: string;
  id: string;
}

const StorySection = ({ children, heading, id }: StorySectionProps) => (
  <section aria-labelledby={id} className="flex flex-col gap-3">
    <h2 className="text-2xl font-black tracking-tight" id={id}>
      {heading}
    </h2>
    {children}
  </section>
);

const AboutStory = () => {
  const { pick, ui } = useLocale();
  return (
    <>
      <StorySection heading={ui.summary} id="summary-heading">
        <p className="max-w-[65ch] text-xl leading-relaxed">
          {pick(profile.summary)}
        </p>
      </StorySection>
      <div className="grid gap-10 md:grid-cols-2">
        <StorySection heading={ui.about.workflow} id="workflow-heading">
          <p className="leading-relaxed">{pick(workflow)}</p>
        </StorySection>
        <StorySection heading={ui.about.teamwork} id="teamwork-heading">
          <p className="leading-relaxed">{pick(teamwork)}</p>
        </StorySection>
      </div>
    </>
  );
};

export default AboutStory;
