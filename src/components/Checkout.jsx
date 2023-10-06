import { useContext, useState } from "react"
import { addDoc, collection, getFirestore, doc, writeBatch, getDoc } from "firebase/firestore"
import "./css/checkout.css"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

export function Checkout(){

    const { cart, countFinal, clearCart } = useContext(CartContext);

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [ orderId, setOrderId ] = useState("");

    const items = cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.count,
        price: item.price,
    }));

    function sendOrder(){
        const db = getFirestore();
        
        const order={
            buyer: { 
                name, 
                email,
                phone
            }, 
            items: items,
            total: countFinal()  
        };
        

        const ordersRef = collection(db, "ordenes");

        addDoc(ordersRef, order)
            .then(async({ id }) => {
                setOrderId(id);
                clearCart();

                const batch = writeBatch(db);
                for (const item of cart) {
                    const productRef = doc(db, "productos", item.id);
                    const productDoc = await getDoc(productRef);
                    const stock = productDoc.data().stock;
                    const updatedStock = stock - item.count;
                    batch.update(productRef, { stock: updatedStock });
                }
                await batch.commit();
                })
    }
    
        if (orderId) { return (
            <div className="cont-end">
                <h3 className="bye">{`Gracias por tu compra, tu identificación de compra es ${orderId}`}</h3>
                <button className="Lback"><Link to="/" >Regresar a la tienda</Link></button>
            </div>
        )
    }
            
        
        return (
            <div className="container-gral">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2 className="tit">Complete sus datos para finalizar</h2>
                    <label> Nombre: </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)} 
                        className="inputChec"
                        />
                    
                    <label>Teléfono: </label>
                    <input 
                        type="number" 
                        value={phone} 
                        onChange={(event) => setPhone(event.target.value)} 
                        className="inputChec"
                        />
                    
                    <label>E-mail:</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        className="inputChec"
                        />
                    
                    <button onClick={sendOrder} className="btn-end">Finalizar compra</button>
                </form>
            </div>
        )
}