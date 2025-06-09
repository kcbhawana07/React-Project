import { useState,useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numberallowed,setnumberallowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[password,setpassword]=useState("")

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    if(numberallowed){
      str+="0123456789"
    }

       if(charAllowed){
      str+="!@#$%^"
    }


   for (let i = 1; i <= length; i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setpassword(pass)

  },[length,numberallowed,charAllowed,setpassword])


  useEffect(()=>{
    passwordgenerator()
  },[length,numberallowed,charAllowed,setpassword,passwordgenerator])

  
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bbg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className="text-white bg-gray-800 border border-gray-300 rounded px-4 py-2"
        placeholder="Password" 
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <input 
        type="range"
        className="text-white bg-gray-800 border border-gray-300 rounded px-4 py-2 w-64"
        min={6}
        max={100}
        value={length}
     onChange={(e)=>{setlength(e.target.value)}}
         />
         <label>Length:{length}</label>
         </div>
      
      <div className= "flex items-center gap-x-1 ">
        <input 
        type="checkbox"
        defaultChecked={numberallowed}
        id="numberInput"
        onChange={()=>{
          setnumberallowed((prev)=>!prev)
        }}
        />
       <label htmlFor="numberInput">Numbers</label>


                <input 
        type="checkbox"
        defaultChecked={numberallowed}
        id="numbercharacter"
        onChange={()=>{
          setcharAllowed((prev)=>!prev)
        }}
        />
        <label htmlfor="numbercharacter">Characters</label>
        </div>
        </div>

   
    </>
  )
}


export default App
