import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useNotificationServices } from '../../services/notifications/NotificationServices'
import { getProductById } from '../../services/firebase/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)
    const setNotification = useNotificationServices()
    
    
    useEffect(() => {
        
        setLoading(true)

        getProductById(productId).then(response => {
            setProduct(response)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId]) // eslint-disable-line


    return (
        <div className="ItemDetailContainer" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            { 
                loading ? 
                    <h1>Cargando...</h1> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
        
    )    
}

//         const docRef = doc(firestoreDb, "Productos", productId)
//         getDoc(docRef).then(response =>{
//             const product = {id: response.id, ...response.data()}
//             setProduct(product)}).catch((error) => {
//                 setNotification('error',`Error buscando producto: ${error}`)
//         }).finally(()=> {
//             setLoading(false)
//         }
//         )

//         return (() => {
//             setProduct()
//         })

//     }, [productId])


        
// }
export default ItemDetailContainer