import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { addDoc, collection, updateDoc, doc, writeBatch, getDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"



const Cart = () => {
    const {cart, removeItem, getTotal, clear} = useContext(CartContext)

    if(cart.length === 0){
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, name) => {
        removeItem(id)
    }

    const confirmOrder = () =>{
        const objOrder = {
            comprador: {
                name: "Seba",
                phone: "36289982",
                address: "Deloqui 728"
            },
            items: cart,
            total: getTotal(),
            date: new Date()
        }
        console.log(objOrder)
        addDoc(collection(firestoreDb, "orders"),objOrder).then((response)=>{
            console.log(response)
            clear()
        })

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        objOrder.items.forEach(prod =>{
            getDoc(doc(firestoreDb, "Productos", prod.id)).then(response =>{
                if(response.data().stock >= prod.quantity){
                    batch.update(doc(firestoreDb, "Productos", response.id), {
                        stock: response.data().stock - prod.quantity
                    })
                }else{
                    outOfStock.push({id: response.id, ...response.data()})
                }
            })
        })

        if (outOfStock.length === 0){
            addDoc(collection(firestoreDb, "orders"), objOrder).then(({id})=>{
                batch.commit().then(()=>{
                    alert(`la orden se genero, su numero de orden es ${id}`)
                })
            })
        }
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
            <button onClick={confirmOrder}>CONFIRMAR COMPRA</button>
            <button className="btn btn-primary" onClick={clear}>VACIAR CARRITO</button>
        </>
    )
    
}



export default Cart