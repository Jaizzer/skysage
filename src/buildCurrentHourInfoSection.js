// Import the getCurrentHourWeatherStatus function from the getCurrentHourWeatherStatus module.
import getCurrentHourWeatherStatus from './getCurrentHourWeatherStatus';

/**
 * Builds and populates the current hour information section based on the given day-wise hourly forecasts.
 *
 * @param {Array} daywiseHourlyForecasts - An array containing day-wise hourly forecasts represented by Weather objects.
 * @throws {Error} Will throw an error if the structure of the day-wise hourly forecasts is not as expected.
 *
 * This function dynamically creates HTML elements to display the current hour's weather information.
 * It retrieves the current hour's weather status using the getCurrentHourWeatherStatus function,
 * which analyzes the day-wise hourly forecasts to determine the current weather conditions.
 *
 * The created elements include:
 * - Location: Displays the current location for which the weather information is being shown.
 * - Weather Icon: Displays an icon representing the current weather condition.
 * - Main Temperature: Displays the current temperature in degrees Celsius or Fahrenheit.
 * - Weather Description: Describes the current weather status (e.g., clear sky, rain, snow).
 * - High Temperature: Displays the highest temperature forecasted for the current day.
 * - Low Temperature: Displays the lowest temperature forecasted for the current day.
 *
 * These elements are appended to the existing '.current-hour-info-container' in the DOM,
 * replacing any previous contents in that container.
 *
 **/
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
    highTemperatureElement.textContent = `H: ${currentHourWeatherStatus.highTemperature}°`;
    currentHourInfoContainer.appendChild(highTemperatureElement);

    // Create and append the low temperature element.
    const lowTemperatureElement = document.createElement('div');
    lowTemperatureElement.classList.add('low');
    lowTemperatureElement.textContent = `L: ${currentHourWeatherStatus.lowTemperature}°`;
    currentHourInfoContainer.appendChild(lowTemperatureElement);
}
