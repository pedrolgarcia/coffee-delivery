import { useContext } from 'react'
import { Trash } from 'phosphor-react'
import {
  CartItemContainer,
  CoffeeInfoContainer,
  CoffeeInfo,
  Actions,
  DeleteButton,
  Divider,
} from './styles'

import { QuantityController } from '../../../../../../components/QuantityController'

import { CartContext } from '../../../../../../contexts/CartContext'

import * as CartItemType from '../../../../../../reducers/cartItems/reducer'

import { formatValueToBrl } from '../../../../../../utils/helpers'

interface CartItemProps {
  cartItem: CartItemType.CartItem
}

export function CartItem({ cartItem }: CartItemProps) {
  const { incrementCartItem, decrementCartItem, removeItemFromCart } =
    useContext(CartContext)

  function handleIncrementCartItem() {
    incrementCartItem(cartItem.id)
  }

  function handleDecrementCartItem() {
    decrementCartItem(cartItem.id)
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(cartItem.id)
  }

  return (
    <>
      <CartItemContainer>
        <CoffeeInfoContainer>
          <img src={cartItem.product.picture} alt="" />

          <CoffeeInfo>
            <span>{cartItem.product.name}</span>

            <Actions>
              <QuantityController
                quantity={cartItem.quantity}
                increment={handleIncrementCartItem}
                decrement={handleDecrementCartItem}
              />

              <DeleteButton onClick={handleRemoveItemFromCart}>
                <Trash size={16} weight="bold" />
                <span>Remover</span>
              </DeleteButton>
            </Actions>
          </CoffeeInfo>
        </CoffeeInfoContainer>

        <strong>{formatValueToBrl(cartItem.total)}</strong>
      </CartItemContainer>

      <Divider />
    </>
  )
}
