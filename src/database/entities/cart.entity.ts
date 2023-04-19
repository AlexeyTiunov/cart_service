import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {CartItems} from "./cartItem.entity";

@Entity()
export class Carts {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({ type: 'text', nullable: false })
    userId:string;

    @Column({type:'date', nullable:false})
    createdAt:string;

    @Column({type:'date', nullable:false})
    updatedAt:string;
    @Column({ type: 'text', nullable: false })
    status:string;

     @OneToMany(()=>CartItems,(cartItems)=>cartItems.carts)
     cartItems:CartItems[];



}