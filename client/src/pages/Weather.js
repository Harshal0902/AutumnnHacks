import axios from 'axios'
import { useState, useEffect } from 'react'

function Weather() {

    const [city, setCity] = useState('chennai');
    const [weatherData, setWeatherData] = useState(null);

    const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    const getData = () => {
        axios.get(url)
            .then(res => setWeatherData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
        document.getElementById("weatherInput").focus();
    }, [])

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = () => {
        getData();
    }

    const handleKeypress = e => {
        if (e.charCode === 13) {
            getData();
        }
    };

    const name = weatherData ? weatherData.name : '';
    const country = weatherData ? weatherData.sys.country : '';
    const humidity = weatherData ? weatherData.main.humidity : '';
    const pressure = weatherData ? weatherData.main.pressure : '';
    const temp = weatherData ? weatherData.main.temp : '';
    const weather = weatherData ? weatherData.weather[0].description : '';
    const iconcode = weatherData ? weatherData.weather[0].icon : '#';

    const d = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return (
        <div className="">

            <div className='grid place-items-center'>
                <h1 className='text-5xl font-white font-semibold text-white'>Weather</h1>
                <div className='bg-secondary h-1 w-36 rounded-full'></div>
            </div>

            <div className="flex items-center justify-center py-8 space-x-3">
                <input id="weatherInput" type="text" name="city" placeholde="city name" className='w-72 text-xl py-2 border-none rounded-xl px-2'
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                />
                <button className='bg-secondary text-white text-xl rounded-lg py-2 px-4' onClick={handleSubmit}>Search</button>
            </div>

            <div className='grid place-items-center'>
                <div className="bg-white rounded-2xl w-[20rem] p-4 grid place-items-center">
                    <div className='text-4xl font-semibold'>{name}, {country}</div>

                    <div className='text-xl'>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</div>

                    <div className='text-xl'>{Math.round(temp)}' C</div>

                    <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" />

                    <div style={{ textTransform: 'capitalize', marginBottom: 20 }}>{weather}</div>

                    <div>Humidity : {humidity}%</div>
                    <div>Pressure : {pressure} hPa</div>
                </div>
            </div>

        </div>
    );
}

export default Weather;
