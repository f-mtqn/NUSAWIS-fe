import Link from "next/link";
import { SITE_CONFIG } from "@/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; 2026 {SITE_CONFIG.name}. {SITE_CONFIG.description}.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/privacy" className="hover:underline">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:underline">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
