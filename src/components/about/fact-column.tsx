import type { ReactNode } from "react";

interface FactColumnProps {
  children: ReactNode;
  heading: string;
  level: "h2" | "h3";
}

const FactColumn = ({ children, heading, level: Heading }: FactColumnProps) => (
  <div className="border-sign flex flex-col gap-2 border-t-2 pt-3">
    <Heading className="text-lg font-black tracking-tight">{heading}</Heading>
    {children}
  </div>
);

export default FactColumn;
