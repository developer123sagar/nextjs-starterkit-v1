import { IFlexContainerProps } from "@/components/common/Layout/types";
import { cn } from "@/utils";

export default function FlexColumn({
  className = "",
  children,
  gap,
  style,
  ...rest
}: IFlexContainerProps) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={{
        gap: gap ? `${gap * 0.25}rem` : "",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
