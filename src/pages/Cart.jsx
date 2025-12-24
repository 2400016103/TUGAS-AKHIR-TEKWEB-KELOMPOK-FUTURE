export default function Cart({ cart, updateQty }) {
  if (cart.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-4">Keranjang</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between mb-3 bg-white p-4 rounded"
        >
          <span>
            {item.name} × {item.qty}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
