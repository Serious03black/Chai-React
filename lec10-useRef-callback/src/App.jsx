/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState(" ")
  const passRef = useRef(null)
  const passwordCopy = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  })
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "1234567890"
    if (char) str += "!@#$%^&*()_+"
    // console.log("IF CHAR STR =",str);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log("char Value=",char);
      pass += str.charAt(char)
      // console.log("str  =",str);
      // console.log("Pass = ",pass);
    }
    setPassword(pass)
  }, [length, num, char, setPassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])
  return (
    <div className=' w-full text-center max-w-md mx-auto shadow-md rounded-lg text-orange-500 px-4 my-8 bg-gray-800'>
      Password Generator
      <div className='
    '>
        <input type="text"
         className=' mt-4 outline-none py-1 px-3 bg-white rounded-lg' 
         value={password} placeholder='password'
         ref={passRef}
          readOnly />
        <button onClick={passwordCopy} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>
          Copy
        </button>
      </div>
      <div className='flex items-center '>
        <input type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => { setlength(e.target.value) }}
          className='cursor-pointer'
        />
        <label htmlFor="">Length:{length}</label>
      </div>
      <div>
        <div className='flex items-center gap-5 '>
          <input type="checkBox"
            defaultChecked={num}
            onChange={() => {
              setnum((prev) => !prev)
            }}
            id='NumInput'
            className='cursor-pointer' />
          <label htmlFor="NumInput">Number</label>
          <input type="checkBox"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev)
            }}
            id='CharInput' />
          <label htmlFor="CharInput">Charcter</label>
        </div>
      </div>
    </div>
  )
}
export default App
