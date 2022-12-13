import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products  from "../data/products.json"
import ItemSkeleton from "./ItemSkeleton"
import ItemList from "./ItemList";


const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    const {id} = useParams();

    useEffect(() =>{
        const promise = new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve(id ? products.filter(item => item.category === id) : products );
            }, 2000);
        });

        promise.then((res) =>{
            setListProducts(res);
        })
    }, [id]);

    return(
        <div className="container">
            <div className="row">
                { !listProducts.length
                    ? <ItemSkeleton amount={9} />
                    : <ItemList listProducts={listProducts} />}
            </div>
        </div>
    )
}

export default ItemListContainer;