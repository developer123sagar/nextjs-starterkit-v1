"use client";

import { cn } from "@/utils";

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
          "lg:text-icon-md cursor-pointer select-none text-icon-sm duration-300",
          iconClassName,
          className
        )}
      >
        {name}
      </i>
    </span>
  );
}
