import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="../images/logo-mate.png" alt="Mate Talense" width={80} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-center fs-5" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/mates"}>Mates</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/yerba"}>Yerba</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/termos"}>Termos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/bombilla"}>Bombillas</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div><CartWidget/></div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;