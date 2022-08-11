import produce from 'immer'
import { Product } from '../../pages/Home'
import { ActionTypes } from './actions'

export interface CartItem {
  id: string
  product: Product
  quantity: number
  total: number
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
        const cartItemIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemId,
        )

        if (cartItemIndex < 0) return state

        draft.cartItems.splice(cartItemIndex, 1)
      })

    case ActionTypes.INCREMENT_CART_ITEM_QUANTITY: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (cartItemIndex < 0) return state

      return produce(state, (draft) => {
        const cartItem = draft.cartItems[cartItemIndex]

        cartItem.quantity += action.payload.quantity

        cartItem.total = parseFloat(
          (cartItem.quantity * cartItem.product.price).toFixed(2),
        )

        draft.cartItems[cartItemIndex] = cartItem
      })
    }

    case ActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemId,
      )

      if (cartItemIndex < 0) return state

      return produce(state, (draft) => {
        const cartItem = draft.cartItems[cartItemIndex]

        if (cartItem.quantity === 1) {
          draft.cartItems.splice(cartItemIndex, 1)
        } else {
          cartItem.quantity -= 1

          cartItem.total = parseFloat(
            (cartItem.quantity * cartItem.product.price).toFixed(2),
          )

          draft.cartItems[cartItemIndex] = cartItem
        }
      })
    }

    default:
      return state
  }
}
