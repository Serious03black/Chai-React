import { useState } from 'react'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color]= useState("black")
  return (
   <>
   <div className="w-full h-screen duration-200"style={{backgroundColor:color}}>
   </div>
     </>
  )
}

export default App
