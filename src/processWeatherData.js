// Import the Weather class from the Weather module.
import Weather from './Weather';

/**
 * Processes the raw weather data obtained from the WeatherAPI and extracts day-wise hourly forecasts.
 *
 * @param {Object} weatherData - The raw weather data obtained from the WeatherAPI.
 * @param {string} tempUnit - The temperature unit ('c' for Celsius, 'f' for Fahrenheit).
 * @returns {Array} An array containing day-wise hourly forecasts represented by Weather objects.
 * @throws Will throw an error if the structure of the WeatherAPI response is not as expected.
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
    console.log(daywiseHourlyForecasts);

    // Return the array of day-wise hourly forecasts.
    return daywiseHourlyForecasts;
}
