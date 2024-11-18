import ToolTip from "@/components/ui/tooltip";
import { cn } from "@/utils";

interface IInputLabelProps {
  label: string;
  tooltipMessage?: string;
  asterisk?: boolean;
  disabled?: boolean;
}

export default function InputLabel({
  label,
  tooltipMessage,
  asterisk,
  disabled,
}: IInputLabelProps) {
  return (
    <div
      className={cn("flex h-5 items-center", {
        "text-gray-400/80": disabled,
      })}
    >
      <p className="text-grey-700">{label}</p>
      {asterisk ? <span className="text-red-500">&nbsp;*</span> : null}
      <div className="ml-1">
        {tooltipMessage ? (
          <ToolTip name="info" message={tooltipMessage || "tooltip"} />
        ) : null}
      </div>
    </div>
  );
}
