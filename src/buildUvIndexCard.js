import uvIconSrc from './img/uv.svg';

export default function buildUvIndexCard(uvValue) {
    // Create the div element
    const uvIndexDiv = document.createElement('div');
    uvIndexDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    uvIndexDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = uvIconSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'UV Index';
    headingContainer.appendChild(nameDiv);

    // Create the div for the UV Index value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = uvValue;
    uvIndexDiv.appendChild(valueDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getUVMessage(uvValue); // Use the UV message as additional notes
    uvIndexDiv.appendChild(notesDiv);

    return uvIndexDiv;
}

function getUVMessage(uvValue) {
    let message = '';
    switch (true) {
        case uvValue >= 0 && uvValue <= 2:
            message = 'Minimal danger. Up to 1 hour sun, no burning.';
            break;
        case uvValue >= 3 && uvValue <= 5:
            message = 'Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.';
            break;
        case uvValue >= 6 && uvValue <= 7:
            message = 'Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.';
            break;
        case uvValue >= 8 && uvValue <= 10:
            message = 'High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.';
            break;
        default:
            message = 'Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection.';
            break;
    }
    return message;
}
