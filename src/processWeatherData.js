// Import the Weather class from the Weather module.
import Weather from './Weather';

/**
 * Processes the raw weather data obtained from the WeatherAPI and extracts day-wise hourly forecasts.
 *
 * @param {Object} weatherData - The raw weather data obtained from the WeatherAPI.
 * @returns {Array} An array containing day-wise hourly forecasts represented by Weather objects.
 * @throws Will throw an error if the structure of the WeatherAPI response is not as expected.
 */
export default function processWeatherData(weatherData) {
    // Destructure relevant data from the weatherData object.
    const { forecastLocation, tenDayForecast } = weatherData;

    // Map over each day in the ten-day forecast.
    const daywiseHourlyForecasts = tenDayForecast.map((day) => {
        // Map over each hour in a day and create a new Weather object for each hour.
        return day.hour.map((hour) => {
            return new Weather(
                forecastLocation.name,
                day.day.maxtemp_c,
                day.day.mintemp_c,
                day.day.condition.text,
                hour.temp_c,
                hour.condition.text,
                hour.uv,
                day.astro.sunset,
                day.astro.sunrise,
                hour.wind_mph,
                hour.precip_mm,
                hour.feelslike_c,
                hour.humidity,
                hour.vis_km,
                hour.pressure_mb,
                day.day.avgtemp_c
            );
        });
    });

    // Return the array of day-wise hourly forecasts.
    return daywiseHourlyForecasts;
}
