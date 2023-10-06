import { Link } from "react-router-dom"
import "./css/item.css"

const Item = ({ producto }) => {
    return(
        <article className="itemContainer">
            <div className="card">
                <picture>
                    <img src={producto.image} alt={producto.title} className="imgBook"/>
                </picture>
                <div className="right-column">
                    <div className="top">
                        <h2>{producto.title}</h2>
                        <h4>Autor: <strong>{producto.autor}</strong></h4>
                    </div>
                    <div className="bot">
                        <p><strong>$</strong>{producto.price}</p>
                        <Link to={`/item/${producto.id}`} className="btn-detalles">Detalle</Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item



            
           