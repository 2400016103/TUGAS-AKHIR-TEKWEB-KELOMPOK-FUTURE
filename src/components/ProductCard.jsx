export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
      <img
        src={product.image}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="font-bold mt-1">
          Rp {product.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)} className="w-full mt-4 bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded transition">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
