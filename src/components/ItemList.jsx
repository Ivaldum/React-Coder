import Item from "./Item";

const ItemList = ({listProducts}) => {
    return(
        <div className="row">
            {
                listProducts.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList;