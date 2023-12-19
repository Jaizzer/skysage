import buildHighlightCard from './buildHighlightCard';
import uvIconSrc from './img/uv.svg';

export default function buildUvIndexCard(uvValue) {
    // Create highlight card.
    const uvIndexCard = buildHighlightCard('UV Index', uvIconSrc, uvValue, getUVMessage(uvValue));
    return uvIndexCard;
}

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
