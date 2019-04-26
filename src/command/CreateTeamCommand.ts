import ICommand from './ICommand';
import {Team, Category, Type, Guild} from "../entity";

export default class CreateTeamCommand implements ICommand{

    name: string = "create-team";
    filters: string[] = [];

    async execute(source:any, args:string[]){
        const reply = await source.channel.send("Saving ...");

        let category = await Category.findOne({name:args[0]});
        if(!category) {
            category = new Category();
            category.name = args[0];
            await category.save();
        }
        let type = await Type.findOne({name:args[1]});
        if(!type) {
            type = new Type();
            type.name = args[1];
            type.category = category;
            await type.save();
        }
        const guild = await Guild.findOne(source.guild.id);
        const team = new Team();
        team.name = args[2];
        team.type = type;
        team.guild = guild;
        await team.save();

        await reply.edit('Saved ! :)');
    }
}