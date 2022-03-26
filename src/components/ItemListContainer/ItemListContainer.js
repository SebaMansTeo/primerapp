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
                <div style={{marginTop: "10rem"}} class="d-flex justify-content-center">
  <div style={{width: "3rem", height: "3rem"}} class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
                    :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
        
    )    
    
}



export default ItemListContainer