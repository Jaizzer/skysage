import './style.css';
import getWeatherData from './getWeatherData';
import processWeatherData from './processWeatherData';

// Current temperature units.
let unit = 'c';

async function loadWeatherStatus(location, tempUnit) {
    // Get Weather data.
    const weatherData = await getWeatherData(location);

    // Process the weather data and extract day-wise hourly forecasts.
    const daywiseHourlyForecasts = processWeatherData(weatherData, tempUnit);
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

    loadWeatherStatus(location, unit);
});

// Use switch element to in DOM to switch units from celsisus to fahrenheit vice-versa.
const unitConverterCheckbox = document.querySelector('#unit-converter');
unitConverterCheckbox.addEventListener('change', () => {
    if (unitConverterCheckbox.checked) {
        unit = 'f';
        loadWeatherStatus(location, unit);
    } else {
        unit = 'c';
        loadWeatherStatus(location, unit);
    }
});
