import sunsetImageSrc from './img/sunset.png';
export default class Sunset {
    constructor(time) {
        this.icon = sunsetImageSrc;
        this.time = time;
        this.type = 'Sunset';
    }
}
