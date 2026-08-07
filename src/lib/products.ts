export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  previousPrice: string;
  discount: string;
  rating: string;
  reviews: string;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "wireless-headphones",
    name: "Premium Wireless Over-Ear Headphones",
    image: "/products/wireless-headphones.png",
    price: "$129.99",
    previousPrice: "$169.99",
    discount: "24% off",
    rating: "4.8",
    reviews: "1,284",
    category: "Electronics",
    description:
      "Immersive sound, soft memory-foam cushions, and a lightweight wireless design made for all-day listening.",
    features: [
      "Up to 40 hours of battery life",
      "Active noise cancellation",
      "Fast USB-C charging",
    ],
  },
  {
    id: "everyday-sneaker",
    name: "Everyday Suede Low-Top Sneakers",
    image: "/products/everyday-sneaker.png",
    price: "$84.00",
    previousPrice: "$110.00",
    discount: "24% off",
    rating: "4.7",
    reviews: "892",
    category: "Fashion",
    description:
      "A versatile everyday sneaker combining soft suede details, supportive cushioning, and a timeless neutral palette.",
    features: [
      "Premium suede and leather upper",
      "Cushioned everyday insole",
      "Durable rubber outsole",
    ],
  },
  {
    id: "smart-watch",
    name: "Graphite Smart Watch with Sport Band",
    image: "/products/smart-watch.png",
    price: "$149.99",
    previousPrice: "$199.99",
    discount: "25% off",
    rating: "4.9",
    reviews: "2,106",
    category: "Electronics",
    description:
      "Stay connected and keep moving with health insights, smart notifications, and a comfortable all-day sport band.",
    features: [
      "Heart rate and activity tracking",
      "Water-resistant design",
      "Up to 7 days of battery life",
    ],
  },
  {
    id: "coffee-maker",
    name: "Compact Drip Coffee Maker with Glass Carafe",
    image: "/products/coffee-maker.png",
    price: "$69.90",
    previousPrice: "$89.90",
    discount: "22% off",
    rating: "4.6",
    reviews: "645",
    category: "Home & Garden",
    description:
      "Brew smooth, flavorful coffee with a compact machine designed for simple mornings and smaller countertops.",
    features: [
      "Programmable brewing timer",
      "Reusable mesh filter",
      "Easy-pour glass carafe",
    ],
  },
];

export const getProductById = (productId: string) =>
  products.find((product) => product.id === productId);
