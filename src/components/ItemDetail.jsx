import { useContext, useState } from "react";
import "./css/ItemDetail.css"
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);
    const { cart, handleAddToCart } = useContext(CartContext)
    
    //Funciones para sumar o restar cantidad de productos
    function increase() {
      if (count < item.stock) {
        setCount(count + 1);
      }
    }
    function decrease() {
      if (count > 1) {
        setCount(count - 1);
      }
    }
    
    return (
        <div className="containerDetail">
            <div className="item-list"> 
                <img className="imgDetail" src={item.image} alt={item.title} />
                <div className="info-tit">
                  <h3>Titulo: {item.title}</h3>
                  <p><strong>Descripción: </strong>{item.description}</p>
                  <p><strong>Autor: </strong>{item.autor}</p>
                </div>
                <p><strong>Categoría: </strong>{item.category}</p>
                <section className="controls">
                  <p><strong>Precio: $ </strong>{item.price}</p>
                  <p><strong>Stock: </strong>{item.stock}</p>
                
                  <div>
                    <div className="container-btn">
                     <button onClick={decrease} className="btn-count"> - </button>
                     <span>{count}</span>
                     <button onClick={increase} className="btn-count"> + </button>
                  </div>
                  <div>

{/*Verificar si hay elementos en el carrito, si los hay da la opcion de ingresar al carrito desde detalles y finalizar la compra}*/}
                    {cart.length > 0 ? 
                      <>
                        <button onClick={()=> {handleAddToCart(item, count)}} className="btn-add"> Agregar a carrito </button>
                        <Link to="/cart"><button className="btn-add fin">Ir al carrito</button></Link>
                        <Link to="/"> <button className="btn-add fin">Seguir comprando</button></Link>
                      </> 
                      : <button onClick={()=> {handleAddToCart(item, count)}} className="btn-add"> Agregar a carrito </button>
                    }
                    
                  </div>
                </div>
              </section>
            </div>
        </div>
    )
}

export default ItemDetail


      