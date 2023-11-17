export default class Weather {
    constructor(
        location,
        highTemperature,
        lowTemperature,
        generalWeatherStatus,
        currentTemperature,
        currentHourWeatherStatus,
        uvIndex,
        sunset,
        sunrise,
        wind,
        precipitation,
        feelsLike,
        humidity,
        visibility,
        pressure,
        averages
    ) {
        this.location = location;
        this.highTemperature = highTemperature;
        this.lowTemperature = lowTemperature;
        this.generalWeatherStatus = generalWeatherStatus;
        this.currentTemperature = currentTemperature;
        this.currentHourWeatherStatus = currentHourWeatherStatus;
        this.uvIndex = uvIndex;
        this.sunset = sunset;
        this.sunrise = sunrise;
        this.wind = wind;
        this.precipitation = precipitation;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.visibility = visibility;
        this.pressure = pressure;
        this.averages = averages;
    }
}
