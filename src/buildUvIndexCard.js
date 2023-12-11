export default function buildUvIndexCard(uvValue) {
    // Create the div element
    const uvIndexDiv = document.createElement('div');
    uvIndexDiv.classList.add('highlight-card');

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    iconContainer.innerHTML = `<svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sun-wireless</title><path d="M11 6C13.76 6 16 8.24 16 11S13.76 16 11 16 6 13.76 6 11 8.24 6 11 6M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13" /></svg>`;
    uvIndexDiv.appendChild(iconContainer);

    // Create the div for the UV Index name
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'UV Index';
    uvIndexDiv.appendChild(nameDiv);

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
    if (uvValue >= 0 && uvValue <= 2) {
        message = 'Minimal danger. Up to 1 hour sun, no burning.';
    } else if (uvValue >= 3 && uvValue <= 5) {
        message = 'Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.';
    } else if (uvValue >= 6 && uvValue <= 7) {
        message = 'Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.';
    } else if (uvValue >= 8 && uvValue <= 10) {
        message = 'High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.';
    } else if (uvValue >= 11) {
        message = 'Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection.';
    }
    return message;
}
