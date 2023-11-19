/**
 * Retrieves the weather status for the current hour from the day-wise hourly forecast.
 *
 * @param {Array} daywiseHourlyForecast - Array containing day-wise hourly forecasts.
 * @returns {Object} Weather status for the current hour.
 */
export default function getCurrentHourWeatherStatus(daywiseHourlyForecast) {
    // Get the current forecast time.
    const currentForecastDate = daywiseHourlyForecast[0][0].date.forecastDate;

    // Extract the hour from the current forecast date.
    const forecastHour = currentForecastDate.split(' ')[1].split(':')[0];

    // Return the weather status for the current hour.
    return daywiseHourlyForecast[0][forecastHour];
}
