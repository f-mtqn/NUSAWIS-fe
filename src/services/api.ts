/**
 * Base API client & fetcher helper
 * Frontend developer dapat menghubungkan endpoint backend di sini.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.nusawis.com/v1";

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
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || `HTTP error! status: ${res.status}`);
  }

  return res.json();
}
