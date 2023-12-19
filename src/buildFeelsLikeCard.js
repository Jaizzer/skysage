import buildHighlightCard from './buildHighlightCard';
import feelsLikeImgSrc from './img/feelsLike.png';

export default function buildFeelsLikeCard(feelsLike, unit) {
    const feelsLikeCard = buildHighlightCard('Feels Like', feelsLikeImgSrc, `${feelsLike}°`, getFeelsLikeMessage(feelsLike, unit));
    return feelsLikeCard;
}

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
