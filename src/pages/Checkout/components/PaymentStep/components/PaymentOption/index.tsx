import { ReactNode } from 'react'
import { PaymentOptionContainer } from './styles'

interface PaymentOptionProps {
  name: string
  icon: ReactNode
  selected: boolean
}

export function PaymentOption({
  name,
  icon,
  selected = false,
}: PaymentOptionProps) {
  return (
    <PaymentOptionContainer selected={selected}>
      {icon}
      <span>{name}</span>
    </PaymentOptionContainer>
  )
}
