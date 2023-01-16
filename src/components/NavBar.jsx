import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to={"/"}><img src="../images/logo-mate.png" alt="Mate Talense" width={80} /></Link>
                    <div className="collapse navbar-collapse d-flex justify-content-center fs-5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/mates"}>Mates</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/yerba"}>Yerba</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/bolsos"}>bolsos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-success" activeclassname="page" aria-current="page" to={"category/bombilla"}>Bombillas</NavLink>
                            </li>
                            </ul>
                        </div>
                    <div>
                        <CartWidget/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;