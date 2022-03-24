class AbstractMarker {
    constructor(position, text) {
        this.position = position
        this.text = text
    }

    getPositionString(fixedLength) {
        return `${this.position.lat.toFixed(fixedLength)} ${this.position.lng.toFixed(fixedLength)}`
    }
}

export default AbstractMarker;
