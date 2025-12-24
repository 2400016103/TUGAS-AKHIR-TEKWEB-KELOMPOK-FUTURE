import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartCheckout from "./pages/CartCheckout";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty } : i))
        .filter((i) => i.qty > 0)
    );
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Home addToCart={addToCart} />
      <Cart cart={cart} updateQty={updateQty} />
      <CartCheckout cart={cart} setCart={setCart} />
    </>
  );
}
