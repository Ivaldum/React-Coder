import { Link } from "react-router-dom";

const Item = ({ item }) => {
    
    return(
        <div className="col-md-4">
            <div className="card text-center mt-3 mx-auto">
                <img src={item.image} alt="" />
                <div className="card-body bg-dark text-light">
                    <p className="card-text">{ item.name }</p>
                    <Link to={"/product/" + item.id} className="btn btn-success"> Comprar </Link>
                </div>
            </div>
        </div>
    )   
}

export default Item;