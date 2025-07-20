import Card from "../Card";
import "./Team.css";

const Team = (props) => {
    return (
        props.collaborators.length > 0 &&
        <section
            className="team"
            style={{ '--glow-color': props.primaryColor }}
        >
            <h3 style={{ borderBottom: `4px solid ${props.primaryColor}` }}>
                {props.name}
            </h3>
            <div className="collaborators">
                {props.collaborators.map((collaborator) => (<Card key={collaborator.name} name={collaborator.name} image={collaborator.image} position={collaborator.position} primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} />))}
            </div>

        </section>
    );
};

export default Team;
