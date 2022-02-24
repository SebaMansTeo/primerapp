import "./Navbar.css"
import Button from "../Button/button";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = ({title, color}) => {  
    
        
    return (
        
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mainNav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent: "end", padding: "1rem"}}>
                    <div class="navbar-nav" style={{gap: "2rem"}}>
                        <NavLink className="btn btn-outline-light" to={"/"}>HOME</NavLink>
                        <NavLink className="btn btn-outline-light" to={"/category/lifestyle"}>LIFESTYLE</NavLink>
                        <NavLink className="btn btn-outline-light" to={"/category/books"}>BOOKS</NavLink>
                        <NavLink className="btn btn-outline-light" to={"/category/tech"}>TECH</NavLink>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;