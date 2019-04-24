import ICommand from './ICommand';
import {getRepository} from "typeorm";
import {Team} from "../entity/Team";

export default class SaveMeCommand implements ICommand{
    name: string = "create-team";
    filters: string[] = [];

    async execute(source:any, args: string[]){

    }
}