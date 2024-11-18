import { ReactNode } from "react";

import { cn } from "@/utils";

interface ILabelProps {
  children: ReactNode;
  htmlFor?: string | number;
  required?: boolean;
  className?: string;
}

export default function Label({
  children,
  htmlFor,
  required,
  className,
}: ILabelProps) {
  return (
    <label
      className={cn("text-sm font-medium text-grey-800", className)}
      htmlFor={htmlFor?.toString()}
    >
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}
