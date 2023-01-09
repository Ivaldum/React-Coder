import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect( () => {
        setItemStock(item.stock);
    }, [item])

    return(
        <div className="d-flex flex-row justify-content-center border my-4">
            <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid" width={250}/>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center text-center">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>   
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;