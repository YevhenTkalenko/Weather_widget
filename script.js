// const cityName = prompt('Введите город')


const getFetch = async () => {
    let dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    return dataFetch.json()
}

const insertWeatherData = (async () => {
    let inserData = await getFetch()
    document.querySelector('.weather_city').innerHTML = `${inserData.name}, ${inserData.sys.country}`;
    document.querySelector('.weather_temp').innerHTML = inserData.main.temp + `&deg`;
    document.querySelector('.weather_description').textContent = inserData.weather[0].description;
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${inserData.weather[0].icon}@2x.png">`;
    document.querySelector('.weather_btn a').setAttribute('href', `https://en.wikipedia.org/wiki/London`)
})()



