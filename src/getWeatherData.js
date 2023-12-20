/**
 * Fetches weather data for a specific location and number of days to forecast.
 *
 * @param {string} location - The location for which weather data is requested.
 * @param {number} numOfDaysToForecast - The number of days for which weather forecasts are needed.
 * @returns {Promise<Object|null>} A promise that resolves to an object containing forecast location information and daily forecasts.
 * If an error occurs during the fetch or the location is not found, the promise resolves to null.
 *
 * This function uses the WeatherAPI to fetch weather data for the specified location and number of days to forecast.
 * It returns a promise that resolves to an object containing forecast location information and daily forecasts.
 * If the fetch is unsuccessful or the location is not found, the promise resolves to null.
 */
export default async function getWeatherData(location, numOfDaysToForecast) {
    try {
        // Fetch weather data from WeatherAPI.
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=0f21e3cdb5ce4371bf4215345230411&q=${location}&days=${numOfDaysToForecast}`,
            {
                mode: 'cors',
            }
        );

        // Throw an error if the location is not found.
        if (response.status !== 200) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Parse the JSON response.
        const json = await response.json();

        // Extract relevant information from the response.
        const extractedInfo = { forecastLocation: json.location, nDayForecast: json.forecast.forecastday };

        console.log(extractedInfo);

        // Return the extracted information.
        return extractedInfo;
    } catch (error) {
        // Return null if an error occurs during the fetch.
        return null;
    }
}
