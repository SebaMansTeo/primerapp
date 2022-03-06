import { useContext } from "react"
import CartContext from "../../context/CartContext"



const Cart = () => {
    const {cart, removeItem, getTotal, clear} = useContext(CartContext)

    if(cart.length === 0){
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
    }

    return (
        <>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: ${getTotal()}</h1>
            <button className="btn btn-primary" onClick={clear}>VACIAR CARRITO</button>
        </>
    )
    
}

export default Cart