import React, { useState } from 'react'
import Records from './data/records.json'
import "./App.css"


function App() {
  return (
    <>
    <div>hello app</div>
    {Records && Records.map((record)=>{
      return(
        <div className='box' key={record.id}>
            {record.id?record.id:""} <br />
            {record.tech && record.tech.map((data)=>{return(<div key={record.id}>{data.name}</div>)})}
            {record.title}
            {()=>{return(console.log(this))}}
        </div>
      )
    })}
    
    
    </>
  )
}

export default App