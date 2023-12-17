import feelsLikeImgSrc from './img/feelsLike.png';

export default function buildFeelsLikeCard(feelsLike, unit) {
    // Create the div element
    const feelsLikeStatusDiv = document.createElement('div');
    feelsLikeStatusDiv.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    feelsLikeStatusDiv.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = feelsLikeImgSrc;
    iconContainer.appendChild(icon);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = 'Feels Like';
    headingContainer.appendChild(nameDiv);

    // Create the div for the feels-like value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = `${feelsLike}°`; // Assuming feels-like temperature is in Celsius
    feelsLikeStatusDiv.appendChild(valueDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = getFeelsLikeMessage(feelsLike, unit);
    feelsLikeStatusDiv.appendChild(notesDiv);

    return feelsLikeStatusDiv;
}

function getFeelsLikeMessage(feelsLike, unit) {
    let feelsLikeMessage = '';

    switch (true) {
        case (unit === 'f' && feelsLike >= 86) || (unit === 'c' && feelsLike >= 30):
            feelsLikeMessage = 'Hot Weather';
            break;
        case (unit === 'f' && feelsLike >= 68 && feelsLike < 86) || (unit === 'c' && feelsLike >= 20 && feelsLike < 30):
            feelsLikeMessage = 'Warm Weather';
            break;
        case (unit === 'f' && feelsLike >= 50 && feelsLike < 68) || (unit === 'c' && feelsLike >= 10 && feelsLike < 20):
            feelsLikeMessage = 'Mild Weather';
            break;
        case (unit === 'f' && feelsLike >= 32 && feelsLike < 50) || (unit === 'c' && feelsLike >= 0 && feelsLike < 10):
            feelsLikeMessage = 'Cool Weather';
            break;
        case (unit === 'f' && feelsLike >= 14 && feelsLike < 32) || (unit === 'c' && feelsLike >= -10 && feelsLike < 0):
            feelsLikeMessage = 'Cold Weather';
            break;
        case (unit === 'f' && feelsLike < 14) || (unit === 'c' && feelsLike < -10):
            feelsLikeMessage = 'Freezing Weather';
            break;
        default:
            feelsLikeMessage = 'Variable Conditions';
    }

    return feelsLikeMessage;
}
