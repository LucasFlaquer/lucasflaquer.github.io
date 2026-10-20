import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border-2 font-bold whitespace-nowrap transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-11 px-4 text-base",
        icon: "size-11",
        lg: "h-12 px-5 text-base",
        sm: "h-9 px-3 text-sm",
      },
      variant: {
        default:
          "bg-sign text-sign-foreground hover:bg-sign/85 border-transparent",
        ghost: "hover:bg-muted hover:text-foreground border-transparent",
        inverse:
          "border-sign-foreground text-sign-foreground hover:bg-sign-foreground hover:text-sign bg-transparent",
        light:
          "bg-sign-foreground text-sign hover:bg-sign-foreground/85 border-transparent",
        link: "text-foreground px-0 underline underline-offset-4 hover:decoration-[3px]",
        outline:
          "border-sign bg-background text-foreground hover:bg-sign hover:text-sign-foreground",
      },
    },
  }
);
