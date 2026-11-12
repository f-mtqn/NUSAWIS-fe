import { fetcher } from "@/services/api";
import type { AuthResponse, LoginPayload } from "@/types/auth";
import { AUTH_ENDPOINTS } from "./endpoints";

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  return fetcher<AuthResponse>(AUTH_ENDPOINTS.login, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
