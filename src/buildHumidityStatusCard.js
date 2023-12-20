import buildHighlightCard from './buildHighlightCard';
import humidityImgSrc from './img/humidity.png';

export default function buildHumidityStatusCard(humidity) {
    // Cret the highlight card.
    const humidityStatusCard = buildHighlightCard('Humidity', humidityImgSrc, humidity, getHumidityMessage(humidity));
    return humidityStatusCard;
}

// Generate a description base on what range the current humidity falls on.
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
