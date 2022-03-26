import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { useNotificationServices } from "../../services/notifications/NotificationServices"

const ItemDetail = ({ name, img, description, id, price, stock, category }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem} = useContext(CartContext)
    const setNotification = useNotificationServices()
 
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
        setNotification('success',`Se agrego ${name} al carrito`)
        
    }
        
    return (
      <div class="card " style={{maxWidth: "1000px", marginTop:"4rem"}}>
        <div class="row">
          <div class="col-md-4" >
            <img style={{border: "1px solid black"}} src={img} alt={name} class="img-fluid rounded-start"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text" style={{textTransform: "uppercase"}}>{category}</p>
              <p class="card-text">{description}</p>
              <p class="card-text">$ {price}</p>
              <footer>
                     {quantity > 0 ? <Link to={"/cart"} className="btn btn-secondary">IR AL CARRO DE COMPRAS</Link>:
                     <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>}
              </footer>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default ItemDetail