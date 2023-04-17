import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { FaGithub, FaJs, FaLinkedin, FaSlack } from 'react-icons/fa';

const cardData =[
  {
    id:1,
    name: 'Nerma',
    login: 'nermahh5',
    web: 'GitHub',
    repo: '25 repositories',
    icons: <FaGithub/>
  },
  {
    id:2,
    name: 'Anes',
    login: 'anesdolicanin',
    web: 'Js',
    repo: ' 30 projects',
    icons: <FaJs />
  },
  {
    id:3,
    name: 'Hamza',
    login: 'hamzaat5',
    web: 'Linkedn',
    repo: '500+ conections',
    icons: <FaLinkedin />
  },
  {
    id:4,
    name: 'Ensar',
    login: 'ensargit2',
    web: 'Slack',
    repo: '20 servers',
    icons: <FaSlack />
  }
]




function App() {
  return (
    <div className="App">
      {cardData.map((card)=>( 
        <Card 
        key={card.id}
        name={card.name}
        login={card.login}
        web={card.web}
        repo={card.repo}
        icons={card.icons}
        />
      ))}
    </div>
  )
}


export default App