/**
 * Converts a 24-hour format hour to a 12-hour format with AM/PM designation.
 *
 * @param {number} hour - The hour in 24-hour format (0 to 23).
 * @returns {string} The hour in 12-hour format with AM/PM.
 *
 * This function takes an hour in 24-hour format and converts it to 12-hour format.
 * It returns a string representing the hour in the format "hh AM/PM."
 */
export function convertTo12HourFormat(hour) {
    const hours12 = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    return `${hours12} ${amPm}`;
}

/**
 * Converts a 12-hour format hour with AM/PM designation to a 24-hour format.
 *
 * @param {string} hour - The hour in 12-hour format with AM/PM (e.g., "hh:mm AM/PM").
 * @returns {Object} An object containing the converted hours and minutes in 24-hour format.
 *
 * This function takes an hour in 12-hour format with AM/PM designation and converts it to 24-hour format.
 * It returns an object with properties 'hours' and 'minutes' representing the converted values.
 */
export function convertTo24HourFormat(hour) {
    // Split HH:MM and AM/PM
    let [hoursMinutes, amOrPm] = hour.split(' ');
    // Split HH and MM.
    let [hours, minutes] = hoursMinutes.split(':');

    // Convert to integers.
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (amOrPm === 'PM') {
        hours = hours + 12;
    }

    return {
        hours: hours,
        minutes: minutes,
    };
}
