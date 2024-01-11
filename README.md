# Skysage

## Overview

[Skysage](https://jaizzer.github.io/skysage/) is a weather application is a feature-rich tool for retrieving and presenting detailed weather forecasts. It includes functionalities such as fetching weather data from an external API, processing the data, and creating a visually appealing display of weather information.

## Features

### 1. Fetching Weather Data

The application uses the WeatherAPI to fetch current and forecasted weather data. The `getWeatherData` function in `getWeather.js` handles this task. It takes a location and the number of days to forecast as parameters, performs the API request, and returns the relevant weather information.

### 2. Processing Weather Data

The weather data retrieved from the API is processed by the `processWeatherData` function, defined in `processWeatherData.js`. This function constructs a structured array of day-wise hourly forecasts. It utilizes the `Weather` class to create objects representing each hour's weather conditions.

### 3. Weather Class

The `Weather` class, found in `Weather.js`, encapsulates weather-related information for a specific date and time. It includes properties such as location, date, temperatures, weather status, UV index, sunrise and sunset times, and more.

### 4. Additional Weather Cards

Various modules, like `buildPrecipitationStatusCard`, `buildPressureStatusCard`, etc., use the `buildHighlightCard` function to create cards highlighting specific weather parameters. These cards enhance the visual presentation of weather details.

### 5. Sunrise and Sunset Classes

The `Sunrise` and `Sunset` classes, located in their respective files, represent sunrise and sunset events. They include properties like icon, time, and type. Instances of these classes are inserted into the hourly forecast array based on sunrise and sunset times.

### 6. User Interface

The application includes functions to build different types of weather cards and display error messages. The UI is designed to be visually appealing and informative. Moreover, this webapp utilizes responsive design for all different screen sizes.

## Usage

To use the application, follow these steps:

1. Clone the repository by typing `git clone https://github.com/Jaizzer/skysage.git` in the terminal.
2. Go to the directory of the clone repository and install the necessary dependencies by typing `npm install in the terminal.
3. Start the application by typing `npm start` in the directory.

## Live Site

You can also explore the live site [here](https://jaizzer.github.io/skysage/).

## Contribution

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests. Please follow the code style and documentation guidelines to ensure a smooth integration of your contributions.

## License

This project is licensed under the [MIT License](LICENSE.md).
