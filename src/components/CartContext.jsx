import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart ] = useState([]);

  //Comprobacion carrito en memoria local
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  //Guardar carrito en memoria local
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  //Agregar producto al carrito
  const handleAddToCart = (item, count) => { 
    const itemToCart = {...item, count};
    const newCart = [...cart];
    const checkExist = newCart.find((product) => product.id === itemToCart.id);

    //Comprobacion, si existe productos en carrito, le sumo la cantidad no un duplicado
    if (checkExist) {
        checkExist.count += itemToCart.count; 
    }else{
        newCart.push(itemToCart);
    }
    setCart(newCart);   
    }
    
    //Remover 1 solo item del carrito
    const removeItem = (item) => {
      const itemId = item.id;
      setCart(cart.filter(prod => prod.id !== itemId));
    } 

    // Vaciar el carrito 
    const clearCart = () => {
      setCart([]);
  }

  // Calcular precio final a cobrar por todos los productos elegidos
  const countFinal = () => {
    return cart.reduce((total, item) => total + item.count * item.price, 0);
  }

  //contador para ver items dentro de carrito en CartWidget
  const qtyInCart = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  }
  
  return (
    <CartContext.Provider value={{ cart, setCart, handleAddToCart, removeItem, clearCart, countFinal, qtyInCart }}>
      {children}
    </CartContext.Provider>
  );

}



    
    
    

    

    
    
    
    