const cityName = prompt('Choose city')
const resetBtn = document.querySelector('.weather_btn')

const getFetch = async () => {
    let dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    return dataFetch.json()
}

//Fetch data about weather and use IIFN
const insertWeatherData = (async () => {
    let insertData = await getFetch()
    document.querySelector('.weather_city').innerHTML = `${insertData.name}, ${insertData.sys.country}`;
    document.querySelector('.weather_temp').innerHTML = insertData.main.temp + `&deg`;
    document.querySelector('.weather_description').textContent = insertData.weather[0].description;
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${insertData.weather[0].icon}@2x.png">`;
    document.querySelector('.wiki_btn a').setAttribute('href', `https://en.wikipedia.org/wiki/${cityName}`)
})()

//Repeatly fetch data about weather and use eventListener
const resetWeatherData = async () => {
    let resetCity = prompt('Choose new city')
    const getResetFetch = async () => {
        let dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${resetCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
        return dataFetch.json()
    }
    let insertData = await getResetFetch()
    document.querySelector('.weather_city').innerHTML = `${insertData.name}, ${insertData.sys.country}`;
    document.querySelector('.weather_temp').innerHTML = insertData.main.temp + `&deg`;
    document.querySelector('.weather_description').textContent = insertData.weather[0].description;
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${insertData.weather[0].icon}@2x.png">`;
    document.querySelector('.wiki_btn a').setAttribute('href', `https://en.wikipedia.org/wiki/${resetCity}`)
}
resetBtn.addEventListener('click', resetWeatherData)




