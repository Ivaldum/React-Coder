import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemSkeleton from "./ItemSkeleton"
import ItemList from "./ItemList";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    const {id} = useParams();

    // cargar collecion de productos en Firebase
    /* useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products")

        products.forEach((product) =>{
            addDoc(productsCollection, product);
        })

    }, []); */

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        getDocs(productsCollection).then((data) => {
            setListProducts(data.docs.map((x) => ({id:x.id, ...x.data()})
           )) 
        });
    }, []);

    return(
        <div className="container">
            <div className="row">
                { 
                    !listProducts.length
                        ? <ItemSkeleton amount={9} />
                        : <ItemList listProducts={listProducts} />
                }
            </div>
        </div>
    )
}

export default ItemListContainer;