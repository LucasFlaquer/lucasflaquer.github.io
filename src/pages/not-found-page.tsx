import { ArrowLeftIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

import PageContainer from "@/components/shared/page-container.tsx";
import { buttonVariants } from "@/components/ui/button-variants.ts";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const NotFoundPage = () => {
  const { ui } = useLocale();
  return (
    <PageContainer className="flex flex-col items-start gap-6 py-24">
      <title>{`${ui.notFound.heading} · ${profile.name}`}</title>
      <div aria-hidden="true" className="flex items-center">
        <span className="bg-line-frontend h-2 w-24" />
        <span className="track-planned text-line-frontend h-2 w-16" />
      </div>
      <h1 className="text-5xl font-black tracking-tight md:text-7xl">
        {ui.notFound.heading}
      </h1>
      <p className="text-muted-foreground max-w-[50ch] text-lg">
        {ui.notFound.body}
      </p>
      <Link className={buttonVariants()} to="/">
        <ArrowLeftIcon aria-hidden="true" weight="bold" />
        {ui.notFound.action}
      </Link>
    </PageContainer>
  );
};

export default NotFoundPage;
