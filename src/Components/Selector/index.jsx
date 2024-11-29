import './style.css'

const Selector = (props) => {
    return (
        <div className="selector">
            <label>{props.label}</label>
            <select onChange={evento => props.changeValue(evento.target.value)} id={props.label} name={props.label} required={props.required} value={props.value} >
                <option key={Math.random} value=""></option>
                {props.items.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Selector;