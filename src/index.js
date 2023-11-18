import './style.css';
import getWeatherData from './getWeatherData';
import processWeatherData from './processWeatherData';

async function loadWeatherStatus(location) {
    // Get Weather data.
    const weatherData = await getWeatherData(location);

    // Process the weather data and extract day-wise hourly forecasts.
    const daywiseHourlyForecasts = processWeatherData(weatherData);
}

// Get Weather data when the user searched for a location.
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // Prevent form submission.
    event.preventDefault();

    // Get the location.
    const search = form.querySelector('#search-location');
    const location = search.value;

    loadWeatherStatus(location);
});
