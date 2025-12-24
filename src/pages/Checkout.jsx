export default function Checkout({ cart }) {
  if (cart.length === 0) return null;

  const total = cart.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.name} x {item.qty}
          </span>
          <span>Rp {(item.price * item.qty).toLocaleString()}</span>
        </div>
      ))}
      <p className="font-semibold">
        Total: Rp {total.toLocaleString()}
      </p>

      <button
        onClick={() => alert("Pesanan berhasil 🎉")}
        className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Pesan Sekarang
      </button>
    </div>
  );
}
