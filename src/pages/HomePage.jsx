export default function HomePage() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Selamat Datang di Toko Mainan</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Platform jual beli mainan edukatif & seru untuk anak-anak — dibuat oleh Kelompok Future.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a 
          href="/products" 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Lihat Katalog
        </a>
        <a 
          href="/admin" 
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
        >
          Admin Panel
        </a>
      </div>
    </div>
  );
}