import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-purple-800",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        ghost: "text-black hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
