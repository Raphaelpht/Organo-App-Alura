import './style.css'

const TextField = (props) => {

    const getInput = (event) => {
        props.changeValue(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                id={props.label}
                name={props.label}
                value={props.value}
                onChange={getInput}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    )
}

export default TextField;