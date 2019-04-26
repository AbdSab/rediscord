import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, BaseEntity} from "typeorm";
import {Team} from "./Team";
import { Guild } from "./Guild";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @ManyToMany(type => Team, team => team.users)
    teams: Team[];

    @ManyToMany(type => Guild, guild => guild.users)
    guilds: Guild[];

}