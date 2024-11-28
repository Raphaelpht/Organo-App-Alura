import Card from '../Card'
import './style.css'
import hexToRgba from 'hex-to-rgba'

const Team = ({dataTeam, participants, setParticipants, changeColorTeam}) => {

    const team = participants.filter(participant => participant.team === dataTeam.name)

    const css = {backgroundColor: hexToRgba(dataTeam.colorTeam, '0.6'), backgroundImage: 'url(/images/fundo.png)'}

    const deleteParticipant = (idParticipant, nameDelete) => {
        var resposta = window.confirm(`Você deseja excluir ${nameDelete} do ${dataTeam.name} ?`);

        const updatedParticipant = participants.filter(participant => participant.id !== idParticipant)
        if (resposta) setParticipants(updatedParticipant)
    }

    return (
        (team.length > 0) ?
        <section className='team' style={css}>
            <input value={dataTeam.colorTeam} type='color' className='input-color' title='Mudar cor do time' onChange={event => changeColorTeam(event.target.value, dataTeam.id)}/>
            <h3 style={{borderColor: dataTeam.colorTeam}}>{dataTeam.name}</h3>
            <div className='participants'>
                {team.map(participant => 
                    <Card
                        id={participant.id}
                        key={participant.id}
                        name={participant.name}
                        age={participant.age}
                        image={participant.image}
                        office={participant.occupation}
                        bgColor={dataTeam.colorTeam}
                        deleteParticipant={deleteParticipant}
                    />
                )}
            </div>
        </section>
        : ''
    )
}

export default Team