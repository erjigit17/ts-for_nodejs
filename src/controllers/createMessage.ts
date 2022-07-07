export default class Messenger {
    port: number;

    constructor(port: number) {
        this.port = port;
    }

    printMessage() {
        return `Express server was started on ${this.port}`
    }

}