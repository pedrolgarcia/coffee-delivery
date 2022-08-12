import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CheckoutContainer,
  CompleteOrderColumn,
  CartColumn,
  Form,
} from './styles'

import { Cart } from './components/Cart'
import { AddressStep } from './components/AddressStep'
import { PaymentStep } from './components/PaymentStep'

const addressFormValidationSchema = zod.object({
  zipcode: zod.string().min(1, 'Campo obrigatório'),
  street: zod.string().min(1, 'Campo obrigatório'),
  number: zod.string().min(1, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Campo obrigatório'),
  city: zod.string().min(1, 'Campo obrigatório'),
  state: zod.string().min(1, 'Campo obrigatório'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export const PAYMENT_METHODS = {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  CASH: 'CASH',
} as const

export type PaymentMethod = keyof typeof PAYMENT_METHODS | null

export function Checkout() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { handleSubmit } = addressForm

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>(null)

  function selectPaymenMethod(paymentMethod: PaymentMethod) {
    setSelectedPaymentMethod(paymentMethod)
  }

  function submitOrder(data: AddressFormData) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit(submitOrder)}>
        <CompleteOrderColumn>
          <strong>Complete seu pedido</strong>

          <FormProvider {...addressForm}>
            <AddressStep />
          </FormProvider>

          <PaymentStep
            selectedPaymenMethod={selectedPaymentMethod}
            selectPaymenMethod={selectPaymenMethod}
          />
        </CompleteOrderColumn>

        <CartColumn>
          <strong>Cafés selecionados</strong>

          <Cart />
        </CartColumn>
      </Form>
    </CheckoutContainer>
  )
}
