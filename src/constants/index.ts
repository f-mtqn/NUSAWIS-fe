import { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "NUSAWIS",
  description: "Platform Eksplorasi Wisata Nusantara",
  url: "https://nusawis.com",
};

export const NAV_LINKS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Destinasi", href: "/destinasi" },
  { label: "Paket Wisata", href: "/paket" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];
