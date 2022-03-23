import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import "./CartItem.css"


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (

        <div class="container-fluid">
            <div className="row" style={{textAlign: "center"}}>
                <div className='col'>{name}</div>
                <div className='col'>{quantity}</div>
                <div className='col'>${price}</div>
                <div className='col'>${price * quantity}</div>
                <div className='col'></div>  
                <button className='btnClear btn btn-danger btn-sm col' onClick={() => handleRemove()}>X</button>        
            </div>
        </div>
    
)}

export default CartItem