import buildErrorCard from './buildErrorCard';

/**
 * Displays an error message using a custom error card.
 *
 * @param {string} message - The error message to be displayed.
 * @returns {HTMLElement} The generated error card background element.
 *
 * This function disables the search bar and creates a custom error card with the provided error message.
 * The error card includes a close button ('X'), an error image, and the specified error message.
 * The generated error card background is appended to the document body.
 *
 * To handle user interaction, the error card includes a close button that, when clicked,
 * removes the error card background and re-enables the search bar.
 */
export default function displayError(message) {
    // Remove focus from the search bar while the error message is still unclosed.
    const searchBar = document.querySelector('input');
    searchBar.disabled = true;

    // Create the error card and append it to the document body.
    const errorCard = buildErrorCard(message);
    document.body.appendChild(errorCard);

    return errorCard; // Return the error card background element for potential further manipulation.
}
