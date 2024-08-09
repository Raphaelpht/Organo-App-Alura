import './style.css'

const Card = ({id, name, office, age, image, bgColor, deleteParticipant}) => {
    return (
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: bgColor}}>
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
                <img style={{width: '25px'}} src='/images/trash.png' alt='Deletar Colaborador' onClick={(event) => deleteParticipant(id, name)}/>
            </div>
        </div>
    )
}

export default Card;