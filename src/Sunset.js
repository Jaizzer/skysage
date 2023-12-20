/**
 * Sunset class representing sunset events.
 *
 * @class Sunset
 * @param {string} time - The time of the sunset event.
 *
 * This class is used to create Sunset objects, each representing a sunset event at a specific time.
 * The Sunset objects can be utilized to enhance the presentation of sunset events in the application.
 */

// Import the sunset image source.
import sunsetImageSrc from './img/sunset.png';

export default class Sunset {
    /**
     * Creates an instance of Sunset.
     *
     * @param {string} time - The time of the sunset event.
     */
    constructor(time) {
        /**
         * The icon representing the sunset event.
         * @type {string}
         */
        this.icon = sunsetImageSrc;

        /**
         * The time of the sunset event.
         * @type {string}
         */
        this.time = time;

        /**
         * The type of the event (Sunset).
         * @type {string}
         */
        this.type = 'Sunset';
    }
}
