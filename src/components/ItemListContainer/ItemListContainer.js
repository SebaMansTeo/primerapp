
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"


const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(firestoreDb, 'Productos'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'Productos')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })


        return (() => {
            setProducts()
        })          
    }, [categoryId])
    
    
    
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

export default ItemListContainer