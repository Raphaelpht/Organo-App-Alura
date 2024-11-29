import * as S from './styled'
import * as O from '../styled'

const TextField = (props) => {

    const getInput = (event) => {
        props.changeValue(event.target.value)
    }

    return (
        <S.TextContainer>
            <O.Label>{props.label}</O.Label>
            <S.InputText
                id={props.label}
                name={props.label}
                value={props.value}
                onChange={getInput}
                placeholder={props.placeholder}
                required={props.required}
            />
        </S.TextContainer>
    )
}

export default TextField;