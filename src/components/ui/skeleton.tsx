/**  Add a height class when using this component. The height needs to be provided externally */
import { cn } from "@/utils";

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-grey-300", className)}
      {...props}
    />
  );
}
