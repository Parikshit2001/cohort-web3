import { ChangeEvent } from "react";

function InputBox({
  classNameInput,
  classNameLabel,
  className,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  classNameInput?: string;
  classNameLabel?: string;
  className?: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className={`${className}`}>
      <div>
        <label className={`text-sm font-semibold ${classNameLabel}`}>
          {label}
        </label>
      </div>
      <div>
        <input
          className={`py-2 px-2 rounded-lg ${classNameInput}`}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputBox;
