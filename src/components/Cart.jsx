import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, clearCart, removeItem, precioFinal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert"> No se encontraron productos</div>
                        <Link to={"/"} className="btn btn-success"> Volver al inicio</Link>
                    </div>
                </div>
            </div>
            )
    }

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.name} width={70} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle ">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.price}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash3.svg"} alt={"Delete"} width={32} /></Link></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td><b>TOTAL A PAGAR</b></td>
                                <td>${precioFinal()}</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-success">Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clearCart} className="btn btn-success my-2"> Vaciar carrito</Link></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;