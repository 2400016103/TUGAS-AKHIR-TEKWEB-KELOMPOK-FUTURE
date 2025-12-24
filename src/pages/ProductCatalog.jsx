import { useProductActions } from "../hooks/useProductActions";

export default function ProductCatalog() {
  const { products } = useProductActions();

  const handleBuy = (productName) => {
    const message = `Halo, saya tertarik membeli:\n\n📦 *${productName}*\n\nApakah masih tersedia?`;
    const url = `https://wa.me/6285157739382?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Katalog Mainan — Toy Kids Future</h1>
        <a 
          href="/admin" 
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded"
        >
          ⚙️ Kelola Produk
        </a>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Belum ada produk tersedia.</p>
          <a 
            href="/admin" 
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Tambah Produk
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <a 
              key={product.id} 
              href={`/product/${product.id}`} 
              className="block border rounded-lg p-4 hover:shadow-md transition bg-white"
            >
              <div className="bg-gray-100 rounded-md w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-40 object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-blue-600 font-semibold mt-1">
                Rp{product.price.toLocaleString('id-ID')}
              </p>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleBuy(product.name);
                }}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition"
              >
                📞 Beli via WA
              </button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}