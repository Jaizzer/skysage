import Weather from './Weather';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import { convertTo24HourFormat } from './formatTime';

export default function get24HourSummary(daywiseHourlyForecasts) {
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
