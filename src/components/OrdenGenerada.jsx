import { useParams, Link } from "react-router-dom";

const OrdenGenerada = () => {

    const {id} = useParams();

    return(
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col">
                        <div className="alert alert-success text-center">
                            <h1>Su compra fue realizada con exito!</h1>
                            <h3>Tu numero de orden es: <b>{id}</b> </h3>
                        </div>
                        <Link to={"/"} className="btn btn-success"> Volver al inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdenGenerada;