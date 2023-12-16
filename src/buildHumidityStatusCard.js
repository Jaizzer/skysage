import humidityImgSrc from './img/humidity.png';

export default function buildHumidityStatusCard(humidity) {
    // Create the div element
    const humidityStatusDiv = document.createElement('div');
    humidityStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    humidityStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = humidityImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Humidity';
    headingContainer.appendChild(nameDiv);

    // Create the div for the humidity value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${humidity}%`;
    humidityStatusDiv.appendChild(valueDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getHumidityMessage(humidity); // Use the humidity message as additional notes
    humidityStatusDiv.appendChild(notesDiv);

    return humidityStatusDiv;
}

// Generate a description base on what range the current humidity falls on.
function getHumidityMessage(humidity) {
    let message = '';
    if (humidity >= 0 || humidity <= 30) {
        message = 'Dry, Arid';
    } else if (humidity > 30 || humidity <= 60) {
        message = 'Comfortable';
    } else {
        message = 'Humid, Muggy';
    }
    return message;
}
