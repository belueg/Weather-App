import React from 'react'
import './styles/WeatherBox.css'
export default function WeatherBox(props) {
    return (
        <>
            <div className="Container">
                <h4 className="BoxTitle">{props.weekday}</h4>
                <p>{props.date}</p>
                <div style={{fontSize:"50px"}}>{props.icon}</div>
                <p>{props.temperature}</p>
                <span>{props.description}</span>
            </div>
        </>
    )
}
