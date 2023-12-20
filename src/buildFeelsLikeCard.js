import buildHighlightCard from './buildHighlightCard';
import feelsLikeImgSrc from './img/feelsLike.png';

/**
 * Builds a 'Feels Like' card using the buildHighlightCard function.
 *
 * @param {number} feelsLike - The 'Feels Like' temperature value to be displayed on the card.
 * @param {string} unit - The unit of temperature measurement ('f' for Fahrenheit, 'c' for Celsius).
 * @returns {HTMLElement} The generated 'Feels Like' card element.
 *
 * This function utilizes the buildHighlightCard function to create a 'Feels Like' card.
 * The card includes a title ('Feels Like'), an icon representing temperature, the 'Feels Like' temperature value,
 * and a description generated based on the temperature range and unit of measurement.
 *
 * The generated 'Feels Like' card can be appended to the DOM to visually represent the perceived temperature.
 */
export default function buildFeelsLikeCard(feelsLike, unit) {
    const feelsLikeCard = buildHighlightCard('Feels Like', feelsLikeImgSrc, `${feelsLike}°`, getFeelsLikeMessage(feelsLike, unit));
    return feelsLikeCard;
}

/**
 * Generates a description based on the 'Feels Like' temperature range and unit of measurement.
 *
 * @param {number} feelsLike - The 'Feels Like' temperature value.
 * @param {string} unit - The unit of temperature measurement ('f' for Fahrenheit, 'c' for Celsius).
 * @returns {string} A descriptive message indicating the perceived weather conditions based on 'Feels Like' temperature.
 *
 * This function takes the 'Feels Like' temperature value and the unit of measurement as input.
 * It categorizes the temperature into different ranges and returns a descriptive message based on the category,
 * such as 'Hot Weather,' 'Warm Weather,' 'Mild Weather,' 'Cool Weather,' 'Cold Weather,' 'Freezing Weather,'
 * or 'Variable Conditions.'
 */
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
