import buildHighlightCard from './buildHighlightCard';
import visibilityImgSrc from './img/visibility.png';

/**
 * Builds a visibility card using the buildHighlightCard function.
 *
 * @param {number} visibility - The current visibility value to be displayed on the card (in kilometers).
 * @returns {HTMLElement} The generated visibility card element.
 *
 * This function utilizes the buildHighlightCard function to create a visibility card.
 * The card includes a title ('Visibility'), an icon representing visibility, the current visibility value,
 * and a message generated based on the visibility range.
 *
 * The generated visibility card can be appended to the DOM to visually represent the current visibility status.
 */
export default function buildVisibilityCard(visibility) {
    // Create the visibility card.
    const visibilityCard = buildHighlightCard('Visibility', visibilityImgSrc, `${visibility} km`, getVisibilityMessage(visibility));
    return visibilityCard;
}

/**
 * Generates a description based on the range of visibility value.
 *
 * @param {number} visibility - The current visibility value (in kilometers).
 * @returns {string} A descriptive message indicating the visibility conditions.
 *
 * This function takes the current visibility value as input and categorizes it into different ranges.
 * It then returns a descriptive message based on the category, such as 'Excellent visibility,'
 * 'Good visibility,' 'Moderate visibility,' 'Poor visibility,' 'Very poor visibility,' or
 * 'Visibility information not available.'
 */
function getVisibilityMessage(visibility) {
    let message = '';

    switch (true) {
        case visibility >= 16:
            message = 'Excellent visibility.';
            break;
        case visibility >= 10 && visibility < 16:
            message = 'Good visibility.';
            break;
        case visibility >= 5 && visibility < 10:
            message = 'Moderate visibility.';
            break;
        case visibility >= 1.6 && visibility < 5:
            message = 'Poor visibility.';
            break;
        case visibility < 1.6:
            message = 'Very poor visibility.';
            break;
        default:
            message = 'Visibility information not available.';
            break;
    }

    return message;
}
