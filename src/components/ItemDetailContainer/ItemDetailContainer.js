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
                <div style={{marginTop: "10rem"}} class="d-flex justify-content-center">
                <div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div> :
                product ? 
                    <ItemDetail  {...product} /> :
                    <h1>El producto no existe</h1> 
            }
        </div>
        
    )    
}


export default ItemDetailContainer