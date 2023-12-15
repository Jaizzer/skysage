import errorImageSrc from './img/no-location.png';

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
