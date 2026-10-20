import LineLegend from "@/components/line/line-legend.tsx";
import LineMap from "@/components/line/line-map.tsx";
import StationPreview from "@/components/line/station-preview.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import SectionHeading from "@/components/shared/section-heading.tsx";
import { rolesByDate } from "@/data/experience.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { useStationPreview } from "@/hooks/use-station-preview.ts";

const LineSection = () => {
  const { ui } = useLocale();
  const { previewRole, setPreviewSlug } = useStationPreview(rolesByDate);
  return (
    <section aria-labelledby="line-heading" className="pb-16">
      <PageContainer className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-1 flex-col gap-2">
            <SectionHeading id="line-heading">{ui.line.heading}</SectionHeading>
            <p className="text-muted-foreground max-w-[60ch]">{ui.line.lead}</p>
          </div>
          <LineLegend />
        </div>
        <LineMap
          activeSlug={previewRole?.slug ?? ""}
          onPreview={setPreviewSlug}
          roles={rolesByDate}
        />
        <StationPreview role={previewRole} />
      </PageContainer>
    </section>
  );
};

export default LineSection;
