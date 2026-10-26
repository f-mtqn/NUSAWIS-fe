import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper untuk menggabungkan class Tailwind secara dinamis dan aman dari konflik class.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
