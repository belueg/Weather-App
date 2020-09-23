import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WeatherBox from '../components/WeatherBox'
import CityName from '../components/CityName'
import './styles/Weather.css'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import Footer from '../components/Footer'

export default function FiveDaysWeather() {
    const [weatherInfo, setWeatherInfo] = useState({}) 
    useEffect(() => {
        myRequest()
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    async function myRequest (){

        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=a2f2f00a939d548cbbfedacf0ae786a3')
            const data = await response.json()
            console.log(data);
          setWeatherInfo(data.weather)
          console.log(weatherInfo);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Navbar />
            <CityName name="Barcelona" />
            <div className="ContainerBoxes">
                <WeatherBox
                    weekday={"Friday"}
                    temperature={"35 grados"}
                    icon={<TiWeatherPartlySunny />}
                    description={"Sin nubes"}
                />

            </div>
            <Footer />
        </>
    )
}
