import { Minus, Plus } from 'phosphor-react'
import { QuantityButton, QuantityControllerContainer } from './styles'

interface QuantityControllerProps {
  quantity: number
  increment: () => void
  decrement: () => void
}

export function QuantityController({
  quantity,
  increment,
  decrement,
}: QuantityControllerProps) {
  function handleIncrement() {
    increment()
  }

  function handleDecrement() {
    decrement()
  }

  return (
    <QuantityControllerContainer>
      <QuantityButton onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </QuantityButton>

      <span>{quantity}</span>

      <QuantityButton onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </QuantityControllerContainer>
  )
}
