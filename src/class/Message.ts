
export default class Message{
    message: string;
    public constructor(message: string){
        this.message = message;
    }
    public getCommand(): string{
        let command = this.message;
        return command.split(' ')[0];
    }
    public getArgs(): string[]{
        let args = this.message.split(' ');
        args.shift();
        return args;
    };
}