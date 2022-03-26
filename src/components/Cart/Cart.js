import { useContext, useState, useRef } from "react"
import ContactForm from "../ContactForm/ContactForm"
import Togglable from "../ToggLabel/Toggable"
import CartItem from "../CartItem/CartItem"
import { useNotificationServices } from "../../services/notifications/NotificationServices"
import CartContext from "../../context/CartContext"
import { addDoc, collection, query, where, writeBatch, Timestamp, getDocs, documentId } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"
import { NavLink } from "react-router-dom"



const Cart = () => {
    const {cart, removeItem, getTotal, clear} = useContext(CartContext)
    const contactFormRef = useRef()
    const setNotification = useNotificationServices()
    const [processingOrder, setProcessingOrder] = useState(false)

    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })


const confirmOrder = () => {
    if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
        setProcessingOrder(true)
        
        const objOrder = {
            buyer: contact,
            items: cart,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []
        
        const ids = objOrder.items.map(i => i.id)

        getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach((docSnapshot) => {
                    if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                    } else {
                        outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => { 
                        batch.commit()
                        clear()
                        alert(
                                    `La orden se genero exitosamente, su numero de orden es: ${id}`
                              )
                        setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })    
                }               
            }).catch((error) => {
                setNotification('error', error)
            }).finally(() => {
                setProcessingOrder(false)
            })

    } else {
         setNotification('error', 'Debe completar los datos de contacto para generar la orden')
    }
}

if(processingOrder) {
    return <h1>Se esta procesando su orden</h1>
}

if(cart.length === 0) {
    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{textAlign: "center"}}>TU CARRO DE COMPRAS</h1>
            <h2 style={{textAlign: "center"}}>NO AGREGASTE PRODUCTOS AL CARRITO</h2>
            <NavLink to={"/"}><button>VER PRODUCTOS</button></NavLink>
        </div>
    )
}

return ( 
    <div className="modal-centered" >
        <h1 style={{textAlign: "center"}}>TU CARRO DE COMPRAS</h1>
        <div class="container-fluid" style={{padding: "10rem"}}>
            <div className="row" style={{textAlign: "center", marginBottom: "1rem", borderBottom: "1px solid grey"}}>
                <div class="col tituloMod">PRODUCTO</div>
                <div class="col tituloMod">CANTIDAD</div>
                <div class="col tituloMod">PRECIO</div>
                <div class="col tituloMod">SUBTOTAL</div>
                <div class="col tituloMod"></div>
                <div class="col tituloMod">ELIMINAR</div>
            </div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
        <h3 className="col" style={{textAlign: "right"}}>TOTAL COMPRA: ${getTotal()}</h3>
        
        <div className="row">
            <div className="col"><button onClick={() => clear()} className="btn btn-danger">VACIAR CARRITO</button></div>
            <div style={{textAlign: "right"}} className="col"><button onClick={() => confirmOrder()} className="btn btn-success">CONFIRMAR COMPRA</button></div>
        
        {
            (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
            
                <div style={{marginTop: "3rem"}}>
                    <h2 style={{textAlign:"center"}}>DATOS DEL COMPRADOR</h2>
                    <div className="row">
                    <h4 className="col">Nombre: {contact.name}</h4>
                    <h4 className="col" style={{textAlign:"right"}}>Telefono: {contact.phone}</h4>
                    </div>
                    <div className="row">
                    <h4 className="col">Direccion: {contact.address}</h4>
                    <h4 className="col" style={{textAlign:"right"}}>Comentario: {contact.comment}</h4>
                    </div>
                    <div style={{textAlign: "right"}}>
                    <button  onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                            className='btn btn-danger btn-sm' 
                            >
                        BORRAR DATOS DE CONTACTO
                    </button>
                    </div>
                    
                </div>    
        }
        <Togglable buttonLabelShow={
                    (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                        ? 'EDITAR CONTACTO' 
                        : 'COMPLETAR FORMULARIO DE COMPRA'
                    } 
                    ref={contactFormRef}>
            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
        </Togglable>
        </div>
        </div>
    </div>
)
}

export default Cart