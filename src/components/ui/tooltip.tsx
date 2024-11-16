"use client";

import {
  Arrow,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Icon from "@/components/common/Icon";
import { FlexColumn } from "@/components/common/layout";
import { cn } from "@/lib/utils";

interface ToolTipProps {
  name: string;
  message?: string;
  side?: "top" | "right" | "bottom" | "left" | undefined;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
  stopPropagation?: boolean;
}

export default function ToolTip({
  name,
  message,
  side = "top",
  onClick,
  className,
  iconClassName,
  stopPropagation,
}: ToolTipProps) {
  return (
    <FlexColumn
      className={cn(
        "w-fit cursor-pointer select-none items-center justify-center",
        className
      )}
      tabIndex={0}
      onClick={e => {
        if (stopPropagation) {
          e.stopPropagation();
        }
      }}
    >
      <TooltipProvider delayDuration={80} skipDelayDuration={50}>
        <Tooltip>
          <TooltipTrigger onClick={onClick}>
            <Icon
              name={name}
              className={cn(
                "text-grey-500 hover:text-primary-400 hover:animate-pulse",
                iconClassName
              )}
            />
          </TooltipTrigger>
          {message && (
            <TooltipContent
              className={cn(
                "bg-grey-900 max-w-xs select-none rounded px-[15px] py-[10px] text-sm leading-none text-white",
                "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
                "will-change-[transform,opacity]"
              )}
              side={side}
              sideOffset={5}
            >
              {message}
              <Arrow className="fill-gray-900" />
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </FlexColumn>
  );
}
