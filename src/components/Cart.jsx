import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return(
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert"> No se encontraron productos</div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
            </div>
        </div>
    )
}

export default Cart;