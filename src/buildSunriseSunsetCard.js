export default function buildSunriseSunsetCard(sunrise, sunset) {
    // Create the div element
    const sunriseSunsetDiv = document.createElement('div');
    sunriseSunsetDiv.classList.add('highlight-card');

    // Create the div for the sunset sunrise card name.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Sunrise & Sunset';
    sunriseSunsetDiv.appendChild(nameDiv);

    // Create the image element (assuming there's an icon URL you want to insert)
    const sunriseIconImg = document.createElement('img');
    sunriseIconImg.src = '';
    sunriseIconImg.classList.add('icon');
    sunriseSunsetDiv.appendChild(sunriseIconImg);

    // Create div for the sunrise time.
    const sunriseTime = document.createElement('div');
    sunriseTime.classList.add('sunrise-time');
    sunriseTime.textContent = sunrise;
    sunriseSunsetDiv.appendChild(sunriseTime);

    // Create the image element (assuming there's an icon URL you want to insert)
    const sunsetIconImg = document.createElement('img');
    sunsetIconImg.src = '';
    sunriseIconImg.classList.add('icon');
    sunriseSunsetDiv.appendChild(sunsetIconImg);

    // Create div for the sunrise time.
    const sunsetTime = document.createElement('div');
    sunsetTime.classList.add('sunset-time');
    sunsetTime.textContent = sunset;
    sunriseSunsetDiv.appendChild(sunsetTime);

    return sunriseSunsetDiv;
}
