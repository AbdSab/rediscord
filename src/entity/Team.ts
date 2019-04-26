import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, BaseEntity} from "typeorm";
import { User } from "./User";
import { Type } from "./Type";
import { Guild } from "./Guild";

@Entity()
export class Team extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Type, type => type.teams)
    type: Type;

    @ManyToMany(type => User, user => user.teams)
    @JoinTable()
    users: User[];

    @ManyToOne(type => Guild, guild => guild.teams)
    guild: Guild;
}