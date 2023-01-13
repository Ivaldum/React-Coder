const Skeleton = () => (<div className="col-4">
    <div className="card mx-2 my-4" aria-hidden="true">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>
        <div className="card-body">
            <div className="h5 card-title placeholder-glow">
                <span className="placeholder col-6"></span>
            </div>
            <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
            </p>
            <a href="#" className="btn btn-success disabled placeholder col-6"></a>
        </div>
        </div>
    </div>
)

const ItemSkeleton = ({amount}) => {

    return (
        (Array(amount).fill(null).map((_, key) => <Skeleton key={key} />))
    )
}
export default ItemSkeleton