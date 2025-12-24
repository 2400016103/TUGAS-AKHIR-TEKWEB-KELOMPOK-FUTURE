import { useState } from "react";

export default function CartCheckout({ cart, setCart }) {
  const [success, setSuccess] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setSuccess(true);
    setCart([]); // KOSONGKAN CART
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-50">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center animate-bounce">
          <h2 className="text-4xl font-extrabold text-sky-500">
            🎉 Pesanan Berhasil!
          </h2>

          <p className="mt-4 text-lg">
            Terima kasih sudah berbelanja di
          </p>

          <p className="text-2xl font-bold text-sky-500 mt-1">
            ToyKids 🧸
          </p>

          <button
            onClick={() => setSuccess(false)}
            className="mt-8 bg-sky-500 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-600 transition"
          >
            🏠 Kembali Belanja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-extrabold text-sky-500 mb-6">
        🛒 Checkout
      </h2>

      {cart.length === 0 ? (
        <p>Keranjang masih kosong</p>
      ) : (
        <form onSubmit={handleCheckout} className="space-y-4">
          <input
            required
            placeholder="Nama Lengkap"
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            required
            placeholder="Alamat"
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            required
            type="tel"
            placeholder="Nomor Telepon"
            className="w-full border rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white text-lg font-bold py-3 rounded-full hover:bg-sky-600 transition"
          >
            🎉 Checkout Sekarang
          </button>
        </form>
      )}
    </div>
  );
}
