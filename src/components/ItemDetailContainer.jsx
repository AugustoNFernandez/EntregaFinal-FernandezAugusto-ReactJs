import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import "./css/ItemListContainer.css"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((snapshot) => {
            setItem({...snapshot.data(), id: snapshot.id}  
            );
        })
        .catch(error => {
            <h5>Error en producto</h5>
        })
    },[id])
 
    return (
        <div className="item-list-container">
        {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer