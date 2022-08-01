import { MapPin, MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  CompleteOrder,
  AddressContainer,
  PaymentContainer,
  CartContainer,
  AddressHeader,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <strong>Complete seu pedido</strong>

        <AddressContainer>
          <AddressHeader>
            <MapPinLine size={22} />

            <div>
              <p>Endereço de entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeader>
        </AddressContainer>
        <PaymentContainer></PaymentContainer>
      </CompleteOrder>

      <CartContainer>
        <strong>Cafés selecionados</strong>
      </CartContainer>
    </CheckoutContainer>
  )
}
