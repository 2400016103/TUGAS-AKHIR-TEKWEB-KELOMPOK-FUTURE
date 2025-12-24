import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useProductActions } from './hooks/useProductActions';

// Halaman
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import AdminDashboard from './pages/AdminDashboard';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Toy Kids Future</h1>
          <nav>
            <a href="/" className="text-gray-600 hover:text-blue-600 mx-2">Beranda</a>
            <a href="/products" className="text-gray-600 hover:text-blue-600 mx-2">Produk</a>
            <a href="/admin" className="text-gray-600 hover:text-blue-600 mx-2">Admin</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="border-t mt-12 py-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Kelompok Future — Tugas Akhir TekWeb
      </footer>
    </div>
  );
}

export default function App() {
  useProductActions();

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route 
            path="*" 
            element={
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">404</h2>
                <p className="text-gray-600 mt-2">Halaman tidak ditemukan.</p>
                <a 
                  href="/" 
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  ← Kembali ke Beranda
                </a>
              </div>
            } 
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}