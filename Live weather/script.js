let API_key = "a8e71c9932b20c4ceb0aed183e6a83bb"

function searchcity(){
    const city = document.getElementById('city').value;
    getWeatherData(city).then(response => {
        console.log(response)
        document.getElementById('city-name').innerHTML = response.name;
        document.getElementById('about').innerHTML = response.weather[0].main;
        document.getElementById('temp').innerHTML = response.main.temp;
        document.getElementById('min-temp').innerHTML = response.main.temp_min;
        document.getElementById('max-temp').innerHTML = response.main.temp_max;
        document.getElementById('humidity').innerHTML = response.main.humidity;
    }).catch(error => console.log(error));    
}

function getWeatherData(city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=imperial`).then(response => response.json());
}