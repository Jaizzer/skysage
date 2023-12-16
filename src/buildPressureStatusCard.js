import pressureImgSrc from './img/pressure.png';

export default function buildPressureStatusCard(pressure) {
    // Create the div element
    const pressureStatusDiv = document.createElement('div');
    pressureStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    pressureStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = pressureImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Pressure';
    headingContainer.appendChild(nameDiv);

    // Create the div for the pressure value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${pressure} hPa`;
    pressureStatusDiv.appendChild(valueDiv);

    return pressureStatusDiv;
}
