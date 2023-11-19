// Import the getCurrentHourWeatherStatus function from the getCurrentHourWeatherStatus module.
import getCurrentHourWeatherStatus from './getCurrentHourWeatherStatus';

/**
 * Builds and populates the current hour information section based on the given day-wise hourly forecasts.
 *
 * @param {Array} daywiseHourlyForecasts - An array containing day-wise hourly forecasts represented by Weather objects.
 * @throws Will throw an error if the structure of the day-wise hourly forecasts is not as expected.
 *
 * This function dynamically creates HTML elements to display the current hour's weather information.
 * It uses the getCurrentHourWeatherStatus function to retrieve the weather status for the current hour.
 * The created elements include location, weather icon, main temperature, weather description, high temperature, and low temperature.
 * These elements are appended to the existing '.current-hour-info-container' in the DOM.
 *
 */
export default function buildCurrentHourInfoSection(daywiseHourlyForecasts) {
    // Get the current hour weather status using the getCurrentHourWeatherStatus function.
    const currentHourWeatherStatus = getCurrentHourWeatherStatus(daywiseHourlyForecasts);

    // Access the existing '.current-hour-info-container' in the DOM.
    const currentHourInfoContainer = document.querySelector('.current-hour-info-container');

    // Clear previous contents.
    currentHourInfoContainer.innerHTML = '';

    // Create and append the location element.
    const locationElement = document.createElement('div');
    locationElement.classList.add('location');
    locationElement.textContent = currentHourWeatherStatus.location;
    currentHourInfoContainer.appendChild(locationElement);

    // Create and append the weather icon element.
    const weatherIconElement = document.createElement('img');
    weatherIconElement.classList.add('weather-icon');
    weatherIconElement.src = currentHourWeatherStatus.currentHourWeatherIcon;
    currentHourInfoContainer.appendChild(weatherIconElement);

    // Create and append the main temperature element.
    const mainTemperatureElement = document.createElement('div');
    mainTemperatureElement.classList.add('main-temperature');
    mainTemperatureElement.textContent = `${currentHourWeatherStatus.currentTemperature}°`;
    currentHourInfoContainer.appendChild(mainTemperatureElement);

    // Create and append the weather description element.
    const weatherDescriptionElement = document.createElement('div');
    weatherDescriptionElement.classList.add('weather-description');
    weatherDescriptionElement.textContent = currentHourWeatherStatus.currentHourWeatherStatus;
    currentHourInfoContainer.appendChild(weatherDescriptionElement);

    // Create and append the high temperature element.
    const highTemperatureElement = document.createElement('div');
    highTemperatureElement.classList.add('high');
    highTemperatureElement.textContent = currentHourWeatherStatus.highTemperature;
    currentHourInfoContainer.appendChild(highTemperatureElement);

    // Create and append the low temperature element.
    const lowTemperatureElement = document.createElement('div');
    lowTemperatureElement.classList.add('low');
    lowTemperatureElement.textContent = currentHourWeatherStatus.lowTemperature;
    currentHourInfoContainer.appendChild(lowTemperatureElement);
}
