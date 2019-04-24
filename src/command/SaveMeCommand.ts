import ICommand from './ICommand';
import {getRepository} from "typeorm";
import {User} from "../entity/User";

export default class SaveMeCommand implements ICommand{
    name: string = "saveme";
    filters: string[] = ["isNotBot", "isFiryox"];

    async execute(source:any, args: string[]){
        let reply = await source.channel.send("Saving ...");
        const userRepository = getRepository(User);
        let user = new User();
        user.uid = source.author.id;
        await userRepository.save(user);
        await reply.edit('Saved ! :)');
    }
}