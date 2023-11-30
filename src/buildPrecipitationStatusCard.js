export default function buildPreciptationStatusCard(precipitation) {
    // Create the div element
    const precipitationStatusDiv = document.createElement('div');
    precipitationStatusDiv.classList.add('highlight-card');

    // Create the div for the precipitation title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Precipitation';
    precipitationStatusDiv.appendChild(nameDiv);

    // Create the div for the precipitation value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${precipitation} mm`;
    precipitationStatusDiv.appendChild(valueDiv);

    return precipitationStatusDiv;
}
