import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne} from "typeorm";
import {Team} from "./Team";
import { Guild } from "./Guild";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @Column()
    username: string;

    @ManyToMany(type => Team, team => team.users)
    teams: Team[];

    @ManyToMany(type => Guild, guild => guild.users)
    guilds: Guild[];

}