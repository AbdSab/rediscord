
export default class MessageHelper{
    message: string;
    prefix: string;
    command: string;
    args: string[];

    public constructor(message: string){
        this.message = message;
        this.processMessage();
    }
    private processMessage(){
        const words = this.message.split(' ');
        this.prefix = words.shift();
        this.command = words.shift();
        this.args = words;
    }
}