/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function GIthub() {
    const [data,setdata]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/user/Serious03Black')
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            setdata(data)
        })
    })
  return (
    <div>
      <h1>Followers :{data.Followers } </h1>
    </div>
  )
}

export default GIthub
