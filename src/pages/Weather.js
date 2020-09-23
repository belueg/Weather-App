import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WeatherBox from '../components/WeatherBox'
import CityName from '../components/CityName'
import './styles/Weather.css'
import Footer from '../components/Footer'

export default function WeatherPage () {
    const[city, setCity] =useState("")
  const [weatherInfo, setWeatherInfo] = useState()
const [temp, setTemp] = useState()
  useEffect(() => {
    myRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function myRequest() {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=a2f2f00a939d548cbbfedacf0ae786a3'
      )
      const data = await response.json()
      console.log(data);
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
      <CityName name="Barcelona" />
      <div className="ContainerBoxes">
        <WeatherBox
          city={city}
          temperature={Math.floor(temp?.temp - 273.15)}
          max={Math.floor(temp?.temp_max - 273.15)}
          min={Math.floor(temp?.temp_min - 275.15)}
          icon={`http://openweathermap.org/img/w/${weatherInfo?.icon}.png`}
          description={weatherInfo?.description}
        />
      </div>
      <Footer />
    </>
  )
}
