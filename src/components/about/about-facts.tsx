import FactColumn from "@/components/about/fact-column.tsx";
import SeparatorDot from "@/components/shared/separator-dot.tsx";
import { education, languages } from "@/data/about.ts";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

interface AboutFactsProps {
  level: "h2" | "h3";
}

const AvailabilityList = () => {
  const { pick } = useLocale();
  return (
    <ul className="flex flex-col gap-1">
      <li>{pick(profile.location)}</li>
      {pick(profile.availability).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const EducationList = () => {
  const { pick } = useLocale();
  return (
    <ul className="flex flex-col gap-3">
      {education.map((entry) => (
        <li className="flex flex-col" key={entry.school}>
          <span className="font-bold">{pick(entry.degree)}</span>
          <span className="text-muted-foreground text-sm">
            {entry.school}
            <SeparatorDot />
            <span className="font-mono">{entry.period}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

const LanguageList = () => {
  const { pick } = useLocale();
  return (
    <ul className="flex flex-col gap-1">
      {languages.map((language) => (
        <li key={language.name.en}>
          <span className="font-bold">{pick(language.name)}</span>:{" "}
          {pick(language.level)}
        </li>
      ))}
    </ul>
  );
};

const AboutFacts = ({ level }: AboutFactsProps) => {
  const { ui } = useLocale();
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <FactColumn heading={ui.about.availability} level={level}>
        <AvailabilityList />
      </FactColumn>
      <FactColumn heading={ui.about.education} level={level}>
        <EducationList />
      </FactColumn>
      <FactColumn heading={ui.about.languages} level={level}>
        <LanguageList />
      </FactColumn>
    </div>
  );
};

export default AboutFacts;
