"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ROLES, type RoleId } from "@/lib/roles";
import TextField from "@/components/ui/TextField";
import PasswordField from "./PasswordField";
import RoleSelector from "./RoleSelector";
import { login } from "@/services/auth";

export default function LoginCard() {
  const router = useRouter();
  const [role, setRole] = useState<RoleId>("wisatawan");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeRole = ROLES.find((r) => r.id === role)!;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ email, password });
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      aria-labelledby="judul-masuk"
      className="w-full max-w-[33rem] rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <p className="text-xs font-medium uppercase text-primary">Akun Nusawis</p>
      <h1 id="judul-masuk" className="mt-1 text-[28px] font-semibold leading-tight text-black text-left">
        Masuk
      </h1>
      <p className="mt-3 text-base text-ink/90">
        Selamat datang kembali. Pilih peran sesuai akun Anda.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <RoleSelector value={role} onChange={setRole} />

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nama@contoh.id"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField value={password} onChange={setPassword} />

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="h-[52px] cursor-pointer w-full rounded-lg bg-brand px-4 text-base font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Memproses..." : activeRole.submitLabel}
        </button>

        {role === "wisatawan" && (
          <p className="rounded-lg bg-brand-soft px-4 py-3 text-sm text-ink/90">
            Pelaku Usaha masuk sebagai Wisatawan. Dashboard Usaha muncul setelah usaha disetujui.
          </p>
        )}
      </form>

      <div className="mt-8 flex flex-col items-center gap-8 text-sm font-medium text-primary">
        <Link href="/register" className="hover:text-brand-hover">
          Belum punya akun? Daftar
        </Link>
        <Link href="/" className="hover:text-brand-hover">
          Lanjutkan sebagai tamu
        </Link>
      </div>
    </section>
  );
}
