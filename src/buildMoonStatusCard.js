import buildHighlightCard from './buildHighlightCard';
import moonImgSrc from './img/moon.png';

export default function buildMoonStatusCard(moonPhase, moonRise) {
    // Create highlight card.
    const moonStatusCard = buildHighlightCard('Moon', moonImgSrc, moonPhase, moonRise);
    return moonStatusCard;
}
