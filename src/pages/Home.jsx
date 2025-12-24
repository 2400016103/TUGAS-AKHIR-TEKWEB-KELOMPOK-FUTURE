import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Robot Mainan",
    price: 75000,
    image: "https://picsum.photos/300/200?1",
  },
  {
    id: 2,
    name: "Boneka",
    price: 90000,
    image: "https://picsum.photos/300/200?2",
  },
  {
    id: 3,
    name: "Mobil Balap",
    price: 60000,
    image: "https://picsum.photos/300/200?3",
  },
  {
    id: 4,
    name: "Lego",
    price: 50000,
    image: "https://picsum.photos/300/200?4",
  },
  {
    id: 5,
    name: "Puzzle",
    price: 40000,
    image: "https://picsum.photos/300/200?5",
  },
  {
    id: 6,
    name: "Masak-masakan",
    price: 70000,
    image: "https://picsum.photos/300/200?6",
  },
];

export default function Home({ addToCart }) {
  return (
    <div className="min-h-screen bg-sky-50 py-10 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Katalog ToyKids 🧸
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
