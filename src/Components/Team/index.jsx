import Card from '../Card'
import * as S from './styled'
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
        <S.TeamContainer style={css}>
            <S.InputColor value={dataTeam.colorTeam} type='color' title='Mudar cor do time' onChange={event => changeColorTeam(event.target.value, dataTeam.id)}/>
            <S.Title style={{borderColor: dataTeam.colorTeam}}>{dataTeam.name}</S.Title>
            <S.Participants>
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
            </S.Participants>
        </S.TeamContainer>
        : ''
    )
}

export default Team