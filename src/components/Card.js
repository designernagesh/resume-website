const Card = ({item}) => {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <div className="s-type">{item.type}</div>
                <img src={item.image} />
            </div>
            <div className="s-b-text">
                <a href="#">{item.description}</a>	
            </div>
        </div>
    )
}

export default Card;