
import React from 'react'

function ICard(props) {
  return (
    <div style={{border:'2px solid black',height:'2px',width:'200%',margin:'10px'}}> 

      <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
      {/* <h2 style={{color:'red'}}>Welcome to react using vite</h2> */}
      <img src={props.pic} height={200} width={200} ></img>
      <h3 style={{color:'red'}}>Value of name={props.name}</h3>
      <h3 style={{color:'red'}}>Roll Number={props.rollNumber}</h3>
      <h3 style={{color:'red'}}>Branch={props.branch}</h3>

      </div>
  )
}

export default ICard