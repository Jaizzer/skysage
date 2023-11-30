export default function buildPressureStatusCard(pressure) {
    // Create the div element
    const pressureStatusDiv = document.createElement('div');
    pressureStatusDiv.classList.add('highlight-card');

    // Create the div for the pressure title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Pressure';
    pressureStatusDiv.appendChild(nameDiv);

    // Create the div for the pressure value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${pressure} hPa`;
    pressureStatusDiv.appendChild(valueDiv);

    return pressureStatusDiv;
}
