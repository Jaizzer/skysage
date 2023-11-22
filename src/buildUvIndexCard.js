export default function buildUvIndexCard(uvValue) {}

function getUVMessage(uvValue) {
    console.log(uvValue);
    if (uvValue >= 0 && uvValue <= 2) {
        return 'Minimal danger. Up to 1 hour sun, no burning.';
    } else if (uvValue >= 3 && uvValue <= 5) {
        return 'Low risk. Fair skin burns in <20 mins. Use sunscreen, wear protection.';
    } else if (uvValue >= 6 && uvValue <= 7) {
        return 'Moderate risk. Fair skin burns in <20 mins. Use sunscreen, protect sensitive areas.';
    } else if (uvValue >= 8 && uvValue <= 10) {
        return 'High risk. Fair skin burns in <10 mins. Minimize exposure, use sunscreen, wear protection.';
    } else if (uvValue >= 11) {
        return 'Very high risk. Fair skin burns in <5 mins. Minimize exposure, use high SPF sunscreen, wear protection.';
    } else {
        return 'Invalid UV value. Provide a valid UV index.';
    }
}
