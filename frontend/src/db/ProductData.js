const products = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    description: "Flagship smartphone with 200MP camera and Snapdragon 8 Gen 2.",
    price: 124999,
    image: [
      "https://dummyimage.com/600x800/000/fff&text=Samsung+Galaxy+S23+Ultra+Front",
      "https://dummyimage.com/600x800/000/fff&text=Samsung+Galaxy+S23+Ultra+Back"
    ],
    category: "Smartphone",
    subCategory: "Android",
    sizes: ["256GB", "512GB", "1TB"],
    bestseller: true,
    date: 2024,
    currency: "INR"
  },
  {
    id: 2,
    name: "Apple MacBook Pro 16-inch",
    description: "Laptop with M2 Pro chip for unparalleled performance.",
    price: 249999,
    image: [
      "https://dummyimage.com/600x400/000/fff&text=MacBook+Pro+16+Front",
      "https://dummyimage.com/600x400/000/fff&text=MacBook+Pro+16+Side"
    ],
    category: "Laptop",
    subCategory: "MacOS",
    sizes: ["16GB RAM", "32GB RAM"],
    bestseller: true,
    date: 2023,
    currency: "INR"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Noise-canceling headphones with exceptional sound quality.",
    price: 29999,
    image: ["https://dummyimage.com/600x400/000/fff&text=Sony+WH-1000XM5"],
    category: "Headphones",
    subCategory: "Wireless",
    sizes: [],
    bestseller: true,
    date: 2022,
    currency: "INR"
  },
  {
    id: 4,
    name: "Dell XPS 13",
    description: "Ultra-lightweight Windows laptop with edge-to-edge display.",
    price: 129999,
    image: ["https://dummyimage.com/600x400/000/fff&text=Dell+XPS+13"],
    category: "Laptop",
    subCategory: "Windows",
    sizes: ["8GB RAM", "16GB RAM"],
    bestseller: false,
    date: 2024,
    currency: "INR"
  },
  {
    id: 5,
    name: "Apple iPhone 15 Pro",
    description: "Latest iPhone with titanium body and A17 Pro chip.",
    price: 139999,
    image: [
      "https://dummyimage.com/600x800/000/fff&text=iPhone+15+Pro+Front",
      "https://dummyimage.com/600x800/000/fff&text=iPhone+15+Pro+Back"
    ],
    category: "Smartphone",
    subCategory: "iOS",
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    bestseller: true,
    date: 2024,
    currency: "INR"
  },
  {
    id: 6,
    name: "Bose SoundLink Revolve+ II",
    description: "Portable Bluetooth speaker with 360° sound.",
    price: 24999,
    image: ["https://dummyimage.com/600x400/000/fff&text=Bose+SoundLink+Revolve+II"],
    category: "Speaker",
    subCategory: "Portable",
    sizes: [],
    bestseller: false,
    date: 2023,
    currency: "INR"
  },
  {
    id: 7,
    name: "LG OLED C3",
    description: "4K OLED TV with stunning visuals and Dolby Atmos.",
    price: 189999,
    image: ["https://dummyimage.com/800x600/000/fff&text=LG+OLED+C3"],
    category: "Television",
    subCategory: "OLED",
    sizes: ["55-inch", "65-inch", "77-inch"],
    bestseller: true,
    date: 2024,
    currency: "INR"
  },
  {
    id: 8,
    name: "Sony PlayStation 5",
    description: "Next-gen gaming console with ray tracing and 8K support.",
    price: 49999,
    image: [
      "https://dummyimage.com/600x400/000/fff&text=PlayStation+5+Front",
      "https://dummyimage.com/600x400/000/fff&text=PlayStation+5+Side"
    ],
    category: "Gaming Console",
    subCategory: "PlayStation",
    sizes: [],
    bestseller: true,
    date: 2023,
    currency: "INR"
  },
  {
    id: 9,
    name: "Microsoft Surface Pro 9",
    description: "2-in-1 laptop with detachable keyboard and 120Hz display.",
    price: 149999,
    image: ["https://dummyimage.com/600x400/000/fff&text=Surface+Pro+9"],
    category: "Laptop",
    subCategory: "Windows",
    sizes: ["8GB RAM", "16GB RAM"],
    bestseller: false,
    date: 2024,
    currency: "INR"
  },
  {
    id: 10,
    name: "Samsung Smart Monitor M8",
    description: "4K smart monitor with integrated streaming apps.",
    price: 79999,
    image: ["https://dummyimage.com/800x600/000/fff&text=Samsung+Smart+Monitor+M8"],
    category: "Monitor",
    subCategory: "4K",
    sizes: ["32-inch"],
    bestseller: true,
    date: 2023,
    currency: "INR"
  },
  {
    id: 11,
    name: "Apple iPad Air (5th Gen)",
    description: "Tablet with M1 chip and Liquid Retina display.",
    price: 64999,
    image: [
      "https://dummyimage.com/600x400/000/fff&text=iPad+Air+5+Front",
      "https://dummyimage.com/600x400/000/fff&text=iPad+Air+5+Back"
    ],
    category: "Tablet",
    subCategory: "iOS",
    sizes: ["64GB", "256GB"],
    bestseller: false,
    date: 2024,
    currency: "INR"
  },
  {
    id: 12,
    name: "JBL Flip 6",
    description: "Portable waterproof Bluetooth speaker.",
    price: 12999,
    image: ["https://dummyimage.com/600x400/000/fff&text=JBL+Flip+6"],
    category: "Speaker",
    subCategory: "Portable",
    sizes: [],
    bestseller: true,
    date: 2022,
    currency: "INR"
  }
];

export default products;
