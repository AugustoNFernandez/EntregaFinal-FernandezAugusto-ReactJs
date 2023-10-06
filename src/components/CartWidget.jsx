import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./css/NavBar.css"

export default function CartWidget() {
  
  // Imagen de carrito y funcion traida desde Contexto para indicar numero de productos dentro de carrito
  const { qtyInCart } = useContext(CartContext);
    return (
      <>
        <Link to="/cart" ><img
          src="../cart.svg"
          alt="carrito"
          style={{ width: 45, height: 45 }}
        /></Link>
        <span className="numberInCart">{ qtyInCart() }</span>
      </>
    );
  }
  
  