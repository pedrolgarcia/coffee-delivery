import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentOptionsList,
  PaymentStepContainer,
  PaymentStepHeader,
  PaymentOption,
} from './styles'

import { PaymentMethod, PAYMENT_METHODS } from '../..'

interface PaymentStepProps {
  selectedPaymentMethod: PaymentMethod
  selectPaymentMethod: (paymentMethod: PaymentMethod) => void
  showsRequiredError: boolean
}

export function PaymentStep({
  selectedPaymentMethod,
  selectPaymentMethod,
  showsRequiredError,
}: PaymentStepProps) {
  function handleSelectPaymentMethod(paymentMethod: PaymentMethod) {
    selectPaymentMethod(paymentMethod)
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
          selected={selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD}
          onClick={() => handleSelectPaymentMethod(PAYMENT_METHODS.CREDIT_CARD)}
          requiredError={showsRequiredError}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption
          selected={selectedPaymentMethod === PAYMENT_METHODS.DEBIT_CARD}
          onClick={() => handleSelectPaymentMethod(PAYMENT_METHODS.DEBIT_CARD)}
          requiredError={showsRequiredError}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentOption>

        <PaymentOption
          selected={selectedPaymentMethod === PAYMENT_METHODS.CASH}
          onClick={() => handleSelectPaymentMethod(PAYMENT_METHODS.CASH)}
          requiredError={showsRequiredError}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptionsList>
    </PaymentStepContainer>
  )
}
