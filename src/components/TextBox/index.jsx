import './TextBox.css';

const TextBox = (props) => {

    const toType = (event) => {
        props.setValue(event.target.value)
    }

    return (
        <div className="text-box" >
            <label>{props.label}</label>
            <input value={props.value} onChange={toType} required={props.required} placeholder={props.placeholder} />
        </div >
    );
}

export default TextBox;