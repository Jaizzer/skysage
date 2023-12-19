import buildHighlightCard from './buildHighlightCard';
import windIconSrc from './img/wind.svg';

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

// Example function to get wind message based on wind speed
// Utility function to get wind message based on wind speed using Beaufort scale
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
