// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { NAV_LINKS } from "@/lib/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const linkClass = (href: string) =>
//     `block rounded-md px-2 py-2 text-[15px] text-primary transition-colors hover:text-brand-hover md:py-1 ${
//       pathname === href ? "font-semibold" : ""
//     }`;

//   return (
//     <header className="sticky top-0 z-30 border-b border-line/50 bg-white">
//       <nav
//         aria-label="Navigasi utama"
//         className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-6"
//       >
//         <div className="flex items-center md:gap-24">
//           <Link href="/" className="text-2xl font-medium tracking-tight text-primary">
//             NUSAWIS
//           </Link>

//           {/* Desktop */}
//           <ul className="hidden items-center gap-6 md:flex">
//             {NAV_LINKS.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={linkClass(item.href)}
//                   aria-current={pathname === item.href ? "page" : undefined}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Tombol menu mobile */}
//         <button
//           type="button"
//           className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
//           aria-expanded={open}
//           aria-controls="menu-mobile"
//           aria-label={open ? "Tutup menu" : "Buka menu"}
//           onClick={() => setOpen((v) => !v)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
//             {open ? (
//               <path d="M6 6l12 12M18 6L6 18" />
//             ) : (
//               <path d="M4 7h16M4 12h16M4 17h16" />
//             )}
//           </svg>
//         </button>
//       </nav>

//       {/* Menu mobile */}
//       {open && (
//         <ul id="menu-mobile" className="border-t border-line/50 bg-white px-4 py-2 md:hidden">
//           {NAV_LINKS.map((item) => (
//             <li key={item.href}>
//               <Link
//                 href={item.href}
//                 className={linkClass(item.href)}
//                 aria-current={pathname === item.href ? "page" : undefined}
//                 onClick={() => setOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }