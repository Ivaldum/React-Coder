import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, onAdd}) => {
    
    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const increase = () => count < itemStock && setCount(count + 1)
    const decrease = () => count > 1 && setCount(count - 1)

    const addCart = (quantity) => {
        if (count <= itemStock) {
            setCount(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity)
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return(
        <div className="container">
            <button onClick={decrease}> - </button>
            <span> {count} </span>
            <button onClick={increase}> + </button>
            {vendido 
                ? <Link to={"/cart"} className="btn btn-success mx-3"> Terminar compra</Link> 
                : <button className="btn btn-success mx-3" onClick={() => { addCart(count) }}> {<FaShoppingCart/>} Agregar al carrito </button>
            }
        </div>
    )
}

export default ItemCount;