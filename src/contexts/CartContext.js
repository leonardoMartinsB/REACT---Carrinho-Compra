import React, { useState, createContext } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addItemCart(newItem) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[indexItem].amount += 1;
      updatedCart[indexItem].total = updatedCart[indexItem].amount * updatedCart[indexItem].price;
      setCart(updatedCart);
      totalResultCart(updatedCart);
      return;
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    };

    setCart([...cart, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      const updatedCart = [...cart];
      updatedCart[indexItem].amount -= 1;
      updatedCart[indexItem].total -= updatedCart[indexItem].price;
      setCart(updatedCart);
      totalResultCart(updatedCart);
      return;
    }

    const removeItem = cart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items) {
    const result = items.reduce((acc, obj) => acc + obj.total, 0);
    setTotal(result.toFixed(2));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
