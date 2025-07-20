import "./ComboBox.css";

const ComboBox = (props) => {
    const toType = (event) => {
        props.setValue(event.target.value)
    }


    return (
        <div className="combobox">
            <label>{props.label}</label>

            <select value={props.value} onChange={toType} required={props.required}>
                <option value="" />
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox;