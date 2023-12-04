import getCurrentHour from './getCurrentHour';

export default function build24HourSummaryCard(daywiseHourlyForecasts) {
    // Access the hourly forecast container.
    const hourlyForecastContainer = document.querySelector('.hourly-forecast-container');
    hourlyForecastContainer.innerHTML = '';

    // Get the 24-hour summary starting from the current hour.
    const twentyFourHourSummary = get24HourSummary(daywiseHourlyForecasts);

    twentyFourHourSummary.forEach((hour) => {
        // Create the container for the specific hour.
        const hourContainer = document.createElement('div');
        hourContainer.classList.add('hour-container');

        // Extract the hours and remove '0' pad.
        const selectedhour = parseInt(hour.date.time.slice(0, 2), 10);

        // Create the container to hold the time.
        const time = document.createElement('div');
        time.classList.add('time');

        // Fill the 'time-container' with values, starting from current-hour 'Now'.
        if (selectedhour === getCurrentHour()) {
            time.textContent = 'Now';
        } else {
            time.textContent = convertTo12HourFormat(selectedhour);
        }
        hourContainer.appendChild(time);

        // Add the icon for the current weather status for the current hour.
        const icon = document.createElement('img');
        icon.classList.add('weather-icon');
        icon.src = hour.currentHourWeatherIcon;
        hourContainer.appendChild(icon);

        // Add the current temperature for the current hour.
        const temperature = document.createElement('div');
        temperature.classList.add('temperature');
        temperature.textContent = `${hour.currentTemperature}°`;
        hourContainer.appendChild(temperature);
    });
}

function get24HourSummary(daywiseHourlyForecasts) {
    const currentHour = getCurrentHour();

    let twentyFourHourSummary = [];

    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[0].slice(currentHour));
    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[1].slice(0, currentHour + 1));

    return twentyFourHourSummary;
}

function convertTo12HourFormat(hour) {
    const hours12 = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    return `${hours12} ${amPm}`;
}
