// import { Navbar, Footer } from "@/components/layouts";
import { Button } from "@/components/ui/Button";
import LoginCard from "@/components/auth/LoginCard";
import Image from "../../node_modules/next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* <Navbar /> */}

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
        <LoginCard />
      </div>
    </section>

      {/* <Footer /> */}
    </div>
  );
}
