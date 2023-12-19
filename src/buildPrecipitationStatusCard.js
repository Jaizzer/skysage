import buildHighlightCard from './buildHighlightCard';
import precipitationImgSrc from './img/precipitation.png';

export default function buildPreciptationStatusCard(precipitation) {
    // Create highlight card.
    const precipitationStatusCard = buildHighlightCard('Precipitation', precipitationImgSrc, precipitation, getPrecipitationMessage(precipitation));
    return precipitationStatusCard;
}

// Return a correponding message base on the precipitation data.
function getPrecipitationMessage(precipitation) {
    let precipitationMessage;
    switch (true) {
        case precipitation === 0:
            precipitationMessage = 'No rainfall';
            break;
        case precipitation > 0 && precipitation <= 5:
            precipitationMessage = 'Light rain, carry an umbrella.';
            break;
        case precipitation > 5 && precipitation <= 15:
            precipitationMessage = 'Moderate rain, expect wet conditions.';
            break;
        case precipitation > 15 && precipitation <= 30:
            precipitationMessage = 'Heavy rain, caution in travel.';
            break;
        case precipitation > 30 && precipitation <= 50:
            precipitationMessage = 'Very heavy rain, potential flooding.';
            break;
        case precipitation > 50 && precipitation <= 75:
            precipitationMessage = 'Intense rain, high flood risk.';
            break;
        default:
            precipitationMessage = 'Extreme rain, major flooding possible.';
    }
    return precipitationMessage;
}
