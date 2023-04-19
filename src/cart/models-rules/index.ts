import {Carts} from "../../database/entities/cart.entity";
import {CartItems} from "../../database/entities/cartItem.entity";

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Carts): number {
  return cart ? cart.cartItems.reduce((acc: number, {  count }: CartItems) => {
    return acc += 1 * count;
  }, 0) : 0;
}
