import { IFlexContainerProps } from "@/components/common/Layout/types";
import { cn } from "@/utils";

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
