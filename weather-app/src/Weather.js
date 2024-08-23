import React from 'react'

export default function Weather({data}) {
  return (
    <div className = "weather">
      <p>Temperature : {data.main.temp}&deg;c</p>
      <p>humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed}ms</p>
      <p>Location: {data.name}</p>
    </div>
  )
}
