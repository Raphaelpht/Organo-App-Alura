import { AiFillCloseCircle } from 'react-icons/ai';
import './style.css'

const Card = ({id, name, office, age, image, bgColor, deleteParticipant}) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: bgColor}}>
                <AiFillCloseCircle size={25} className='deletar' src='/images/trash.png' alt='Deletar Colaborador' onClick={(event) => deleteParticipant(id, name)}/>
                {image ?
                    <img className='img-perfil' src={image} alt={name} />
                :
                <img className='img-perfil' src="/images/user.png" alt={name} />
                }
            </div>
            <div className='rodape'>
                <h4>{name}</h4>
                <h5>{office}</h5>
                <p>{age} Anos</p>
            </div>
        </div>
    )
}

export default Card;