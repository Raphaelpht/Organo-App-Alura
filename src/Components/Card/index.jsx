import { AiFillCloseCircle } from 'react-icons/ai';
import * as S from './styled'

const Card = ({id, name, office, age, image, bgColor, deleteParticipant}) => {
    return (
        <S.CardContainer>
            <S.Cabecalho style={{backgroundColor: bgColor}}>
                <S.Delete>
                    <AiFillCloseCircle size={25} src='/images/trash.png' alt='Deletar Colaborador' onClick={(event) => deleteParticipant(id, name)}/>
                </S.Delete>
                {image ?
                    <S.ImageProfile className='img-perfil' src={image} alt={name} />
                :
                <S.ImageProfile className='img-perfil' src="/images/user.png" alt={name} />
                }
            </S.Cabecalho>
            <S.Rodape>
                <S.Title4>{name}</S.Title4>
                <S.Title5>{office}</S.Title5>
                <p>{age} Anos</p>
            </S.Rodape>
        </S.CardContainer>
    )
}

export default Card;