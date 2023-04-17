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
    icons: <FaGithub/>,
    color1: 'rgb(51,255,51)',
    color2: 'rgb(255,153,240)'
  },
  {
    id:2,
    name: 'Anes',
    login: 'anesdolicanin',
    web: 'Js',
    repo: ' 30 projects',
    icons: <FaJs />,
    color1: 'rgb(223,112,112)',
    color2: 'rgb(112,175,223)'



  },
  {
    id:3,
    name: 'Hamza',
    login: 'hamzaat5',
    web: 'Linkedn',
    repo: '500+ conections',
    icons: <FaLinkedin />,
    color1: 'rgb(128,128,128)',
    color2: 'rgb(51,51,255)'


  },
  {
    id:4,
    name: 'Ensar',
    login: 'ensargit2',
    web: 'Slack',
    repo: '20 servers',
    icons: <FaSlack />,
    color1: 'rgb(250,43,43)',
    color2: 'rgb(255,255,0)'


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
        color1={card.color1}
        color2={card.color2}
        />
      ))}
    </div>
  )
}


export default App