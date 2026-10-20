import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

import LanguageSwitch from "@/components/layout/language-switch.tsx";
import SiteNav from "@/components/layout/site-nav.tsx";
import ThemeSwitch from "@/components/layout/theme-switch.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import { buttonVariants } from "@/components/ui/button-variants.ts";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const HomeLink = () => {
  const { ui } = useLocale();
  return (
    <Link
      aria-label={ui.nav.home}
      className="flex items-center gap-3 text-lg font-black tracking-tight"
      to="/"
    >
      <span
        aria-hidden="true"
        className="border-sign-foreground grid size-9 place-items-center rounded-full border-3 text-sm"
      >
        LF
      </span>
      <span className="hidden sm:inline">{profile.name}</span>
    </Link>
  );
};

const ResumeButton = () => {
  const { ui } = useLocale();
  return (
    <a
      className={buttonVariants({ size: "sm", variant: "inverse" })}
      download
      href={profile.resumeFile}
    >
      <DownloadSimpleIcon aria-hidden="true" weight="bold" />
      <span className="sr-only sm:not-sr-only">{ui.contact.resume}</span>
    </a>
  );
};

const SiteHeader = () => (
  <header className="border-sign-muted/25 bg-sign text-sign-foreground sticky top-0 z-40 border-b">
    <PageContainer className="flex h-16 items-center gap-4 md:gap-8">
      <HomeLink />
      <SiteNav className="hidden md:flex" />
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <ThemeSwitch />
        <LanguageSwitch />
        <ResumeButton />
      </div>
    </PageContainer>
    <SiteNav className="border-sign-muted/30 flex overflow-x-auto border-t px-4 md:hidden" />
  </header>
);

export default SiteHeader;
