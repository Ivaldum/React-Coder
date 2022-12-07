import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    return(
        <div className="row">
            <div className="col-md-4">
                <img src={producto.image} alt={producto.name} className="img-fluid"/>
            </div>
            <div className="col-md-4">
                <h2>{producto.name}</h2>
                <h5>{producto.category}</h5>
                <p>${producto.price}</p>    
            </div>
        </div>
    )
}

export default ItemDetail;