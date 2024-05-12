export const Card = ({imgLink, brandName, cardDesc, oldPrice, newPrice}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={ imgLink } alt="" />
            </div>
            <p className="card__name">IGURE</p>
            <h4 className="card__desc">{ cardDesc }</h4>
            <p className="old__price">{ oldPrice }</p>
            <span className="new__price">{ newPrice }</span>
        </div>
    )
}