const Button = ({ backgroundColor = "blueviolet", colorText = "white", handleClick, children, ...rest }) =>{

    return(
        <a type="button" class="nav-link" style={{ color: colorText}} onClick={handleClick}>{children}</a>
        
    )
}

export default Button