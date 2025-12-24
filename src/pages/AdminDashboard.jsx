import { useProductActions } from "../hooks/useProductActions";

export default function AdminDashboard() {
  const { products } = useProductActions();

  const total = products.length;
  const available = products.filter(p => p.isAvailable).length;
  const outOfStock = total - available;

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <h3 className="font-bold text-gray-700">Total Produk</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{total}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <h3 className="font-bold text-gray-700">Tersedia</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{available}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow text-center">
          <h3 className="font-bold text-gray-700">Habis</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">{outOfStock}</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h2 className="font-bold text-blue-800">📌 Catatan untuk Bahran (Anggota B)</h2>
        <p className="text-blue-700 mt-1">
          Form CRUD produk akan diisi oleh Bahran. Untuk sekarang, data diambil dari <code>useProductActions</code>.
        </p>
      </div>
    </div>
  );
}