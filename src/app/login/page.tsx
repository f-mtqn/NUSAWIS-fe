"use client";

import { useState, type FormEvent } from "react";
import { login } from "@/services/auth";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    setResult(null);
    try {
      const res = await login({
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
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" type="email" required />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" name="password" type="password" required />

        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>

      <p>
        Belum punya akun? <a href="/register">Register</a>
      </p>

      <h2>Hasil</h2>
      <pre>{result ?? "Belum ada request"}</pre>
    </main>
  );
}
