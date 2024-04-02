import React from 'react'
import Card from './components/Card'
import img1 from "../src/images/s2.jpg"

function App() {

  const data = [
   {title: "This is card one" , desc: "This is desc one", image: img1 },
   {title: "This is card two" , desc: "This is desc two", image: img1 },
   {title: "This is card three" , desc: "This is desc three", image: img1 },
   {title: "This is card four" , desc: "This is desc four", image: img1 }

  ]

  const printTitle = (mess) => {
   console.log("This is from app file " + mess);
  }


  return (
    <div style={{display: "flex"}}>

    {
      data.map((item , index)=> {
        return (
        <Card key = {index} title = {item.title} description = {item.desc} img = {item.image}
         clickMe = {printTitle}
        />
        )
      })
    }

    </div>
  )
}

export default App