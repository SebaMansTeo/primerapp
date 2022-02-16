
const Item = ({product})=>{

    

    return(
        <div>
            <div>
                <h1>{product.name}</h1>
                <img src={product.img} alt="foto"/>
                <p>{product.price}</p>
            </div>
            <div className="productDetails">
                <button>Ver detalle de producto</button>
                <p>Stock disponible: {product.stock}</p>
            </div>
            
        </div>
    )
}

export default Item