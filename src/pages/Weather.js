import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WeatherBox from '../components/WeatherBox'
import CityInput from '../components/CityInput'
import './styles/Weather.css'
import Footer from '../components/Footer'
import ImageDecoration from '../components/ImageDecoration'

export default function WeatherPage () {
    const[city, setCity] =useState("")
  const [weatherInfo, setWeatherInfo] = useState()
const [temp, setTemp] = useState()
  useEffect(() => {
    myRequest("barcelona")
  }, [])
  async function myRequest(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=256032c170e8af8e53f6ee4ecaa58a08
        `
      )
      const data = await response.json()
      const weatherData = data.weather[0]
      setCity(data.name)
      setWeatherInfo(weatherData)
      setTemp(data.main)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <CityInput name="Barcelona" request={myRequest} />
      <div className="ContainerBoxes">
        <WeatherBox
          city={city}
          temperature={Math.floor(temp?.temp - 273.15)}
          max={Math.floor(temp?.temp_max - 273.15)}
          min={Math.floor(temp?.temp_min - 275.15)}
          icon={`http://openweathermap.org/img/w/${weatherInfo?.icon}.png`}
          description={weatherInfo?.description}
        />
        <ImageDecoration/>
      </div>
      <Footer />
    </>
  )
}
