import {DateInputProps} from "../../types/form";

export default function DateInput({
  name,
  value,
  onChange,
  label,
  min,
  max,
  disabled = false,
}: DateInputProps) {

  const currentYear = new Date();
  const defaultMin = new Date(currentYear.getFullYear() - 60, 0, 1).toISOString().split("T")[0];
  const defaultMax = new Date(currentYear.getFullYear() + 8, 0, 1).toISOString().split("T")[0];

  return (
	<div className="w-full flex flex-col gap-2">
	  <p className="text-sm px-1">
		{label}
	  </p>
	  <input
		name={name}
		type="date"
		value={value}
		onChange={onChange}
		placeholder={label || "Date"}
		min={min || defaultMin}
		max={max || defaultMax}
		disabled={disabled}
		className="w-full text-base text-neutral-700 placeholder-neutral-400 focus:outline-none border border-neutral-400 focus:border-b-primary focus:border-x-0 focus:border-t-0 focus:py-3 focus:bg-transparent focus:px-0 px-4 py-4"
	  />
	</div>
  );
}