export default function getCurrentHour() {
    // Get the current date and extract the hour component.
    const currentHour = new Date().getHours();

    return currentHour;
}
