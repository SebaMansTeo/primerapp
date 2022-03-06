import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <button>
            <Link to={"/cart"} > <img src="/IMAGES/cart.svg" alt="cart" style={{width: 15}}/>
            {getQuantity()}</Link>
            {/* <img src="/IMAGES/cart.svg" alt="cart" style={{width: 15}}/>
            {getQuantity()} */}
        </button>
    )
}

export default CartWidget