import { useState } from 'react'
import * as S from './styled'
import * as O from '../styled'

const ColorField = ({changeValue, label, value, placeholder, required}) => {

    const [backColor, setBackColor] = useState("#000000")

    const getInput = (event) => {
        changeValue(event.target.value)
        setBackColor(event.target.value)
    }

    return (
        <>
            <O.Label>{label}</O.Label>
            <S.ColorFieldContainer>
                <S.InputColorField 
                    type="color"
                    id={label}
                    name={label}
                    value={value}
                    onChange={getInput}
                    placeholder={placeholder}
                    required={required}
                    style={{backgroundColor: backColor}}
                />
                <S.ColorFieldInput 
                    type="text"
                    id={label}
                    name={label}
                    value={value}
                    onChange={getInput}
                    placeholder={placeholder}
                    required={required}
                    readOnly
                />
            </S.ColorFieldContainer>
        </>
    )
}

export default ColorField;