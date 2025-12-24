import { useState, useEffect } from 'react';

const STORAGE_KEY = 'product-store-products';

export const useProductActions = () => {
  const getInitialProducts = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved 
      ? JSON.parse(saved) 
      : [
          {
            id: "1",
            name: "LEGO City Police Station",
            category: "Mainan Edukasi",
            price: 750000,
            description: "Set LEGO dengan 800+ pcs, dilengkapi mobil polisi & figur karakter.",
            image: "https://via.placeholder.com/300x200/e0e0e0/000000?text=LEGO+Police",
            isAvailable: true
          },
          {
            id: "2",
            name: "Boneka Panda Lucu",
            category: "Boneka & Plush",
            price: 125000,
            description: "Boneka panda ukuran 30 cm, bahan lembut, aman untuk anak.",
            image: "https://via.placeholder.com/300x200/f5f5f5/333333?text=Panda+Plush",
            isAvailable: true
          },
          {
            id: "3",
            name: "Remote Control Mobil Balap",
            category: "Mainan RC",
            price: 299000,
            description: "Mobil RC kecepatan tinggi, baterai isi ulang, jarak kendali 30 meter.",
            image: "https://via.placeholder.com/300x200/cccccc/000000?text=RC+Car",
            isAvailable: true
          },
          {
            id: "4",
            name: "Puzzle Anak 100 Potong",
            category: "Mainan Edukasi",
            price: 85000,
            description: "Puzzle bergambar hewan & alam, meningkatkan fokus & motorik halus.",
            image: "https://via.placeholder.com/300x200/ffffff/444444?text=Puzzle+100",
            isAvailable: true
          }
        ];
  };

  const [products, setProducts] = useState(getInitialProducts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now().toString(),
      isAvailable: true
    };
    setProducts([...products, product]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts(
      products.map(p => 
        p.id === id 
          ? { ...p, ...updatedData } 
          : p
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleAvailability = (id) => {
    setProducts(
      products.map(p => 
        p.id === id 
          ? { ...p, isAvailable: !p.isAvailable } 
          : p
      )
    );
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleAvailability
  };
};