/**
 * Builds a highlight card displaying specific information.
 *
 * @param {string} highlightCardName - The name or title of the highlight card.
 * @param {string} imgSrc - The URL of the icon or image to be displayed in the card.
 * @param {string} value - The value associated with the highlight (e.g., temperature, quantity).
 * @param {string} notes - Additional notes or information to be displayed in the card.
 * @returns {HTMLElement} The generated highlight card element.
 *
 * This function creates a highlight card with the following components:
 * - Highlight Card: The main container for all elements.
 * - Heading Container: Container for the highlight name and icon.
 * - Icon Container: Container for the icon or image representing the highlight.
 * - Highlight Icon: An image or icon associated with the highlight.
 * - Highlight Name: The name or title of the highlight.
 * - Value Div: Container for displaying the numerical value associated with the highlight.
 * - Additional Notes Div: Container for displaying any additional notes or information.
 *
 * The generated highlight card can be appended to the DOM to visually represent specific data points.
 *
 * @example
 * // Example usage:
 * const highlightCardName = "Temperature";
 * const imgSrc = "temperature-icon.png";
 * const value = "25°C";
 * const notes = "Sunny day with pleasant weather.";
 * const temperatureHighlightCard = buildHighlightCard(highlightCardName, imgSrc, value, notes);
 * document.body.appendChild(temperatureHighlightCard);
 */
export default function buildHighlightCard(highlightCardName, imgSrc, value, notes) {
    // Create the div element
    const highlightCard = document.createElement('div');
    highlightCard.classList.add('highlight-card');

    // Create the heading container.
    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    highlightCard.appendChild(headingContainer);

    // Create the image element (assuming there's an icon URL you want to insert)
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    headingContainer.appendChild(iconContainer);

    const icon = document.createElement('img');
    icon.classList.add('highlight-icon');
    icon.src = imgSrc;
    iconContainer.appendChild(icon);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('highlight-name');
    nameDiv.textContent = highlightCardName;
    headingContainer.appendChild(nameDiv);

    // Create the div for the value
    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.textContent = value;
    highlightCard.appendChild(valueDiv);

    // Create the div for additional notes
    const notesDiv = document.createElement('div');
    notesDiv.classList.add('additional-notes');
    notesDiv.textContent = notes;
    highlightCard.appendChild(notesDiv);

    return highlightCard;
}
