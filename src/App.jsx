import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';
import Footer from './Components/Footer';
import TableList from './Components/TableList';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styled'

function App() {

  const [participants, setParticipants] = useState([])

  const [age,   setAge]   = useState("")
  const [name,  setName]  = useState("")
  const [image, setImage] = useState("")
  const [team,  setTeam]  = useState("")
  const [occupation, setOccupation] = useState("")

  const [teamName, setTeamName]  = useState("")
  const [colorTeam, setColorTeam] = useState("#000000")

  const [teamList, setTeamList] = useState([
    {
      id        : uuidv4(),
      name      : "Diretoria", 
      colorTeam : '#D9F7E9',
    },
    {
      id        : uuidv4(),
      name      : 'Financeiro',
      colorTeam : '#E8F8FF',
    },
    {
      id        : uuidv4(),
      name      : 'Recursos Humanos',
      colorTeam : '#F0F8E2',
    },
    {
      id        : uuidv4(),
      name      : 'Desenvolvimento',
      colorTeam : '#FDE7E8',
    },
    {
      id        : uuidv4(),
      name      : 'Suporte',
      colorTeam : '#FAE5F5',
    },
    {
      id        : uuidv4(),
      name      : 'Interfaceamento',
      colorTeam : '#FFF5D9',
    },
    {
      id        : uuidv4(),
      name      : 'Implantação',
      colorTeam : '#FFEEDF',
    }
  ])

  const fields = [
    {
      type        : "text",
      label       : "Nome",
      varName     : name,
      required    : true,
      function    : setName,
      placeholder : "Digite o nome",
    },
    {
      type        : "text",
      label       : "Cargo",
      varName     : occupation,
      required    : true,
      function    : setOccupation,
      placeholder : "Digite o cargo",
    },
    {
      type        : "text",
      label       : "Idade",
      varName     : age,
      required    : true,
      function    : setAge,
      placeholder : "Digite a idade",
    },
    {
      type        : "text",
      label       : "Imagem",
      varName     : image,
      required    : false,
      function    : setImage,
      placeholder : "https:://",
    },
    {
      type        : "select",
      list        : teamList.map(team => team.name),
      label       : "Time",
      varName     : team,
      required    : true,
      function    : setTeam,
    }
  ]

  const fieldsNew = [
    {
      type        : "text",
      label       : "Nome do Time",
      varName     : teamName,
      required    : true,
      function    : setTeamName,
      placeholder : "Digite o nome do Time",
    },
    {
      type        : "color",
      label       : "Cor do Card",
      varName     : colorTeam,
      required    : true,
      function    : setColorTeam,
    }
  ]

  const addNewRegister = (action, newRegister) => {
    if (action === "newUser") setParticipants([...participants, newRegister])
    if (action === "newTeam") setTeamList([...teamList, newRegister])
  }

  const addRegister = (action, register) => addNewRegister(action, register)

  const onSubmit = (event, title) => {
    event.preventDefault()
    if (title === 'newUser') {
      addRegister(title, {
          id         : uuidv4(),
          age        : age,
          name       : name,
          team       : team,
          image      : image, 
          occupation : occupation
      })
      setName('')
      setAge('')
      setOccupation('')
      setImage('')
      setTeam('')
    }
    if (title === 'newTeam') {
      addRegister(title, {
        id        : uuidv4(),
        name      : teamName,
        colorTeam : colorTeam
      })
      setTeamName('')
      setColorTeam('#000000')
    }
  }

  const deleteTeam = (id) => {

    var resposta = window.confirm(`Você deseja excluir o time ${id}?`);

    if (resposta) {
      const updatedList = teamList.filter((team) => team.id !== id);
      setTeamList(updatedList)
    }

  }

  const changeColorTeam = (color, id) => {
    setTeamList(teamList.map(team => {
      if (team.id === id) {
        team.colorTeam = color
      }
      return team
    }))
  }

  return (
    <>
      <Banner/>
      <S.AppContainer>
        <S.Forms>
            <Form title="Adicionar novo colaborador" titleButton="Criar Card" formName='newUser' fields={fields} action={onSubmit} />
            <Form title="Adicionar novo time" titleButton="Adicionar Time" formName='newTeam' fields={fieldsNew} action={onSubmit} expandButton={true}/>
            <TableList title="Lista de times" listing={teamList} action={deleteTeam} expandButton={true}/>
        </S.Forms>
        {teamList.map(team => 
          <Team
            key={team.name}
            dataTeam={team}
            participants={participants}
            setParticipants={setParticipants}
            changeColorTeam={changeColorTeam}
          />
        )}
      </S.AppContainer>
      <Footer>Developed by<br/>Raphael Mariano</Footer>
    </>
  );
}

export default App;
