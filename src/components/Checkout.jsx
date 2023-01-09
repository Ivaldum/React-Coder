import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext"; 
import { addDoc, collection, getFirestore, updateDoc } from "firebase/firestore";

const Checkout = () => {

    const {cart, clearCart, precioFinal} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(product => ({id:product.id, tittle:product.name, quantity:product.quantity, price:product.price, totalPrice: product.quantity * product.price})),
            total: precioFinal(),
            orderDate: `${fecha.getFullYear()} - ${fecha.getMonth() + 1} - ${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes}:${fecha.getSeconds}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((order) => {
            setOrderId(order.id);
            clearCart();
        });
    }

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">  
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.name} width={70} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle ">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.price}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td><b>TOTAL A PAGAR</b></td>
                                <td>${precioFinal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== ""
                        ? <div className="alert alert-success" role="alert"> Orden generada correctamente, numero: {orderId} </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout;