import Card from '../Card'
import './style.css'

const Team = ({participants, name, firstColor, secondColor, setParticipants}) => {

    const css = {backgroundColor: secondColor}

    const deleteParticipant = (idParticipant) => {
        var resposta = window.confirm(`Você deseja excluir ${idParticipant} do ${name} ?`);

        if (resposta) setParticipants(participants.filter(participant => participant.name !== idParticipant))
    }

    return (
        (participants.length > 0) ?
        <section className='team' style={css}>
            <h3 style={{borderColor: firstColor}}>{name}</h3>
            <div className='participants'>
                {participants.map(participant => 
                    <Card
                        key={participant.name}
                        name={participant.name}
                        age={participant.age}
                        image={participant.image}
                        office={participant.occupation}
                        bgColor={firstColor}
                        deleteParticipant={deleteParticipant}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Team