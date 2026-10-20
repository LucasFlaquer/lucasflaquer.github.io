import ContactActions from "@/components/shared/contact-actions.tsx";
import TrackBullets from "@/components/shared/track-bullets.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const HeroPanel = () => {
  const { pick } = useLocale();
  return (
    <div className="bg-muted flex flex-col gap-5 p-5 sm:p-7">
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-3 text-2xl font-black tracking-tight sm:text-3xl">
          <TrackBullets tracks={["frontend", "backend"]} />
          {pick(profile.title)}
        </p>
        <p className="text-muted-foreground font-bold">{profile.stackLine}</p>
      </div>
      <p className="max-w-[60ch] text-lg leading-relaxed">
        {pick(profile.intro)}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
        {pick(profile.availability).map((item) => (
          <li className="flex items-center gap-2" key={item}>
            <span aria-hidden="true" className="bg-sign size-1.5" />
            {item}
          </li>
        ))}
      </ul>
      <ContactActions />
    </div>
  );
};

export default HeroPanel;
