import { Navbar, Footer } from "@/components/layouts";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          Frontend &amp; UI/UX Starter
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          Jelajahi Keindahan Wisata Nusantara bersama{" "}
          <span className="text-blue-600 dark:text-blue-400">NUSAWIS</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Template dasar frontend dengan arsitektur rapi siap kolaborasi antara UI/UX Designer &amp; Frontend Developer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            Mulai Eksplorasi
          </Button>
          <Button variant="outline" size="lg">
            Pelajari Lebih Lanjut
          </Button>
        </div>

        {/* Info Box untuk Panduan Kolaborasi Tim */}
        <section className="mt-16 w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-8 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Panduan Struktur Folder untuk Kolaborasi:
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                🎨 Untuk UI/UX Designer:
              </span>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><code className="text-blue-600 dark:text-blue-400">src/components/ui</code>: Komponen atom (Button, Input, Card).</li>
                <li><code className="text-blue-600 dark:text-blue-400">src/components/layouts</code>: Navbar, Footer, Sidebar.</li>
                <li><code className="text-blue-600 dark:text-blue-400">src/app/globals.css</code>: Color tokens &amp; global styles.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                💻 Untuk Frontend Developer:
              </span>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li><code className="text-blue-600 dark:text-blue-400">src/services</code>: Integrasi API backend &amp; fetcher.</li>
                <li><code className="text-blue-600 dark:text-blue-400">src/hooks</code>: Custom hooks logika state / query.</li>
                <li><code className="text-blue-600 dark:text-blue-400">src/types</code>: Tipe data &amp; interface TypeScript.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
