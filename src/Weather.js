/**
 * Weather class representing weather conditions.
 *
 * @class Weather
 * @param {string} location - The location for which the weather information is provided.
 * @param {object} date - Object containing date-related information.
 * @param {string} unit - The temperature unit used (e.g., 'C' or 'F').
 * @param {number} highTemperature - The high temperature for the day.
 * @param {number} lowTemperature - The low temperature for the day.
 * @param {string} generalWeatherStatus - The general weather status for the day.
 * @param {string} generalWeatherIcon - The icon representing the general weather status.
 * @param {number} currentTemperature - The current temperature.
 * @param {string} currentHourWeatherStatus - The weather status for the current hour.
 * @param {string} currentHourWeatherIcon - The icon representing the weather status for the current hour.
 * @param {number} uvIndex - The UV index.
 * @param {string} sunset - The time of sunset.
 * @param {string} sunrise - The time of sunrise.
 * @param {string} moonPhase - The phase of the moon.
 * @param {string} moonRise - The time of moonrise.
 * @param {object} wind - Object containing wind-related information.
 * @param {number} precipitation - The amount of precipitation.
 * @param {number} feelsLike - The "feels like" temperature.
 * @param {number} humidity - The humidity percentage.
 * @param {number} visibility - The visibility in kilometers.
 * @param {number} pressure - The atmospheric pressure.
 * @param {object} averages - Object containing average temperature information.
 *
 * This class is used to create Weather objects, each representing the weather conditions for a specific date and time.
 * The Weather objects can be utilized to enhance the presentation of weather information in the application.
 */

export default class Weather {
    /**
     * Creates an instance of Weather.
     *
     * @param {string} location - The location for which the weather information is provided.
     * @param {object} date - Object containing date-related information.
     * @param {string} unit - The temperature unit used (e.g., 'C' or 'F').
     * @param {number} highTemperature - The high temperature for the day.
     * @param {number} lowTemperature - The low temperature for the day.
     * @param {string} generalWeatherStatus - The general weather status for the day.
     * @param {string} generalWeatherIcon - The icon representing the general weather status.
     * @param {number} currentTemperature - The current temperature.
     * @param {string} currentHourWeatherStatus - The weather status for the current hour.
     * @param {string} currentHourWeatherIcon - The icon representing the weather status for the current hour.
     * @param {number} uvIndex - The UV index.
     * @param {string} sunset - The time of sunset.
     * @param {string} sunrise - The time of sunrise.
     * @param {string} moonPhase - The phase of the moon.
     * @param {string} moonRise - The time of moonrise.
     * @param {object} wind - Object containing wind-related information.
     * @param {number} precipitation - The amount of precipitation.
     * @param {number} feelsLike - The "feels like" temperature.
     * @param {number} humidity - The humidity percentage.
     * @param {number} visibility - The visibility in kilometers.
     * @param {number} pressure - The atmospheric pressure.
     * @param {object} averages - Object containing average temperature information.
     */
    constructor(
        location,
        date,
        unit,
        highTemperature,
        lowTemperature,
        generalWeatherStatus,
        generalWeatherIcon,
        currentTemperature,
        currentHourWeatherStatus,
        currentHourWeatherIcon,
        uvIndex,
        sunset,
        sunrise,
        moonPhase,
        moonRise,
        wind,
        precipitation,
        feelsLike,
        humidity,
        visibility,
        pressure,
        averages
    ) {
        this.location = location;
        this.date = date;
        this.unit = unit;
        this.highTemperature = highTemperature;
        this.lowTemperature = lowTemperature;
        this.generalWeatherStatus = generalWeatherStatus;
        this.generalWeatherIcon = generalWeatherIcon;
        this.currentTemperature = currentTemperature;
        this.currentHourWeatherStatus = currentHourWeatherStatus;
        this.currentHourWeatherIcon = currentHourWeatherIcon;
        this.uvIndex = uvIndex;
        this.sunset = sunset;
        this.sunrise = sunrise;
        this.moonPhase = moonPhase;
        this.moonRise = moonRise;
        this.wind = wind;
        this.precipitation = precipitation;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.visibility = visibility;
        this.pressure = pressure;
        this.averages = averages;
    }
}
