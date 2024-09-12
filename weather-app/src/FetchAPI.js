import React,{useState} from 'react'

import Weather from './Weather'

import axios from 'axios'

import Sun from "./assests/Sun.png"
import Cloud from "./assests/Cloud.png"
import Rain from "./assests/Group 17.png"
import Error from "./assests/404.png"

import "./FetchAPI.css"
import "./App.css"


export default function FetchAPI() {

    const[data, setData] = useState(null)
    const[error, setError] = useState(null)
    const[img, setImg] = useState(null)
    const[city, setCity] = useState("")

    const handleSearch = (e) => {
      e.preventDefault()

       setCity(e.target.value)
    }

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
            setImg(Error)
        })
        

    }


  return (
    <div className = "app">


      <h1 className = "">Weather App</h1>
      <div className = "back">
       <div className = "input-field">
       <input type = "text"  id="city" value = {city} onChange={handleSearch} placeholder='enter the city name'/>
      </div>
    </div>  

   <form onSubmit = {handleClick} className="pt-5">
       
      <img src = {img} alt = "" className="picture"/> <br/>
     
      <button type = "submit">Weather</button>

     </form>

      {data && <Weather data={data}/>}

      {error && <p>{error}</p>}
    </div>
  )
}
