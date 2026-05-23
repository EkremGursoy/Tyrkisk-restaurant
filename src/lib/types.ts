import type { StaticImageData } from "next/image";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: Omit<Dish, "image">[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}
