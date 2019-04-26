import ICommand from './ICommand';
import {Team, Category, Type, Guild} from "../entity";

export default class ShowTeamCommand implements ICommand{

    name: string = "teams";
    filters: string[] = [];

    async execute(source:any, args:string[]){

        const guild = await Guild.findOne({uid:source.guild.id});
        const teams = await Team.find();
        teams.forEach(team => {
            source.channel.send(`${team.name}`);
        })

    }
}