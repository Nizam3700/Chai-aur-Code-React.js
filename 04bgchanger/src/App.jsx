
// import './App.css'
import { useState } from "react"

function App() {
  const [color, setColor] = useState("lightblue")

  return (
    <>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-100 px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("Red")} className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("Green")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("Blue")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
          <button onClick={() => setColor("violet")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "violet"}}>violet</button>
          <button onClick={() => setColor("grey")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "grey"}}>grey</button>
          <button onClick={() => setColor("greenyellow")}className="ouline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor: "greenyellow"}}>greenyellow</button>
          <button onClick={() => setColor("Pink")}className="ouline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={() => setColor("Lavender")}className="ouline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor: "Lavender"}}>Lavender</button>
          <button onClick={() => setColor("Orange")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "Orange"}}>Orange</button>
          <button onClick={() => setColor("white")}className="ouline-none px-4 py-1 rounded-3xl text-black shadow-lg" style={{backgroundColor: "white"}}>white</button>
          <button onClick={() => setColor("Purple")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
          <button onClick={() => setColor("black")}className="ouline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>
        </div>
      </div>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color}}
      ></div>
    </>
  )
}

export default App
