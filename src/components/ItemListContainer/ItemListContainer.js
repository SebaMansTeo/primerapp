
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncmock"


const ItemListContainer = ({greeting = 'Hello'})=> {
    
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])
    
    console.log(products)
    
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )    
    
}

export default ItemListContainer