import buildHighlightCard from './buildHighlightCard';
import visibilityImgSrc from './img/visibility.png';

export default function buildVisibilityCard(visibility) {
    // Create visibility card.
    const visibilityCard = buildHighlightCard('Visibility', visibilityImgSrc, `${visibility} km`, getVisibilityMessage(visibility));
    return visibilityCard;
}

// Generate a description based on what range the current visibility falls on.
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
