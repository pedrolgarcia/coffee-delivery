import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  addNewItemToCartAction,
  clearCartAction,
  decrementCartItemQuantityAction,
  incrementCartItemQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cartItems/actions'

import { CartItem, cartItemsReducer } from '../reducers/cartItems/reducer'

import { Product } from '../pages/Home'

interface CartContextData {
  cartItems: CartItem[]
  subtotal: number
  total: number
  addOrIncrementCartItem: (product: Product, quantity: number) => void
  removeItemFromCart: (cartItemId: string) => void
  incrementCartItem: (cartItemId: string) => void
  decrementCartItem: (cartItemId: string) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextData)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CyclesContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartItemsReducer,
    {
      cartItems: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-items-state:1.0.0',
      )

      if (!storedStateAsJSON) return []

      return JSON.parse(storedStateAsJSON)
    },
  )

  const { cartItems } = cartState

  const subtotal = cartItems.reduce((accumulator, cartItem) => {
    accumulator += cartItem.product.price * cartItem.quantity
    return accumulator
  }, 0)

  const total = subtotal

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-items-state:1.0.0', stateJSON)
  }, [cartState, cartState.cartItems])

  function addOrIncrementCartItem(product: Product, quantity: number) {
    const foundedCartItem = cartItems.find(
      (item) => item.product.id === product.id,
    )

    if (!foundedCartItem) {
      const total = parseFloat((product.price * quantity).toFixed(2))

      const cartItem: CartItem = {
        id: uuidv4(),
        product,
        quantity,
        total,
      }

      dispatch(addNewItemToCartAction(cartItem))
    } else {
      dispatch(incrementCartItemQuantityAction(foundedCartItem.id, quantity))
    }
  }

  function removeItemFromCart(cartItemId: string) {
    dispatch(removeItemFromCartAction(cartItemId))
  }

  function clearCart() {
    dispatch(clearCartAction())
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
        removeItemFromCart,
        incrementCartItem,
        decrementCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
