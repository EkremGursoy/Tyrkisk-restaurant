import type { Dish, MenuCategory, Testimonial, Value } from "./types";

export const featuredDishes: Dish[] = [
  {
    id: "adana",
    name: "Adana Kebab",
    description:
      "Hand-minced lamb seasoned with red pepper and herbs, grilled over open flame.",
    price: 229,
    image:
     "https://turkishfoodie.com/adana-kebab/",
  },
  {
    id: "mixed-grill",
    name: "Mixed Grill Plate",
    description:
      "A generous selection of our finest kebabs, served with rice and grilled vegetables.",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
  },
  {
    id: "lahmacun",
    name: "Lahmacun",
    description:
      "Thin crispy flatbread topped with seasoned minced meat, herbs, and lemon.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
  },
  {
    id: "baklava",
    name: "Baklava",
    description:
      "Layers of flaky pastry filled with pistachios and sweetened with honey syrup.",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1519676867240-a0ef83f42f31?w=800&q=80",
  },
];

export const whyMemiliCards = [
  {
    id: "fresh",
    title: "Fresh Ingredients",
    description:
      "We source quality produce daily to ensure every plate meets our standards.",
    icon: "🌿",
  },
  {
    id: "authentic",
    title: "Authentic Recipes",
    description:
      "Time-honored Turkish recipes passed down and perfected in our kitchen.",
    icon: "✨",
  },
  {
    id: "hospitality",
    title: "Warm Hospitality",
    description:
      "Every guest is welcomed like family — the Turkish way of dining.",
    icon: "🤝",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The best Turkish food in town. Fresh, flavorful, and excellent service.",
    author: "Sarah M.",
  },
  {
    id: "2",
    quote: "Amazing atmosphere and authentic taste.",
    author: "James K.",
  },
  {
    id: "3",
    quote: "Beautiful interior and incredible grill dishes.",
    author: "Elena R.",
  },
];

export const aboutValues: Value[] = [
  {
    id: "taste",
    title: "Authentic Taste",
    description:
      "We honor traditional Turkish flavors with every recipe we prepare.",
    icon: "🍽️",
  },
  {
    id: "fresh",
    title: "Fresh Ingredients",
    description:
      "Quality ingredients are the foundation of every dish we serve.",
    icon: "🥬",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Memili is a gathering place for friends, families, and neighbors.",
    icon: "🏘️",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Turkish warmth and generosity are at the heart of our service.",
    icon: "💛",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "grills",
    title: "Grills & Kebabs",
    items: [
      {
        id: "adana",
        name: "Adana Kebab",
        description:
          "Spicy hand-minced lamb kebab grilled on a flat skewer with herbs.",
        price: 229,
      },
      {
        id: "chicken-shish",
        name: "Chicken Shish",
        description:
          "Marinated chicken cubes grilled to perfection with peppers.",
        price: 219,
      },
      {
        id: "lamb-shish",
        name: "Lamb Shish",
        description: "Tender lamb cubes marinated in traditional spices.",
        price: 259,
      },
      {
        id: "mixed-grill",
        name: "Mixed Grill",
        description:
          "Selection of lamb, chicken, and Adana kebab with sides.",
        price: 329,
      },
    ],
  },
  {
    id: "classics",
    title: "Turkish Classics",
    items: [
      {
        id: "iskender",
        name: "Iskender Kebab",
        description:
          "Sliced döner over pide bread with tomato sauce and yogurt.",
        price: 249,
      },
      {
        id: "lahmacun",
        name: "Lahmacun",
        description: "Crispy flatbread with seasoned minced meat topping.",
        price: 149,
      },
      {
        id: "pide",
        name: "Pide with Cheese & Meat",
        description: "Boat-shaped flatbread baked with cheese and minced meat.",
        price: 179,
      },
    ],
  },
  {
    id: "meze",
    title: "Meze",
    items: [
      {
        id: "hummus",
        name: "Hummus",
        description: "Creamy chickpea dip with olive oil and warm pita.",
        price: 89,
      },
      {
        id: "tzatziki",
        name: "Tzatziki",
        description: "Cool yogurt dip with cucumber, garlic, and dill.",
        price: 79,
      },
      {
        id: "mixed-meze",
        name: "Mixed Meze Plate",
        description: "Assortment of our finest meze for sharing.",
        price: 169,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "baklava",
        name: "Baklava",
        description: "Pistachio-filled pastry with honey syrup.",
        price: 89,
      },
      {
        id: "kunefe",
        name: "Kunefe",
        description: "Warm cheese pastry soaked in sweet syrup.",
        price: 109,
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        id: "tea",
        name: "Turkish Tea",
        description: "Traditional black tea served in a tulip glass.",
        price: 39,
      },
      {
        id: "ayran",
        name: "Ayran",
        description: "Refreshing salted yogurt drink.",
        price: 45,
      },
      {
        id: "soft-drinks",
        name: "Soft Drinks",
        description: "Selection of chilled soft beverages.",
        price: 49,
      },
    ],
  },
];

export const openingHours = [
  { days: "Monday – Thursday", hours: "11:00 – 22:00" },
  { days: "Friday – Saturday", hours: "11:00 – 23:00" },
  { days: "Sunday", hours: "12:00 – 21:00" },
];

export const restaurantInfo = {
  name: "Memili",
  address: "Karl Johans gate 00, Oslo, Norway",
  phone: "+47 000 00 000",
  email: "hello@memili.no",
};

export const socialLinks = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "TikTok", href: "#", icon: "tiktok" },
];
