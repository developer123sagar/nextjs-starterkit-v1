"use client";

import { useState } from "react";

import Input from "@/components/common/FormUI/Input";
import InputLabel from "@/components/common/FormUI/InputLabel";
import Label from "@/components/common/Label";
import { FlexColumn } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import InputOTP from "@/components/ui/input-otp";
import Popover from "@/components/ui/popover";
import RangeSlider from "@/components/ui/range-slider";
import Skeleton from "@/components/ui/skeleton";
import Switch from "@/components/ui/switch";

export default function Home() {
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <div className="container space-y-4 p-10">
      <h3>Hello, It&apos;s a Next.js Starter kit v1</h3>
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
          label="username"
          asterisk
          tooltipMessage="write user name"
        />
        <Input />
      </FlexColumn>
      <Button variant={"shimmer"}>Submit</Button>
      <InputOTP onComplete={otp => console.log("OTP Entered:", otp)} />
    </div>
  );
}
