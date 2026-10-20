import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const SectionHeading = ({ children, className, id }: SectionHeadingProps) => (
  <h2
    className={cn(
      "border-sign border-t-4 pt-3 text-3xl font-black tracking-tight md:text-4xl",
      className
    )}
    id={id}
  >
    {children}
  </h2>
);

export default SectionHeading;
