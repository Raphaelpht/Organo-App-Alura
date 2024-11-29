import * as S from './styled'

const Selector = (props) => {
    return (
        <S.SelectorContainer>
            <S.LabelSelector>{props.label}</S.LabelSelector>
            <S.Select onChange={evento => props.changeValue(evento.target.value)} id={props.label} name={props.label} required={props.required} value={props.value} >
                <option key={Math.random} value=""></option>
                {props.items.map(item => {
                    return <option key={item} value={item}>{item}</option>
                })}
            </S.Select>
        </S.SelectorContainer>
    )
}

export default Selector;