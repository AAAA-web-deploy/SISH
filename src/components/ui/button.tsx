import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#ea6829] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        story: "bg-[#ea6829] text-white",
        community:
          "border-[1.5px] border-[#e7dcd2] bg-transparent text-[#f7f4ee]",
      },
      size: {
        hero: "px-[1.4em] py-[0.82em]",
      },
    },
    defaultVariants: {
      variant: "story",
      size: "hero",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
