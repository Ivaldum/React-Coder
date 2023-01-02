import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        <Link to={"/cart"} type="button" className="btn btn-success position-relative">
            <img src="../images/cart-fill.svg" alt="CartWidget" width="30" />
            <span className="position-absolute top-0 start-100 taslate-middle badge rounded-pill bg-success">0</span>
        </Link>
    )
}   

export default CartWidget;