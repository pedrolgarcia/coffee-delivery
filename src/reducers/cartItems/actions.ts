import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY',
  DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY',
}

export function addNewItemToCartAction(cartItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM_TO_CART,
    payload: {
      cartItem,
    },
  }
}

export function removeItemFromCartAction(cartItemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      cartItemId,
    },
  }
}

export function incrementCartItemQuantityAction(
  cartItemId: string,
  quantity: number = 1,
) {
  return {
    type: ActionTypes.INCREMENT_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
      quantity,
    },
  }
}

export function decrementCartItemQuantityAction(cartItemId: string) {
  return {
    type: ActionTypes.DECREMENT_CART_ITEM_QUANTITY,
    payload: {
      cartItemId,
    },
  }
}
