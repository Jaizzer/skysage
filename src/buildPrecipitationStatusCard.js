import buildHighlightCard from './buildHighlightCard';
import precipitationImgSrc from './img/precipitation.png';

/**
 * Builds a precipitation status card using the buildHighlightCard function.
 *
 * @param {number} precipitation - The current precipitation value to be displayed on the card.
 * @returns {HTMLElement} The generated precipitation status card element.
 *
 * This function utilizes the buildHighlightCard function to create a precipitation status card.
 * The card includes a title ('Precipitation'), an icon representing precipitation, the current precipitation value,
 * and a description generated based on the precipitation range.
 *
 * The generated precipitation status card can be appended to the DOM to visually represent the current precipitation status.
 */
export default function buildPrecipitationStatusCard(precipitation) {
    // Create the highlight card.
    const precipitationStatusCard = buildHighlightCard('Precipitation', precipitationImgSrc, precipitation, getPrecipitationMessage(precipitation));
    return precipitationStatusCard;
}

/**
 * Generates a description based on the range of precipitation value.
 *
 * @param {number} precipitation - The current precipitation value.
 * @returns {string} A descriptive message indicating the precipitation conditions.
 *
 * This function takes the current precipitation value as input and categorizes it into different ranges.
 * It then returns a descriptive message based on the category, such as 'No rainfall,' 'Light rain, carry an umbrella,'
 * 'Moderate rain, expect wet conditions,' 'Heavy rain, caution in travel,' 'Very heavy rain, potential flooding,'
 * 'Intense rain, high flood risk,' or 'Extreme rain, major flooding possible.'
 */
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
