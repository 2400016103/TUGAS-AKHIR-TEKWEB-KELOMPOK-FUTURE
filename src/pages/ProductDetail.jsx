// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Pastikan sudah install react-router-dom
import PocketBase from 'pocketbase';

// Inisialisasi PocketBase (sesuaikan URL jika perlu)
const pb = new PocketBase('http://127.0.0.1:8090');

export default function ProductDetail() {
  const { id } = useParams(); // Mengambil ID dari URL browser
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi ambil data
    async function fetchData() {
      try {
        setLoading(true);
        // Ganti 'products' dengan nama collection Anda di PocketBase (misal 'posts' atau 'toys')
        const record = await pb.collection('products').getOne(id);
        setProduct(record);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchData();
  }, [id]);

  // --- TAMPILAN LOADING ---
  if (loading) {
    return (
      <div className="min-h-screen bg-sky-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-sky-500"></div>
      </div>
    );
  }

  // --- TAMPILAN ERROR ---
  if (error || !product) {
    return (
      <div className="min-h-screen bg-sky-50 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Produk tidak ditemukan 😔</h2>
        <Link to="/" className="text-sky-500 hover:underline">Kembali ke Katalog</Link>
      </div>
    );
  }

  // --- TAMPILAN DETAIL PRODUK (Tema Biru) ---
  return (
    <div className="min-h-screen bg-sky-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Tombol Back */}
        <div className="p-4 border-b border-gray-100">
          <Link to="/" className="text-sky-600 font-semibold hover:text-sky-800">
            &larr; Kembali
          </Link>
        </div>

        <div className="md:flex">
          {/* Gambar Produk */}
          <div className="md:w-1/2">
            <img 
              // Sesuaikan URL gambar dengan struktur PocketBase Anda
              src={`http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.photo}`} 
              alt={product.name} 
              className="w-full h-96 object-cover bg-gray-200"
            />
          </div>

          {/* Info Produk */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-2xl text-sky-600 font-bold mb-6">
              Rp {parseInt(product.price).toLocaleString('id-ID')}
            </p>
            
            <div className="prose text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>

            <button className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition shadow-md">
              Masukkan Keranjang 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}