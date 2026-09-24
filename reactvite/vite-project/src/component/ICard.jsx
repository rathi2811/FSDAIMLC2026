import React from 'react'

function ICard(props) {
  return (
    <div style={{
      border: '2px solid black',
      height: '450px',
      width: '300px',
      margin: '10px',
      padding: '10px',
      color: 'black',
      fontFamily: 'cursive',
      textAlign: 'center'
    }}> 

      <h2 style={{
        backgroundColor: 'brown',
        color: 'white',
        padding: '10px'
      }}>
        ABES Engineering College
      </h2>

      <img
        src={props.pic}
        height={200}
        width={200}
      />

      <h3>name={props.name}</h3>
      <h3>Roll Number={props.rollNumber}</h3>
      <h3>Branch={props.branch}</h3>

    </div>
  )
}

export default ICard