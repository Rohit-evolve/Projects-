import React,{useState,useEffect} from 'react'

import './FetchAPI.css'
import "./assests/Sun.png"

import Sun from "./assests/Sun.png"
import Rain from "./assests/Group 17.png"
import Cloud from "./assests/Cloud.png"

export default function Image({data}) {

    const[img, setImg] = useState(null)

    //var temp = parseInt(data.main.temp)
   

   useEffect( ()=> { 
    
    const temp = parseInt(data.main.temp)
   
    if(temp <= 25)
        setImg(Rain)
    else if(temp<=30 && temp >=26)
        setImg(Cloud)
    else
        setImg(Sun)
   },[data])

  return (
    <div className = "picture">
      <img src = {img} alt = ""  id = "picture"/>
    </div>
  )
}
