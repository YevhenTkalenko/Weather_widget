const weatherRef = `https://api.openweathermap.org/data/2.5/weather?q=`;
const appiKey = `&units=metric&APPID=5d066958a60d315387d9492393935c19`
const inputCityName = document.querySelector('.search_input');
const searchCityBtn = document.querySelector('.search_btn');




const getFetch = async (city) => {
    let dataFetch = await fetch(`${weatherRef}${city}${appiKey}`);
    return insertWeatherData(dataFetch.json())
}


async function insertWeatherData(cityName) {
    let insertData = await cityName;
    let weatherCartIcon = document.querySelector('.weather_icon img');
    if (insertData.cod === 200) {
        console.log(insertData)
        weatherCartIcon.setAttribute('src', `https://openweathermap.org/img/wn/${insertData.weather[0].icon}@2x.png`);
        document.querySelector('.weather_city').innerHTML = `${insertData.name}, ${insertData.sys.country}`;
        document.querySelector('.weather_temp').innerHTML = Math.round(insertData.main.temp) + `&degC`;
        document.querySelector('.weather_description').textContent = insertData.weather[0].description;
        document.querySelector('.wind_speed').innerHTML = `${Math.round(insertData.wind.speed)}m/s`
        document.querySelector('.humidity').innerHTML = `${Math.round(insertData.main.humidity)}%`
        document.querySelector('.weather-info').style.display = 'flex';
        document.querySelector('.error_data').style.display = 'none'
        document.querySelector('.weather_max').innerHTML = `max temp = ${insertData.main.temp_max}&degC`;
        document.querySelector('.weather_feels').innerHTML = `feels like = ${insertData.main.feels_like}&degC`;

    } else if (insertData.cod !== 200) {
        document.querySelector('.error_data').style.display = 'block'
    }

    setImg(weatherCartIcon);
}

searchCityBtn.addEventListener("click", () => {
    getFetch(inputCityName.value)
})


function setImg(icon) {
    let iconAttr = icon.getAttribute('src')
    console.log(iconAttr)
    if (iconAttr.includes('01n')) {
        document.querySelector('.main_section').style.backgroundImage = `url(https://openweathermap.org/img/wn/01n@2x.png)`
    }
}