import buildHighlightCard from './buildHighlightCard';
import uvIconSrc from './img/uv.svg';

/**
 * Builds a UV index card using the buildHighlightCard function.
 *
 * @param {number} uvValue - The current UV index value to be displayed on the card.
 * @returns {HTMLElement} The generated UV index card element.
 *
 * This function utilizes the buildHighlightCard function to create a UV index card.
 * The card includes a title ('UV Index'), an icon representing the UV index, the current UV index value,
 * and a message generated based on the UV index value range.
 *
 * The generated UV index card can be appended to the DOM to visually represent the current UV index status.
 */
export default function buildUvIndexCard(uvValue) {
    // Create the highlight card.
    const uvIndexCard = buildHighlightCard('UV Index', uvIconSrc, uvValue, getUVMessage(uvValue));
    return uvIndexCard;
}

/**
 * Generates a message based on the range of UV index value.
 *
 * @param {number} uvValue - The current UV index value.
 * @returns {string} A descriptive message indicating the UV index conditions.
 *
 * This function takes the current UV index value as input and categorizes it into different ranges.
 * It then returns a descriptive message based on the category, such as 'Minimal danger. Up to 1 hour sun, no burning,'
 * 'Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection,' 'Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas,'
 * 'High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection,' or
 * 'Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection.'
 */
function getUVMessage(uvValue) {
    let message = '';
    switch (true) {
        case uvValue >= 0 && uvValue <= 2:
            message = 'Minimal danger. Up to 1 hour sun, no burning.';
            break;
        case uvValue >= 3 && uvValue <= 5:
            message = 'Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.';
            break;
        case uvValue >= 6 && uvValue <= 7:
            message = 'Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.';
            break;
        case uvValue >= 8 && uvValue <= 10:
            message = 'High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.';
            break;
        default:
            message = 'Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection.';
            break;
    }
    return message;
}
