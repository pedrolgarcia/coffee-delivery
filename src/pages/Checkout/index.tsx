import { MapPin, MapPinLine } from 'phosphor-react'
import { Input } from '../../components/Input'
import {
  CheckoutContainer,
  CompleteOrder,
  AddressContainer,
  PaymentContainer,
  CartContainer,
  AddressHeader,
  FormRow,
  Form,
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

          <Form>
            <FormRow>
              <Input placeholder="CEP" width={200} required />
            </FormRow>

            <FormRow>
              <Input placeholder="Rua" required />
            </FormRow>

            <FormRow>
              <Input placeholder="Número" width={200} required />
              <Input placeholder="Complemento" />
            </FormRow>

            <FormRow>
              <Input placeholder="Bairro" width={200} required />
              <Input placeholder="Cidade" required />
              <Input placeholder="UF" width={60} required />
            </FormRow>
          </Form>
        </AddressContainer>
        <PaymentContainer></PaymentContainer>
      </CompleteOrder>

      <CartContainer>
        <strong>Cafés selecionados</strong>
      </CartContainer>
    </CheckoutContainer>
  )
}
