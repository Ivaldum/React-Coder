import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ItemCount = ({ initial, stock}) => {
    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    const onAdd = () =>{
        if(stock > 0){
        console.log("Agregaste: " + count + " productos")
        }
    }

    return(
        <div className="container">
            <button onClick={decrease}> - </button>
            <span> {count} </span>
            <button onClick={increase}> + </button>
            <button className="btn btn-success mx-3" onClick={onAdd}> {<FaShoppingCart/>} Agregar al carrito </button>
        </div>
    )
}

export default ItemCount;