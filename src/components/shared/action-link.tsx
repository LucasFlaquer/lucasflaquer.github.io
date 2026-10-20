import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button-variants.ts";

interface ActionLinkProps {
  action: {
    download?: boolean;
    external?: boolean;
    href: string;
    icon: ReactNode;
    label: string;
  };
  newTabLabel: string;
  variant: "default" | "light" | "outline" | "inverse";
}

const ActionLink = ({ action, newTabLabel, variant }: ActionLinkProps) => (
  <a
    className={buttonVariants({ variant })}
    download={action.download}
    href={action.href}
    rel={action.external ? "noreferrer" : undefined}
    target={action.external ? "_blank" : undefined}
  >
    {action.icon}
    {action.label}
    {action.external ? <span className="sr-only">({newTabLabel})</span> : null}
  </a>
);

export default ActionLink;
