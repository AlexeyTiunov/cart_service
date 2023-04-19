import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Carts} from "./cart.entity";


@Entity()
export class CartItems{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  cartId:string

  @Column({ type: 'text', nullable: false })
  productId:string

  @Column({type:"integer",nullable: false})
  count: number

  @ManyToOne(()=>Carts)
  @JoinColumn({name:'cart_id'})
  carts: Carts

}
