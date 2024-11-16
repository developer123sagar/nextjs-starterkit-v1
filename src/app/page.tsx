"use client";

import { useState } from "react";

import Icon from "@/components/common/Icon";
import IconButton from "@/components/common/IconButton";
import { FlexColumn } from "@/components/common/layout";
import Spinner from "@/components/common/spinner";
import { Button } from "@/components/ui/button";
import Popover from "@/components/ui/popover";
import Skeleton from "@/components/ui/skeleton";
import ToolTip from "@/components/ui/tooltip";

export default function Home() {
  const checked = true;
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <div className="container space-y-4 p-10">
      <h2>Hello, It&apos;s a Next.js Starter kit v1</h2>
      <Icon name="close" />
      <IconButton
        name={checked ? "close" : "check_box_outline_blank"}
        className="h-8 w-8 text-blue-500"
      />
      <Spinner className="h-12 w-20" />
      <Button
        leftIcon="close"
        rightIcon="send"
        className="mt-4"
        withLoader
        isLoading
      >
        Submit
      </Button>
      <ToolTip name="close" message="what's up" />
      <Skeleton className="bg-grey-500" />{" "}
      {Array.from({ length: 2 }, (_, index) => (
        <Skeleton key={index} className="h-10" />
      ))}
      <div className="ml-52 items-center">
        <Popover
          show={showPopOver}
          triggerContent={
            <Button
              variant="outline"
              className="w-fit"
              onClick={() => setShowPopOver(!showPopOver)}
            >
              Open popover
            </Button>
          }
          onOpenChange={open => setShowPopOver(open)}
          popoverContent={
            <div>
              <h6>Filter</h6>
              <FlexColumn className="gap-4">
                <p>this is popover</p>
              </FlexColumn>
            </div>
          }
        />
      </div>
    </div>
  );
}
