import { useState, useCallback, useEffect,useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState
  (false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("")

  // userRef Hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed ) str += "0123456789"
    if(charAllowed ) str += "!@#$%^&*()-_+=[]{}~`"


    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password)
  },
  [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-screen-sm mx-auto shadow-md rounded-lg px-4 my-8 text-white-600 bg-gray-400 font-bold'>
      <h1 className='text-black text-center mt-6'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden m-8 mt-4'>
        <input 
        type="text" 
        value={Password}
        className= "outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-1'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
            className='cursor-pointer mb-4' 
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='mb-4'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          onChange = {() => {
            setNumberAllowed((prev) =>!prev);
          }}
            className='mb-4' 
          />
          <label htmlFor="numberInput" className='mb-4'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {charAllowed}
          id = "characterInput"
          onChange = {() => {
            setCharAllowed((prev) =>!prev);
          }}
            className='mb-4' 
          />
          <label htmlFor="characterInput" className='mb-4'>Characters</label>
        </div>


      </div>
    </div>

    </>
  )
}

export default App
