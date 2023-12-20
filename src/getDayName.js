/**
 * Get the day name based on the provided forecast date and current date.
 *
 * @param {Object} dateObject - An object containing forecastDate and date properties.
 * @returns {string} The day name.
 */
export default function getDayName(dateObject) {
    let dayName = '';

    // Create a Date object for the forecast date
    const forecastDate = new Date(dateObject.currentDate);

    // Create a Date object for the current date
    const currentDate = new Date(dateObject.date);

    // Compare year, month, and day of the forecast date and current date
    const isSameDate =
        forecastDate.getFullYear() === currentDate.getFullYear() &&
        forecastDate.getMonth() === currentDate.getMonth() &&
        forecastDate.getDate() === currentDate.getDate();

    if (isSameDate) {
        dayName = 'Today';
    } else {
        // Get the day name from the forecast date
        dayName = currentDate.toLocaleString('en-us', { weekday: 'long' });
    }

    return dayName;
}
