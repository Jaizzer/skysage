// Import the getCurrentHourWeatherStatus function from the getCurrentHourWeatherStatus module.
import getCurrentHourWeatherStatus from './getCurrentHourWeatherStatus';

/**
 * Builds and populates the current hour information section based on the given day-wise hourly forecasts.
 *
 * @param {Array} daywiseHourlyForecasts - An array containing day-wise hourly forecasts represented by Weather objects.
 * @throws Will throw an error if the structure of the day-wise hourly forecasts is not as expected.
 */
export default function buildCurrentHourInfoSection(daywiseHourlyForecasts) {
    // Get the current hour weather status using the getCurrentHourWeatherStatus function.
    const currentHourWeatherStatus = getCurrentHourWeatherStatus(daywiseHourlyForecasts);

    // Get the container element for the current hour info section.
    const currentHourInfoContainer = document.querySelector('.current-hour-info-container');

    // Get individual elements within the container.
    const locationElement = currentHourInfoContainer.querySelector('.location');
    const weatherIconElement = currentHourInfoContainer.querySelector('.weather-icon');
    const mainTemperatureElement = currentHourInfoContainer.querySelector('.main-temperature');
    const weatherDescriptionElement = currentHourInfoContainer.querySelector('.weather-description');
    const highTemperatureElement = currentHourInfoContainer.querySelector('.high');
    const lowTemperatureElement = currentHourInfoContainer.querySelector('.low');

    // Populate elements with the data from the current hour weather status.
    locationElement.textContent = currentHourWeatherStatus.location;
    weatherIconElement.src = currentHourWeatherStatus.currentHourWeatherIcon;
    mainTemperatureElement.textContent = `${currentHourWeatherStatus.currentTemperature}°`;
    weatherDescriptionElement.textContent = currentHourWeatherStatus.currentHourWeatherStatus;
    highTemperatureElement.textContent = currentHourWeatherStatus.highTemperature;
    lowTemperatureElement.textContent = currentHourWeatherStatus.lowTemperature;
}
