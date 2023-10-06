import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import "./css/cart.css"


function Cart () {
   const { cart, countFinal, clearCart, removeItem } = useContext(CartContext)
   
   //funcion para limpiar el carrito luego de terminada la compra
   const handleEmpty = () => {
      clearCart();
   }

   
 return(
    <div className="containerCart">
      <h1>Carrito de compras</h1>
      { cart.map((item) => {
         return(
         <div key={item.id} className="container-item-cart">
            <picture className="column-cart">
               <img className="imgDetailCart" src={item.image} alt={item.title} />
               <section className="tit-aut">
                  <h3>Titulo: {item.title}</h3>
                  <h4>Autor: {item.autor}</h4>
                  
               </section>
            </picture>
            <div className="price-btn">
               <p>Precio por unidad: $ <strong>{item.price}</strong></p>
               <h4>Cantidad elegida: {item.count}</h4>
               <p>Precio total: $<strong>{item.price * item.count}</strong></p>
               <button onClick={() => removeItem(item)} className="btn-add">Eliminar</button>
            </div>
         </div>
         )
         })
      }
      {/* Ternario que comprueba si el carrito tiene elementos en el. Si no tiene, retorna un msj de carrito vacio*/}
      {cart.length > 0 ? 
                     <>
                        <h2>Precio total de la compra: ${countFinal()}</h2>
                        <div className="btn-cart-fin">
                           <button onClick={handleEmpty} className="btn-add">Vaciar carrito</button>
                           <Link to="/checkout"><button className="btn-add">Finalizar compra</button></Link>
                        </div>
                     </>
                     : <h2>El carrito está vacío</h2>
      }
      
      
      
    </div>
 )

}

export default Cart