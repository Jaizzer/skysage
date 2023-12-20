import Weather from './Weather';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import { convertTo24HourFormat } from './formatTime';

/**
 * Generates a 24-hour summary of hourly forecasts with special objects for sunrise and sunset events.
 *
 * @param {Array} daywiseHourlyForecasts - An array containing day-wise hourly forecasts represented by Weather objects.
 * @returns {Array} A 24-hour summary of hourly forecasts with added Sunrise and Sunset objects.
 *
 * This function takes day-wise hourly forecasts and generates a 24-hour summary of hourly forecasts.
 * It includes special objects representing Sunrise and Sunset events for today and tomorrow, depending on the current time.
 * The returned array contains instances of Weather, Sunrise, and Sunset objects.
 */
export default function get24HourSummary(daywiseHourlyForecasts) {
    // Get the current time in 24-hour format.
    const currentTime = convertTo24HourFormat(daywiseHourlyForecasts[0][0].date.timeToday);

    // Initialize the 24-hour summary array.
    let twentyFourHourSummary = [];

    // Concatenate today's and tomorrow's hourly forecasts based on the current time.
    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[0].slice(currentTime.hours));
    twentyFourHourSummary = twentyFourHourSummary.concat(daywiseHourlyForecasts[1].slice(0, currentTime.hours + 1));

    // Get hours and minutes of today's sunrise and sunset times.
    const todaySunriseTime = convertTo24HourFormat(daywiseHourlyForecasts[0][0].sunrise);
    const todaySunsetTime = convertTo24HourFormat(daywiseHourlyForecasts[0][0].sunset);

    // Get hours and minutes of tomorrow's sunrise and sunset times.
    const tomorrowSunriseTime = convertTo24HourFormat(daywiseHourlyForecasts[1][0].sunrise);
    const tomorrowSunsetTime = convertTo24HourFormat(daywiseHourlyForecasts[1][0].sunset);

    // Create Sunrise object for today if today's sunrise is yet to happen.
    if (
        todaySunriseTime.hours > currentTime.hours ||
        (todaySunriseTime.hours === currentTime.hours && todaySunriseTime.minutes > currentTime.minutes)
    ) {
        const todaySunrise = new Sunrise(daywiseHourlyForecasts[0][0].sunrise);
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return parseInt(element.date.dayOfInterestTime.split(':')[0]) === todaySunriseTime.hours;
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, todaySunrise);
    } else {
        // Create Sunrise object for tomorrow if today's sunrise has already happened.
        const tomorrowSunrise = new Sunrise(daywiseHourlyForecasts[1][0].sunrise);
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return (
                    parseInt(element.date.dayOfInterestTime.split(':')[0]) === tomorrowSunriseTime.hours &&
                    element.date.dayOfInterestDate !== element.date.dateToday
                );
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, tomorrowSunrise);
    }

    // Create Sunset object for today if today's sunset is yet to happen.
    if (todaySunsetTime.hours > currentTime.hours || (todaySunsetTime.hours === currentTime.hours && todaySunsetTime.minutes > currentTime.minutes)) {
        const todaySunset = new Sunset(daywiseHourlyForecasts[0][0].sunset);
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return parseInt(element.date.dayOfInterestTime.split(':')[0]) === todaySunsetTime.hours;
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, todaySunset);
    } else {
        // Create Sunset object for tomorrow if today's sunset has already happened.
        const tomorrowSunset = new Sunset(daywiseHourlyForecasts[1][0].sunset);
        const index = twentyFourHourSummary.findIndex((element) => {
            if (element instanceof Weather) {
                return (
                    parseInt(element.date.dayOfInterestTime.split(':')[0]) === tomorrowSunsetTime.hours &&
                    element.date.dayOfInterestDate !== element.date.dateToday
                );
            }
        });
        twentyFourHourSummary.splice(index + 1, 0, tomorrowSunset);
    }

    return twentyFourHourSummary;
}
