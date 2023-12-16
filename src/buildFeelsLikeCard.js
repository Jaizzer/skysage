import feelsLikeImgSrc from './img/feelsLike.png';

export default function buildFeelsLikeCard(feelsLike) {
    // Create the div element
    const feelsLikeStatusDiv = document.createElement('div');
    feelsLikeStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    feelsLikeStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = feelsLikeImgSrc;
    iconContainer.appendChild(icon);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Feels Like';
    headingContainer.appendChild(nameDiv);

    // Create the div for the feels-like value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${feelsLike}°`; // Assuming feels-like temperature is in Celsius
    feelsLikeStatusDiv.appendChild(valueDiv);

    return feelsLikeStatusDiv;
}
