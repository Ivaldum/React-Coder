import React from "react";

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-danger position-relative">
            <img src="" alt="CartWidget" width="30" />
            <span className="position-absolute top-0 start-100 taslate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}   

export default CartWidget;