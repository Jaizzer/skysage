/**
 * Retrieves the current hour of the day.
 *
 * @function getCurrentHour
 * @returns {number} The current hour (in 24-hour format).
 */
export default function getCurrentHour() {
    // Get the current date and extract the hour component.
    const currentHour = new Date().getHours();

    return currentHour;
}
