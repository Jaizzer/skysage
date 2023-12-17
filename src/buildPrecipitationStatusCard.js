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

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getPrecipitationMessage(precipitation);
    precipitationStatusDiv.appendChild(notesDiv);

    return precipitationStatusDiv;
}

// Return a correponding message base on the precipitation data.
function getPrecipitationMessage(precipitation) {
    let precipitationMessage;
    switch (true) {
        case precipitation === 0:
            precipitationMessage = 'No rainfall';
            break;
        case precipitation > 0 && precipitation <= 5:
            precipitationMessage = 'Light rain, carry an umbrella.';
            break;
        case precipitation > 5 && precipitation <= 15:
            precipitationMessage = 'Moderate rain, expect wet conditions.';
            break;
        case precipitation > 15 && precipitation <= 30:
            precipitationMessage = 'Heavy rain, caution in travel.';
            break;
        case precipitation > 30 && precipitation <= 50:
            precipitationMessage = 'Very heavy rain, potential flooding.';
            break;
        case precipitation > 50 && precipitation <= 75:
            precipitationMessage = 'Intense rain, high flood risk.';
            break;
        default:
            precipitationMessage = 'Extreme rain, major flooding possible.';
    }
    return precipitationMessage;
}
