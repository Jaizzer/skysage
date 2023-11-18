/**
 * Represents weather information for a specific location at a particular moment.
 *
 * @class Weather
 * @param {string} location - The name of the location.
 * @param {number} highTemperature - The high temperature for the day (in degrees Celsius).
 * @param {number} lowTemperature - The low temperature for the day (in degrees Celsius).
 * @param {string} generalWeatherStatus - The general weather condition for the day.
 * @param {number} currentTemperature - The current temperature (in degrees Celsius).
 * @param {string} currentHourWeatherStatus - The weather condition for the current hour.
 * @param {number} uvIndex - The UV index.
 * @param {string} sunset - The time of sunset.
 * @param {string} sunrise - The time of sunrise.
 * @param {number} wind - The wind speed (in miles per hour).
 * @param {number} precipitation - The amount of precipitation (in millimeters).
 * @param {number} feelsLike - The "feels like" temperature (in degrees Celsius).
 * @param {number} humidity - The humidity percentage.
 * @param {number} visibility - The visibility distance (in kilometers).
 * @param {number} pressure - The atmospheric pressure (in millibars).
 * @param {number} averages - The average temperature for the day (in degrees Celsius).
 */
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
