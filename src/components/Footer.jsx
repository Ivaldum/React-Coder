import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className= "bg-dark text-light pt-4 pb-3">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                        <div className="col-md-3 col-1g-3 col-xl-3 mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-success">Productos</h5>
                            <hr className="mb-4"/>
                            <p>
                                <NavLink className="nav-link text-light" activeclassname="1age" aria-current="1age" to={"category/mates"}>Mates</NavLink>
                            </p>
                            <p>
                                <NavLink className="nav-link text-light" activeclassname="page" aria-current="page" to={"category/yerba"}>Yerba</NavLink>
                            </p>
                            <p>
                                <NavLink className="nav-link text-light" activeclassname="page" aria-current="page" to={"category/bolsos"}>bolsos</NavLink>
                            </p>
                            <p>
                                <NavLink className="nav-link text-light" activeclassname="page" aria-current="page" to={"category/bombilla"}>Bombillas</NavLink>
                            </p>
                        </div>
                        <div className="col-md-5 col-1g-5 col-x1-5 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-success">Sobre Nosotros</h5>
                            <hr className="mb-4"/>
                            <p>El Mate Talense es una empresa de productos con mas de 10 años en el mercado, nuestros clientes destacan que nos siguen eligiendo gracias a la alta calidad de nuestros productos y a nuestro servicio de atencion al cliente y servicio post venta. </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-success">Contacto</h5>
                            <hr className="mb-4"/>
                            <p> Rosario del Tala, ER </p>
                            <p> Elmatetalense@gmail.com </p>
                            <p> 3445-1234567 </p>
                        </div>
                </div>
                <hr className="mb-4"/>
                <div className="row">
                    <p>
                    © Copyright 2023 all right Reserved by : 
                    <strong> EL MATE TALENSE </strong>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;