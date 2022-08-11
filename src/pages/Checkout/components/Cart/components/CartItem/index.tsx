import { useState } from 'react'
import { Actions, CartItemContainer, CoffeeInfo } from './styles'

import { QuantityController } from '../../../../../../components/QuantityController'

import * as CartItemType from '../../../../../../reducers/cartItems/reducer'

interface CartItemProps {
  cartItem: CartItemType.CartItem
}

export function CartItem({ cartItem }: CartItemProps) {
  const [quantity, setQuantity] = useState(cartItem.quantity)
  return (
    <CartItemContainer>
      <CoffeeInfo>
        <img src={cartItem.product.picture} alt="" />

        <Actions>
          <span>{cartItem.product.name}</span>
          <QuantityController />
        </Actions>

        <strong>{cartItem.product.price}</strong>
      </CoffeeInfo>
    </CartItemContainer>
  )
}
