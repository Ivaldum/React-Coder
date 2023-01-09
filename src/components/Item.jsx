import { Link } from "react-router-dom";

const Item = ({ item }) => {
    
    return(
        <div className="col-md-4">
            <div className="card bg-dark text-center mt-2 mb-1">
                <img src={item.image} alt="" className="card-img-top" />
                <div className="card-body text-light">
                    <p className="card-text">{ item.name }</p>
                    <Link to={"/product/" + item.id} className="btn btn-success"> Comprar </Link>
                </div>
            </div>
        </div>
    )   
}

export default Item;