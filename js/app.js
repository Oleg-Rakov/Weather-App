let inputValue = document.querySelector('.inputValue');

let humName = document.querySelector('.hum-name')
let windName = document.querySelector('.wind-name')
let contentWrap = document.querySelector('.content-wrapper')

let date = document.querySelector('.date')
let imgBlock = document.querySelector('.imageBlock')

let weatherIcon = document.querySelector('.weather-icon')
let name = document.querySelector('.name')
let temp = document.querySelector('.temp')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let desc = document.querySelector('.desc')

inputValue.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=dd98583bbdb988a4097e32259677832a')
      .then(response => response.json())
      .then(data => {
        let weatherImg = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        let nameValue = data.name
        let tempValue = Math.round(data.main.temp - 273) + "&deg;"
        let humidityValue = data.main.humidity + '%'
        let windValue = Math.round(data.wind.speed * 3.6) + " km/h"
        let descValue = 'Description: ' + data.weather[0].description
        

        // weatherIcon.innerHTML = weatherImg;
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;

        imgBlock.src = 'weather-icon.jpg';
        imgBlock.style.height = '150px';
        imgBlock.style.objectFit = 'fill';

        humName.classList.remove('hide');
        windName.classList.remove('hide');
        contentWrap.classList.remove('hide');
        // desc.innerHTML = descValue;
        
      })



      .catch(err => alert('Wrong City Name'))
  }
})


