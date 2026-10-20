import NoBreakWords from "@/components/shared/no-break-words.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { cn } from "@/lib/utils";

interface HeroPortraitProps {
  className?: string;
}

const PHOTO_SIZE = 460;

const HeroPortrait = ({ className }: HeroPortraitProps) => {
  const { pick, ui } = useLocale();
  return (
    <figure className={cn("flex flex-col self-end", className)}>
      <div className="border-sign bg-sign text-sign-foreground relative grid aspect-square w-full place-items-center border-4">
        <span aria-hidden="true" className="text-5xl font-black">
          LF
        </span>
        <img
          alt={ui.photoAlt}
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
          height={PHOTO_SIZE}
          src={profile.avatarUrl}
          width={PHOTO_SIZE}
        />
      </div>
      <figcaption className="bg-sign text-sign-foreground flex items-center justify-between gap-3 px-3 py-2.5 text-sm max-md:hidden">
        <span className="font-bold">
          <NoBreakWords text={pick(profile.location)} />
        </span>
        <span aria-hidden="true" className="flex gap-1">
          <span className="bg-line-frontend size-3 rounded-full" />
          <span className="bg-line-backend size-3 rounded-full" />
        </span>
      </figcaption>
    </figure>
  );
};

export default HeroPortrait;
