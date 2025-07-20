import './App.css';

import { useState } from 'react';

import Banner from './components/Banner/';
import Form from './components/Form';
import Team from './components/Team';
const Teams = [
  {
    name: 'Programador Full Stack',
    primaryColor: '#a412ed',
    secondaryColor: '#a412ed',
  },
  {
    name: 'Programador Front End',
    primaryColor: '#f110e9ff',
    secondaryColor: '#f110e9ff',
  },
  {
    name: 'Programador Back End',
    primaryColor: '#a412ed',
    secondaryColor: '#10f18c',
  },
  {
    name: 'Engenheiro',
    primaryColor: '#ff9123ff',
    secondaryColor: '#ff9123ff',
  },
  {
    name: 'Designer',
    primaryColor: '#10f18c',
    secondaryColor: '#10f18c',
  },
  {
    name: 'Marketing',
    primaryColor: '#10bbffff',
    secondaryColor: '#10bbffff',
  },
  {
    name: 'Contabilidade',
    primaryColor: '#00ae23ff',
    secondaryColor: '#00ae23ff',
  }
]

function App() {
  const [Collaborators, setCollaborators] = useState([]);

  const NewCollaborator = (collaborator) => {
    setCollaborators([...Collaborators, collaborator]);
  };
  return (
    <div className='App'>
      <Banner />
      <Form Teams={Teams.map(Team => Team.name)} NewCollaborator={Collaborator => NewCollaborator(Collaborator)} />
      {Teams.map(team => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={Collaborators.filter(collaborator => collaborator.team === team.name)}
        />
      ))}

    </div>
  );
}

export default App;
