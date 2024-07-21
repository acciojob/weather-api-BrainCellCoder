document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const apiKey = 'f63a61575aba27041c68e06fd11c9c51'; 
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weatherDescription}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
