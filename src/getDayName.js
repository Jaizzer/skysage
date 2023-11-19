/**
 * Returns the day name for a given date string.
 *
 * If the given date is today, it returns 'Today'. Otherwise, it returns the full weekday name.
 *
 * @param {string} dateString - The date string in the format 'YYYY-MM-DD'.
 * @returns {string} The day name corresponding to the given date.
 */
export default function getDayName(dateString) {
    let dayName = '';

    // Check if the given date is today
    if (isDateToday(dateString)) {
        dayName = 'Today';
    } else {
        // If not today, get the full weekday name
        dayName = new Date(dateString).toLocaleString('en-us', { weekday: 'long' });
    }

    return dayName;
}

/**
 * Checks if the given date string corresponds to the current date.
 *
 * @param {string} dateString - The date string in the format 'YYYY-MM-DD'.
 * @returns {boolean} True if the given date is today; otherwise, false.
 */
function isDateToday(dateString) {
    // Create a Date object for the given date string
    const givenDate = new Date(dateString);

    // Get the current date
    const currentDate = new Date();

    // Compare year, month, and day
    return (
        givenDate.getFullYear() === currentDate.getFullYear() &&
        givenDate.getMonth() === currentDate.getMonth() &&
        givenDate.getDate() === currentDate.getDate()
    );
}
