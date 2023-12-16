import windIconSrc from './img/wind.svg';

export default function buildWindStatusCard(currentWindStatus) {
    // Create the div element
    const windStatusDiv = document.createElement('div');
    windStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    windStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);
    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = windIconSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Wind';
    headingContainer.appendChild(nameDiv);

    // Create the div for the Wind Speed value
    const speedDiv = document.createElement('div');
    speedDiv.classList.add('value');
    speedDiv.textContent = `${currentWindStatus.windSpeed} km/h`;
    windStatusDiv.appendChild(speedDiv);

    // Create the div for the Wind Direction value
    const directionDiv = document.createElement('div');
    directionDiv.classList.add('value');
    directionDiv.textContent = `${currentWindStatus.windDirection}`;
    windStatusDiv.appendChild(directionDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getWindMessage(currentWindStatus.windSpeed); // Use the wind message as additional notes
    windStatusDiv.appendChild(notesDiv);

    return windStatusDiv;
}

// Example function to get wind message based on wind speed
// Utility function to get wind message based on wind speed using Beaufort scale
function getWindMessage(windSpeed) {
    let message = '';

    if (windSpeed < 1) {
        message = 'Calm conditions.';
    } else if (windSpeed < 4) {
        message = 'Light air.';
    } else if (windSpeed < 7) {
        message = 'Gentle breeze.';
    } else if (windSpeed < 11) {
        message = 'Moderate wind.';
    } else if (windSpeed < 17) {
        message = 'Fresh breeze.';
    } else if (windSpeed < 22) {
        message = 'Strong wind.';
    } else if (windSpeed < 28) {
        message = 'High wind, moderate gale, near gale.';
    } else if (windSpeed < 34) {
        message = 'Gale.';
    } else if (windSpeed < 41) {
        message = 'Strong gale.';
    } else if (windSpeed < 48) {
        message = 'Storm.';
    } else if (windSpeed < 56) {
        message = 'Violent storm.';
    } else {
        message = 'Hurricane force.';
    }

    return message;
}
