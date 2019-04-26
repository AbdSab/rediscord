import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity} from "typeorm";
import { Category } from "./Category";
import { Team } from "./Team";

@Entity()
export class Type extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Category, category => category.types)
    category: Category;

    @OneToMany(type => Team, team => team.type)
    teams: Team[];
}