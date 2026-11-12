import type { Metadata } from "next";
import Image from "next/image";
import RegisterCard from "@/components/auth/RegisterCard";

export const metadata: Metadata = {
  title: "Daftar | Nusawis",
};

export default function RegisterPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-start justify-center px-4 py-8 sm:px-6 lg:justify-end lg:px-[5%]">
      <Image
        src="/assets/bg-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-left"
      />
      <div className="relative z-10 flex w-full justify-center lg:justify-end">
        <RegisterCard />
      </div>
    </section>
  );
}
