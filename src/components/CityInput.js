import React from 'react'
import './styles/CityInput.css'
export default function CityInput(props) {
  const fn = props.request
  let city = ''
  return (
    <>
    <div className="InputContainer">
      <input
      className="InputBar"
        type="text"
        placeholder="choose a city"
        onChange={event => (city = event.target.value)}
      />
      <button className="InputBtn" onClick={() => fn(city)}>Show weather</button>
    </div>
    </>
  )
}
