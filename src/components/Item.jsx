const Item = ({ product }) => {

    const { image, name, price, description } = product
    
    return(
        <div className="col-md-4">
            <div className="card bg-dark text-center border-0">
                <img src={image} alt="" className="img-thumbnail"/>
                <div className="card-body text-light">
                    <p className="card-tittle">{ name }</p>
                    <a href="#!" className="btn btn-outline-secondary"> Comprar </a>
                </div>
            </div>
        </div>
    )
}

export default Item;