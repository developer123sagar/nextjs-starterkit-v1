"use client";

import { cn } from "@/utils";

interface IIconButtonProps {
  name: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function IconButton({
  name,
  className,
  iconClassName = "material-icons-outlined",
  onClick,
}: IIconButtonProps) {
  return (
    <button
      type="button"
      className={cn("flex h-10 w-10 items-center justify-center", className)}
      onClick={onClick}
    >
      <i className={cn(iconClassName, className)}>{name}</i>
    </button>
  );
}
