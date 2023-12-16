import sunsetImgSrc from './img/sunset.png';
import sunriseImgSrc from './img/sunrise.png';
import sunImgSrc from './img/sun.png';

export default function buildSunriseSunsetCard(sunrise, sunset) {
    // Create the div element
    const sunriseSunsetDiv = document.createElement('div');
    sunriseSunsetDiv.classList.add('highlight-card', 'sunrise-sunset');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    sunriseSunsetDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = sunImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Sun';
    headingContainer.appendChild(nameDiv);

    // Create the image element (assuming there's an icon URL you want to insert)
    const sunriseIconImg = document.createElement('img');
    sunriseIconImg.src = sunriseImgSrc;
    sunriseIconImg.classList.add('icon');
    sunriseSunsetDiv.appendChild(sunriseIconImg);

    // Create div for the sunrise time.
    const sunriseTime = document.createElement('div');
    sunriseTime.classList.add('sunrise-time');
    sunriseTime.textContent = sunrise;
    sunriseSunsetDiv.appendChild(sunriseTime);

    // Create the image element (assuming there's an icon URL you want to insert)
    const sunsetIconImg = document.createElement('img');
    sunsetIconImg.src = sunsetImgSrc;
    sunsetIconImg.classList.add('icon');
    sunriseSunsetDiv.appendChild(sunsetIconImg);

    // Create div for the sunrise time.
    const sunsetTime = document.createElement('div');
    sunsetTime.classList.add('sunset-time');
    sunsetTime.textContent = sunset;
    sunriseSunsetDiv.appendChild(sunsetTime);

    return sunriseSunsetDiv;
}
