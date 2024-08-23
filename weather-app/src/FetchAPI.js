import React,{useState} from 'react'

import Weather from './Weather'

import axios from 'axios'

import Sun from "./assests/Sun.png"
import Cloud from "./assests/Cloud.png"
import Rain from "./assests/Group 17.png"

import "./FetchAPI.css"


export default function FetchAPI({city}) {

    const[data, setData] = useState(null)
    const[error, setError] = useState(null)
    const[img, setImg] = useState(null)

    const handleClick =  async(e) =>{
        e.preventDefault()

        

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3fae3d0fe11d784aca90b107820aa3c
&units=metric`)
        .then(response =>{
            setData(response.data)
            setError(null)

            const temp = parseInt(response.data.main.temp)
          
           if(temp <= 25)
              setImg(Rain)
    
            else if(temp<=30 && temp >=26)
              setImg(Cloud)
    
            else
              setImg(Sun) 
        })
        .catch(response => {
            setError(response.message)
            setData(null)
        })
        

    }


  return (
    <div className = "app">

   <form onSubmit = {handleClick}>
       
      <img src = {img} alt = "" className="picture"/> <br/>
     
      <button type = "submit" >Weather</button>

     </form>

      {data && <Weather data={data}/>}

      {error && <p>{error}</p>}
    </div>
  )
}
