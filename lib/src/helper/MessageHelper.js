"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageHelper {
    constructor(message) {
        this.message = message;
        this.processMessage();
    }
    processMessage() {
        const words = this.message.split(' ');
        this.prefix = words.shift();
        this.command = words.shift();
        this.args = words;
    }
}
exports.default = MessageHelper;
