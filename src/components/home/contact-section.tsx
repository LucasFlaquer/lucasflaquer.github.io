import ContactActions from "@/components/shared/contact-actions.tsx";
import PageContainer from "@/components/shared/page-container.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";

const TerminusMark = () => (
  <div aria-hidden="true" className="flex items-center gap-0">
    <span className="flex flex-col gap-1">
      <span className="track-planned text-line-frontend h-2 w-24" />
      <span className="track-planned text-line-backend h-2 w-24" />
    </span>
    <span className="bg-sign-foreground h-10 w-2" />
  </div>
);

const ContactSection = () => {
  const { ui } = useLocale();
  return (
    <section
      aria-labelledby="contact-heading"
      className="border-sign-muted/25 bg-sign text-sign-foreground scroll-mt-28 py-20 dark:border-t"
      id="contact"
    >
      <PageContainer className="flex flex-col gap-6">
        <TerminusMark />
        <h2
          className="text-4xl font-black tracking-tight md:text-6xl"
          id="contact-heading"
        >
          {ui.contact.heading}
        </h2>
        <p className="text-sign-muted max-w-[60ch] text-lg">
          {ui.contact.lead}
        </p>
        <a
          className="self-start text-lg font-bold break-all underline decoration-2 underline-offset-4 hover:decoration-[3px] md:text-2xl"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
        <ContactActions className="pt-2" tone="dark" />
      </PageContainer>
    </section>
  );
};

export default ContactSection;
