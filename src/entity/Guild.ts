import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Team } from "./Team";
import { User } from "./User";

@Entity()
export class Guild{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @Column()
    name: string;

    @ManyToMany(type => User, user => user.guilds)
    @JoinTable()
    users: User[];

    @ManyToMany(type => Team, team => team.guilds)
    @JoinTable()
    teams: Team[];
}