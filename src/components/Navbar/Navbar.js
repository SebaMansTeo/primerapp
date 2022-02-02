import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <p>LA TIENDA</p>
            </div>
            <div className="botones">
                <button className="boton">HOME</button>
                <button className="boton">PRODUCTOS</button>
                <button className="boton">CONTACTO</button>
            </div>
            
        </nav>
    )
}

export default Navbar;