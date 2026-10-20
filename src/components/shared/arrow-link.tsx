import { ArrowRightIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { Link } from "react-router";

import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

const ArrowLink = ({ children, className, to }: ArrowLinkProps) => (
  <Link
    className={cn(
      "flex items-center gap-2 self-start font-bold whitespace-nowrap underline decoration-2 underline-offset-4 hover:decoration-[3px]",
      className
    )}
    to={to}
  >
    {children}
    <ArrowRightIcon aria-hidden="true" weight="bold" />
  </Link>
);

export default ArrowLink;
