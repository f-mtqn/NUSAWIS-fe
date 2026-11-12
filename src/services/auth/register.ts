import { fetcher } from "@/services/api";
import type { AuthResponse, RegisterPayload } from "@/types/auth";
import { AUTH_ENDPOINTS } from "./endpoints";

export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  return fetcher<AuthResponse>(AUTH_ENDPOINTS.register, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
