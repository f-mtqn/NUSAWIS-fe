import Image from "next/image";
import LoginCard from "@/components/auth/LoginCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative flex min-h-screen items-start justify-center px-4 py-8 sm:px-6 lg:justify-end lg:px-[5%]">
        <Image
          src="/assets/bg-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="relative z-10 flex w-full justify-center lg:justify-end">
          <LoginCard />
        </div>
      </section>
    </div>
  );
}
