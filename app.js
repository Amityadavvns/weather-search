const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('#weatherImage');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "951ab0a892fab85d52fe35ad5d99356e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(url).then(response => response.json());
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    
    switch (weather_data.weather[0].main) {
        case 'Clouds': 
            weather_img.src = "./image/cloud.png"; 
            break;
        case 'Clear':
            weather_img.src = "./image/w1.png"; 
            break;
        case 'Rain':
            weather_img.src = "./image/w3.png"; 
            break;
        case 'Mist':
            weather_img.src = "./image/mist.png"; 
            break;
        case 'Snow':
            weather_img.src = "./image/snow.png"; 
            break;
        case 'Haze':
            weather_img.src = "./image/w2.png"; 
            break;
        default:
            weather_img.src = "./image/404p.jpg"; 
    }
    console.log(weather_data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
