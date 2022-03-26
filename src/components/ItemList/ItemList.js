
import Item from "../Item/Item";

const ItemList = ({products})=>{
    return(
        <div>
            <div className="row">
            <div className="row" style={{justifyContent: "start"}}>
                    {products.map(product=>
                    <Item product={product} key={product.id}/>
                )}
            </div>
            </div>
        </div>
    )
}

export default ItemList