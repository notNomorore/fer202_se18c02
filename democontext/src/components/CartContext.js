import React, { useState, useContext, createContext, useEffect } from "react";


// Tạo context cho Cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (dish) => {
    setCartItems((prevItems) => [...prevItems, dish]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const confirmOrder = () => {
    alert("Đơn hàng của bạn đã được xác nhận! Cảm ơn bạn đã mua hàng.");
    clearCart();
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, confirmOrder, darkMode, setDarkMode }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart, confirmOrder } = useContext(CartContext);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={confirmOrder}>Xác nhận đơn hàng</button>
        </div>
      )}
    </div>
  );
};

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(CartContext);

  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "Chuyển sang Light Mode" : "Chuyển sang Dark Mode"}
    </button>
  );
};