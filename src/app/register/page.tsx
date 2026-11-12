import type { Metadata } from "next";
import Image from "next/image";
import RegisterCard from "@/components/auth/RegisterCard";

export const metadata: Metadata = {
  title: "Daftar | Nusawis",
};

export default function RegisterPage() {
  return (
    <>
      {/* Background tetap viewport-sized, tidak terpengaruh tinggi konten */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/bg-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
      </div>

      <section className="flex min-h-screen items-start justify-center px-4 py-8 sm:px-6 lg:justify-end lg:px-[5%]">
        <div className="flex w-full justify-center lg:justify-end">
          <RegisterCard />
        </div>
      </section>
    </>
  );
}
