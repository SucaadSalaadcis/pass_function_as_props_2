import React from 'react'

function Card({title, description, img, clickMe}) {

    const handleClick = () => {
     clickMe(title)
    }
  

  return (
      <div style={{border: "1px solid black",marginTop:"50px",marginLeft: '27px',width: "300px", height: "340px"}}>
        <h2 style={{color: "black",marginLeft: "58px"}}>{title}</h2>
        <img src={img}  alt="" style={{marginLeft: "30px"}}  />
        <p style={{color: "black",marginLeft: "58px"}}>{description}</p>
        <button onClick={handleClick}  style={{background: "pink",marginTop:"16px" ,marginLeft: '87px',}}>Go any where</button>
     </div>
  )
}

export default Card