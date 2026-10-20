import { useParams } from "react-router";

import StationDetails from "@/components/experience/station-details.tsx";
import StationNav from "@/components/experience/station-nav.tsx";
import StationSign from "@/components/experience/station-sign.tsx";
import ContactSection from "@/components/home/contact-section.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { findRole, stationName } from "@/lib/roles.ts";
import NotFoundPage from "@/pages/not-found-page.tsx";

const ExperiencePage = () => {
  const { slug } = useParams();
  const { pick } = useLocale();
  const role = findRole(slug);
  if (!role) {
    return <NotFoundPage />;
  }
  return (
    <>
      <title>{`${pick(role.title)} · ${stationName(role)} · ${profile.name}`}</title>
      <StationSign role={role} />
      <PageContainer className="flex flex-col gap-16 py-14">
        <StationDetails role={role} />
        <StationNav role={role} />
      </PageContainer>
      <ContactSection />
    </>
  );
};

export default ExperiencePage;
