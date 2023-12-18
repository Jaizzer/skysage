import getCurrentHour from './getCurrentHour';
import sunriseImageSrc from './img/sunrise.png';
import sunsetImageSrc from './img/sunset.png';

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

        // Extract the hours and remove '0' pad.
        const selectedhour = parseInt(selectedHourInfo.date.time.slice(0, 2), 10);

        // Create the container to hold the time.
        const time = document.createElement('div');
        time.classList.add('time');

        // Get current date.
        const currentDate = twentyFourHourSummary[0].date.currentDate;

        // Fill the 'time-container' with values, starting from current-hour 'Now'.
        if (selectedhour === getCurrentHour() && selectedHourInfo.date.currentDate === currentDate) {
            time.textContent = 'Now';
        } else {
            time.textContent = convertTo12HourFormat(selectedhour);
        }
        hourContainer.appendChild(time);

        // Add the icon for the current weather status for the current hour.
        const icon = document.createElement('img');
        icon.classList.add('weather-icon');
        icon.src = selectedHourInfo.currentHourWeatherIcon;
        hourContainer.appendChild(icon);

        // Add the current temperature for the current hour.
        const temperature = document.createElement('div');
        temperature.classList.add('temperature');
        temperature.textContent = `${selectedHourInfo.currentTemperature}°`;
        hourContainer.appendChild(temperature);

        hourlyForecastContainer.appendChild(hourContainer);
    });
}

function get24HourSummary(daywiseHourlyForecasts) {
    const currentTime = { hours: new Date().getHours(), minutes: new Date().getMinutes() };

    let twentyFourHourSummary = [];

    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[0].slice(currentTime.hours));
    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[1].slice(0, currentTime.hours + 1));

    // Get hours and minutes of today's sunrise time.
    const todaySunriseTime = convertTo24HourFormat(daywiseHourlyForecasts[0][0].sunrise);

    // Get hours and minutes of today's sunset time.
    const todaySunsetTime = convertTo24HourFormat(daywiseHourlyForecasts[0][0].sunset);

    // Get hours and minutes of tomorrow's sunrise time.
    const tomorrowSunriseTime = convertTo24HourFormat(daywiseHourlyForecasts[1][0].sunrise);

    // Get hours and minutes of tomorrow's sunset time.
    const tomorrowSunsetTime = convertTo24HourFormat(daywiseHourlyForecasts[1][0].sunset);

    // If today's sunrise is yet to happen, create an object.
    if (
        todaySunriseTime.hours > currentTime.hours ||
        (todaySunriseTime.hours === currentTime.hours && todaySunriseTime.minutes > currentTime.minutes)
    ) {
        // daywiseHourlyForecasts[0][0] was arbitrarily chosen because daywiseHourlyForecasts[0][n] all have the same sunrise time.
        const todaySunrise = new Sunrise(daywiseHourlyForecasts[0][0].sunrise);
    } else {
        // Create tomorrow's sunrise if today's sunrise has already happened.
        // daywiseHourlyForecasts[1][0] was arbitrarily chosen because daywiseHourlyForecasts[1][n] all have the same sunrise time.
        const tomorrowSunrise = new Sunrise(daywiseHourlyForecasts[1][0].sunrise);
    }

    // If today's sunset is yet to happen, create an object.
    if (todaySunsetTime.hours > currentTime.hours || (todaySunsetTime.hours === currentTime.hours && todaySunsetTime.minutes > currentTime.minutes)) {
        // daywiseHourlyForecasts[0][0] was arbitrarily chosen because daywiseHourlyForecasts[0][n] all have the same sunset time.
        const todaySunset = new Sunset(daywiseHourlyForecasts[0][0].sunset);
    } else {
        // Create tomorrow's sunset if today's sunset has already happened.
        // daywiseHourlyForecasts[1][0] was arbitrarily chosen because daywiseHourlyForecasts[1][n] all have the same sunset time.
        const tomorrowSunset = new Sunset(daywiseHourlyForecasts[1][0].sunset);
    }

    return twentyFourHourSummary;
}

function convertTo12HourFormat(hour) {
    const hours12 = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    return `${hours12} ${amPm}`;
}

function convertTo24HourFormat(hour) {
    // Split HH:MM and AM/PM
    let [hoursMinutes, amOrPm] = hour.split(' ');
    // Split HH and MM.
    let [hours, minutes] = hoursMinutes.split(':');

    // Convert to integers.
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (amOrPm === 'PM') {
        hours = hours + 12;
    }

    return {
        hours: hours,
        minutes: minutes,
    };
}

class Sunrise {
    constructor(time) {
        this.icon = sunriseImageSrc;
        this.time = time;
    }
}

class Sunset {
    constructor(time) {
        this.icon = sunsetImageSrc;
        this.time = time;
    }
}
