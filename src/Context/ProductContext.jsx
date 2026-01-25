import { createContext, useEffect, useState, useRef } from "react";

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
    fetch("https://dummyjson.com/products")
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

  // Notification for added-to-cart (visible for 3 seconds)
  const [notification, setNotification] = useState({ visible: false, message: "" });
  const notifTimer = useRef(null);

  const notify = (message) => {
    if (notifTimer.current) clearTimeout(notifTimer.current);
    setNotification({ visible: true, message });
    notifTimer.current = setTimeout(() => {
      setNotification({ visible: false, message: "" });
      notifTimer.current = null;
    }, 3000);
  };


  const addToCartWithNotify = (item) => {
    addToCart(item);
    notify(`${item.title} added to cart`);
  };

  // Favorites (persisted)
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    setFavorites(prev => ({ ...prev, [item.id]: item }));
    notify(`${item.title} added to favorites`);
  };

  const removeFavorite = (id) => {
    setFavorites(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const toggleFavorite = (item) => {
    if (!item) return;
    setFavorites(prev => {
      const exists = !!prev[item.id];
      if (exists) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return { ...prev, [item.id]: item };
    });
    notify(`${item.title} ${favorites[item.id] ? "removed from" : "added to"} favorites`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeFromCart(id);
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));
  };

  return (
    <ProductContext.Provider value={{ product, cart, addToCart: addToCartWithNotify, removeFromCart, updateQuantity, notify, notification, favorites, addFavorite, removeFavorite, toggleFavorite }}>
      {children}
      {notification.visible && (
  <div className="fixed bottom-6 right-6 z-50">
    <div
  className={`
    bg-[#343131] border
    px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/10
    flex flex-col items-center gap-2
    animate-in zoom-in-75 fade-in duration-400
    slide-in-from-bottom-6
    origin-bottom-right
  `}
>
<div className="flex items-center gap-3.5">
    <div className="rounded-full bg-emerald-100 p-1.5">
    <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  </div>
  <span className="text-sm font-medium text-white pr-1">
    {notification.message}
  </span>
</div>
  <div className="h-1.5 bg-emerald-500 rounded-full w-full origin-left animate-[progress_3s_linear_forwards]">
</div>
</div>
  </div>
)}
    </ProductContext.Provider>
  );
};

export default ProductProvider;