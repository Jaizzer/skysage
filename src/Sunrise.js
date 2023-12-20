/**
 * Sunrise class representing sunrise events.
 *
 * @class Sunrise
 * @param {string} time - The time of the sunrise event.
 *
 * This class is used to create Sunrise objects, each representing a sunrise event at a specific time.
 * The Sunrise objects can be utilized to enhance the presentation of sunrise events in the application.
 */

// Import the sunrise image source.
import sunriseImageSrc from './img/sunrise.png';

export default class Sunrise {
    /**
     * Creates an instance of Sunrise.
     *
     * @param {string} time - The time of the sunrise event.
     */
    constructor(time) {
        /**
         * The icon representing the sunrise event.
         * @type {string}
         */
        this.icon = sunriseImageSrc;

        /**
         * The time of the sunrise event.
         * @type {string}
         */
        this.time = time;

        /**
         * The type of the event (Sunrise).
         * @type {string}
         */
        this.type = 'Sunrise';
    }
}
