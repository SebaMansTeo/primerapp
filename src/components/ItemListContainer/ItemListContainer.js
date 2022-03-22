
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firebase"
import { useNotificationServices } from "../../services/notifications/NotificationServices"


const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    const setNotification = useNotificationServices()

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProducts(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line
    
    return (
        <div className="ItemListContainer container p-3">
            {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
        
    )    
    
}

//         const collectionRef = categoryId ?
//             query(collection(firestoreDb, 'Productos'), where('category', '==', categoryId)) :
//             collection(firestoreDb, 'Productos')

//         getDocs(collectionRef).then(response => {
//             const products = response.docs.map(doc => {
//                 return { id: doc.id, ...doc.data() }
//             })

//             setProducts(products)
//         }).catch((error) => {
//             setNotification('error', error)    
//         }).finally(() => {
//             setLoading(false)
//         })


//         return (() => {
//             setProducts()
//         })          
//     }, [categoryId])
    
    
    
        
    
// }

export default ItemListContainer