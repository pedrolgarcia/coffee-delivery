import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Input } from '../../components/Input'
import { PaymentOption } from './components/PaymentOption'

import {
  CheckoutContainer,
  CompleteOrder,
  BoxContainer,
  AddressHeader,
  PaymentHeader,
  CartContainer,
  FormRow,
  Form,
  PaymentOptionsList,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrder>
        <strong>Complete seu pedido</strong>

        <BoxContainer>
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
        </BoxContainer>

        <BoxContainer>
          <PaymentHeader>
            <CurrencyDollar size={22} />

            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>

          <PaymentOptionsList>
            <PaymentOption
              name="Cartão de crédito"
              icon={<CreditCard size={16} />}
              selected={false}
            />
            <PaymentOption
              name="Cartão de débito"
              icon={<Bank size={16} />}
              selected={false}
            />
            <PaymentOption
              name="Dinheiro"
              icon={<Money size={16} />}
              selected
            />
          </PaymentOptionsList>
        </BoxContainer>
      </CompleteOrder>

      <CartContainer>
        <strong>Cafés selecionados</strong>
      </CartContainer>
    </CheckoutContainer>
  )
}
