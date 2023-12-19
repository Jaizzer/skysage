// Import the errorImageSrc for the default error image.
import errorImageSrc from './img/no-location.png';

/**
 * Builds an error card with a custom error message.
 *
 * @param {string} message - The error message to be displayed in the error card.
 * @returns {HTMLElement} The error card background element, which can be appended to the DOM.
 *
 * This function creates an error card with the following components:
 * - Blurry Background: Adds a semi-transparent background overlay to visually highlight the error card.
 * - Error Card: The main container for the error message and associated elements.
 * - Close Button: An 'X' button to close the error card.
 * - Error Image: An image representing the default error state.
 * - Error Message: The custom error message provided as a parameter.
 *
 * When the close button is clicked, the error card background is removed from the DOM, and the associated form is enabled and cleared.
 *
 * @example
 * // Example usage:
 * const errorMessage = "Location not found. Please try again.";
 * const errorCardBackground = buildErrorCard(errorMessage);
 * document.body.appendChild(errorCardBackground);
 */
export default function buildErrorCard(message) {
    // Create the error-card background.
    const errorCardBackground = document.createElement('div');
    errorCardBackground.classList.add('blurry-background');
    document.body.appendChild(errorCardBackground);

    // Create error card.
    const errorCard = document.createElement('div');
    errorCard.classList.add('error-card');
    errorCardBackground.appendChild(errorCard);

    // Create close button.
    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
        // Remove error message once 'x' was clicked.
        errorCardBackground.remove();
        // Enable and clear the form after closing the error message.
        const input = document.querySelector('input');
        input.disabled = false;
        input.value = '';
    });
    errorCard.appendChild(closeButton);

    // Create error Image.
    const errorImage = document.createElement('img');
    errorImage.classList.add('error-image');
    errorImage.src = errorImageSrc;
    errorCard.appendChild(errorImage);

    // Create Error message.
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    errorCard.appendChild(errorMessage);

    return errorCardBackground;
}
