import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import {
  IconBadgeLocation,
  IconBadgeMoney,
  IconBadgeTime,
  OrderInfoRow,
  OrderResumeCard,
  SuccessContainer,
  SuccessContent,
  SuccessTitle,
} from './styles'

import SuccessCheckout from '../../assets/success-checkout.svg'

import { Order, PAYMENT_METHODS } from '../Checkout'

interface LocationState {
  order: Order
}

export function Success() {
  const location = useLocation()

  const { order } = location.state as LocationState

  function getPaymentMethodName() {
    if (order?.paymentMethod === PAYMENT_METHODS.CREDIT_CARD) {
      return 'Cartão de crédito'
    } else if (order?.paymentMethod === PAYMENT_METHODS.DEBIT_CARD) {
      return 'Cartão de débito'
    } else if (order?.paymentMethod === PAYMENT_METHODS.CASH) {
      return 'Dinheiro'
    }
  }

  return (
    <SuccessContainer>
      <SuccessTitle>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessTitle>

      <SuccessContent>
        <OrderResumeCard>
          <OrderInfoRow>
            <IconBadgeLocation>
              <MapPin size={16} weight="fill" />
            </IconBadgeLocation>

            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {order?.address.street}, {order?.address.number}
                </strong>{' '}
                {order?.address.district} - {order?.address.city},{' '}
                {order?.address.state}
              </p>
            </div>
          </OrderInfoRow>

          <OrderInfoRow>
            <IconBadgeTime>
              <Timer size={16} weight="fill" />
            </IconBadgeTime>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInfoRow>

          <OrderInfoRow>
            <IconBadgeMoney>
              <CurrencyDollar size={16} weight="fill" />
            </IconBadgeMoney>

            <div>
              <p>Pagamento na entrega</p>
              <strong>{getPaymentMethodName()}</strong>
            </div>
          </OrderInfoRow>
        </OrderResumeCard>

        <img src={SuccessCheckout} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
