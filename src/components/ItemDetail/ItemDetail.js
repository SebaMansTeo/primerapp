

const ItemDetail = ({ product }) => {
    return (
        <div class="card" style={{width: "18rem", textAlign: "center"}}>
            <img src={product?.img} alt={product?.name} class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{product?.name}</h5>
                <p class="card-text">Categoria: {product?.category}</p>
                <p class="card-text">Producto: {product?.description}</p>
                <p class="card-text">Precio: {product?.price}</p>
                <a href="#" class="btn btn-primary">AGREGAR AL CARRITO</a>
            </div>
        </div>
        
    )
}

export default ItemDetail