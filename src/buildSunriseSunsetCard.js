import sunsetImgSrc from './img/sunset.png';
import sunriseImgSrc from './img/sunrise.png';
import sunImgSrc from './img/sun.png';

/**
 * Builds a sunrise and sunset card element for displaying sun-related information.
 *
 * @param {string} sunrise - The time of sunrise to be displayed on the card.
 * @param {string} sunset - The time of sunset to be displayed on the card.
 * @returns {HTMLElement} The generated sunrise and sunset card element.
 *
 * This function creates a div element representing a card for displaying sunrise and sunset information.
 * The card includes an icon representing the sun, the title 'Sun,' and separate sections for displaying
 * the sunrise and sunset times with corresponding icons. The sunrise and sunset times are provided as input parameters.
 *
 * The generated sunrise and sunset card can be appended to the DOM to visually represent sun-related information.
 */
export default function buildSunriseSunsetCard(sunrise, sunset) {
    // Create the div element.
    const sunriseSunsetDiv = document.createElement('div');
    sunriseSunsetDiv.classList.add('highlight-card', 'sunrise-sunset');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    sunriseSunsetDiv.appendChild(headingContainer);

    // Create the image element for the sun icon.
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = sunImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the sun title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Sun';
    headingContainer.appendChild(nameDiv);

    // Create div to hold the sunrise items.
    const sunriseContainer = document.createElement('div');
    sunriseContainer.classList.add('sunrise-container');
    sunriseSunsetDiv.appendChild(sunriseContainer);

    // Create the image element for the sunrise icon.
    const sunriseIconImg = document.createElement('img');
    sunriseIconImg.src = sunriseImgSrc;
    sunriseIconImg.classList.add('icon');
    sunriseContainer.appendChild(sunriseIconImg);

    // Create div for the sunrise time.
    const sunriseTime = document.createElement('div');
    sunriseTime.classList.add('sunrise-time');
    sunriseTime.textContent = sunrise.split('')[0] === '0' ? sunrise.slice(1) : sunrise;
    sunriseContainer.appendChild(sunriseTime);

    // Create div to hold the sunset items.
    const sunsetContainer = document.createElement('div');
    sunsetContainer.classList.add('sunset-container');
    sunriseSunsetDiv.appendChild(sunsetContainer);

    // Create the image element for the sunset icon.
    const sunsetIconImg = document.createElement('img');
    sunsetIconImg.src = sunsetImgSrc;
    sunsetIconImg.classList.add('icon');
    sunsetContainer.appendChild(sunsetIconImg);

    // Create div for the sunset time.
    const sunsetTime = document.createElement('div');
    sunsetTime.classList.add('sunset-time');
    sunsetTime.textContent = sunset.split('')[0] === '0' ? sunset.slice(1) : sunset;
    sunsetContainer.appendChild(sunsetTime);

    return sunriseSunsetDiv;
}
