import Weather from './Weather';

export default function processWeatherData(weatherData) {
    const { forecastLocation, tenDayForecast } = weatherData;
    const daywiseHourlyForecasts = tenDayForecast.map((day) => {
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

    return daywiseHourlyForecasts;
}
