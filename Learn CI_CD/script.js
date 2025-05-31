// API from openweatherMap
const apiKey = 'e3774a3f8b31ecc75667a7243999fc7b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Grab HTML elements by their ID's
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// Listens for a click on Search Button
// Reads the value typed in the input field
// If value is provided, it calls the 'fetchWeather' function with that type location
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

// Builds the full API request URL
// Returns the temperature in Celsius
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
        console.error('Error fetching weather data', error);
    })
}