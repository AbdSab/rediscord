import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Type} from "./Type";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Type, type => type.category)
    types: Type[];
}