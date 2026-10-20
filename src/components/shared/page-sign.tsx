import type { ReactNode } from "react";

import PageContainer from "@/components/shared/page-container.tsx";

interface PageSignProps {
  children?: ReactNode;
  title: string;
}

const PageSign = ({ children, title }: PageSignProps) => (
  <div className="border-sign-muted/25 bg-sign text-sign-foreground border-t">
    <PageContainer className="flex flex-col gap-5 pt-12 pb-12">
      <span aria-hidden="true" className="flex gap-1">
        <span className="bg-line-frontend h-2 w-12" />
        <span className="bg-line-backend h-2 w-12" />
      </span>
      <h1 className="text-5xl leading-none font-black tracking-[-0.03em] md:text-7xl">
        {title}
      </h1>
      {children}
    </PageContainer>
  </div>
);

export default PageSign;
