export default async function getWeatherData(location) {
    // Fetch wheather data.
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0f21e3cdb5ce4371bf4215345230411&q=${location}`, {
            mode: 'cors',
        });
        const json = await response.json();

        return json;
    } catch (error) {
        console.log(error);
        return null;
    }
}
