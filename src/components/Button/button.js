const Button = ({ backgroundColor = "blueviolet", colorText = "black", handleClick, children, ...rest }) =>{

    return(
        <button style={{backgroundColor, color: colorText}} onClick={handleClick}>{children}</button>
    )
}

export default Button