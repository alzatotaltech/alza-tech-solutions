import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "b57-focus-ring inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-cyan-300/30 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-slate-950 shadow-[0_12px_32px_rgba(36,140,255,.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(36,140,255,.35)]",
        secondary: "border border-white/12 bg-white/[.07] px-5 py-2.5 text-alza-text backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/[.11]",
        ghost: "px-3 py-2 text-alza-muted hover:bg-white/[.07] hover:text-alza-text",
        outline: "border border-alza-border bg-transparent px-5 py-2.5 text-alza-text hover:border-cyan-300/40 hover:bg-cyan-300/5",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-10 rounded-lg px-3.5 text-xs",
        lg: "min-h-12 rounded-2xl px-6 text-[15px]",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
