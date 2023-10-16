const cityName = prompt('Введите город')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        document.querySelector('.weather_city').innerHTML = `${data.name}, ${data.sys.country}`;
        document.querySelector('.weather_temp').innerHTML = data.main.temp + `&deg`;
        document.querySelector('.weather_description').textContent = data.weather[0].description;
        document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        document.querySelector('.weather_btn a').setAttribute('href', `https://en.wikipedia.org/wiki/${cityName}`)
    })



