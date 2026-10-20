import { Link } from "react-router";

import PageContainer from "@/components/shared/page-container.tsx";
import SectionHeading from "@/components/shared/section-heading.tsx";
import { results } from "@/data/results.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { findRole, stationName } from "@/lib/roles.ts";
import type { Result } from "@/types/content.ts";

const ResultItem = ({ result }: { result: Result }) => {
  const { pick } = useLocale();
  const role = findRole(result.roleSlug);
  return (
    <li className="border-border flex flex-col gap-2 border-t-2 pt-4">
      <p className="text-2xl font-black tracking-tight">{pick(result.value)}</p>
      <p className="text-muted-foreground">{pick(result.detail)}</p>
      {role ? (
        <Link
          className="bg-sign text-sign-foreground hover:bg-sign/85 mt-auto self-start px-1.5 py-0.5 text-sm font-bold"
          to={`/experience/${role.slug}`}
        >
          {stationName(role)}
        </Link>
      ) : null}
    </li>
  );
};

const ResultsSection = () => {
  const { ui } = useLocale();
  return (
    <section aria-labelledby="results-heading" className="bg-muted py-16">
      <PageContainer className="flex flex-col gap-8">
        <SectionHeading id="results-heading">{ui.results}</SectionHeading>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <ResultItem key={result.value.en} result={result} />
          ))}
        </ul>
      </PageContainer>
    </section>
  );
};

export default ResultsSection;
