import Item from "./Item";

const ItemList = ({listProducts}) => {
    return(
        <div className="row">
            {
                listProducts.map(product => <Item key={product.id} product={product} />)
            }
        </div>
    )
}

export default ItemList;