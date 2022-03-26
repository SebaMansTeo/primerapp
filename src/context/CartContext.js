import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd, quantity) =>{
        const newObj = {
            ...productToAdd,
            quantity
        }
        if(isInCart(productToAdd.id)){
            const newCart = cart.map(p=> {
                if(p.id === productToAdd.id) {
                    p.quantity += productToAdd.quantity
                }
                return p;
            })
            setCart(newCart)
            
        }else{
            setCart([...cart, newObj])
            
        }
    }

    const removeItem = (id)=>{
        const cartRemoved = cart.filter(p => p.id !== id)
        setCart(cartRemoved)
    }

    const isInCart = (id)=>{
        return cart.some(p => p.id === id)
    }

    const clear = ()=>{
        setCart([])
    }

    const getQuantity = ()=>{
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        });
        return count
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    return(
        <Context.Provider value = {{cart, addItem, removeItem, clear, getQuantity, getTotal}}>
            {children}
        </Context.Provider>
    )
    
}

export default Context