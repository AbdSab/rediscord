import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { User } from "./User";
import { Type } from "./Type";
import { Guild } from "./Guild";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Type, type => type.teams)
    type: Type;

    @ManyToMany(type => User, user => user.teams)
    @JoinTable()
    users: User[];

    @ManyToMany(type => Guild, guild => guild.teams)
    guilds: Guild[];
}