import React from 'react'
import './styles/WeatherBox.css'
export default function WeatherBox(props) {
  return (
    <>
      <div className="Container">
        <h4 className="BoxTitle">{props.city}</h4>
        <p>{props.date}</p>
        <div style={{ fontSize: '50px' }}>
          <img src={props.icon} alt="Weather Icon" />
        </div>
        <p className="TempNumber">{props.temperature}ºC </p>
        <div>
        <span className="MinMax">Max {props.max}ºC </span>
        <span className="MinMax">Min {props.min}ºC </span>
        </div>
  
    
        <span className="DescriptionBox">{props.description}</span>
      </div>
    </>
  )
}
