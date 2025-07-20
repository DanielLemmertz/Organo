import "./Card.css";

const Card = (props) => {
    console.log("Card props:", props);
    return (<div className="Card">
        <div className="Cabecalho" style={{ backgroundColor: props.primaryColor }}>
            <img src={props.image} alt={props.name} />
        </div>

        <div className="Rodape">
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
        </div>
    </div>
    )
}

export default Card;