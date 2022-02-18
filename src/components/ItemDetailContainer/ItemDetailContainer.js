import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../asyncmock'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    
    useEffect(() => {
        getProduct().then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [])


    return (
        <div className="ItemDetailContainer" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer