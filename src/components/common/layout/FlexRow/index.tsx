import { IFlexContainerProps } from "@/components/common/layout/types";
import { cn } from "@/lib/utils";

export default function FlexRow({
  className = "",
  children,
  gap,
  ...rest
}: IFlexContainerProps) {
  return (
    <div
      className={cn("flex flex-row", className)}
      {...rest}
      style={{
        gap: gap ? `${gap * 0.25}rem` : "",
      }}
    >
      {children}
    </div>
  );
}
