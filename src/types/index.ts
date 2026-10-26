/**
 * File definisi tipe data global TypeScript
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Destination {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}
