import React, { useState } from 'react';
import mypic from "./component/mypic.jpeg";
import './App.css';

function ImageManipulation() {

  const [mypicheight, setmypicheight] = useState(200);
  const [mypicrotate,setmypicrotate] = useState(50);
  const [mypicmargin,setmypicmargin] = useState(20);

  function setheight() {
    setmypicheight(mypicheight + 10);
  }

  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}>Image Manipulation</h2>

      <div style={{ border: '2px solid red', height: '400px', width: '500px',marginLeft: '50px',marginRight: '50px',transform: 'translateX(20px)' }} >
        <img src={mypic} style={{height: `${mypicheight}px`, width: '500px'}} />
      </div>

      <button onClick={setheight}> Enhance Height</button>
      <button onClick={() => setmypicheight(200)}> Reset Height</button>
      <button onClick={() => setmypicrotate(mypicrotate + 10)}> Rotate Image</button>
      <button onClick={() => setmypicmargin(mypicmargin + 10)}> Increase Margin</button>
      

    </div>
  );
}

export default ImageManipulation;