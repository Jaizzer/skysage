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
    });
}

function get24HourSummary(daywiseHourlyForecasts) {
    const currentHour = getCurrentHour();

    let twentyFourHourSummary = [];

    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[0].slice(currentHour));
    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[1].slice(0, currentHour + 1));

    return twentyFourHourSummary;
}
