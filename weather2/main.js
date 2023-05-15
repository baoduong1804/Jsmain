const inputBtn = document.querySelector('.input');
const body = document.querySelector('body');
const place = document.querySelector('.place');
const dateBox = document.querySelector('.date');
const temperature = document.querySelector('.temperature span');
const weatherBox = document.querySelector('.weather');
const vision = document.querySelector('.vision span');
const windSpeed = document.querySelector('.wind-speed span');
const humidity = document.querySelector('.humidity span');

init()

function getWether(input){
    const weatherIPA = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    fetch(weatherIPA)
    .then(res => res.json())
    .then(weather =>{
        place.innerText = `${weather.name}, ${weather.sys.country}`;
        dateBox.innerText = new Date().toLocaleString();
        temperature.innerText = Math.round(weather.main.temp);
        weatherBox.innerText = weather.weather[0].main
        vision.innerText = weather.visibility +' (m)';
        windSpeed.innerText = weather.wind.speed + ' (m/s)';
        humidity.innerText = weather.main.humidity + ' (%)';
        if(Math.round(weather.main.temp) <22){
            body.classList.remove('hot')
            body.classList.add('snow')
        }else{
            body.classList.remove('snow')
            body.classList.add('hot')
        }
        input.value = '';
    })
}
function init(){
    getWether('Ha noi');
    inputBtn.onchange = e =>{
        getWether(e.target.value);
        inputBtn.value = '';
    }
}