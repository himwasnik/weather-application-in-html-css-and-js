const apikey = "e532d3d92c823f9d4bbf09637233067b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weathericon.src = "images/clouds.png";
                break;
            case "Clear":
                weathericon.src = "images/clear.png";
                break;
            case "Rain":
                weathericon.src = "images/rain.png";
                break;
            case "Drizzle":
                weathericon.src = "images/drizzle.png";
                break;
            case "Mist":
                weathericon.src = "images/mist.png";
                break;
            default:
                weathericon.src = "images/clear.png"; 
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
