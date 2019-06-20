/**
 * Manipulate messages to extract prefix, command, and arguments.
 */
export default class MessageHelper{
    message: string;
    prefix: string;
    command: string;
    args: string[];

    /**
     * Constructor.
     * @param message
     */
    public constructor(message: string){
        this.message = message;
        this.processMessage();
    }

    /**
     * Extract prefix, command, and args from the message.
     */
    private processMessage(){
        const words = this.message.split(' ');
        this.prefix = words.shift();
        this.command = words.shift();
        this.args = words;
    }
}