import { createContext, ReactNode, useReducer, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  addNewItemToCartAction,
  decrementCartItemQuantityAction,
  incrementCartItemQuantityAction,
} from '../reducers/cartItems/actions'

import { CartItem, cartItemsReducer } from '../reducers/cartItems/reducer'

import { Product } from '../pages/Home'

// export interface Address {
//   zipcode: string
//   street: string
//   number: string
//   complement?: string
//   district: string
//   city: string
//   state: string
// }

// const PAYMENT_METHODS = {
//   creditCard: 'CREDIT_CARD',
//   debitCard: 'DEBIT_CARD',
//   cash: 'CASH',
// } as const

interface CartContextData {
  // address: Address | null
  // paymentMethod: keyof typeof PAYMENT_METHODS | null
  cartItems: CartItem[]
  subtotal: number
  total: number
  addOrIncrementCartItem: (product: Product, quantity: number) => void
  incrementCartItem: (cartItemId: string) => void
  decrementCartItem: (cartItemId: string) => void
}

export const CartContext = createContext({} as CartContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CyclesContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartItemsReducer, {
    cartItems: [],
  })

  const { cartItems } = cartState

  const subtotal = cartItems.reduce((accumulator, cartItem) => {
    accumulator += cartItem.product.price * cartItem.quantity
    return accumulator
  }, 0)

  const total = subtotal

  function addOrIncrementCartItem(product: Product, quantity: number) {
    const foundedCartItem = cartItems.find(
      (item) => item.product.id === product.id,
    )

    if (!foundedCartItem) {
      const cartItem: CartItem = {
        id: uuidv4(),
        product,
        quantity,
      }

      dispatch(addNewItemToCartAction(cartItem))
    } else {
      dispatch(incrementCartItemQuantityAction(foundedCartItem.id, quantity))
    }
  }

  function incrementCartItem(cartItemId: string) {
    dispatch(incrementCartItemQuantityAction(cartItemId))
  }

  function decrementCartItem(cartItemId: string) {
    dispatch(decrementCartItemQuantityAction(cartItemId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        total,
        addOrIncrementCartItem,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
