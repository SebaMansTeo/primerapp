
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemListContainer = ()=> {
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    
    
    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        })
    }, [categoryId])
    
    
    
    return (
        <div className="itemListContainer container p-3">
            <ItemList products={products} />
        </div>
    )    
    
}

export default ItemListContainer