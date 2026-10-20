import {
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

import ActionLink from "@/components/shared/action-link.tsx";
import { profile } from "@/data/profile.ts";
import { useLocale } from "@/hooks/use-locale.ts";
import { cn } from "@/lib/utils";
import type { UiStrings } from "@/types/ui.ts";

interface ContactActionsProps {
  className?: string;
  tone?: "light" | "dark";
}

const buildActions = (ui: UiStrings) => [
  {
    href: `mailto:${profile.email}`,
    icon: <EnvelopeSimpleIcon aria-hidden="true" weight="bold" />,
    label: ui.contact.email,
  },
  {
    external: true,
    href: profile.linkedinUrl,
    icon: <LinkedinLogoIcon aria-hidden="true" weight="bold" />,
    label: "LinkedIn",
  },
  {
    external: true,
    href: profile.githubUrl,
    icon: <GithubLogoIcon aria-hidden="true" weight="bold" />,
    label: "GitHub",
  },
  {
    download: true,
    href: profile.resumeFile,
    icon: <DownloadSimpleIcon aria-hidden="true" weight="bold" />,
    label: ui.contact.resume,
  },
];

const actionVariant = (isPrimary: boolean, isDark: boolean) => {
  if (isPrimary) {
    return isDark ? "light" : "default";
  }
  return isDark ? "inverse" : "outline";
};

const ContactActions = ({ className, tone = "light" }: ContactActionsProps) => {
  const { ui } = useLocale();
  const isDark = tone === "dark";
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {buildActions(ui).map((action, index) => (
        <ActionLink
          action={action}
          key={action.href}
          newTabLabel={ui.nav.newTab}
          variant={actionVariant(index === 0, isDark)}
        />
      ))}
    </div>
  );
};

export default ContactActions;
