import { Outlet, ScrollRestoration } from "react-router";

import SiteFooter from "@/components/layout/site-footer.tsx";
import SiteHeader from "@/components/layout/site-header.tsx";
import { useHashScroll } from "@/hooks/use-hash-scroll.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const SiteLayout = () => {
  const { ui } = useLocale();
  useHashScroll();
  return (
    <>
      <a
        className="bg-signal text-signal-foreground sr-only z-50 px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        href="#content"
      >
        {ui.nav.skipToContent}
      </a>
      <SiteHeader />
      <main className="flex-1" id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </>
  );
};

export default SiteLayout;
