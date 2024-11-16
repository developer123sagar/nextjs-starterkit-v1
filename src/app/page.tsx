"use client";

import { useState } from "react";

import Input from "@/components/common/FormUI/Input";
import InputLabel from "@/components/common/FormUI/InputLabel";
import Icon from "@/components/common/Icon";
import IconButton from "@/components/common/IconButton";
import Label from "@/components/common/Label";
import { FlexColumn } from "@/components/common/Layout";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import Popover from "@/components/ui/popover";
import RangeSlider from "@/components/ui/range-slider";
import Skeleton from "@/components/ui/skeleton";
import Switch from "@/components/ui/switch";
import ToolTip from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const checked = true;
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <div className="container space-y-4 p-10">
      <h3>Hello, It&apos;s a Next.js Starter kit v1</h3>
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
        onClick={() => {
          toast({
            title: "Sajjan Raj Vaidya Concert",
            description: "I wish i could go to sajjan raj vaidya's concert",
          });
        }}
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
      <Label>Username</Label>
      <RangeSlider />
      <Switch />
      <FlexColumn>
        <InputLabel
          id="user"
          label="username"
          asterisk
          tooltipMessage="write user name"
        />
        <Input />
      </FlexColumn>
      <Button variant={"shimmer"}>Submit</Button>
    </div>
  );
}
