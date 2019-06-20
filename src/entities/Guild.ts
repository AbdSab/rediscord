import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity, OneToMany} from "typeorm";
import { User } from "./User";

/**
 * Guild Entity to store guilds (servers).
 */
@Entity()
export class Guild extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @ManyToMany(type => User, user => user.guilds)
    @JoinTable()
    users: User[];
}