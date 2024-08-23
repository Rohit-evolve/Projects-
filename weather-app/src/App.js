import React, {useState} from 'react'

import FetchAPI from './FetchAPI'
import "./App.css"
export default function App() {

  const[city, setCity] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    setCity(e.target.value)
  }

  return (
    <div className = "app">
      <h1>Weather App</h1>

     <div className = "input-field">
      <input type = "text"  id="city" value = {city} onChange={handleSearch} placeholder='enter the city name'/>
     </div> 

     <div className="fetch-api-container">
      <FetchAPI city = {city}/>
    </div>  
      
      
    </div>

  )
}
