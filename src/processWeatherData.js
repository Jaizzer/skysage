/**
 * Processes weather data received from the WeatherAPI and creates an array of day-wise hourly forecasts.
 *
 * @param {Object} weatherData - The weather data object received from the WeatherAPI.
 * @param {string} tempUnit - The temperature unit for the forecasts (e.g., 'C' for Celsius, 'F' for Fahrenheit).
 * @returns {Array<Array<Weather>>} An array of day-wise hourly forecasts, where each day contains an array of Weather objects representing hourly forecasts.
 *
 * This function takes the raw weather data received from the WeatherAPI, including forecast location information and daily forecasts.
 * It processes the data and creates a structured array of day-wise hourly forecasts, where each day's forecast consists of an array of Weather objects.
 * Each Weather object represents the hourly forecast for a specific date and time, containing relevant weather information such as temperature, conditions, wind, and more.
 */
export default function processWeatherData(weatherData, tempUnit) {
    // Destructure relevant data from the weatherData object.
    const { forecastLocation, nDayForecast } = weatherData;

    // Map over each day in the n-day forecast.
    const daywiseHourlyForecasts = nDayForecast.map((day) => {
        // Map over each hour in a day and create a new Weather object for each hour.
        return day.hour.map((hour) => {
            return new Weather(
                forecastLocation.name,
                {
                    dateToday: forecastLocation.localtime.split(' ')[0],
                    timeToday: forecastLocation.localtime.split(' ')[1],
                    dayOfInterestDate: day.date,
                    dayOfInterestTime: hour.time.split(' ')[1],
                },
                tempUnit,
                day.day[`maxtemp_${tempUnit}`],
                day.day[`mintemp_${tempUnit}`],
                day.day.condition.text,
                day.day.condition.icon,
                hour[`temp_${tempUnit}`],
                hour.condition.text,
                hour.condition.icon,
                hour.uv,
                day.astro.sunset,
                day.astro.sunrise,
                day.astro.moon_phase,
                day.astro.moonrise,
                { windSpeed: hour.wind_kph, windDirection: hour.wind_dir, windAngle: hour.wind_degree },
                hour.precip_mm,
                hour[`feelslike_${tempUnit}`],
                hour.humidity,
                hour.vis_km,
                hour.pressure_mb,
                day.day[`avgtemp_${tempUnit}`]
            );
        });
    });

    // Return the array of day-wise hourly forecasts.
    return daywiseHourlyForecasts;
}
