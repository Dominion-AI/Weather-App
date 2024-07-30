const apiKey = "15d941618b6ef73f006c154c59cc8d73";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.floor(data.main.temp)} °C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".windspeed").innerHTML = `${data.wind.speed} m/s`;

    if (data.weather[0].main === "clouds") {
        weatherIcon.src = "images/sunset.png";
    } 
    else if (data.weather[0].main === "clear") {
        weatherIcon.src = "images/sunshine.png";
    } 
    else if (data.weather[0].main === "rain") {
        weatherIcon.src = "images/rainfall.png";
    } 
    else if (data.weather[0].main === "mist") {
        weatherIcon.src = "images/sunrise.png";
    } 
    else {
        weatherIcon.src = "images/sunshine.png";
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

