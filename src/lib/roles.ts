export type RoleId = "wisatawan" | "pengelola" | "admin";

export type RoleOption = {
  id: RoleId;
  title: string;
  description: string;
  /** Teks pada tombol submit saat peran ini dipilih */
  submitLabel: string;
};

export const ROLES: RoleOption[] = [
  {
    id: "wisatawan",
    title: "Wisatawan",
    description: "Cari wisata, rating, favorit, itinerary, ajukan usaha",
    submitLabel: "Masuk sebagai Wisatawan",
  },
  {
    id: "pengelola",
    title: "Pengelola Wisata",
    description: "Input pengunjung, update info, verifikasi usaha",
    submitLabel: "Masuk sebagai Pengelola Wisata",
  },
  {
    id: "admin",
    title: "Admin Pemerintah",
    description: "Kelola destinasi, data dasar, akun, dan peran",
    submitLabel: "Masuk sebagai Admin Pemerintah",
  },
];