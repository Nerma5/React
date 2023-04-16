import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import cardData from './components/Card/cardData/cardData'



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
        />
      ))}
    </div>
  )
}



export default App