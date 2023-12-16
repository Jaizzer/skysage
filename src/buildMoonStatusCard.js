import moonImgSrc from './img/moon.png';

export default function buildMoonStatusCard(moonPhase, moonRise) {
    // Create the div element
    const moonStatusDiv = document.createElement('div');
    moonStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    moonStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = moonImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Moon';
    headingContainer.appendChild(nameDiv);

    // Create the div for the moon value (Moon rise time).
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${moonPhase}, ${moonRise}`;
    moonStatusDiv.appendChild(valueDiv);

    return moonStatusDiv;
}
