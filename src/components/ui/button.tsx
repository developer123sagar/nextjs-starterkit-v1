import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import Icon from "@/components/common/Icon";
import Spinner from "@/components/common/Spinner";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary-400 text-white hover:shadow-top hover:shadow-primary-600",
        destructive:
          "bg-red-500 text-white hover:shadow-top hover:shadow-red-500",
        outline: `border text-primary-400 border-primary-400 border-input 
        hover:shadow-top bg-white`,
        secondary:
          "bg-white text-primary-400 border border-primary-400 hover:shadow-top",
        ghost:
          "text-primary-400 font-bold disabled:text-grey-600 hover:text-primary-400",
        link: `font-bold underline-offset-4 underline hover:no-underline
         text-primary-100 hover:shadow hover:shadow-primary-400`,
        shimmer: `animate-shimmer bg-[linear-gradient(110deg,#FF7854,45%,#F6F5F2,48%,#FF7854)] 
         bg-[length:200%_100%] text-white`,
      },
      size: {
        default: "h-9 py-2 px-3",
        sm: "h-7 px-2 rounded-lg",
        lg: "h-11 px-8 rounded-md",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonContent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonContent.displayName = "Button";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  name?: string;
  leftIcon?: string;
  rightIcon?: string;
  iconClassName?: string;
  withLoader?: boolean;
  className?: string;
  isLoading?: boolean;
}

function Button({
  leftIcon,
  rightIcon,
  children,
  iconClassName,
  withLoader,
  isLoading,
  className,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContent
      {...rest}
      className={cn("flex items-center gap-1", className)}
    >
      {leftIcon && (
        <Icon className={cn(iconClassName, "!text-icon-sm")} name={leftIcon} />
      )}
      {children}
      {rightIcon && !isLoading && (
        <Icon className={cn(iconClassName, "!text-icon-sm")} name={rightIcon} />
      )}
      {withLoader && isLoading && <Spinner />}
    </ButtonContent>
  );
}

export { Button, buttonVariants };
