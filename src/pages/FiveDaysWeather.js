import React from 'react'
import Navbar from '../components/Navbar'
import WeatherBox from '../components/WeatherBox'
import CityName from '../components/CityName'
import './styles/FiveDaysWeather.css'
import { TiWeatherPartlySunny} from 'react-icons/ti';
import Footer from '../components/Footer'


export default function FiveDaysWeather() {
    return (
        <>
            <Navbar />
            <CityName name="Barcelona" />
            <div className="ContainerBoxes">
                <WeatherBox
                    weekday={"Friday"}
                    date={"March 1st 11:00hs"}
                    temperature={"30º C"}
                    icon={<TiWeatherPartlySunny />}
                    description={"Clear sky"}
                />

                <WeatherBox
                    weekday={"Friday"}
                    date={"March 1st 11:00hs"}
                    temperature={"30º C"}
                    icon={<TiWeatherPartlySunny />}

                    description={"Clear sky"}
                />
                <WeatherBox
                    weekday={"Friday"}
                    date={"March 1st 11:00hs"}
                    temperature={"30º C"}
                    icon={<TiWeatherPartlySunny />}

                    description={"Clear sky"}
                />

                <WeatherBox
                    weekday={"Friday"}
                    date={"March 1st 11:00hs"}
                    temperature={"30º C"}
                    icon={<TiWeatherPartlySunny />}

                    description={"Clear sky"}
                />

                <WeatherBox
                    weekday={"Friday"}
                    date={"March 1st 11:00hs"}
                    temperature={"30º C"}
                    icon={<TiWeatherPartlySunny />}

                    description={"Clear sky"}
                />
            </div>
            <Footer/>
        </>
    )
}
