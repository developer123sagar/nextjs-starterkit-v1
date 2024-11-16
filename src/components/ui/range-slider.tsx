import React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary-50">
      <SliderPrimitive.Range className="absolute h-full bg-primary-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-3 rounded-full bg-primary-400 ring-offset-0 transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export default RangeSlider;
