import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then(res => res.json())
      .then(data => setProduct(data.products || []));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      return exists
        ? prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
        : [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeFromCart(id);
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));
  };

  return (
    <ProductContext.Provider value={{ product, cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;