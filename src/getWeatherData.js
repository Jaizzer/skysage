export default async function getWeatherData(location) {
    // Fetch wheather data.
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0f21e3cdb5ce4371bf4215345230411&q=${location}&days=10`, {
            mode: 'cors',
        });

        // Throw error if location is not found
        if (response.status !== 200) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const json = await response.json();
        const extractedInfo = { forecastLocation: json.location, nDayForecast: json.forecast.forecastday };
        console.log(extractedInfo);
        return extractedInfo;
    } catch (error) {
        console.log(error);
        return null;
    }
}
