import './style.css';
import getWeatherData from './getWeatherData';
import processWeatherData from './processWeatherData';
import buildNdayForecastDashBoard from './buildNdayForecastDashboard';
import buildCurrentHourInfoSection from './buildCurrentHourInfoSection';
import getCurrentHourWeatherStatus from './getCurrentHourWeatherStatus';
import buildTodaysHighlights from './buildTodaysHighlights';

// Current temperature units.
let unit = 'c';

async function loadWeatherStatus(location, tempUnit) {
    // Clear the console.
    console.clear();

    // Get Weather data.
    const weatherData = await getWeatherData(location);

    // Process the weather data and extract day-wise hourly forecasts.
    const daywiseHourlyForecasts = processWeatherData(weatherData, tempUnit);

    // Build the n-day-forecast dashboard
    buildNdayForecastDashBoard(daywiseHourlyForecasts);

    // Build the current hour info secton
    buildCurrentHourInfoSection(daywiseHourlyForecasts);

    // Get current hour weather data.
    const currentHourWeatherStatus = getCurrentHourWeatherStatus(daywiseHourlyForecasts);

    // Build the today's highlights section.
    buildTodaysHighlights(currentHourWeatherStatus);
}

// Set the location to 'London' by default.
let location = 'London';
loadWeatherStatus(location, unit);

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
