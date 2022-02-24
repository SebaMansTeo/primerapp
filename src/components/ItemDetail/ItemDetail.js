import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ name, img, description, id, price, stock, category }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) =>{
        setQuantity(quantity)
    }
    
    return (
        <div class="card" style={{width: "18rem", textAlign: "center"}}>
            <img src={img} alt={name} class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text" style={{textTransform: "uppercase"}}>{category}</p>
                <p class="card-text">{description}</p>
                <p class="card-text">{price}</p>
                <footer>
                    {quantity > 0 ? <Link to={"/cart"}>IR AL CARRO DE COMPRAS</Link>:
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </footer>
                <a href="#" class="btn btn-primary">AGREGAR AL CARRITO</a>
            </div>
        </div>
        
    )
}

export default ItemDetail