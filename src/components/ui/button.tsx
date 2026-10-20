import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button-variants.ts";

const Button = ({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) => (
  <ButtonPrimitive
    className={cn(buttonVariants({ className, size, variant }))}
    data-slot="button"
    {...props}
  />
);

export { Button };
