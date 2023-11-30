import buildUvIndexCard from './buildUvIndexCard';
import buildWindStatusCard from './buildWindCard';
import buildSunriseSunsetCard from './buildSunriseSunsetCard';
import buildPrecipitationStatusCard from './buildPrecipitationStatusCard';
import buildHumidityStatusCard from './buildHumidityStatusCard';
import buildVisibilityCard from './buildVisibilityCard';
import buildPressureStatusCard from './buildPressureStatusCard';
import buildFeelsLikeCard from './buildFeelsLikeCard';
import buildMoonStatusCard from './buildMoonStatusCard';

export default function buildTodaysHighlights(currentHourWeatherStatus) {
    // Put the UV index card inside today's highlights contaier.
    const todaysHighlights = document.querySelector('.todays-highlights-container');

    // Clear today's highlights container's previous contents.
    todaysHighlights.innerHTML = '';

    // Create the cards.
    todaysHighlights.appendChild(buildUvIndexCard(currentHourWeatherStatus.uvIndex));
    todaysHighlights.appendChild(buildWindStatusCard(currentHourWeatherStatus.wind));
    todaysHighlights.appendChild(buildSunriseSunsetCard(currentHourWeatherStatus.sunrise, currentHourWeatherStatus.sunset));
    todaysHighlights.appendChild(buildPrecipitationStatusCard(currentHourWeatherStatus.precipitation));
    todaysHighlights.appendChild(buildHumidityStatusCard(currentHourWeatherStatus.humidity));
    todaysHighlights.appendChild(buildVisibilityCard(currentHourWeatherStatus.visibility));
    todaysHighlights.appendChild(buildPressureStatusCard(currentHourWeatherStatus.pressure));
    todaysHighlights.appendChild(buildFeelsLikeCard(currentHourWeatherStatus.feelsLike));
    todaysHighlights.appendChild(buildMoonStatusCard(currentHourWeatherStatus.moonPhase, currentHourWeatherStatus.moonRise));
}
