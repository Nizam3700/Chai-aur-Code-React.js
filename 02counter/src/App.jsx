import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 15;

  const addValue = () =>{
    // counter = counter + 1;
    if(counter < 15){
      setCounter(counter + 1);
      }else{
        alert("You can't Add more than Twenty values");
      }
  }

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1);
    }else{
      alert("You can't remove negitive values");
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}>Add value{counter}</button>
      <button
      onClick={removeValue}>remove value{counter}</button>
      
    </>
  )
}

export default App
