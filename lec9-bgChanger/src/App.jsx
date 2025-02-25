/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState("color")
  return (
    <div className='main' style={{ backgroundColor: color }}>
      <div className='parent'><div className="button">
        <button style={{ backgroundColor: "red" }} onClick={setColor} > </button>
        {/*here on onclck we can directly pass onclick={setColor} but set la hav asto function ani apun pass kelay reference 
        he bhi chalta
       but to direct execute hoil parameter nahi ghenar parametner sathi apun takto setColor() but
         sa bhi direct hot nahi tyamule apun pass karto callback 
       {} => setColor("")
   */}
        <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")} > </button>
        <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")} > </button>
        <button style={{ backgroundColor: "Black" }} onClick={() => setColor("black")} ></button>
      </div>
      </div>
    </div>
  )
}

export default App
 