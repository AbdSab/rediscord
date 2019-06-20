import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, BaseEntity} from "typeorm";
import { Guild } from "./Guild";

/**
 * User entity to store users.
 */
@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: string;

    @ManyToMany(type => Guild, guild => guild.users)
    guilds: Guild[];

}