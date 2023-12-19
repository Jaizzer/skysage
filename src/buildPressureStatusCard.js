import buildHighlightCard from './buildHighlightCard';
import pressureImgSrc from './img/pressure.png';

export default function buildPressureStatusCard(pressure) {
    // Create highlight card.
    const pressureStatusCard = buildHighlightCard('Pressure', pressureImgSrc, `${pressure} hPa`, getPressureMessage(pressure));
    return pressureStatusCard;
}

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
