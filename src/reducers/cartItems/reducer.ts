import produce from 'immer'
import { Product } from '../../pages/Home'
import { ActionTypes } from './actions'

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

interface CartItemState {
  cartItems: CartItem[]
}

interface CartItemAction {
  type: string
  payload: any
}

export function cartItemsReducer(state: CartItemState, action: CartItemAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.cartItem)
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        draft.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.cartItemId,
        )
      })

    case ActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (cartItemIndex < 0) return state

      return produce(state, (draft) => {
        draft.cartItems[cartItemIndex].quantity += action.payload.quantity
      })
    }

    case ActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (cartItemIndex < 0) return state

      return produce(state, (draft) => {
        if (draft.cartItems[cartItemIndex].quantity === 1) {
          draft.cartItems.splice(cartItemIndex, 1)
        } else {
          draft.cartItems[cartItemIndex].quantity -= 1
        }
      })
    }

    default:
      return state
  }
}
