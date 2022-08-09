import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentOptionsList,
  PaymentStepContainer,
  PaymentStepHeader,
} from './styles'

import { PaymentOption } from './components/PaymentOption'

export function PaymentStep() {
  return (
    <PaymentStepContainer>
      <PaymentStepHeader>
        <CurrencyDollar size={22} />

        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentStepHeader>

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
        <PaymentOption name="Dinheiro" icon={<Money size={16} />} selected />
      </PaymentOptionsList>
    </PaymentStepContainer>
  )
}
