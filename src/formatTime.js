export function convertTo12HourFormat(hour) {
    const hours12 = hour % 12 || 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    return `${hours12} ${amPm}`;
}

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
