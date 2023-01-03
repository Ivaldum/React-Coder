import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {

    const {cartTotal} = useContext(CartContext);

    return(
        <Link to={"/cart"} type="button" className="btn btn-success position-relative">
            <img src="../images/cart-fill.svg" alt="CartWidget" width="30" />
            <span className="position-absolute top-0 start-100 taslate-middle badge rounded-pill bg-success">{cartTotal()}</span>
        </Link>
    )
}   

export default CartWidget;