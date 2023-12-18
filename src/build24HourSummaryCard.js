import getCurrentHour from './getCurrentHour';
import sunriseImageSrc from './img/sunrise.png';
import sunsetImageSrc from './img/sunset.png';
import Weather from './Weather.js';

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

            // Extract the hours and remove '0' pad.
            const selectedhour = parseInt(selectedHourInfo.date.time.slice(0, 2), 10);

            // Fill the 'time-container' with values, starting from current-hour 'Now'.
            if (selectedhour === getCurrentHour() && selectedHourInfo.date.currentDate === currentDate) {
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
            icon.classList.add(`${selectedHourInfo.constructor.name.toLowerCase()}-icon`);
            icon.src = selectedHourInfo.icon;

            // Add the text that says whether it is sunrise or sunset.
            const sunriseOrSunset = document.createElement('div');
            sunriseOrSunset.classList.add('sunrise-sunset-classifier');
            sunriseOrSunset.textContent = `${selectedHourInfo.constructor.name}`;
            hourContainer.appendChild(sunriseOrSunset);
        }
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

        // Get the index of the hour-forecast that has the same hour with today's sunrise hour.
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return parseInt(element.date.time.split(':')[0]) === todaySunriseTime.hours;
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, todaySunrise);
    } else {
        // Create tomorrow's sunrise if today's sunrise has already happened.
        // daywiseHourlyForecasts[1][0] was arbitrarily chosen because daywiseHourlyForecasts[1][n] all have the same sunrise time.
        const tomorrowSunrise = new Sunrise(daywiseHourlyForecasts[1][0].sunrise);

        // Get the index of the hour-forecast that has the same hour with today's sunrise hour but for tomorrow's date.
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return (
                    parseInt(element.date.time.split(':')[0]) === tomorrowSunriseTime.hours &&
                    element.currentDate !== twentyFourHourSummary[0].date.currentDate
                );
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, tomorrowSunrise);
    }

    // If today's sunset is yet to happen, create an object.
    if (todaySunsetTime.hours > currentTime.hours || (todaySunsetTime.hours === currentTime.hours && todaySunsetTime.minutes > currentTime.minutes)) {
        // daywiseHourlyForecasts[0][0] was arbitrarily chosen because daywiseHourlyForecasts[0][n] all have the same sunset time.
        const todaySunset = new Sunset(daywiseHourlyForecasts[0][0].sunset);

        // Get the index of the hour-forecast that has the same hour with today's Sunset hour.
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return parseInt(element.date.time.split(':')[0]) === todaySunsetTime.hours;
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, todaySunset);
    } else {
        // Create tomorrow's sunset if today's sunset has already happened.
        // daywiseHourlyForecasts[1][0] was arbitrarily chosen because daywiseHourlyForecasts[1][n] all have the same sunset time.
        const tomorrowSunset = new Sunset(daywiseHourlyForecasts[1][0].sunset);

        // Get the index of the hour-forecast that has the same hour with today's Sunset hour but for tomorrow's date.
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return (
                    parseInt(element.date.time.split(':')[0]) === tomorrowSunsetTime.hours &&
                    element.currentDate !== twentyFourHourSummary[0].date.currentDate
                );
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, tomorrowSunset);
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
