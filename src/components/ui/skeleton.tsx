/**  Add a height class when using this component. The height needs to be provided externally */
import { cn } from "@/lib/utils";

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-grey-300 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
