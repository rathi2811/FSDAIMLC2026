import React from 'react'
import ICard from './ICard'
import mypic from './mypic.jpeg'
import image1 from './image1.jpeg'
import C from './C.jpeg'

function ICardGallery() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>

      <ICard
        pic={mypic}
        rollNumber="118"
        name="Mallika"
        branch="CSE-AIML"
      />

      <ICard
        pic={image1}
        rollNumber="119"
        name="Isha"
        branch="CSE-AIML"
      />

      <ICard
        pic={C}
        rollNumber="120"
        name="Rahul"
        branch="CSE"
      />

    </div>
  )
}

export default ICardGallery