
import './App.css';
import {useState} from 'react'
// import axios from "axios"
function App() {
  const [image,setImage]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const data=new FormData( )
    data.append("newFile",image)
    const res=fetch('http://localhost:2003/upload',{
      method:'POST',
      body:data,
    })
  }
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  
  }
  return (
    <div className="App">
      <form id="form" name="newFile" onSubmit={handleSubmit} >
        <input type="file" name="newFile" onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
