import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import {BsFillCartFill} from 'react-icons/bs';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <button className="btn btn-outline-light" >
            <Link style={{textDecoration:"none", display:"inline-flex", color:"white"}}  to={"/cart"} > <BsFillCartFill /> 
            {getQuantity()}</Link>
        </button>
    )
}

export default CartWidget