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

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getPressureMessage(pressure);
    pressureStatusDiv.appendChild(notesDiv);

    return pressureStatusDiv;
}

function getPressureMessage(pressure) {
    let pressureMessage;
    switch (true) {
        case pressure === 0:
            pressureMessage = 'No pressure data available.';
            break;
        case pressure < 1000:
            pressureMessage = 'Low pressure detected.';
            break;
        case pressure > 1000 && pressure <= 1013:
            pressureMessage = 'Normal pressure conditions.';
            break;
        case pressure > 1013 && pressure <= 1020:
            pressureMessage = 'Slightly elevated pressure.';
            break;
        case pressure > 1020 && pressure <= 1030:
            pressureMessage = 'Moderately high pressure.';
            break;
        case pressure > 1030 && pressure <= 1040:
            pressureMessage = 'High pressure, stable conditions.';
            break;
        case pressure > 1040:
            pressureMessage = 'Extremely high pressure, unusual conditions.';
            break;
    }
    return pressureMessage;
}
