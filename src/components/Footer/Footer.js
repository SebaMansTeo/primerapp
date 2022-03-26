import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    
    
    return(
        <footer className="container-fluid" style={{paddingTop: "3rem", paddingBottom: "2rem", backgroundColor: "black", textAlign: "center", marginTop: "1rem"}}>
            <div class="row align-items-center">
                <div className="col-md-2 mb-0 justify-content-start">
                    <p>
                        <a href="https://github.com/SebaMansTeo" rel="noreferrer" target={"_blank"} style={{textDecoration: "none"}}>© 2022 SebaMansTeo, Inc</a>
                    </p>
                </div>
                <ul className="nav col-md-4 justify-content-end">

                </ul>
                <ul className="nav col-md-6 justify-content-end">
                    <li style={{width: "2rem"}}><a href='https://instagram.com' target={"_blank"} rel="noreferrer"><BsInstagram ></BsInstagram></a></li>
                    <li style={{width: "2rem"}}><a href='https://twitter.com' target={"_blank"} rel="noreferrer"><AiOutlineTwitter ></AiOutlineTwitter></a></li>
                    <li style={{width: "2rem"}}><a href='https://facebook.com' target={"_blank"} rel="noreferrer"><BsFacebook ></BsFacebook></a></li>
                </ul>
            </div>
        </footer>

    )
}


export default Footer