// src/pages/ProductDetail.jsx
import { useProductActions } from "../hooks/useProductActions";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, deleteProduct } = useProductActions();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl text-gray-700">Produk tidak ditemukan</h2>
        <a href="/products" className="text-blue-600 hover:underline mt-4 inline-block">← Kembali ke Katalog</a>
      </div>
    );
  }

  const handleBuy = () => {
    const message = `Halo, saya mau beli:\n\n📦 *${product.name}*\n💰 Rp${product.price.toLocaleString('id-ID')}`;
    window.open(`https://wa.me/6285157739382?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDelete = () => {
    if (confirm(`Hapus "${product.name}"?`)) {
      deleteProduct(product.id);
      window.location.href = '/products';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <button 
        onClick={() => window.history.back()}
        className="text-blue-600 hover:underline mb-4 flex items-center gap-1"
      >
        ← Kembali
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-w-full max-h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-4">Rp{product.price.toLocaleString('id-ID')}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="flex gap-3">
              <button 
                onClick={handleBuy}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                📞 Beli via WA
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-3 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg font-medium"
              >
                🗑️ Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}