import visibilityImgSrc from './img/visibility.png';

export default function buildVisibilityCard(visibility) {
    // Create the div element
    const visibilityStatusDiv = document.createElement('div');
    visibilityStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    visibilityStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = visibilityImgSrc;
    iconContainer.appendChild(icon);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Visibility';
    headingContainer.appendChild(nameDiv);

    // Create the div for the visibility value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${visibility} km`;
    visibilityStatusDiv.appendChild(valueDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getVisibilityMessage(visibility); // Use the visibility message as additional notes
    visibilityStatusDiv.appendChild(notesDiv);

    return visibilityStatusDiv;
}

// Generate a description based on what range the current visibility falls on.
function getVisibilityMessage(visibility) {
    let message = '';

    switch (true) {
        case visibility >= 16:
            message = 'Excellent visibility.';
            break;
        case visibility >= 10 && visibility < 16:
            message = 'Good visibility.';
            break;
        case visibility >= 5 && visibility < 10:
            message = 'Moderate visibility.';
            break;
        case visibility >= 1.6 && visibility < 5:
            message = 'Poor visibility.';
            break;
        case visibility < 1.6:
            message = 'Very poor visibility.';
            break;
        default:
            message = 'Visibility information not available.';
            break;
    }

    return message;
}
