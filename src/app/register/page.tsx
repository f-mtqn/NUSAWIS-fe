"use client";

import { useState, type FormEvent } from "react";
import { register } from "@/services/auth";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    setResult(null);
    try {
      const res = await register({
        name: String(form.get("name")),
        email: String(form.get("email")),
        password: String(form.get("password")),
      });
      setResult(JSON.stringify(res, null, 2));
    } catch (error) {
      setResult(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nama</label>
        <input id="register-name" name="name" type="text" required />

        <label htmlFor="register-email">Email</label>
        <input id="register-email" name="email" type="email" required />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          name="password"
          type="password"
          pattern="(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}"
          title="Minimal 8 karakter, wajib ada huruf besar dan simbol"
          required
        />

        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>

      <p>
        Sudah punya akun? <a href="/login">Login</a>
      </p>

      <h2>Hasil</h2>
      <pre>{result ?? "Belum ada request"}</pre>
    </main>
  );
}
