/**
 * Base API client & fetcher helper
 * Frontend developer dapat menghubungkan endpoint backend di sini.
 */

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "");

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL belum didefinisikan di file .env");
}

export async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const body: { detail?: unknown; message?: string } = await res.json()
      .catch(() => ({}));

    let message = `HTTP error! status: ${res.status}`;
    if (typeof body.detail === "string") {
      message = body.detail;
    } else if (Array.isArray(body.detail)) {
      message = body.detail
        .map((item) => (item as { msg?: string }).msg)
        .filter(Boolean)
        .join(", ");
    } else if (typeof body.message === "string") {
      message = body.message;
    }

    throw new Error(message);
  }

  return res.json();
}
