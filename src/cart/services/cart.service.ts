import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {FindOneOptions, Repository} from 'typeorm';
import { v4 } from 'uuid';

import {Carts} from "../../database/entities/cart.entity";

@Injectable()
export class CartService {

  constructor(@InjectRepository(Carts) private cartsRepo:Repository<Carts>) {
  }
  private userCarts: Record<string, Carts> = {};

  async findByUserId(userId: string): Promise<Carts> {
    const carts =  await this.cartsRepo.find({
      relations: {
          cartItems:true
      },
      where:{userId}
      }as FindOneOptions<Carts>)
      console.log(carts)
      return carts[0]
  }

  // createByUserId(userId: string) {
  //   const id = v4(v4());
  //   const userCart = {
  //     id,
  //     items: [],
  //   };
  //
  // // this.userCarts[ userId ] = userCart;
  //
  //   return userCart;
  // }

  async findOrCreateByUserId(userId: string): Promise <Carts> {
    const userCart = await this.findByUserId(userId);
    console.log(userCart);
    if (userCart) {
      return userCart;
    }

    //return this.createByUserId(userId);


  }

 // async  updateByUserId(userId: string, { cartItems:items }: Carts):Promise <Carts> {
 //    const { id, ...rest } = await this.findOrCreateByUserId(userId);
 //
 //    const updatedCart = {
 //      id,
 //      ...rest,
 //      items: [ ...items ],
 //    }
 //
 //    this.userCarts[ userId ] = { ...updatedCart };
 //
 //    return { ...updatedCart };
 //  }

  async removeByUserId(userId): Promise<void> {
    const userCart = await this.findByUserId(userId);

    await this.cartsRepo.query(`DELETE FROM cart_items WHERE cart_id= '${userCart.id}'`)

    await this.cartsRepo.delete(userCart.id)
  }

}
