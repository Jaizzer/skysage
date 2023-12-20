import buildHighlightCard from './buildHighlightCard';
import windIconSrc from './img/wind.svg';

/**
 * Builds a wind status card using the buildHighlightCard function.
 *
 * @param {Object} currentWindStatus - Object containing current wind status information.
 * @param {number} currentWindStatus.windSpeed - The current wind speed value in kilometers per hour.
 * @returns {HTMLElement} The generated wind status card element.
 *
 * This function utilizes the buildHighlightCard function to create a wind status card.
 * The card includes a title ('Wind'), an icon representing wind, the current wind speed value,
 * and a message generated based on the wind speed using the Beaufort scale.
 *
 * The generated wind status card can be appended to the DOM to visually represent the current wind conditions.
 */
export default function buildWindStatusCard(currentWindStatus) {
    // Create the wind status card.
    const windStatusCard = buildHighlightCard(
        'Wind',
        windIconSrc,
        `${currentWindStatus.windSpeed} km/h`,
        getWindMessage(currentWindStatus.windSpeed)
    );
    return windStatusCard;
}

/**
 * Generates a description based on the Beaufort scale for wind speed.
 *
 * @param {number} windSpeed - The current wind speed value in kilometers per hour.
 * @returns {string} A descriptive message indicating the wind conditions based on the Beaufort scale.
 *
 * This function takes the current wind speed as input and categorizes it into different ranges
 * using the Beaufort scale. It then returns a descriptive message based on the wind speed category,
 * such as 'Calm conditions,' 'Light air,' 'Gentle breeze,' 'Moderate wind,' 'Fresh breeze,' 'Strong wind,' and so on.
 */
function getWindMessage(windSpeed) {
    let message = '';
    switch (true) {
        case windSpeed < 1:
            message = 'Calm conditions.';
            break;
        case windSpeed < 4:
            message = 'Light air.';
            break;
        case windSpeed < 7:
            message = 'Gentle breeze.';
            break;
        case windSpeed < 11:
            message = 'Moderate wind.';
            break;
        case windSpeed < 17:
            message = 'Fresh breeze.';
            break;
        case windSpeed < 22:
            message = 'Strong wind.';
            break;
        case windSpeed < 28:
            message = 'High wind, moderate gale, near gale.';
            break;
        case windSpeed < 34:
            message = 'Gale.';
            break;
        case windSpeed < 41:
            message = 'Strong gale.';
            break;
        case windSpeed < 48:
            message = 'Storm.';
            break;
        case windSpeed < 56:
            message = 'Violent storm.';
            break;
        default:
            message = 'Hurricane force.';
            break;
    }

    return message;
}
