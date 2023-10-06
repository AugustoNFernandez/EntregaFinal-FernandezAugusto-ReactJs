import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";
import "./css/ItemListContainer.css"
import Spinner from "./Spinner";



const ItemListContainer = () => { 

    //estado de productos 
    const [ productos, setProductos ] = useState([]); 
    //estado para determinar si muestra o no el spinner mientras carga
    const [loading, setLoading] = useState(true)  
    //parametros del url para ver por categoria
    const {category: categoryId} = useParams();
    
    //traer coleccion y ver por catg.
    useEffect(() => {
        const collectionRef = categoryId 
        ? query (collection(db, "productos"), where("category", "==", categoryId)) 
        : collection(db, "productos")

        getDocs(collectionRef).then(response => {
            const productosGeneral = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProductos(productosGeneral);
            setLoading(false);
            
            
        })
        .catch(error => {
            <h5>Error en productos</h5>
        })
 
    }, [categoryId])   
    
    
    if(loading === true) return <Spinner /> // spinner para la espera de productos
 
    return(
        <div className="item-list-container">
            <ItemList productos={productos} />
        </div>
        
    )
}

export default ItemListContainer 