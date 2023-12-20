import buildHighlightCard from './buildHighlightCard';
import pressureImgSrc from './img/pressure.png';

/**
 * Builds a pressure status card using the buildHighlightCard function.
 *
 * @param {number} pressure - The current atmospheric pressure value to be displayed on the card.
 * @returns {HTMLElement} The generated pressure status card element.
 *
 * This function utilizes the buildHighlightCard function to create a pressure status card.
 * The card includes a title ('Pressure'), an icon representing pressure, the current atmospheric pressure value,
 * and a description generated based on the pressure range.
 *
 * The generated pressure status card can be appended to the DOM to visually represent the current atmospheric pressure status.
 */
export default function buildPressureStatusCard(pressure) {
    // Create the highlight card.
    const pressureStatusCard = buildHighlightCard('Pressure', pressureImgSrc, `${pressure} hPa`, getPressureMessage(pressure));
    return pressureStatusCard;
}

/**
 * Generates a description based on the range of atmospheric pressure value.
 *
 * @param {number} pressure - The current atmospheric pressure value.
 * @returns {string} A descriptive message indicating the atmospheric pressure conditions.
 *
 * This function takes the current atmospheric pressure value as input and categorizes it into different ranges.
 * It then returns a descriptive message based on the category, such as 'No pressure data available,'
 * 'Low pressure detected,' 'Normal pressure conditions,' 'Slightly elevated pressure,'
 * 'Moderately high pressure,' 'High pressure, stable conditions,' or 'Extremely high pressure, unusual conditions.'
 */
function getPressureMessage(pressure) {
    let pressureMessage;
    switch (true) {
        case pressure === 0:
            pressureMessage = 'No pressure data available.';
            break;
        case pressure < 1000:
            pressureMessage = 'Low pressure detected.';
            break;
        case pressure > 1000 && pressure <= 1013:
            pressureMessage = 'Normal pressure conditions.';
            break;
        case pressure > 1013 && pressure <= 1020:
            pressureMessage = 'Slightly elevated pressure.';
            break;
        case pressure > 1020 && pressure <= 1030:
            pressureMessage = 'Moderately high pressure.';
            break;
        case pressure > 1030 && pressure <= 1040:
            pressureMessage = 'High pressure, stable conditions.';
            break;
        case pressure > 1040:
            pressureMessage = 'Extremely high pressure, unusual conditions.';
            break;
    }
    return pressureMessage;
}
