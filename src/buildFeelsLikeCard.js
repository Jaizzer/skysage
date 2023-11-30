export default function buildFeelsLikeCard(feelsLike) {
    // Create the div element
    const feelsLikeStatusDiv = document.createElement('div');
    feelsLikeStatusDiv.classList.add('highlight-card');

    // Create the div for the feels-like title.
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Feels Like';
    feelsLikeStatusDiv.appendChild(nameDiv);

    // Create the div for the feels-like value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${feelsLike}°`; // Assuming feels-like temperature is in Celsius
    feelsLikeStatusDiv.appendChild(valueDiv);

    return feelsLikeStatusDiv;
}
