import Sunrise from './Sunrise.js';
import Sunset from './Sunset.js';
import Weather from './Weather.js';
import get24HourSummary from './get24HourSummary.js';
import { convertTo12HourFormat, convertTo24HourFormat } from './formatTime.js';

/**
 * Builds and updates the 24-hour summary card with hourly forecast information.
 *
 * @param {Array} daywiseHourlyForecasts - An array containing hourly forecast information for each day.
 */
export default function build24HourSummaryCard(daywiseHourlyForecasts) {
    // Access the hourly forecast container.
    const hourlyForecastContainer = document.querySelector('.hourly-forecast-container');
    hourlyForecastContainer.innerHTML = '';

    // Get the 24-hour summary starting from the current hour.
    const twentyFourHourSummary = get24HourSummary(daywiseHourlyForecasts);

    twentyFourHourSummary.forEach((selectedHourInfo) => {
        // Create the container for the specific hour.
        const hourContainer = document.createElement('div');
        hourContainer.classList.add('hour-container');

        // Create the container to hold the time.
        const time = document.createElement('div');
        time.classList.add('time');
        hourContainer.appendChild(time);

        // Add the icon for the current weather status for the current hour.
        const icon = document.createElement('img');
        hourContainer.appendChild(icon);

        // Handle both Weather, Sunrise, and Sunset instances of selected hour info.
        if (selectedHourInfo instanceof Weather) {
            // Get current date.
            const currentDate = twentyFourHourSummary[0].date.currentDate;
            // Get current time
            const currentTime = convertTo24HourFormat(twentyFourHourSummary[0].date.currentTime);

            // Extract the hours and remove '0' pad.
            const selectedhour = parseInt(selectedHourInfo.date.time.slice(0, 2), 10);

            // Fill the 'time-container' with values, starting from the current-hour 'Now'.
            if (selectedhour === currentTime.hours && selectedHourInfo.date.currentDate === currentDate) {
                time.textContent = 'Now';
            } else {
                time.textContent = convertTo12HourFormat(selectedhour);
            }

            // Add weather icon.
            icon.classList.add('weather-icon');
            icon.src = selectedHourInfo.currentHourWeatherIcon;

            // Add the current temperature for the current hour.
            const temperature = document.createElement('div');
            temperature.classList.add('temperature');
            temperature.textContent = `${selectedHourInfo.currentTemperature}°`;
            hourContainer.appendChild(temperature);
        } else if (selectedHourInfo instanceof Sunrise || selectedHourInfo instanceof Sunset) {
            // Set Sunrise/Sunset time.
            // Remove '0' padding if there is any.
            if (selectedHourInfo.time.split('')[0] === '0') {
                selectedHourInfo.time = selectedHourInfo.time.slice(1);
            }
            time.textContent = selectedHourInfo.time;

            // Add sunrise/sunset icon.
            icon.classList.add(`${selectedHourInfo.type.toLowerCase()}-icon`);
            icon.src = selectedHourInfo.icon;

            // Add the text that says whether it is sunrise or sunset.
            const sunriseOrSunset = document.createElement('div');
            sunriseOrSunset.classList.add('sunrise-sunset-classifier');
            sunriseOrSunset.textContent = `${selectedHourInfo.type}`;
            hourContainer.appendChild(sunriseOrSunset);
        }
        hourlyForecastContainer.appendChild(hourContainer);
    });
}
