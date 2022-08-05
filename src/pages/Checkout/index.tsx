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
              <Input width={200} />
            </FormRow>

            <FormRow>
              <Input />
            </FormRow>

            <FormRow>
              <Input width={200} />
              <Input />
            </FormRow>

            <FormRow>
              <Input width={200} />
              <Input />
              <Input width={60} />
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
