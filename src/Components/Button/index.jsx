import * as S from './styled'

const Button = (props) => {
    return (
        <S.SendButton>{props.children}</S.SendButton>
    )
}

export default Button;