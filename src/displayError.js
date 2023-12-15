import buildErrorCard from './buildErrorCard';

export default function displayError(message) {
    // Remove focus from the search bar while error message is still unclosed.
    const searchBar = document.querySelector('input');
    searchBar.disabled = true;

    const errorCard = buildErrorCard(message);
    document.body.appendChild(errorCard);
}
