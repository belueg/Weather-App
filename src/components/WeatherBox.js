import React from 'react'
import './styles/WeatherBox.css'
export default function WeatherBox(props) {
    return (
        <>
            <div className="Container">
                <h4 className="BoxTitle">{props.city}</h4>
                <p>{props.date}</p>
                <div style={{fontSize:"50px"}}>
                <img src={props.icon} alt="Weather Icon"/>

                </div>
                <p>{props.temperature}ºC </p>
                <span>Max {props.max}ºC </span>
                <span>Min {props.min}ºC </span>
                <span>{props.description}</span>
            </div>
        </>
    )
}
