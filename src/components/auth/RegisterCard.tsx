"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import TextField from "@/components/ui/TextField";
import PasswordField from "./PasswordField";
import { register } from "@/services/auth";

export default function RegisterCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register({ name, email, password });
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Pendaftaran gagal");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      aria-labelledby="judul-daftar"
      className="w-full max-w-[33rem] rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <p className="text-xs font-medium uppercase text-primary">Akun Nusawis</p>
      <h1 id="judul-daftar" className="mt-1 text-[28px] font-semibold leading-tight text-black text-left">
        Daftar
      </h1>
      <p className="mt-3 text-base text-ink/90">
        Buat akun baru untuk mulai menjelajahi wisata Nusantara.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <TextField
          label="Nama Lengkap"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Nama lengkap Anda"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          {loading ? "Mendaftarkan..." : "Buat Akun"}
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-8 text-sm font-medium text-primary">
        <Link href="/login" className="hover:text-brand-hover">
          Sudah punya akun? Masuk
        </Link>
      </div>
    </section>
  );
}
