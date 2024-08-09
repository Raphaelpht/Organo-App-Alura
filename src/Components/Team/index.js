import Card from '../Card'
import './style.css'

const Team = ({participants, name, firstColor, secondColor, setParticipants}) => {

    const team = participants.filter(participant => participant.team === name)

    const css = {backgroundColor: secondColor}

    const deleteParticipant = (idParticipant, nameDelete) => {
        var resposta = window.confirm(`Você deseja excluir ${nameDelete} do ${name} ?`);

        const updatedParticipant = participants.filter(participant => participant.id !== idParticipant)
        if (resposta) setParticipants(updatedParticipant)
    }

    return (
        (team.length > 0) ?
        <section className='team' style={css}>
            <h3 style={{borderColor: firstColor}}>{name}</h3>
            <div className='participants'>
                {team.map(participant => 
                    <Card
                        id={participant.id}
                        key={participant.id}
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