export default async function getWeatherData(location) {
    // Fetch wheather data.
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0f21e3cdb5ce4371bf4215345230411&q=${location}&days=10`, {
            mode: 'cors',
        });
        const json = await response.json();
        const extractedInfo = { forecastLocation: json.location, tenDayForecast: json.forecast.forecastday };
        console.log(extractedInfo);
        return extractedInfo;
    } catch (error) {
        console.log(error);
        return null;
    }
}
