import { Actions, CartItemContainer, CoffeeInfo } from './styles'

import { QuantityController } from '../../../../../../components/QuantityController'

import { Coffee } from '../../../../../Home'

interface CartItemProps {
  coffee: Coffee
}

export function CartItem({ coffee }: CartItemProps) {
  return (
    <CartItemContainer>
      <CoffeeInfo>
        <img src={coffee.picture} alt="" />

        <Actions>
          <span>{coffee.name}</span>
          <QuantityController />
        </Actions>

        <strong>{coffee.price}</strong>
      </CoffeeInfo>
    </CartItemContainer>
  )
}
