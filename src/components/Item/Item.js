import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({product})=>{
    
    

    return(
        <div className="card" style={{backgroundColor: "beige" ,width: "15rem", margin: "1rem", padding: "2rem"}}>
            <img style={{borderRadius: "15px", width: "10rem", height: "10rem", alignSelf: "center"}} src={product.img} className="card-img-top" alt="foto"/>
            <div className="card-body" style={{textAlign: "center"}}>
                <h3 className="card-title" style={{textAlign: "start"}}>{product.name}</h3>
                <p className="card-text" style={{textAlign: "start"}}>{product.price}</p>
                <p className="card-text">Stock disponible: {product.stock}</p>
                <Link className="itemBtn" to={`/detail/${product.id}`} >INFO PRODUCTO</Link>
            </div>
        </div>
    )
}

export default Item