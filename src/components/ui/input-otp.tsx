"use client";

import React, {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  useRef,
  useState,
} from "react";

import { cn } from "@/utils";

interface InputOTPProps {
  length?: number; // Number of OTP digits, defaults to 4
  pattern?: RegExp; // Validation pattern, defaults to digits
  onComplete?: (otp: string) => void; // Callback when all fields are filled
}

const InputOTP: React.FC<InputOTPProps> = ({
  length = 4,
  pattern = /^[0-9]{1}$/, // Default pattern allows digits only
  onComplete,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill("")); // Array with `length` empty strings
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Array of refs for each input field

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !pattern.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target as HTMLInputElement);
      setOtp(prevOtp => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = ""; // Clear the current field
        return updatedOtp;
      });

      // Focus on the previous input field if Backspace is pressed and index > 0
      if (e.key === "Backspace" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const index = inputRefs.current.indexOf(target);

    // Update the value at the current index and move to the next input if it's not the last
    if (pattern.test(target.value)) {
      setOtp(prevOtp => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = target.value; // Replace the value at the current index
        return updatedOtp;
      });

      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Trigger onComplete if all fields are filled
      if (index === otp.length - 1) {
        const completedOtp = otp.join("") + target.value;
        onComplete?.(completedOtp);
      }
    } else {
      target.value = ""; // Clear invalid input
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^${pattern.source}{${length}}$`).test(text)) {
      return;
    }
    const characters = text.split("").slice(0, length);
    setOtp(characters);

    // Trigger onComplete if pasted OTP is valid
    if (characters.length === length) {
      onComplete?.(characters.join(""));
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container">
        <form id="otp-form" className="flex gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={el => {
                inputRefs.current[index] = el; // Assign the element to the ref
              }}
              className={cn(
                "shadow-xs border-stroke text-gray-5 flex size-[70px] items-center justify-center rounded-xl border border-primary-400 bg-white p-2 text-center text-2xl font-medium outline-none sm:text-4xl",
                {
                  "bg-primary-400 text-white": digit,
                }
              )}
            />
          ))}
        </form>
      </div>
    </section>
  );
};

export default InputOTP;
