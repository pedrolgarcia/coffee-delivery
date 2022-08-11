import { useContext } from 'react'

import {
  CartContainer,
  DeliveryTotal,
  SubTotal,
  Total,
  TotalContainer,
} from './styles'

import { CartItem } from './components/CartItem'

import { CartContext } from '../../../../contexts/CartContext'

import { formatValueToBrl } from '../../../../utils/helpers'

export function Cart() {
  const { cartItems, subtotal, total } = useContext(CartContext)

  return (
    <CartContainer>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <SubTotal>
          <span>Total de itens</span>
          <span>{formatValueToBrl(subtotal)}</span>
        </SubTotal>

        <DeliveryTotal>
          <span>Entrega</span>
          <span>{formatValueToBrl(subtotal)}</span>
        </DeliveryTotal>

        <Total>
          <strong>Total</strong>
          <strong>{formatValueToBrl(total)}</strong>
        </Total>
      </TotalContainer>
    </CartContainer>
  )
}
