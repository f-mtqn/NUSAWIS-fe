"use client";

import { useState } from "react";
import TextField from "@/components/ui/TextField";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PasswordField({ value, onChange }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      label="Kata sandi"
      name="password"
      type={visible ? "text" : "password"}
      autoComplete="current-password"
      placeholder="Masukkan kata sandi"
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-pressed={visible}
          className="ml-2 shrink-0 text-sm font-medium text-primary hover:text-brand-hover"
        >
          {visible ? "Sembunyikan" : "Tampilkan"}
        </button>
      }
    />
  );
}