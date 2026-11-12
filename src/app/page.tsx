import { Navbar, Footer } from "@/components/layouts";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          Platform Wisata Nusantara
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          Jelajahi Keindahan Wisata Nusantara bersama{" "}
          <span className="text-blue-600 dark:text-blue-400">NUSAWIS</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Temukan destinasi wisata terbaik di seluruh Nusantara. Daftar sekarang
          dan mulai petualanganmu!
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-lg px-6 text-base font-medium transition-colors",
              "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            )}
          >
            Daftar Sekarang
          </Link>
          <Link
            href="/login"
            className={cn(
              "inline-flex h-12 items-center justify-center rounded-lg px-6 text-base font-medium transition-colors",
              "border border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
              "dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            Masuk
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
