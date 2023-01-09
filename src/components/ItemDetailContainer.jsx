import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const db = getFirestore();
        const item = doc(db, "products", id);
        getDoc(item).then((product) => {
            console.log(product)
            if(product.exists()) {
                setItem({id: product.id, ...product.data()})
            } 
            else{
                console.log("Document does not exist")
            }
        })
    }, [])
    
    return(
        <div className="container my-5">
            <ItemDetail item = {item}/>
        </div>
    )
}

export default ItemDetailContainer;