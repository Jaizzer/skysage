import precipitationImgSrc from './img/precipitation.png';

export default function buildPreciptationStatusCard(precipitation) {
    // Create the div element
    const precipitationStatusDiv = document.createElement('div');
    precipitationStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    precipitationStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = precipitationImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Precipitation';
    headingContainer.appendChild(nameDiv);

    // Create the div for the precipitation value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${precipitation} mm`;
    precipitationStatusDiv.appendChild(valueDiv);

    return precipitationStatusDiv;
}
