"use client";

import { cn } from "@/lib/utils";

interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function Icon({
  name,
  className,
  iconClassName = "material-symbols-outlined",
  onClick,
  ...rest
}: IIconProps): JSX.Element {
  return (
    <span
      role="presentation"
      className={cn("flex h-fit items-center", className)}
      onKeyUp={() => {}}
      onClick={onClick}
      {...rest}
    >
      <i
        className={cn(
          "text-icon-sm lg:text-icon-md cursor-pointer select-none duration-300",
          iconClassName,
          className
        )}
      >
        {name}
      </i>
    </span>
  );
}
