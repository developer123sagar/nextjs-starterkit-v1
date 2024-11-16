import ToolTip from "@/components/ui/tooltip";

interface IInputLabelProps {
  label: string;
  tooltipMessage?: string;
  asterisk?: boolean;
  id: string;
  disabled?: boolean;
}

export default function InputLabel({
  label,
  tooltipMessage,
  asterisk,
  id,
  disabled,
}: IInputLabelProps) {
  return (
    <div
      className={`label flex h-5 items-center ${
        disabled ? "text-grey-600" : ""
      }`}
    >
      <p id={id} className="body-sm">
        {label}
      </p>
      {asterisk ? <span className="text-primary-400">&nbsp;*</span> : null}
      <div className="ml-1">
        {tooltipMessage ? (
          <ToolTip name="info" message={tooltipMessage || "tooltip"} />
        ) : null}
      </div>
    </div>
  );
}
