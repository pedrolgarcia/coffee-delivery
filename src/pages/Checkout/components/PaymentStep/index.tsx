import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentOptionsList,
  PaymentStepContainer,
  PaymentStepHeader,
  PaymentOption,
} from './styles'

import { PaymentMethod, PAYMENT_METHODS } from '../..'

interface PaymentStepProps {
  selectedPaymenMethod: PaymentMethod
  selectPaymenMethod: (paymentMethod: PaymentMethod) => void
}

export function PaymentStep({
  selectedPaymenMethod,
  selectPaymenMethod,
}: PaymentStepProps) {
  function handleSelectPaymenMethod(paymentMethod: PaymentMethod) {
    selectPaymenMethod(paymentMethod)
  }

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
          selected={selectedPaymenMethod === PAYMENT_METHODS.CREDIT_CARD}
          onClick={() => handleSelectPaymenMethod(PAYMENT_METHODS.CREDIT_CARD)}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption
          selected={selectedPaymenMethod === PAYMENT_METHODS.DEBIT_CARD}
          onClick={() => handleSelectPaymenMethod(PAYMENT_METHODS.DEBIT_CARD)}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentOption>

        <PaymentOption
          selected={selectedPaymenMethod === PAYMENT_METHODS.CASH}
          onClick={() => handleSelectPaymenMethod(PAYMENT_METHODS.CASH)}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptionsList>
    </PaymentStepContainer>
  )
}
