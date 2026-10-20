import PageContainer from "@/components/shared/page-container.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const CURRENT_YEAR = new Date().getFullYear();

const SiteFooter = () => {
  const { ui } = useLocale();
  return (
    <footer className="border-sign-muted/30 bg-sign text-sign-muted border-t">
      <PageContainer className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {CURRENT_YEAR} {profile.name}
        </p>
        <p>{ui.footer}</p>
      </PageContainer>
    </footer>
  );
};

export default SiteFooter;
