import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemDetail = ({ name, img, description, id, price, stock, category }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem} = useContext(CartContext)
 
    const handleOnAdd = (quantity) =>{
        setQuantity(quantity)
        const productToAdd = {
            name,
            img,
            description,
            id,
            price,
            stock,
            category,
            quantity
        }
        addItem(productToAdd, quantity)
        
    }
    
      
    
    return (
        <div class="card" style={{width: "18rem", textAlign: "center"}}>
            <img src={img} alt={name} class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text" style={{textTransform: "uppercase"}}>{category}</p>
                <p class="card-text">{description}</p>
                <p class="card-text">$ {price}</p>
                <footer>
                    {quantity > 0 ? <Link to={"/cart"}>IR AL CARRO DE COMPRAS</Link>:
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
                </footer>
            </div> 
        </div>
        
    )
}

export default ItemDetail