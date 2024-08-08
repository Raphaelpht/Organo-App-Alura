import { useState } from 'react'
import './style.css'

const ColorField = ({changeValue, label, value, placeholder, required}) => {

    const [backColor, setBackColor] = useState("#000000")

    const getInput = (event) => {
        changeValue(event.target.value)
        setBackColor(event.target.value)
    }

    return (
        <>
            <label>{label}</label>
            <div className="color-field">
                <input 
                    className='input-color'
                    type="color"
                    id={label}
                    name={label}
                    value={value}
                    onChange={getInput}
                    placeholder={placeholder}
                    required={required}
                    style={{backgroundColor: backColor}}
                />
                <input 
                    type="text"
                    id={label}
                    name={label}
                    value={value}
                    onChange={getInput}
                    placeholder={placeholder}
                    required={required}
                    readOnly
                />
            </div>
        </>
    )
}

export default ColorField;