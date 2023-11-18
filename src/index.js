import './style.css';
import getWeatherData from './getWeatherData';

async function loadWeatherStatus(location) {
    // Get Weather data.
    const weatherData = await getWeatherData(location);
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
