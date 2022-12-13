import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const navigate = useNavigate()

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        const promesa = new Promise ((resolve, reject) =>{
            setTimeout(() => {
                const product = products.find(item => item.id === parseInt(id))
                if(product)
                    return resolve(product);
                
                reject()
            }, 2000);
        });
        
        promesa.then((res) =>{
            setItem(res);
        })
            .catch(() => {
                navigate("/")
            })
        
    }, [id]);
    
    return(
        <div className="container">
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer;