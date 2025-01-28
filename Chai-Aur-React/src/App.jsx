import './App.css'
import {useState} from 'react';

function App() {
  let [counter,setCounter] = useState(1)
  const  AddValue = ()=>{
    setCounter(counter + 1)
    console.log("Clicked ",{counter}); 
    if(counter>=20){
      alert("No more Value")
      setCounter(20)
    }
}
  const  RemoveValue = ()=>{
    setCounter(counter - 1)
    console.log("Clicked ",{counter}); 
    if(counter<=0){
      setCounter(0)
    }
}
  return (
    <>
     <h1>Chai AUr React</h1>
     <h1>Counter Value = {counter}</h1>
     <button onClick={AddValue}>Add Value</button>
     <br /><br />
     <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}
export default App
