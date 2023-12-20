import buildHighlightCard from './buildHighlightCard';
import moonImgSrc from './img/moon.png';

/**
 * Builds a moon status card using the buildHighlightCard function.
 *
 * @param {string} moonPhase - The current phase of the moon to be displayed on the card.
 * @param {string} moonRise - The time of moonrise to be displayed on the card.
 * @returns {HTMLElement} The generated moon status card element.
 *
 * This function utilizes the buildHighlightCard function to create a moon status card.
 * The card includes a title ('Moon'), an icon representing the moon, the current phase of the moon,
 * and the time of moonrise. The moon phase and moonrise time are provided as input parameters.
 *
 * The generated moon status card can be appended to the DOM to visually represent the current moon status.
 */
export default function buildMoonStatusCard(moonPhase, moonRise) {
    // Create the highlight card.
    const moonStatusCard = buildHighlightCard('Moon', moonImgSrc, moonPhase, moonRise);
    return moonStatusCard;
}
