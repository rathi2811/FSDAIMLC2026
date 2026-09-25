import {useState} from 'react';
function StateHandling(){
    const [counter,setCounter] = useState(20);
    const [red,setRed] = useState(255);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    function incrementCounter(){
        setCounter(counter + 10);
    }
    function decrementCounter(){
        setCounter(counter - 10);
    }
    function changeColor(){
        setRed(Math.floor(Math.random() * 255));
        setGreen(Math.floor(Math.random() * 255));
        setBlue(Math.floor(Math.random() * 255));
    }

    return (
        <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, border: '1px solid #ccc', padding: '20px' }}>
            
            <h1 style={{ color: 'brown' }}>Counter App</h1>
            <h2>Counter = {counter}</h2>
            <button onClick={incrementCounter}>Incrementvalue</button>
            <br />
            <button onClick={decrementCounter}>Decrementvalue</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
export default StateHandling;