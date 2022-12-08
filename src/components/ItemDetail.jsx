import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    return(
        <div className="d-flex flex-row justify-content-center border my-4">
            <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center text-center">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>   
                <ItemCount stock={item.stock} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail;