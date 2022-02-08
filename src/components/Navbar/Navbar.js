import "./Navbar.css"
import Button from "../Button/button";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({title, ...rest}) => { //{ title: 'ecommerce ', color='red'}
    // const { title, color } = props 
    
    const handleHome = () => {
        console.log("Ir al Home")
    }

    const handleProductos = () => {
        console.log("Ver productos")
    }

    const handleContacto = () => {
        console.log("Contactarnos")
    }
    
    return (
        <nav className="navbar">
            <div>
                <h3>{title}</h3>
            </div>
            <div className="botones">
                <Button handleClick={handleHome}>HOME</Button>
                <Button handleClick={handleProductos}>PRODUCTOS</Button>
                <Button handleClick={handleContacto}>CONTACTO</Button>
            </div>
            <CartWidget/>
            
        </nav>
    )
}

export default Navbar;