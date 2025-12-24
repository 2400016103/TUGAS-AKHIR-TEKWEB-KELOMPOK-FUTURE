// src/components/CartItem.jsx
import React from 'react';

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  // Hitung subtotal per item
  const subtotal = item.price * item.quantity;

  // URL Gambar (Gunakan placeholder jika gambar tidak ada)
  // Pastikan URL PocketBase sesuai konfigurasi Anda
  const imageUrl = item.photo 
    ? `http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.photo}`
    : 'https://via.placeholder.com/100?text=No+Image';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 transition hover:shadow-md">
      
      {/* 1. Gambar & Nama Produk */}
      <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
        <img 
          src={imageUrl} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-lg bg-gray-100"
        />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
          <p className="text-sky-600 font-medium">
            Rp {parseInt(item.price).toLocaleString('id-ID')} / pcs
          </p>
        </div>
      </div>

      {/* 2. Kontrol Jumlah (Quantity) */}
      <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
        <button 
          onClick={() => onDecrease(item.id)}
          className="text-gray-500 hover:text-sky-600 font-bold px-2 py-1 disabled:opacity-50"
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span className="font-bold text-gray-700 w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => onIncrease(item.id)}
          className="text-gray-500 hover:text-sky-600 font-bold px-2 py-1"
        >
          +
        </button>
      </div>

      {/* 3. Subtotal & Hapus */}
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-6">
        <div className="text-right">
          <p className="text-xs text-gray-500">Total:</p>
          <p className="font-bold text-lg text-gray-800">
            Rp {subtotal.toLocaleString('id-ID')}
          </p>
        </div>
        
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition"
          title="Hapus Barang"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>

    </div>
  );
}