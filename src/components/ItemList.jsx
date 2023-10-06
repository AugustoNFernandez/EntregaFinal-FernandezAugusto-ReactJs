import Item from "./Item"
import "./css/ItemList.css";

const ItemList = ({ productos }) => {
    
    return(
        <div className="container">
            
            <h2 className="titular">Nuestra librería</h2>
            <div className="item-list">
                { productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}

export default ItemList