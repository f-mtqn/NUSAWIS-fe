import { useId, type InputHTMLAttributes, type ReactNode } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  /** Elemen di sisi kanan input, mis. tombol "Tampilkan" */
  trailing?: ReactNode;
};

export default function TextField({ label, trailing, className = "", ...props }: TextFieldProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="flex h-[52px] items-center rounded-lg border border-line bg-white px-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
        <input
          id={id}
          className={`h-full w-full bg-transparent text-[15px] outline-none focus:outline-none focus:ring-0 placeholder:text-muted/70 ${className}`}
          {...props}
        />
        {trailing}
      </div>
    </div>
  );
}
