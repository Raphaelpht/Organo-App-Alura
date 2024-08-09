import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';
import Footer from './Components/Footer';
import TableList from './Components/TableList';

function App() {

  const [participants, setParticipants] = useState([])

  const [age,   setAge]   = useState("")
  const [name,  setName]  = useState("")
  const [image, setImage] = useState("")
  const [team,  setTeam]  = useState("")
  const [occupation, setOccupation] = useState("")

  const [teamName, setTeamName] = useState("")
  const [colorOne, setColorOne] = useState("#000000")
  const [colorTwo, setColorTwo] = useState("#000000")

  const [teamList, setTeamList] = useState([
    { 
      name: "Diretoria", 
      firstColor: '#57C278',
      secondColor: '#D9F7E9',
    },
    {
      name: 'Financeiro',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Recursos Humanos',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Desenvolvimento',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'Suporte',
      firstColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      name: 'Interfaceamento',
      firstColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Implantação',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF',
    }
  ])

  const addNewRegister = (action, newRegister) => {
    if (action === "newUser") setParticipants([...participants, newRegister])
    if (action === "newTeam") setTeamList([...teamList, newRegister])
  }

  const addRegister = (action, register) => addNewRegister(action, register)

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
      varName     : colorOne,
      required    : true,
      function    : setColorOne,
    },
    {
      type        : "color",
      label       : "Cor de Fundo",
      varName     : colorTwo,
      required    : true,
      function    : setColorTwo,
    },
  ]

  const onSubmit = (event, title) => {
    event.preventDefault()
    if (title === 'newUser') {
      const idUser = Math.random()
      addRegister(title, {
          id         : idUser,
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
        name:     teamName,
        firstColor: colorOne,
        secondColor: colorTwo
      })
      setTeamName('')
      setColorOne('#000000')
      setColorTwo('#000000')
    }
  }

  const deleteTeam = (id) => {

    var resposta = window.confirm(`Você deseja excluir o time ${id}?`);

    if (resposta) {
      const updatedList = teamList.filter((team) => team.name !== id);
      setTeamList(updatedList)
    }

  }

  return (
    <>
      <Banner/>
      <div className="container">
        <div className="forms">
            <Form title="Adicionar novo colaborador" titleButton="Criar Card" formName='newUser' fields={fields} action={onSubmit} />
            <Form title="Adicionar novo time" titleButton="Adicionar Time" formName='newTeam' fields={fieldsNew} action={onSubmit} expandButton={true}/>
            <TableList title="Lista de times" listing={teamList} action={deleteTeam} expandButton={true}/>
        </div>
        {teamList.map(team => 
          <Team 
            key={team.name}
            name={team.name}
            firstColor={team.firstColor}
            secondColor={team.secondColor}
            participants={participants}
            setParticipants={setParticipants}
          />
        )}
      </div>
      <Footer>Developed by<br/>Raphael Mariano</Footer>
    </>
  );
}

export default App;
