export default function buildMoonStatusCard(moonPhase, moonRise) {
    // Create the div element
    const moonStatusDiv = document.createElement('div');
    moonStatusDiv.classList.add('highlight-card');

    // Create the div for the moon title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = moonPhase;
    moonStatusDiv.appendChild(nameDiv);

    // Create the div for the moon value (Moon rise time).
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `Moonrise: ${moonRise}`;
    moonStatusDiv.appendChild(valueDiv);

    return moonStatusDiv;
}
