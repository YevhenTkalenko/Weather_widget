async function getNewWeather() {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q={Lviv}&cnt={5}&appid={ec8517d126527acff53e393b09cf83e1}}`)
    console.log(data.json())
}

getNewWeather()