import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, OneToMany} from "typeorm";
import { Team } from "./Team";
import { User } from "./User";

@Entity()
export class Guild extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @ManyToMany(type => User, user => user.guilds)
    @JoinTable()
    users: User[];

    @OneToMany(type => Team, team => team.guild)
    teams: Team[];
}