import buildHighlightCard from './buildHighlightCard';
import humidityImgSrc from './img/humidity.png';

/**
 * Builds a humidity status card using the buildHighlightCard function.
 *
 * @param {number} humidity - The current humidity value to be displayed on the card.
 * @returns {HTMLElement} The generated humidity status card element.
 *
 * This function utilizes the buildHighlightCard function to create a humidity status card.
 * The card includes a title ('Humidity'), an icon representing humidity, the current humidity value,
 * and a description generated based on the range in which the current humidity falls.
 *
 * The generated humidity status card can be appended to the DOM to visually represent the humidity status.
 */
export default function buildHumidityStatusCard(humidity) {
    // Create highlight card.
    const humidityStatusCard = buildHighlightCard('Humidity', humidityImgSrc, humidity, getHumidityMessage(humidity));
    return humidityStatusCard;
}

/**
 * Generates a description based on the range in which the humidity value falls.
 *
 * @param {number} humidity - The current humidity value.
 * @returns {string} A descriptive message indicating the humidity conditions.
 *
 * This function takes the current humidity value as input and categorizes it into different ranges.
 * It then returns a descriptive message based on the category, such as 'Dry, Arid', 'Comfortable', or 'Humid, Muggy'.
 */
function getHumidityMessage(humidity) {
    let message = '';
    if (humidity >= 0 && humidity <= 30) {
        message = 'Dry, Arid';
    } else if (humidity > 30 && humidity <= 60) {
        message = 'Comfortable';
    } else {
        message = 'Humid, Muggy';
    }
    return message;
}
