import { CheckoutContainer, CompleteOrderColumn, CartColumn } from './styles'

import coffees from '../../coffees.json'

import { AddressStep } from './components/AddressStep'
import { PaymentStep } from './components/PaymentStep'
import { Cart } from './components/Cart'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderColumn>
        <strong>Complete seu pedido</strong>

        <AddressStep />

        <PaymentStep />
      </CompleteOrderColumn>

      <CartColumn>
        <strong>Cafés selecionados</strong>

        <Cart />
      </CartColumn>
    </CheckoutContainer>
  )
}
