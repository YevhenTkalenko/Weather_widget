const weatherRef = `https://api.openweathermap.org/data/2.5/weather?q=`;
const appiKey = `&units=metric&APPID=5d066958a60d315387d9492393935c19`
const inputCityName = document.querySelector('.search_input');
const searchCityBtn = document.querySelector('.search_btn');


const getFetch = async (city) => {
    let dataFetch = await fetch(`${weatherRef}${city}${appiKey}`);
    return insertWeatherData(dataFetch.json())
}


async function insertWeatherData(weatherdata) {
    let insertData = await weatherdata
    if (insertData.cod === 200) {
        console.log(insertData)
        document.querySelector('.weather_city').innerHTML = `${insertData.name}, ${insertData.sys.country}`;
        document.querySelector('.weather_temp').innerHTML = Math.round(insertData.main.temp) + `&degC`;
        document.querySelector('.weather_description').textContent = insertData.weather[0].description;
        document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${insertData.weather[0].icon}@2x.png">`;
        document.querySelector('.wind_speed').innerHTML = `${Math.round(insertData.wind.speed)}m/s`
        document.querySelector('.humidity').innerHTML = `${Math.round(insertData.main.humidity)}%`
        document.querySelector('.weather-info').style.display = 'block';
        document.querySelector('.error_data').style.display = 'none'
    } else if (insertData.cod !== 200) {
        document.querySelector('.error_data').style.display = 'block'
    }
}



searchCityBtn.addEventListener("click", () => {
    getFetch(inputCityName.value)
})





