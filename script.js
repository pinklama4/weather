fetch('https://api.openweathermap.org/data/2.5/forecast?q=Borisoglebsk&appid=a541060353b4becdeb9cbb80cb2bab83&lang=ru')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data)
        document.querySelector('.additional-temp-first-day').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg;';
        document.querySelector('.time-first-day').textContent = data.list[0].dt_txt;
        document.querySelector('.additional-temp-second-day').innerHTML = Math.round(data.list[1].main.temp - 273) + '&deg;';
        document.querySelector('.time-second-day').textContent = data.list[1].dt_txt;
        document.querySelector('.additional-temp-third-day').innerHTML = Math.round(data.list[2].main.temp - 273) + '&deg;';
        document.querySelector('.time-third-day').textContent = data.list[2].dt_txt;
        document.querySelector('.additional-temp-fourth-day').innerHTML = Math.round(data.list[3].main.temp - 273) + '&deg;';
        document.querySelector('.time-fourth-day').textContent = data.list[3].dt_txt;
    })
    .catch(function () {

    })

fetch('https://api.openweathermap.org/data/2.5/weather?q=Borisoglebsk&appid=a541060353b4becdeb9cbb80cb2bab83&lang=ru')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data)
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.description').textContent = data.weather[0]['description'];
    })
    .catch(function () {

    })

/*data.weather[0]['icon']
'<img alt="" src="img/rain-main.svg">';*/
