import getDayName from './getDayName';

export default function buildNdayForecastDashBoard(daywiseHourlyForecast) {
    // Access the n-day-forecast-container in DOM.
    const nDayForecastContainer = document.querySelector('.n-day-forecast-container');

    // Clear the container's previous contents.
    nDayForecastContainer.innerHTML = '';

    daywiseHourlyForecast.forEach((day) => {
        // Create the daily forecast container
        const dailyForecastContainer = document.createElement('div');
        dailyForecastContainer.classList.add('daily-forecast-container');
        nDayForecastContainer.appendChild(dailyForecastContainer);

        // Create the day name container
        const dayNameContainer = document.createElement('div');
        dayNameContainer.classList.add('day-name');
        dayNameContainer.innerHTML = getDayName(day[0].date);
        dailyForecastContainer.appendChild(dayNameContainer);

        // Create the icon container
        const iconContainer = document.createElement('img');
        iconContainer.classList.add('weather-icon');
        iconContainer.src = day[0].generalWeatherIcon;
        dailyForecastContainer.appendChild(iconContainer);

        // Create the high-low temperature container
        const highLowTemperatureContainer = document.createElement('div');
        highLowTemperatureContainer.classList.add('high-low-temperature-container');
        dailyForecastContainer.appendChild(highLowTemperatureContainer);

        // Create the low temperature container
        const lowTemperatureContainer = document.createElement('div');
        lowTemperatureContainer.classList.add('low');
        lowTemperatureContainer.textContent = `L: ${day[0].lowTemperature}°`;
        highLowTemperatureContainer.appendChild(lowTemperatureContainer);

        // Create the high temperature container
        const highTemperatureContainer = document.createElement('div');
        highTemperatureContainer.classList.add('high');
        highTemperatureContainer.textContent = `H: ${day[0].highTemperature}°`;
        highLowTemperatureContainer.appendChild(highTemperatureContainer);
    });
}
