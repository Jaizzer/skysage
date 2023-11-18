import './style.css';
import getWeatherData from './getWeatherData';
import processWeatherData from './processWeatherData';

async function loadWeatherStatus(location) {
    // Get Weather data.
    const weatherData = await getWeatherData(location);

    // Process the weather data and extract day-wise hourly forecasts.
    const daywiseHourlyForecasts = processWeatherData(weatherData);
}

// Set the location to 'London' by default.
let location = 'London';

// Get Weather data when the user searched for a location.
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // Prevent form submission.
    event.preventDefault();

    // Get the new location from the search bar.s
    const search = form.querySelector('#search-location');
    location = search.value;

    loadWeatherStatus(location);
});
