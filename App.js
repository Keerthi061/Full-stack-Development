import React, { useState } from "react"
import "./App.css"

import Axios from 'axios'

function App()
{
  //all code is written here

  const[sname,setStudentName]=useState("")   //to set and access state
  const[tech,setTechnology]=useState("") 
  const[section,setSection]=useState("") 

  const submitReview=()=>{
    Axios.post('http://localhost:9000/student',
    {
      name:sname,
      tech:tech,
      section:section
    }).then(()=>{
      alert("success");
    })
  }

  return(
    //html code over here

    <div className="App">
      <h1>    Crud Operations   </h1>
      <div className="info">
        <label><b>Student Name</b></label>
        <input type="text" name="sname" onChange={(e)=>{
          setStudentName(e.target.value)
        }} required/>
        <label><b>Technology</b></label>
        <input type="text" name="tech" onChange={(e)=>{
          setTechnology(e.target.value)
        }} required/>
        <label><b>Section</b></label>
        <input type="text" name="section" onChange={(e)=>{
          setSection(e.target.value)
        }} required/>
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>

  );
}

export default App;     //project name