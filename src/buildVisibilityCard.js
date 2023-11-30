export default function buildVisibilityCard(visibility) {
    // Create the div element
    const visibilityStatusDiv = document.createElement('div');
    visibilityStatusDiv.classList.add('highlight-card');

    // Create the div for the visibility title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Visibility';
    visibilityStatusDiv.appendChild(nameDiv);

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
